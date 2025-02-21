'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function ImageSearch() {
  const [prompt, setPrompt] = useState('');
  const [topic, setTopic] = useState('');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<string[]>([]);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      const response = await fetch('/api/unsplash', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt, topic }),
      });

      const data = await response.json();

      if (!data.success) {
        throw new Error(data.error || 'Failed to fetch images');
      }

      setResults(data.paths);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 pt-32">
      <h1 className="text-2xl font-bold mb-6">Image Search and Download</h1>
      
      <form onSubmit={handleSubmit} className="space-y-4 mb-8">
        <div>
          <label htmlFor="prompt" className="block mb-2">
            Search Prompt
          </label>
          <input
            id="prompt"
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="e.g., Red Rose"
            required
          />
        </div>

        <div>
          <label htmlFor="topic" className="block mb-2">
            Topic (Save Directory)
          </label>
          <input
            id="topic"
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="e.g., flowers"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:bg-gray-400"
        >
          {loading ? 'Processing...' : 'Search and Download'}
        </button>
      </form>

      {error && (
        <div className="text-red-500 mb-4">{error}</div>
      )}

      {results.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Downloaded Images:</h2>
          <div className="grid grid-cols-1 gap-4">
            {results.map((path, index) => (
              <div key={index} className="relative h-48">
                <Image
                  src={`/${path}`}
                  alt={`Result ${index + 1}`}
                  fill
                  className="object-cover rounded"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}