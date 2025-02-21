'use client';
import React from 'react';
import { Search, TrendingUp, Users, Target, BarChart, Globe, LineChart, Settings, Phone, MessageCircle, Mail } from 'lucide-react';
import Link from 'next/link';

const SEOPage = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Mehr Sichtbarkeit',
      description: 'Verbessern Sie Ihr Ranking in Suchmaschinen und erreichen Sie mehr potenzielle Kunden'
    },
    {
      icon: Users,
      title: 'Qualifizierter Traffic',
      description: 'Gewinnen Sie Besucher, die aktiv nach Ihren Produkten oder Dienstleistungen suchen'
    },
    {
      icon: Target,
      title: 'Bessere Conversion',
      description: 'Steigern Sie Ihre Conversion-Rate durch zielgerichteten organischen Traffic'
    }
  ];

  const seoServices = [
    {
      title: 'On-Page SEO',
      description: 'Optimierung aller Elemente direkt auf Ihrer Website',
      features: ['Keyword-Optimierung', 'Content-Strategie', 'Meta-Optimierung']
    },
    {
      title: 'Off-Page SEO',
      description: 'Stärkung Ihrer Domain-Autorität durch externe Maßnahmen',
      features: ['Linkbuilding', 'Social Signals', 'Brand Building']
    },
    {
      title: 'Technisches SEO',
      description: 'Optimierung der technischen Grundlagen Ihrer Website',
      features: ['Website-Performance', 'Mobile Optimierung', 'Strukturierte Daten']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-warning-950 to-gray-950 opacity-50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 animate-fade-in">
              <span className="bg-gradient-to-r from-warning-400 to-warning-600 bg-clip-text text-transparent">
                Dominieren Sie die Suchergebnisse
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
              Professionelle SEO-Strategien für nachhaltige Sichtbarkeit in Suchmaschinen
            </p>
            <button className="bg-warning-500 hover:bg-warning-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 animate-fade-in" style={{ animationDelay: '400ms' }}>
              Kostenlose SEO-Analyse anfordern
            </button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-16">
            Vorteile professioneller SEO
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="p-8 rounded-2xl bg-gray-800/50 border border-gray-700 hover:border-warning-500 transition-all duration-300"
              >
                <benefit.icon className="w-12 h-12 text-warning-400 mb-6" />
                <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-center md:text-4xl font-display font-bold mb-8">
            Unsere SEO-Dienstleistungen
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {seoServices.map((service, index) => (
              <div 
                key={index}
                className="p-8 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-warning-500 transition-all duration-300"
              >
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center text-gray-300">
                      <Search className="w-5 h-5 text-warning-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-warning-900/50 to-gray-900/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
            Lassen Sie uns Ihre SEO-Strategie entwickeln
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Vereinbaren Sie eine kostenlose SEO-Analyse und erfahren Sie, 
            wie wir Ihre Online-Sichtbarkeit nachhaltig verbessern können
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <a 
              href="tel:+4917647666407" 
              className="flex items-center justify-center gap-3 p-4 rounded-xl bg-gray-800 hover:bg-gray-700 transition-colors duration-300"
            >
              <Phone className="w-6 h-6" />
              <span>+49 123 456 7890</span>
            </a>
            
            <a 
              href="https://wa.me/4917647666407" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center justify-center gap-3 p-4 rounded-xl bg-green-600 hover:bg-green-500 transition-colors duration-300"
            >
              <MessageCircle className="w-6 h-6" />
              <span>WhatsApp Chat</span>
            </a>
            
            <Link
              href="/kontakt"
              className="flex items-center justify-center gap-3 p-4 rounded-xl bg-warning-600 hover:bg-warning-500 transition-colors duration-300"
            >
              <Mail className="w-6 h-6" />
              <span>Kontaktformular</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SEOPage;