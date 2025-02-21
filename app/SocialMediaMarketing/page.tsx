'use client';
import React, { useState, useEffect } from 'react';
import { Share2, Target, TrendingUp, MessageCircle, BarChart2, Users, ArrowRight, ChevronRight } from 'lucide-react';

const SocialMediaMarketing = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: { clientX: any; clientY: any; }) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const marketingServices = [
    {
      title: "Content-Strategie & Erstellung",
      icon: <Share2 className="w-12 h-12" />,
      description: "Professionelle Content-Erstellung und strategische Planung für maximale Reichweite",
      features: [
        "Maßgeschneiderte Content-Pläne",
        "Kreative Bildgestaltung",
        "Video-Content Produktion",
        "Storytelling Konzepte"
      ],
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "Zielgruppen-Management",
      icon: <Target className="w-12 h-12" />,
      description: "Präzise Zielgruppenanalyse und maßgeschneiderte Kampagnenausrichtung",
      features: [
        "Zielgruppen-Analyse",
        "Persona-Entwicklung",
        "Interessenbasiertes Targeting",
        "Demografische Optimierung"
      ],
      color: "from-purple-600 to-pink-500"
    },
    {
      title: "Performance Marketing",
      icon: <TrendingUp className="w-12 h-12" />,
      description: "Datengetriebene Werbekampagnen für maximalen ROI auf allen Plattformen",
      features: [
        "Social Media Ads",
        "A/B-Testing",
        "Conversion-Optimierung",
        "Budget-Management"
      ],
      color: "from-pink-500 to-red-500"
    },
    {
      title: "Community Management",
      icon: <MessageCircle className="w-12 h-12" />,
      description: "Aktives Community-Management und Engagement-Steigerung",
      features: [
        "Interaktion mit Followern",
        "Krisenkommunikation",
        "Reputation Management",
        "Moderationsservice"
      ],
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Analytics & Reporting",
      icon: <BarChart2 className="w-12 h-12" />,
      description: "Umfassende Analysen und transparente Berichterstattung",
      features: [
        "Performance-Tracking",
        "ROI-Analyse",
        "Wettbewerbsanalyse",
        "Monatliche Reports"
      ],
      color: "from-orange-500 to-yellow-500"
    },
    {
      title: "Influencer Marketing",
      icon: <Users className="w-12 h-12" />,
      description: "Strategische Influencer-Partnerschaften für authentische Reichweite",
      features: [
        "Influencer-Auswahl",
        "Kampagnen-Konzeption",
        "Performance-Tracking",
        "Content-Koordination"
      ],
      color: "from-yellow-500 to-green-500"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow bg-gray-900 text-white relative">
        <div 
          className="absolute inset-0 bg-gray-900" 
          style={{
            backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.1) 0%, transparent 60%)`
          }}
        />

        <div className="relative">
          <div className="container pt-32 pb-20">
            <div className="max-w-4xl mx-auto text-center relative">
              <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 animate-pulse" />
              <h1 className="font-display text-5xl sm:text-7xl font-bold mb-6 relative bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text animate-fade-in">
                Social Media Marketing
              </h1>
              <p className="text-2xl text-gray-300 mb-12 animate-fade-in delay-100">
                Steigern Sie Ihre digitale Präsenz mit innovativen Social Media Strategien
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in delay-200">
                <button className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl font-medium relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  <span className="relative flex items-center gap-2">
                    Strategie-Gespräch vereinbaren <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
                <button className="px-8 py-4 bg-gray-800 hover:bg-gray-700 rounded-xl font-medium border border-gray-700 hover:border-gray-600 transition-all">
                  Erfolgsgeschichten ansehen
                </button>
              </div>
            </div>
          </div>

          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-spin-slow" />
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-xl animate-spin-slow" />
            <div className="absolute top-40 right-20 w-24 h-24 bg-pink-500/10 rounded-full blur-xl animate-spin-slow" />
          </div>
        </div>

        <div className="container py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {marketingServices.map((service, index) => (
              <div
                key={index}
                className="group relative"
                onMouseEnter={() => setActiveSection(index)}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl transform group-hover:scale-105 transition-all duration-300" />
                <div className="relative p-8 h-full">
                  <div className={`p-4 rounded-xl bg-gradient-to-r ${service.color} bg-opacity-10 inline-block mb-6`}>
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-400 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <ChevronRight className="w-4 h-4 mr-2 text-blue-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="text-blue-400 hover:text-blue-300 flex items-center gap-2">
                      Mehr erfahren <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="container py-20">
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600" />
            <div className="absolute inset-0 bg-[linear-gradient(40deg,transparent_25%,rgba(68,51,238,0.2)_50%,transparent_75%)] bg-[length:500px_500px] animate-slide-in opacity-50" />
            <div className="relative p-12 md:p-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 max-w-2xl">
                Bereit für den nächsten Schritt?
              </h2>
              <p className="text-xl text-white/80 mb-16 max-w-2xl">
                Lassen Sie uns gemeinsam Ihre Social Media Präsenz auf das nächste Level bringen
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-white text-gray-900 rounded-xl font-medium hover:bg-gray-100 transition-all">
                  Kostenlose Beratung
                </button>
                <button className="px-8 py-4 bg-transparent border-2 border-white/30 hover:border-white/60 rounded-xl font-medium transition-all">
                  Strategiepapier downloaden
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SocialMediaMarketing;