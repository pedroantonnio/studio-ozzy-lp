import React from 'react';
import { WHATSAPP_URL } from '../constants';

const FloatingWhatsApp: React.FC = () => {
  return (
    <a 
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Fale conosco no WhatsApp"
    >
      <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-25 group-hover:opacity-40"></div>
      <div className="relative bg-[#25D366] w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:shadow-green-500/40 hover:-translate-y-1 transition-all duration-300">
        <i className="fi fi-brands-whatsapp text-white text-3xl"></i>
      </div>
    </a>
  );
};

export default FloatingWhatsApp;