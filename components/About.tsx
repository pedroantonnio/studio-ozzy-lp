import React from 'react';
import { ABOUT_IMAGE } from '../constants';

const About: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-ozzy-sand relative overflow-hidden" id="about">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-ozzy-rose opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 opacity-20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          
          {/* Image Side */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-white shadow-xl">
                <img 
                  src={ABOUT_IMAGE} 
                  alt="Josy Kênia Fotógrafa" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-2xl shadow-lg border border-stone-100 flex items-center gap-3 animate-bounce-slow">
                <div className="bg-ozzy-rose/20 p-2 rounded-full text-ozzy-rose-dark">
                   <i className="fi fi-rr-camera text-xl"></i>
                </div>
                <div>
                  <p className="text-xs text-stone-400 uppercase tracking-wider">Fotógrafa</p>
                  <p className="font-serif text-stone-800">Josy Kênia</p>
                </div>
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="font-serif text-3xl md:text-4xl text-ozzy-heading mb-6">
              Capturando a essência <br />
              <span className="font-serif-italic text-ozzy-rose-dark">do amor familiar</span>
            </h2>
            <div className="w-16 h-1 bg-ozzy-rose mx-auto md:mx-0 mb-8 rounded-full"></div>
            
            <p className="font-sans text-stone-600 leading-relaxed mb-6 font-light text-lg">
              Olá, sou Josy Kênia. Minha paixão é registrar encantos, desde os primeiros dias do seu recém-nascido até as celebrações anuais da sua família.
            </p>
            <p className="font-sans text-stone-500 leading-relaxed mb-8 font-light">
              Acredito que cada fase merece ser lembrada com carinho. Meu estúdio foi pensado para oferecer conforto, segurança e uma experiência tranquila para mamães e bebês.
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-6 font-serif text-stone-800">
               <div className="flex items-center gap-2">
                 <i className="fi fi-rr-heart text-ozzy-rose-dark"></i>
                 <span>Segurança Newborn</span>
               </div>
               <div className="flex items-center gap-2">
                 <i className="fi fi-rr-home text-ozzy-rose-dark"></i>
                 <span>Ambiente Acolhedor</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;