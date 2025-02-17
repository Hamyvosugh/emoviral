'use client';
import Layout from '@/components/Layout/Layout';
import { Mail } from 'lucide-react';

export default function ThankYouPage() {
  return (
    <Layout>
      <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 dark mt-20">
        <div className="container flex flex-col items-center justify-center px-4 py-16 mx-auto min-h-[80vh]">
          <div className="relative w-full max-w-2xl p-8 overflow-hidden text-center">
            {/* Animated Background Effect */}
            <div className="absolute inset-0 bg-secondary-900/30 backdrop-blur-sm rounded-3xl animate-scale-in" />
            
            {/* Content Container */}
            <div className="relative z-10 space-y-6 animate-fade-in">
              {/* Success Icon */}
              <div className="flex justify-center">
                <div className="rounded-full bg-success-500/10 p-3 ring-2 ring-success-500/20">
                  <svg 
                    className="w-16 h-16 text-success-500 animate-spin-slow"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </div>

              {/* Main Text */}
              <h1 className="text-4xl font-display font-bold text-white">
                Vielen Dank!
              </h1>
              
              <p className="text-xl text-gray-300">
                Ihre Nachricht wurde erfolgreich gesendet
              </p>

              <p className="text-gray-400 max-w-md mx-auto">
                Wir werden uns schnellstmöglich mit Ihnen in Verbindung setzen. 
                In der Zwischenzeit können Sie uns auch direkt kontaktieren:
              </p>

              {/* Email Contact */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary-900/50 rounded-full text-secondary-200">
                <Mail className="w-5 h-5" />
                <a 
                  href="mailto:hi@emoviral.com"
                  className="hover:text-secondary-300 transition-colors"
                >
                  hi@emoviral.com
                </a>
              </div>

              {/* Back Button */}
              <div className="pt-8">
                <a
                  href="/"
                  className="inline-flex items-center px-6 py-3 text-sm font-medium text-white transition-colors rounded-full bg-primary-600 hover:bg-primary-700"
                >
                  Zurück zur Startseite
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}