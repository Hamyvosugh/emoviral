import React from 'react';
import Link from 'next/link';
import { Phone, MessageSquare } from 'lucide-react';

interface BlogCTAProps {
  title: string;
  coverImage: string;
}

const BlogCTA: React.FC<BlogCTAProps> = ({ title, coverImage }) => {
  return (
    <div className="relative my-12 rounded-2xl overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: `url(${coverImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: '0.80'
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 bg-gradient-to-r from-primary-900/90 to-primary-800/90 p-8 md:p-12">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h3 className="text-2xl md:text-3xl font-display text-white">
              Du brauchst weitere Hilfe beim Thema{' '}
              <span className="text-primary-200">{title}</span>?
            </h3>
            
            <p className="text-lg text-primary-50">
              Lass uns in einem kostenlosen Erstgespräch herausfinden, 
              wie wir dein Unternehmen digital voranbringen können.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* Phone Button */}
              <a 
                href="tel:004917647666407"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary-900 rounded-lg hover:bg-primary-50 transition-colors duration-200"
              >
                <Phone className="w-5 h-5 mr-2" />
                <span>Anrufen</span>
              </a>

              {/* WhatsApp Button */}
              <a 
                href="https://wa.me/4917647666407"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#25D366] text-white rounded-lg hover:bg-[#22c55e] transition-colors duration-200"
              >
                <svg 
                  className="w-5 h-5 mr-2" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span>WhatsApp</span>
              </a>

              {/* Contact Page Link */}
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary-100 text-primary-900 rounded-lg hover:bg-primary-200 transition-colors duration-200"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                <span>Kontakt</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCTA;