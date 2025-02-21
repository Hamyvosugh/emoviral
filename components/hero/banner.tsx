import React from 'react';
import { Code2, Laptop, Cpu, LineChart } from 'lucide-react';

const MotionBanner = () => {
  return (
    <div className="relative w-full h-[70vh] bg-gradient-to-b from-primary-400 via-primary-950 to-primary-950 overflow-hidden">
      {/* DNA Helix Background */}
      <div className="absolute inset-0">
        {[...Array(10)].map((_, i) => (
          <div key={`helix-${i}`} className="absolute w-full h-16 animate-helix" 
            style={{ 
              top: `${i * 10}%`,
              animationDelay: `${i * 0.2}s`
            }}>
            <div className="absolute w-4 h-4 bg-blue-400/20 rounded-full left-0 blur-sm" />
            <div className="absolute w-4 h-4 bg-purple-400/20 rounded-full right-0 blur-sm" />
          </div>
        ))}
      </div>

      {/* Enhanced floating particles with glow */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-2 h-2 bg-white/40 rounded-full animate-float blur-sm"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 7}s`
            }}
          />
        ))}
      </div>

      {/* Geometric patterns */}
      <div className="absolute inset-0">
        <div className="absolute w-96 h-96 border-2 border-purple-500/10 rounded-full animate-spin-slow top-1/4 -left-48 backdrop-blur-3xl"/>
        <div className="absolute w-96 h-96 border-2 border-blue-500/10 rounded-full animate-reverse-spin bottom-1/4 -right-48 backdrop-blur-3xl"/>
      </div>

      {/* Main content container with glass effect */}
      <div className="relative h-full flex flex-col items-center justify-center backdrop-blur-sm">
        {/* Company name with enhanced animation */}
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient-x">
            Emoviral
          </h1>
          <h2 className="text-3xl text-white/90 mt-2 animate-glow">
          </h2>
        </div>

        {/* Service items with enhanced animations */}
        <div className="flex flex-col gap-12 items-center">
          {[
            { Icon: Code2, text: "Webentwicklung", color: "text-blue-400", delay: 0 },
            { Icon: Laptop, text: "App-Entwicklung", color: "text-purple-400", delay: 0.2 },
            { Icon: Cpu, text: "KI & Automation", color: "text-pink-400", delay: 0.4 },
            { Icon: LineChart, text: "Digital Marketing", color: "text-indigo-400", delay: 0.6 }
          ].map(({ Icon, text, color, delay }, index) => (
            <div
              key={text}
              className="group flex items-center gap-4 animate-slide-up"
              style={{ animationDelay: `${delay}s` }}
            >
              <div className={`relative ${color} transform group-hover:scale-110 transition-all duration-300`}>
                <Icon className="w-10 h-10 animate-icon-float" style={{ animationDelay: `${delay}s` }} />
                <div className="absolute inset-0 blur-md animate-pulse opacity-50 group-hover:opacity-80 transition-opacity duration-300">
                  <Icon className="w-10 h-10" />
                </div>
              </div>
              <span className="text-2xl text-white/90 font-light group-hover:text-white transition-colors duration-300 relative">
                {text}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-white/0 via-white/70 to-white/0 group-hover:w-full transition-all duration-500" />
              </span>
            </div>
          ))}
        </div>

        {/* Enhanced tagline */}
        <div className="absolute bottom-4 w-full text-center">
          <p className="text-xl text-white/90 font-light animate-glow">
            Ihre Digitale Zukunft Beginnt Hier
          </p>
        </div>
      </div>

      <style jsx global>{`
        @keyframes helix {
          0% { transform: translateX(-100%) rotate(0deg); }
          100% { transform: translateX(100%) rotate(360deg); }
        }

        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(10px, -10px); }
          50% { transform: translate(0, -20px); }
          75% { transform: translate(-10px, -10px); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(180deg) scale(1.1); }
          to { transform: rotate(360deg) scale(1); }
        }
        
        @keyframes reverse-spin {
          from { transform: rotate(360deg) scale(1.1); }
          50% { transform: rotate(180deg) scale(1); }
          to { transform: rotate(0deg) scale(1.1); }
        }
        
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes glow {
          0%, 100% { opacity: 0.9; filter: brightness(1); }
          50% { opacity: 1; filter: brightness(1.2); }
        }

        @keyframes slide-up {
          from { transform: translateY(30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        @keyframes icon-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }

        .animate-icon-float {
          animation: icon-float 2s ease-in-out infinite;
        }

        .animate-helix { animation: helix 20s linear infinite; }
        .animate-float { animation: float 8s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 30s linear infinite; }
        .animate-reverse-spin { animation: reverse-spin 25s linear infinite; }
        .animate-gradient-x { animation: gradient-x 3s linear infinite; background-size: 200% 200%; }
        .animate-glow { animation: glow 3s ease-in-out infinite; }
        .animate-slide-up { 
          animation: slide-up 0.8s ease-out forwards;
          opacity: 0;
        }
        .animate-fade-in {
          animation: slide-up 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default MotionBanner;