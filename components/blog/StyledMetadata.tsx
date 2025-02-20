import React from 'react';
import { Info, Globe, Home } from 'lucide-react';
import Link from 'next/link';

const metadata = {
  title: 'Blog | IT & Marketing Insights',
  description: 'Aktuelle Einblicke in IT-Trends und digitales Marketing in Deutschland',
};

const StyledMetadata = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl p-8 mb-12 shadow-xl relative mt-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-start gap-6">
          <div className="bg-primary-500/10 p-3 rounded-lg">
            <Info className="w-6 h-6 text-primary-500" />
          </div>
          
          <div className="flex-1">
            <h1 className="text-3xl font-display font-bold mb-4 bg-gradient-to-r from-primary-400 to-secondary-400 text-transparent bg-clip-text">
              {metadata.title}
            </h1>
            
            <div className="flex items-center gap-2 text-gray-400">
              <Globe className="w-4 h-4" />
              <p className="text-lg">
                {metadata.description}
              </p>
            </div>
          </div>

          <Link 
            href="/"
            className="absolute top-8 right-8 flex items-center gap-2 px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors duration-200"
          >
            <Home className="w-4 h-4" />
            <span>Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StyledMetadata;