import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

interface CTAProps {
  title?: string;
  subtitle?: string;
  phoneNumber?: string;
}

const CTA: React.FC<CTAProps> = ({
  title = "🚀 Jetzt starten ",
  subtitle = "und Ihre digitale Transformation vorantreiben!",
  phoneNumber = "+4917647666407"
}) => {
  const Gear = ({ className = "" }) => (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 32 32" className="w-full h-full">
        <path
          className="fill-white" 
          d="M29 12.256h-1.88c-0.198-0.585-0.405-1.072-0.643-1.541l0.031 0.067 1.338-1.324c0.35-0.3 0.57-0.742 0.57-1.236 0-0.406-0.149-0.778-0.396-1.063l0.002 0.002-3.178-3.178c-0.283-0.246-0.654-0.395-1.061-0.395-0.494 0-0.937 0.221-1.234 0.57l-0.002 0.002-1.332 1.33c-0.402-0.206-0.888-0.413-1.39-0.586l-0.082-0.025 0.009-1.88c0.003-0.04 0.005-0.086 0.005-0.133 0-0.854-0.66-1.554-1.498-1.617l-0.005-0h-4.496c-0.844 0.063-1.505 0.763-1.505 1.617 0 0.047 0.002 0.093 0.006 0.139l-0-0.006v1.879c-0.585 0.198-1.071 0.404-1.54 0.641l0.067-0.031-1.324-1.336c-0.299-0.352-0.742-0.573-1.236-0.573-0.407 0-0.778 0.15-1.063 0.397l0.002-0.002-3.179 3.179c-0.246 0.283-0.396 0.655-0.396 1.061 0 0.494 0.221 0.937 0.57 1.234l0.002 0.002 1.329 1.329c-0.207 0.403-0.414 0.891-0.587 1.395l-0.024 0.082-1.88-0.009c-0.04-0.003-0.086-0.005-0.133-0.005-0.854 0-1.554 0.661-1.617 1.499l-0 0.005v4.495c0.062 0.844 0.763 1.505 1.617 1.505 0.047 0 0.093-0.002 0.139-0.006l-0.006 0h1.88c0.198 0.585 0.404 1.072 0.642 1.541l-0.03-0.066-1.335 1.32c-0.351 0.3-0.572 0.744-0.572 1.239 0 0.407 0.149 0.779 0.396 1.064l-0.002-0.002 3.179 3.178c0.249 0.246 0.591 0.399 0.97 0.399 0.007 0 0.014-0 0.021-0h-0.001c0.515-0.013 0.977-0.231 1.308-0.576l0.001-0.001 1.33-1.33c0.403 0.207 0.891 0.414 1.395 0.587l0.082 0.025-0.009 1.878c-0.003 0.04-0.005 0.086-0.005 0.132 0 0.854 0.661 1.555 1.499 1.617l0.005 0h4.496c0.843-0.064 1.503-0.763 1.503-1.617 0-0.047-0.002-0.093-0.006-0.139l0 0.006v-1.881c0.585-0.198 1.073-0.405 1.543-0.643l-0.067 0.031 1.321 1.333c0.332 0.344 0.793 0.562 1.304 0.574l0.002 0h0.002c0.006 0 0.013 0 0.019 0 0.378 0 0.72-0.151 0.971-0.395l3.177-3.177c0.244-0.249 0.395-0.591 0.395-0.968 0-0.009-0-0.017-0-0.026l0 0.001c-0.012-0.513-0.229-0.973-0.572-1.304l-0.001-0.001-1.331-1.332c0.206-0.401 0.412-0.887 0.586-1.389l0.025-0.083 1.879 0.009c0.04 0.003 0.086 0.005 0.132 0.005 0.855 0 1.555-0.661 1.617-1.5l0-0.005v-4.495c-0.063-0.844-0.763-1.504-1.618-1.504-0.047 0-0.093 0.002-0.138 0.006l0.006-0zM16 11.25c-2.623 0-4.75 2.127-4.75 4.75s2.127 4.75 4.75 4.75c2.623 0 4.75-2.127 4.75-4.75v0c-0.003-2.622-2.128-4.747-4.75-4.75h-0zM16 19.25c-1.795 0-3.25-1.455-3.25-3.25s1.455-3.25 3.25-3.25c1.795 0 3.25 1.455 3.25 3.25v0c-0.002 1.794-1.456 3.248-3.25 3.25h-0z"
        />
      </svg>
    </div>
  );

  const CodeBackground = () => (
    <div className="absolute inset-0 opacity-5">
      <div className="grid grid-cols-3 gap-4 p-4">
        {[...Array(24)].map((_, i) => (
          <div key={i} className="text-xs font-mono overflow-hidden">
            {`<div class="code">`}
            {`<style>`}
            {`function()`}
            {`{code}`}
            {`</style>`}
            {`</div>`}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="relative w-full h-96 overflow-hidden bg-primary-950 ">
      {/* Background Code */}
      <CodeBackground />
      
      {/* Right Gear */}
      <div className="absolute top-0 right-0 w-44 h-44 md:w-96 md:h-96 -mr-24 -mt-20 z-2">
  <div className="absolute w-full h-full animate-spin-slow">
    <Gear className="w-full h-full" />
  </div>
</div>

{/* Left Gear */}
<div className="absolute bottom-0 left-0 w-64 h-64 md:w-96 md:h-96 -ml-24 -mb-20 z-2">
  <div className="absolute w-full h-full animate-spin-slow">
    <Gear className="w-full h-full" />
  </div>
</div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-white">{title}</h1>
          <p className="text-lg mb-8 text-gray-300">{subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={`https://wa.me/${phoneNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-3 rounded-xl hover:bg-green-600 transition-colors"
            >
              <MessageCircle size={20} />
              <span>WhatsApp Chat</span>
            </a>
            <a 
              href={`tel:${phoneNumber}`}
              className="flex items-center justify-center gap-2 bg-red-500 text-white px-8 py-3 rounded-xl hover:bg-red-600 transition-colors"
            >
              <Phone size={20} />
              <span>Direkt Anrufen</span>
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-blue-500/0"></div>
    </div>
  );
};

export default CTA;