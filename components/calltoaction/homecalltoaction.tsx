import React from 'react';
import { Phone, MessageCircle, ArrowRight } from 'lucide-react';

const CtaSection = () => {
  const phoneNumber = "017647666407";
  
  return (
    <section className="relative w-full h-[800px] overflow-hidden group">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/home/marketing-dashboard.JPG" 
          alt="Hintergrund" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-950/90 via-primary-900/85 to-primary-950/90" />
      </div>

      {/* Content Container */}
      <div className="relative h-full container mx-auto px-4 flex items-center   z-10">
        {/* Left space for image object visibility */}
        <div className="w-1/4" />

        {/* Center Content */}
        <div className="w-1/2 text-center space-y-6 ">
          <h2 className="text-4xl font-display font-bold text-white  " >
            Lassen Sie uns Ihr Projekt gemeinsam starten
          </h2>
          <p className="text-lg text-primary-100">
            Bereit, Ihre Ideen in die Realität umzusetzen? Kontaktieren Sie uns noch heute!
          </p>
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
            className="inline-flex items-center px-6 py-3 bg-secondary-500 hover:bg-secondary-600 
                     text-white rounded-full transition-all duration-300 group-hover:scale-105
                     shadow-lg hover:shadow-secondary-500/25"
          >
            Kontaktformular
            <ArrowRight className="ml-2 w-5 h-5 animate-slide-in" />
          </a>
        </div>

        {/* Right Side Contact Icons */}
        <div className="w-1/4 flex flex-col items-center space-y-4 sm:items-end absolute inset-x-0 bottom-0 mx-auto sm:relative sm:mx-0">
        <a
            href={`tel:${phoneNumber}`}
            className="flex items-center px-4 py-2 bg-white/10 hover:bg-white/20 
                     rounded-full backdrop-blur-sm transition-all duration-300
                     text-white hover:translate-x-2"
          >
            <Phone className="w-5 h-5 mr-2" />
            <span className="font-medium">Anrufen</span>
          </a>

          <a
            href={`https://wa.me/${phoneNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 bg-success-500/20 hover:bg-success-500/30 
                     rounded-full backdrop-blur-sm transition-all duration-300
                     text-white hover:translate-x-2"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            <span className="font-medium">WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;