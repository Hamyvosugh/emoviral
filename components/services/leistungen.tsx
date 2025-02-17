import React from 'react';
import { Code2, Globe, Lightbulb, LineChart, MessageSquareShare, Search, Zap } from 'lucide-react';

const services = [
  {
    title: 'Automatisierungslösungen',
    description: 'Optimieren Sie Ihre Geschäftsprozesse mit modernster Automatisierungstechnologie',
    icon: Zap,
    gradient: 'from-primary-500 to-primary-700'
  },
  {
    title: 'Web & App Entwicklung',
    description: 'Full-Stack-Entwicklungsdienste von E-Commerce bis hin zu individuellen Anwendungen',
    icon: Code2,
    gradient: 'from-secondary-500 to-secondary-700'
  },
  {
    title: 'Digitales Marketing',
    description: 'Umfassende digitale Marketingstrategien für Ihre Online-Präsenz',
    icon: LineChart,
    gradient: 'from-success-500 to-success-700'
  },
  {
    title: 'SEO-Optimierung',
    description: 'Verbessern Sie Ihr Suchmaschinenranking und steigern Sie den organischen Traffic',
    icon: Search,
    gradient: 'from-warning-500 to-warning-700'
  },
  {
    title: 'Social Media Marketing',
    description: 'Erreichen Sie Ihre Zielgruppe und stärken Sie Ihre Markenbekanntheit in sozialen Medien',
    icon: MessageSquareShare,
    gradient: 'from-error-500 to-error-700'
  },
  {
    title: 'KI-Integration',
    description: 'Nutzen Sie KI-Technologien zur Transformation Ihrer Geschäftsprozesse',
    icon: Lightbulb,
    gradient: 'from-primary-700 to-secondary-700'
  }
];

const ServicesGrid = () => {
  return (
    <div className="w-full min-h-screen bg-gray-950 text-white py-20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
            Unsere Dienstleistungen
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Transformation von Unternehmen durch innovative digitale Lösungen
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-gray-700 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
              <div className="relative z-10">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} p-2.5 mb-6`}>
                  <service.icon className="w-full h-full text-white" />
                </div>
                
                <h3 className="text-xl font-display font-bold mb-4 text-white group-hover:text-primary-400 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {service.description}
                </p>
              </div>
              
              <div className="absolute bottom-8 left-8 right-8 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesGrid;