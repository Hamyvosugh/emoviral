'use client';
import React from 'react';
import { Phone, MapPin, Mail, MessageCircle } from 'lucide-react';
import Form from '@/components/Form/jobform';


const ContactPage = () => {
  return (

    <div className="min-h-screen bg-gray-950 text-gray-100 mt-16">
      {/* Hero Section */}
      <div className="container py-16">
        <div className="text-center space-y-4 animate-fade-in">
          <h1 className="text-5xl font-display font-bold bg-gradient-to-r from-primary-400 to-secondary-400 text-transparent bg-clip-text">
            Kontaktieren Sie uns
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Wir freuen uns, von Ihnen zu hören. Wählen Sie Ihre bevorzugte Kontaktmethode.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container pb-24">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form Section */}
          <div className="bg-gray-900/50 p-8 rounded-2xl backdrop-blur-sm animate-scale-in">
            <h2 className="text-2xl font-display font-bold mb-6">Nachricht senden</h2>
            <Form />
          </div>

          {/* Contact Methods */}
          <div className="space-y-8">
            {/* Direct Call Section */}
            <div className="bg-gray-900/50 p-8 rounded-2xl backdrop-blur-sm animate-scale-in hover:bg-gray-900/60 transition-all group">
              <div className="flex items-start gap-6">
                <div className="bg-primary-500/10 p-4 rounded-xl group-hover:bg-primary-500/20 transition-all">
                  <Phone className="w-6 h-6 text-primary-400" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold font-display">Rufen Sie uns an</h3>
                  <p className="text-gray-400">QR-Code scannen oder klicken zum Anrufen</p>
                  <div className="flex items-center gap-4">
                    <img 
                      src="/images/QrCode/contact.png"
                      alt="Anruf QR-Code"
                      className="w-32 h-32 bg-white p-2 rounded-xl"
                    />
                    <a 
                      href="tel:+4917647666407"
                      className="text-primary-400 hover:text-primary-300 transition-colors absolute bottom-1 right-5"
                    >
                      +49 176 47 666 407
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp Section */}
            <div className="bg-gray-900/50 p-8 rounded-2xl backdrop-blur-sm animate-scale-in hover:bg-gray-900/60 transition-all group">
              <div className="flex items-start gap-6">
                <div className="bg-success-500/10 p-4 rounded-xl group-hover:bg-success-500/20 transition-all">
                  <MessageCircle className="w-6 h-6 text-success-400" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold font-display">WhatsApp</h3>
                  <p className="text-gray-400">QR-Code scannen oder klicken zum Chatten</p>
                  <div className="flex items-center gap-4">
                    <img 
                      src="/images/QrCode/whatsapp.png"
                      alt="WhatsApp QR-Code"
                      className="w-32 h-32 bg-white p-2 rounded-xl"
                    />
                    <a 
                      href="https://wa.me/4917647666407"
                      className="text-success-400 hover:text-success-300 transition-colors absolute bottom-1 right-5"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      +49 176 47 666 407
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Location Section */}
            <div className="bg-gray-900/50 p-8 rounded-2xl backdrop-blur-sm animate-scale-in hover:bg-gray-900/60 transition-all group">
              <div className="flex items-start gap-6">
                <div className="bg-secondary-500/10 p-4 rounded-xl group-hover:bg-secondary-500/20 transition-all">
                  <MapPin className="w-6 h-6 text-secondary-400" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold font-display">Besuchen Sie uns</h3>
                  <p className="text-gray-400">Unsere Büroadresse</p>
                  <address className="text-gray-300 not-italic">
                    Ihre Straße<br />
                    Stadt, PLZ<br />
                    Deutschland
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

  );
};

export default ContactPage;