import React, { useState } from 'react';
import { Menu, X, Search } from 'lucide-react';
import Link from 'next/link';
import SearchOverlay from '@/components/header/SearchOverlay';

interface NavItem {
  label: string;
  href: string;
}

const navigationItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Automatisierung', href: '/Automation' },
  { label: 'Webentwicklung', href: '/webdevelopment' },
  { label: 'Digital Marketing', href: '/digitalmarketing' },
  { label: 'KI Integration', href: '/ki' },
  { label: 'Kontakt', href: '/kontakt' },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <header className="w-full bg-[#060c1f] border-b border-gray-800 fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-opacity-80">
      <div className="container mx-auto">
        <nav className="flex items-center justify-between h-20 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <h1 className="font-display text-2xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                EmoViral
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-gray-400 hover:text-primary-400 transition-colors duration-200 font-medium relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-400 to-secondary-400 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            <button 
              className="hidden md:flex items-center px-4 py-2 text-sm font-medium text-white bg-primary-600 hover:bg-primary-500 rounded-xl transition-colors duration-200"
            >
              Kostenlose Beratung
            </button>
            
            <button 
              className="p-2 text-gray-400 hover:text-primary-400 rounded-xl transition-colors duration-200 bg-gray-900"
              onClick={toggleSearch}
            >
              <Search size={20} />
            </button>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-gray-400 hover:text-primary-400 rounded-xl transition-colors duration-200 bg-gray-900"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden animate-fade-in absolute top-20 left-0 right-0 bg-gray-950 border-b border-gray-800 bg-opacity-95 backdrop-blur-sm">
            <div className="container mx-auto px-4 py-4 space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block px-4 py-3 rounded-xl text-base font-medium text-gray-400 hover:text-primary-400 hover:bg-gray-900 transition-all duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <button 
                className="w-full mt-4 px-4 py-3 text-sm font-medium text-white bg-primary-600 hover:bg-primary-500 rounded-xl transition-colors duration-200"
              >
                Kostenlose Beratung
              </button>
            </div>
          </div>
        )}

        {/* Search Overlay */}
        <SearchOverlay 
          isOpen={isSearchOpen} 
          onClose={() => setIsSearchOpen(false)} 
        />
      </div>
    </header>
  );
};

export default Header;