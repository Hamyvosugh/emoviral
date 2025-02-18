'use client';

import React from 'react';
import { ArrowRight, Smartphone, Globe2, BarChart3, MessageSquare, PenTool, Search } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => (
  <div className="group relative overflow-hidden rounded-3xl bg-secondary-900/50 p-8 transition-all hover:bg-secondary-800/50">
    <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-secondary-500/10 transition-all group-hover:bg-secondary-500/20" />
    <div className="relative z-10">
      <div className="mb-6 inline-block rounded-2xl bg-secondary-800/50 p-3 text-secondary-200">
        {icon}
      </div>
      <h3 className="mb-4 font-display text-2xl font-bold text-white">{title}</h3>
      <p className="text-secondary-200">{description}</p>
    </div>
  </div>
);

export default function DigitalMarketingPage() {
  const services = [
    {
      icon: <Globe2 size={24} />,
      title: "Web-Präsenz Optimierung",
      description: "Verbessern Sie Ihre digitale Präsenz mit SEO-optimierten Websites und Inhalten, die organischen Traffic und Engagement steigern."
    },
    {
      icon: <MessageSquare size={24} />,
      title: "Social Media Management",
      description: "Strategische Social-Media-Kampagnen, die Markenbewusstsein aufbauen und bedeutsame Verbindungen zu Ihrer Zielgruppe schaffen."
    },
    {
      icon: <BarChart3 size={24} />,
      title: "Analyse & Berichterstattung",
      description: "Datengesteuerte Einblicke und detaillierte Leistungskennzahlen zur Optimierung Ihrer Marketingstrategien und ROI."
    },
    {
      icon: <PenTool size={24} />,
      title: "Content-Erstellung",
      description: "Überzeugende Inhalte, die Ihre Geschichte erzählen, Ihr Publikum fesseln und Conversions über alle Plattformen hinweg steigern."
    },
    {
      icon: <Search size={24} />,
      title: "SEO-Optimierung",
      description: "Fortschrittliche SEO-Strategien zur Verbesserung Ihres Suchmaschinenrankings und Erhöhung Ihrer Sichtbarkeit in den Suchergebnissen."
    },
    {
      icon: <Smartphone size={24} />,
      title: "Mobile Marketing",
      description: "Gezielte mobile Werbung und App-Marketing-Lösungen, um Kunden auf ihren bevorzugten Geräten zu erreichen."
    }
  ];

  return (

    <div className="min-h-screen bg-secondary-950 ">
    
      {/* Hero Section */}
      <section className="container relative py-20 ">
        <div className="absolute left-0 top-0 -z-10 h-full w-full">
          <div className="absolute inset-0 bg-gradient-radial from-secondary-900/50 to-transparent" />
        </div>
        
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="animate-fade-in font-display text-5xl font-bold text-white sm:text-6xl lg:text-7xl pt-12">
            Transformieren Sie Ihre Digitale Präsenz
          </h1>
          <p className="mt-6 animate-fade-in text-lg text-secondary-200 [animation-delay:200ms]">
            Innovative digitale Marketinglösungen, maßgeschneidert um Ihre Marke zu stärken, Ihr Publikum zu begeistern und messbare Ergebnisse zu erzielen.
          </p>
          <div className="mt-10 animate-fade-in [animation-delay:400ms]">
            <button className="group inline-flex items-center gap-2 rounded-full bg-primary-500 px-6 py-3 font-semibold text-white transition-all hover:bg-primary-600">
              Jetzt Starten
              <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container py-20">
        <div className="mb-16 text-center">
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">Unsere Dienstleistungen</h2>
          <p className="mt-4 text-secondary-200">Umfassende digitale Marketinglösungen für Ihr Unternehmenswachstum</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-20">
        <div className="relative overflow-hidden rounded-4xl bg-gradient-to-r from-primary-900 to-secondary-900 px-6 py-20 sm:px-12 sm:py-32">
          <div className="absolute inset-0 bg-gradient-radial from-primary-500/20 to-transparent" />
          <div className="relative z-10 mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
              Bereit Ihre Digitale Reise zu Beginnen?
            </h2>
            <p className="mt-6 text-lg text-primary-200">
              Lassen Sie uns gemeinsam eine maßgeschneiderte digitale Marketingstrategie entwickeln, die auf Ihre Unternehmensziele abgestimmt ist und echte Ergebnisse liefert.
            </p>
            <div className="mt-10">
              <button className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-primary-950 transition-all hover:bg-primary-50">
                Beratungsgespräch Vereinbaren
                <ArrowRight className="transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>

  );
}