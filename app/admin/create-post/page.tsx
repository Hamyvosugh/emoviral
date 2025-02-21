'use client';

import { useState } from 'react';

interface BlogResponse {
  success: boolean;
  slug: string;
  filePath: string;
  content: string;
  images: string[];
  error?: string;
  details?: string;
}

export default function CreatePost() {
  const [prompt, setPrompt] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [response, setResponse] = useState<BlogResponse | null>(null);
  const [suggestions] = useState<string[]>([
    'Erklären Sie die Bedeutung und Auswirkungen der digitalen Transformation auf moderne Unternehmen',
    'Wie kann Content Marketing die Kundenbeziehung stärken und den ROI verbessern?',
    'Entwickeln Sie eine effektive Social Media Strategie für B2B-Unternehmen',
    'Analysieren Sie aktuelle E-Commerce Trends und deren Einfluss auf das Kaufverhalten',
    'Wie automatisiert Marketing Automation den Vertriebsprozess und steigert die Effizienz?'
  ]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/generate-blog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: prompt }), // Changed from title to prompt
      });

      const data: BlogResponse = await res.json();

      if (data.error) {
        throw new Error(data.error);
      }

      setStatus('success');
      setResponse(data);
      setPrompt('');
    } catch (error) {
      setStatus('error');
      setResponse({
        success: false,
        error: error instanceof Error ? error.message : 'Failed to create blog post',
        slug: '',
        filePath: '',
        content: '',
        images: []
      });
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setPrompt(suggestion);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 mt-12">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Blog-Beitrag erstellen</h1>
        
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-3 text-gray-700">Anleitung:</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            <li>Beschreiben Sie detailliert das Thema und die gewünschten Aspekte des Blogbeitrags</li>
            <li>Je ausführlicher Ihre Beschreibung, desto besser kann der Artikel generiert werden</li>
            <li>Alle Inhalte werden auf Deutsch erstellt und SEO-optimiert</li>
            <li>Wissenschaftliche Referenzen und passende Bilder werden automatisch eingefügt</li>
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="prompt" className="block text-sm font-medium text-gray-700 mb-2">
              Blog-Thema und gewünschte Aspekte
            </label>
            <textarea
              id="prompt"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent h-32"
              placeholder="Beschreiben Sie hier Ihr Thema und die wichtigsten Aspekte, die im Blog behandelt werden sollen..."
              required
            />
          </div>

          <div className="space-y-2">
            <p className="text-sm font-medium text-gray-700">Beispiel-Prompts:</p>
            <div className="flex flex-wrap gap-2">
              {suggestions.map((suggestion) => (
                <button
                  key={suggestion}
                  type="button"
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm text-gray-700 transition-colors text-left"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>

          <button
            type="submit"
            disabled={status === 'loading'}
            className={`w-full py-3 px-4 rounded-md text-white font-medium flex items-center justify-center space-x-2 ${
              status === 'loading' 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-blue-600 hover:bg-blue-700'
            }`}
          >
            {status === 'loading' ? 'Generiere Blogbeitrag...' : 'Blogbeitrag erstellen'}
          </button>
        </form>

        {status !== 'idle' && response && (
          <div className="mt-6">
            {status === 'success' && (
              <div className="bg-green-50 border border-green-200 rounded-md p-4 text-green-800">
                <p className="font-medium">Blogbeitrag erfolgreich erstellt!</p>
                <p className="mt-1">Pfad: {response.filePath}</p>
                {response.images && response.images.length > 0 && (
                  <p className="mt-1">Bilder: {response.images.length} heruntergeladen</p>
                )}
              </div>
            )}

            {status === 'error' && (
              <div className="bg-red-50 border border-red-200 rounded-md p-4 text-red-800">
                <p className="font-medium">Fehler beim Erstellen des Blogbeitrags</p>
                <p className="mt-1">{response.error}</p>
                {response.details && <p className="mt-1">{response.details}</p>}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}