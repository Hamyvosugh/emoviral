'use client';
import React from 'react';
import { Zap, Clock, TrendingUp, Bot, Cpu, ShipIcon, Building2, Sparkles, Phone, MessageCircle, Mail } from 'lucide-react';
import Link from 'next/link';

const AutomationPage = () => {
  const benefits = [
    {
      icon: Clock,
      title: 'Zeitersparnis',
      description: 'Reduzieren Sie manuelle Arbeit um bis zu 80% durch automatisierte Prozesse'
    },
    {
      icon: TrendingUp,
      title: 'Kosteneinsparung',
      description: 'Senken Sie Betriebskosten durch optimierte Arbeitsabläufe'
    },
    {
      icon: Sparkles,
      title: 'Fehlerreduzierung',
      description: 'Minimieren Sie menschliche Fehler durch präzise automatisierte Systeme'
    }
  ];

  const automationTypes = [
    {
      title: 'Geschäftsprozessautomatisierung',
      description: 'Workflow-Optimierung, Dokumentenmanagement und Datenverarbeitung',
      features: ['Automatische Dateneingabe', 'Dokumentenverarbeitung', 'Workflow-Management']
    },
    {
      title: 'Marketing-Automatisierung',
      description: 'Personalisierte Kundenansprache und automatisierte Kampagnen',
      features: ['E-Mail-Marketing', 'Social Media Automation', 'Lead Nurturing']
    },
    {
      title: 'IoT-Automatisierung',
      description: 'Intelligente Vernetzung von Geräten und Sensoren',
      features: ['Raspberry Pi Integration', 'Sensor-Netzwerke', 'Echtzeitüberwachung']
    }
  ];

  return (

    <div className="min-h-screen bg-gray-950 text-white">
      {/* Hero Section */}
       
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-950 to-gray-950 opacity-50" />
        <div className="container mx-auto px-4 relative z-10">
            
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 animate-fade-in">
              <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                Revolutionieren Sie Ihr Unternehmen
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
              Steigern Sie Ihre Effizienz durch moderne Automatisierungslösungen
            </p>
            <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 animate-fade-in" style={{ animationDelay: '400ms' }}>
              Jetzt Beratungsgespräch vereinbaren
            </button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-16">
            Vorteile der Automatisierung
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="p-8 rounded-2xl bg-gray-800/50 border border-gray-700 hover:border-primary-500 transition-all duration-300"
              >
                <benefit.icon className="w-12 h-12 text-primary-400 mb-6" />
                <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-16">
            Unsere Automatisierungslösungen
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {automationTypes.map((type, index) => (
              <div 
                key={index}
                className="p-8 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-primary-500 transition-all duration-300"
              >
                <h3 className="text-xl font-bold mb-4">{type.title}</h3>
                <p className="text-gray-400 mb-6">{type.description}</p>
                <ul className="space-y-3">
                  {type.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center text-gray-300">
                      <Zap className="w-5 h-5 text-primary-400 mr-3" />
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
      <section className="py-20 bg-gradient-to-br from-primary-900/50 to-secondary-900/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
            Starten Sie Ihre Automatisierungsreise
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Kontaktieren Sie uns für eine kostenlose Beratung und erfahren Sie, 
            wie wir Ihr Unternehmen durch Automatisierung optimieren können
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <a 
              href="tel:+491234567890" 
              className="flex items-center justify-center gap-3 p-4 rounded-xl bg-gray-800 hover:bg-gray-700 transition-colors duration-300"
            >
              <Phone className="w-6 h-6" />
              <span>+49 123 456 7890</span>
            </a>
            
            <a 
              href="https://wa.me/491234567890" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center justify-center gap-3 p-4 rounded-xl bg-green-600 hover:bg-green-500 transition-colors duration-300"
            >
              <MessageCircle className="w-6 h-6" />
              <span>WhatsApp Chat</span>
            </a>
            
            <Link
              href="/kontakt"
              className="flex items-center justify-center gap-3 p-4 rounded-xl bg-primary-600 hover:bg-primary-500 transition-colors duration-300"
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

export default AutomationPage;