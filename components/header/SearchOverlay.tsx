import React, { useState } from 'react';
import { X } from 'lucide-react';
import Link from 'next/link';
import { SearchItem, searchItems } from '@/types/search';

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchOverlay: React.FC<SearchOverlayProps> = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchItem[]>([]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim() === '') {
      setSearchResults([]);
      return;
    }

    const normalizedQuery = query.toLowerCase();
    const filtered = searchItems.filter((item) => {
      return (
        item.label.toLowerCase().includes(normalizedQuery) ||
        item.keywords.some(keyword => keyword.toLowerCase().includes(normalizedQuery)) ||
        (item.description && item.description.toLowerCase().includes(normalizedQuery))
      );
    });
    setSearchResults(filtered);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-950 bg-opacity-90 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 pt-20">
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Suchen Sie nach Services, Lösungen oder Themen..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full bg-gray-900 text-white px-4 py-3 pr-12 rounded-xl border border-gray-800 focus:border-primary-400 focus:ring-1 focus:ring-primary-400 outline-none"
            />
            <button
              onClick={onClose}
              className="absolute right-3 top-3 text-gray-400 hover:text-primary-400"
            >
              <X size={24} />
            </button>
          </div>

          {/* Search Results */}
          {searchResults.length > 0 && (
            <div className="mt-4 bg-gray-900 rounded-xl border border-gray-800 divide-y divide-gray-800">
              {searchResults.map((result) => (
                <Link
                  key={result.label}
                  href={result.href}
                  onClick={onClose}
                  className="block px-4 py-3 hover:bg-gray-800 transition-colors duration-200"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-primary-400 font-medium">{result.label}</h3>
                      {result.description && (
                        <p className="text-sm text-gray-400 mt-1">{result.description}</p>
                      )}
                      {result.category && (
                        <span className="inline-block text-xs text-gray-500 mt-2">
                          {result.category}
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {searchQuery && searchResults.length === 0 && (
            <div className="mt-4 text-center text-gray-400 py-8">
              Keine Ergebnisse gefunden für "{searchQuery}"
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchOverlay;