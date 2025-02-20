'use client';
import React, { useState, useEffect } from 'react';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Mail,
  MapPin,
  Phone
} from 'lucide-react';

const footerSections = [
  {
    title: 'Produkte',
    links: [
      { label: 'Funktionen', href: '/funktionen' },
      { label: 'Lösungen', href: '/loesungen' },
      { label: 'Preise', href: '/preise' },
      { label: 'Ressourcen', href: '/ressourcen' },
    ],
  },
  {
    title: 'Unternehmen',
    links: [
      { label: 'Über uns', href: '/ueber-uns' },
      { label: 'Karriere', href: '/karriere' },
      { label: 'Neuigkeiten', href: '/neuigkeiten' },
      { label: 'Kontakt', href: '/kontakt' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Hilfecenter', href: '/hilfe' },
      { label: 'Dokumentation', href: '/dokumentation' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Community', href: '/community' },
    ],
  },
];

const Footer = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const handleMouseMove = (e: { clientX: number; clientY: number; }) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <footer className="relative bg-[#060c1f] border-t border-blue-900/20">
      {/* Subtle Interactive Background Effect */}
      <div 
        className="absolute inset-0 opacity-10 transition-opacity duration-1000"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(56, 189, 248, 0.62) 0%, rgba(2, 13, 47, 0) 60%)`
        }}
      />
      
      <div className="relative container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h2 className="font-display text-xl font-bold text-blue-400">
                EmoViral
              </h2>
              <p className="mt-4 text-gray-300">
                Wir gestalten die Zukunft digitaler Erlebnisse mit innovativen Lösungen.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors duration-300 group cursor-pointer">
                <MapPin size={18} className="group-hover:text-blue-400 transition-colors duration-300" />
                <span>Mühlstrasse 11, 65597 Hünfelden, Hessen</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors duration-300 group cursor-pointer">
                <Phone size={18} className="group-hover:text-blue-400 transition-colors duration-300" />
                <span>+49 (176) 47 666 407</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors duration-300 group cursor-pointer">
                <Mail size={18} className="group-hover:text-blue-400 transition-colors duration-300" />
                <span>hi@emoviral.com</span>
              </div>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-display text-lg font-semibold text-white mb-6">
                {section.title}
              </h3>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-blue-900/20">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            {/* Social Links */}
            <div className="flex space-x-6 mb-6 md:mb-0">
              {[
                { Icon: Facebook, label: 'Facebook' },
                { Icon: Twitter, label: 'Twitter' },
                { Icon: Instagram, label: 'Instagram' },
                { Icon: Linkedin, label: 'LinkedIn' }
              ].map(({ Icon, label }) => (
                <a 
                  key={label}
                  href="#" 
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                  aria-label={label}
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-gray-400">
              <p>© {currentYear} Emoviral. Alle Rechte vorbehalten.</p>
            </div>
          </div>

          {/* Legal Links */}
          <div className="mt-6 flex flex-wrap gap-4 text-sm text-gray-400">
            <a href="/datenschutz" className="hover:text-blue-400 transition-colors duration-300">
              Datenschutzerklärung
            </a>
            <span>•</span>
            <a href="/agb" className="hover:text-blue-400 transition-colors duration-300">
              Allgemeine Geschäftsbedingungen
            </a>
            <span>•</span>
            <a href="/cookies" className="hover:text-blue-400 transition-colors duration-300">
              Cookie-Richtlinie
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;