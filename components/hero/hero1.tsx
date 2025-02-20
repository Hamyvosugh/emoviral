'use client';
import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import Slider from './slider';
import MotionBanner from './banner'

interface StatType {
  value: string;
  label: string;
}


const MarketingHero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-secondary-50 to-primary-50">
      <div className="container relative py-20 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Content */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-secondary-100 px-4 py-2 text-sm text-secondary-600">
              <Sparkles size={16} />
              <span>Innovativ. Kreativ. Effektiv.</span>
            </div>

            <div className="space-y-6">
              <h1 className="font-display text-4xl font-bold tracking-tight text-gray-900 lg:text-6xl">
                Digitale Lösungen für Ihren Erfolg
              </h1>
              <p className="text-lg text-gray-600">
              Transformieren Sie Ihre digitale Präsenz mit unseren maßgeschneiderten Marketing-Strategien. Wir sind ein kreatives Team, das erst kürzlich gestartet ist, aber wir bringen das neueste Wissen und höchste Kreativität mit, um Ihnen zu helfen, Ihre Zielgruppe effektiv zu erreichen und Ihre Geschäftsziele zu übertreffen.              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
               
            <a 
  href="#title-1" 
  onClick={(e) => {
    e.preventDefault();
    const kontaktElement = document.getElementById('title-1');
    if (kontaktElement) {
      const elementPosition = kontaktElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - 100; // 100px offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }}
  className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-700"
>
  Jetzt Beratung vereinbaren
  <ArrowRight size={16} />
</a>
              <button className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50">
                Unsere Leistungen
              </button>
            </div>

          </div>

          {/* Right Column - Slider */}
          <div className="relative hidden lg:block">
            <div className="absolute -right-20 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-gradient-radial from-primary-200/50 to-transparent blur-3xl" />
            <div className="absolute -left-20 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-gradient-radial from-secondary-200/50 to-transparent blur-3xl" />
            <div className="relative aspect-square w-full overflow-hidden rounded-2xl">
            <MotionBanner />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketingHero;