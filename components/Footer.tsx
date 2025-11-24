import React from 'react';
import { CONTACT_INFO, WHATSAPP_URL } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-stone-100 pt-16 pb-8" id="contact">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10">
          
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="font-serif text-2xl text-ozzy-heading mb-4">Studio Ozzy</h3>
            <p className="text-stone-500 font-light text-sm max-w-xs">
              Eternizando o amor e a pureza da sua família através de lentes cheias de afeto.
            </p>
          </div>

          {/* Contact */}
          <div className="text-center md:text-left">
             <h4 className="font-bold text-stone-700 mb-4 uppercase text-xs tracking-widest">Contato</h4>
             <ul className="space-y-3 text-stone-600 text-sm">
                <li>
                  <a href={CONTACT_INFO.locationUrl} target="_blank" rel="noreferrer" className="hover:text-ozzy-rose-dark transition-colors flex items-center gap-2 justify-center md:justify-start">
                    <i className="fi fi-rr-marker"></i> {CONTACT_INFO.location}
                  </a>
                </li>
                <li>
                  <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="hover:text-ozzy-rose-dark transition-colors flex items-center gap-2 justify-center md:justify-start">
                     <i className="fi fi-rr-smartphone"></i> {CONTACT_INFO.phone}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-ozzy-rose-dark transition-colors flex items-center gap-2 justify-center md:justify-start">
                     <i className="fi fi-rr-envelope"></i> {CONTACT_INFO.email}
                  </a>
                </li>
             </ul>
          </div>

          {/* Social */}
          <div className="text-center md:text-left">
             <h4 className="font-bold text-stone-700 mb-4 uppercase text-xs tracking-widest">Redes Sociais</h4>
             <div className="flex gap-4 justify-center md:justify-start">
                <a href="https://www.instagram.com/studioozzy" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-ozzy-sand flex items-center justify-center text-stone-600 hover:bg-ozzy-rose hover:text-white transition-all">
                  <i className="fi fi-brands-instagram"></i>
                </a>
             </div>
          </div>
        </div>

        <div className="border-t border-stone-100 mt-16 pt-8 text-center">
           <p className="text-stone-400 text-xs">
             &copy; 2019 Studio Ozzy. Todos os direitos reservados.
           </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;