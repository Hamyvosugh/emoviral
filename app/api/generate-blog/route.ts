import { OpenAI } from 'openai';
import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

const apiKey = process.env.OPENAI_API_KEY;
console.log('API Key prefix:', apiKey?.slice(0, 7));

if (!apiKey) {
  throw new Error('OPENAI_API_KEY ist in den Umgebungsvariablen nicht definiert');
}

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const EMOVIRAL_EXPERTISE_PROMPT = `Erläutern Sie detailliert, wie Emoviral als Experte in diesem Bereich Unternehmen und Kunden unterstützen kann. Beschreiben Sie die spezifischen Lösungen, Erfahrungen und einzigartigen Ansätze von Emoviral.`;

const BLOG_STRUCTURE_PROMPT = `Analysiere den folgenden Prompt und erstelle daraus einen detaillierten Blogbeitrag in deutscher Sprache. Entwickle einen fesselnden Titel und strukturiere den Inhalt ansprechend. Der Artikel soll SEO-optimiert sein und die Expertise von Emoviral im jeweiligen Bereich hervorheben.

BENUTZER-PROMPT:
{userPrompt}

Erstelle den Blogbeitrag mit genau dieser Struktur:

---
title: {Entwickle einen SEO-optimierten, aufmerksamkeitsstarken Titel}
description: {Schreibe eine prägnante, überzeugende Meta-Beschreibung} 
author:
  name: Dipl.-Ing. Hamy Vosugh
  image: /images/blog/base/author.webp
  bio: "Content Marketing Experte"
publishedAt: '{currentDate}'
updatedAt: '{currentDate}'
tags:
  - {Relevanter Tag 1}
  - {Relevanter Tag 2}
  - {Relevanter Tag 3}
  - {new Date().toLocaleString('de-DE', { month: 'long' })}
coverImage: /images/blog/feb/emoviral.webp
featured: true
draft: false
seo:
  title: {SEO-optimierter Titel, kann vom Haupttitel abweichen}
  description: {SEO-optimierte Beschreibung}
  keywords:
    - {Wichtigstes Keyword}
    - {Zweitwichtigstes Keyword}
    - {Drittwichtigstes Keyword}
  ogImage: /images/blog/base/emoviral.webp
---

# {Hauptüberschrift}

{Fesselnder Einleitungsabsatz, der die Kernaussagen präsentiert}

## {Erster Hauptaspekt als Zwischenüberschrift}

{Detaillierte Ausführung des ersten Hauptaspekts}

## {Zweiter Hauptaspekt als Zwischenüberschrift}

{Detaillierte Ausführung des zweiten Hauptaspekts}

## {Dritter Hauptaspekt als Zwischenüberschrift}

{Detaillierte Ausführung des dritten Hauptaspekts}

## Umsetzungsstrategien

1. {Konkrete, praktische Strategie 1}
2. {Konkrete, praktische Strategie 2}
3. {Konkrete, praktische Strategie 3}

## Fazit

{Überzeugendes Fazit mit Handlungsaufforderung}

---

## Wie kann Emoviral Ihnen dabei helfen?

{Ausführliche Darstellung der Emoviral-Expertise und Lösungsansätze im Kontext des Themas}`;

function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/[äöüß]/g, (match) => {
      const replacements: { [key: string]: string } = {
        'ä': 'ae',
        'ö': 'oe',
        'ü': 'ue',
        'ß': 'ss'
      };
      return replacements[match];
    })
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}

function getCurrentDate(): string {
  return new Date().toISOString().split('T')[0];
}

export async function POST(request: Request) {
  try {
    console.log('Starte Blogbeitrag-Generierung...');

    const { prompt } = await request.json();
    console.log('Empfangener Prompt:', prompt);

    if (!prompt) {
      console.log('Fehler: Prompt fehlt');
      return NextResponse.json(
        { error: 'Prompt ist erforderlich' },
        { status: 400 }
      );
    }

    const currentDate = getCurrentDate();
    const promptWithReplacements = BLOG_STRUCTURE_PROMPT
      .replace('{userPrompt}', prompt)
      .replace(/{currentDate}/g, currentDate);

    console.log('Rufe OpenAI API auf...');
    
    try {
      const completion = await openai.chat.completions.create({
        model: "gpt-4-turbo-preview",
        messages: [
          {
            role: "system",
            content: `Du bist ein professioneller Blogbeitrag-Autor für Emoviral, spezialisiert auf Marketing und digitale Transformation. 
            Deine Aufgaben:
            1. Analysiere den Benutzer-Prompt gründlich
            2. Entwickle einen SEO-optimierten, aufmerksamkeitsstarken Titel
            3. Erstelle detaillierte, gut strukturierte Inhalte in deutscher Sprache
            4. Integriere aktuelle Trends und Entwicklungen
            5. Hebe Emovirals Expertise hervor
            6. Verwende eine klare, professionelle aber zugängliche Sprache
            7. Behalte die exakte YAML-Frontmatter-Struktur bei
            8. Füge relevante Statistiken und Beispiele ein
            Der Abschnitt 'Wie kann Emoviral Ihnen dabei helfen?' muss konkret und überzeugend die Kompetenzen und Lösungen von Emoviral darstellen.`
          },
          {
            role: "user",
            content: promptWithReplacements
          }
        ],
        temperature: 0.7,
      });

      console.log('OpenAI API-Aufruf erfolgreich');

      const generatedContent = completion.choices[0].message.content;

      if (!generatedContent) {
        throw new Error('Kein Inhalt von OpenAI generiert');
      }

      // Extract title from generated content for slug
      const titleMatch = generatedContent.match(/title: ["']?(.*?)["']?\n/);
      const title = titleMatch ? titleMatch[1] : prompt.slice(0, 50);
      
      const slug = slugify(title);
      const filePath = path.join(process.cwd(), 'content', 'blog', `${slug}.md`);
      
      console.log('Erstelle Verzeichnis und Datei unter:', filePath);

      await fs.mkdir(path.join(process.cwd(), 'content', 'blog'), { recursive: true });
      await fs.writeFile(filePath, generatedContent, 'utf8');

      console.log('Datei erfolgreich geschrieben');

      return NextResponse.json({ 
        success: true, 
        slug,
        filePath: `content/blog/${slug}.md`,
        content: generatedContent 
      });

    } catch (openaiError) {
      console.error('OpenAI API-Fehler:', openaiError);
      if (openaiError instanceof Error) {
        throw new Error(`OpenAI API-Fehler: ${openaiError.message}`);
      } else {
        throw new Error('OpenAI API-Fehler: Ein unbekannter Fehler ist aufgetreten');
      }
    }

  } catch (error) {
    console.error('Fehler in API-Route:', error);
    return NextResponse.json(
      { 
        error: 'Blogbeitrag konnte nicht generiert werden',
        details: (error instanceof Error) ? error.message : 'Ein unbekannter Fehler ist aufgetreten'
      },
      { status: 500 }
    );
  }
}