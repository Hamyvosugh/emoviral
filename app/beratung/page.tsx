'use client';
import { Phone, Calendar, MessageSquare, ChevronRight, CheckCircle2, ArrowRight, MessageCircle } from 'lucide-react';
import Form from '@/components/Form/jobform';

export default function KostenloserBeratungPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-primary-50 mt-16">
      {/* Hero Section */}
      <section className="container py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="font-display text-5xl lg:text-6xl font-bold text-gray-900">
              Kostenlose Erstberatung für Ihre digitale Transformation
            </h1>
            <p className="text-xl text-gray-600">
              Lassen Sie uns gemeinsam herausfinden, wie wir Ihr Unternehmen in die digitale Zukunft führen können.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#termin" className="inline-flex items-center justify-center px-6 py-3 text-lg font-semibold text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition-colors">
                Termin vereinbaren <ChevronRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-primary-200 rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <div className="relative bg-white p-8 rounded-2xl shadow-xl">
              <div className="grid gap-6">
                {[
                  "Prozessautomatisierung",
                  "Digitale Präsenz",
                  "Marketing-Strategien",
                  "Technologie-Beratung",
                  "Maßgeschneiderte Lösungen"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary-600" />
                    <span className="text-lg text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-center mb-16">
            Ihr Weg zur digitalen Exzellenz
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "1. Erstgespräch",
                description: "Wir verstehen Ihre Bedürfnisse und aktuellen Herausforderungen",
                icon: MessageSquare
              },
              {
                title: "2. Analyse",
                description: "Detaillierte Untersuchung Ihrer Prozesse und Potenziale",
                icon: CheckCircle2
              },
              {
                title: "3. Strategieentwicklung",
                description: "Maßgeschneiderte Lösungsvorschläge für Ihren Erfolg",
                icon: ArrowRight
              }
            ].map((step) => (
              <div key={step.title} className="bg-gray-50 p-6 rounded-xl">
                <step.icon className="h-12 w-12 text-primary-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="termin" className="py-20 bg-primary-900">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6 text-white">
              <h2 className="text-3xl lg:text-4xl font-display font-bold">
                Vereinbaren Sie Ihre kostenlose Erstberatung
              </h2>
              <p className="text-xl opacity-90">
                Wählen Sie Ihren bevorzugten Kontaktweg:
              </p>
              <div className="space-y-4">
                <a href="tel:004917647666407" className="flex items-center gap-3 text-lg hover:text-primary-200 transition-colors">
                  <Phone className="h-6 w-6" />
                  +49 176 47 666 407
                </a>
                <a href="https://wa.me/4917647666407" className="flex items-center gap-3 text-lg hover:text-primary-200 transition-colors">
                  <MessageCircle className="h-6 w-6" />
                  WhatsApp
                </a>
                <a href="calendar-link" className="flex items-center gap-3 text-lg hover:text-primary-200 transition-colors">
                  <Calendar className="h-6 w-6" />
                  Kalendereintrag
                </a>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-xl">
              <Form />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}