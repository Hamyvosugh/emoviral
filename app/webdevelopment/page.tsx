'use client';
import React, { useState, useEffect } from 'react';
import { Code, Smartphone, Palette, Building2, Wrench, Globe2, TestTube2, Laptop, LineChart, Cpu, ArrowRight, ChevronRight } from 'lucide-react';


const Webentwicklung = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: { clientX: any; clientY: any; }) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const services = [
    {
      title: "Webentwicklung",
      icon: <Code className="w-12 h-12" />,
      description: "Entwicklung zukunftsweisender Web-Erlebnisse mit modernsten Technologien",
      features: ["Next.js & React", "TypeScript", "Tailwind CSS", "Headless CMS"],
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "Mobile Lösungen",
      icon: <Smartphone className="w-12 h-12" />,
      description: "Entwicklung nativer und plattformübergreifender Apps, die mobile Interaktion neu definieren",
      features: ["React Native", "iOS & Android", "PWA", "Mobile-First Design"],
      color: "from-purple-600 to-pink-500"
    },
    {
      title: "Digitale Innovation",
      icon: <Cpu className="w-12 h-12" />,
      description: "Grenzen überschreiten mit aufstrebenden Technologien und kreativen Lösungen",
      features: ["KI-Integration", "3D-Erlebnisse", "WebGL", "Motion Design"],
      color: "from-pink-500 to-red-500"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">

      <main className="flex-grow bg-gray-900 text-white relative">
        {/* Dynamischer Hintergrund */}
        <div 
          className="absolute inset-0 bg-gray-900" 
          style={{
            backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.1) 0%, transparent 60%)`
          }}
        />

      {/* Hero-Bereich */}
      <div className="relative">
        <div className="container pt-32 pb-20">
          <div className="max-w-4xl mx-auto text-center relative">
            <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 animate-pulse" />
            <h1 className="font-display text-7xl font-bold mb-6 relative bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text animate-fade-in">
              Innovative Digitale Lösungen
            </h1>
            <p className="text-2xl text-gray-300 mb-12 animate-fade-in delay-100">
              Wir gestalten die Zukunft des Webs mit modernsten Technologien und kreativem Design
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in delay-200">
              <button className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl font-medium relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative flex items-center gap-2">
                  Projekt starten <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button className="px-8 py-4 bg-gray-800 hover:bg-gray-700 rounded-xl font-medium border border-gray-700 hover:border-gray-600 transition-all">
                Unsere Arbeiten
              </button>
            </div>
          </div>
        </div>

        {/* Schwebende Elemente */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-spin-slow" />
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-xl animate-spin-slow" />
          <div className="absolute top-40 right-20 w-24 h-24 bg-pink-500/10 rounded-full blur-xl animate-spin-slow" />
        </div>
      </div>

      {/* Leistungen-Bereich */}
      <div className="container py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
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

      {/* CTA-Bereich */}
      <div className="container py-20">
        <div className="relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600" />
          <div className="absolute inset-0 bg-[linear-gradient(40deg,transparent_25%,rgba(68,51,238,0.2)_50%,transparent_75%)] bg-[length:500px_500px] animate-slide-in opacity-50" />
          <div className="relative p-12 md:p-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 max-w-2xl">
              Bereit, etwas Außergewöhnliches zu erschaffen?
            </h2>
            <p className="text-xl text-white/80 mb-16 max-w-2xl">
              Lassen Sie uns digitale Erlebnisse schaffen, die die Grenzen des Möglichen erweitern
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-white text-gray-900 rounded-xl font-medium hover:bg-gray-100 transition-all">
                Projekt starten
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-white/30 hover:border-white/60 rounded-xl font-medium transition-all">
                Gespräch vereinbaren
              </button>
            </div>
          </div>
        </div>
      </div>
      </main>
    </div>
  );
};

export default Webentwicklung;