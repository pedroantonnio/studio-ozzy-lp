import React from 'react';
import { HERO_IMAGE, WHATSAPP_URL } from '../constants';
import Button from './Button';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col md:flex-row bg-ozzy-sand" id="home">
      
      {/* Coluna de Texto (Esquerda no Desktop, Baixo no Mobile) */}
      <div className="w-full md:w-1/2 flex items-center justify-center px-6 md:px-12 lg:px-20 py-20 md:py-0 order-2 md:order-1">
        <div className="max-w-xl w-full text-left mt-10 md:mt-0">
          
          <span className="inline-block py-1 px-3 border border-ozzy-heading/20 rounded-full bg-white/50 text-xs text-ozzy-heading mb-6 tracking-[0.2em] uppercase font-sans">
            Fotografia Afetiva
          </span>
          
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-ozzy-heading mb-6 leading-[1.1] font-normal">
            Eternizando as fases <br/>
            <span className="font-script text-6xl md:text-8xl text-ozzy-rose-dark block mt-2 ml-2">mais doces</span>
          </h1>
          
          <p className="font-sans text-stone-600 text-base md:text-lg mb-8 max-w-md leading-relaxed font-light tracking-wide">
            Especialista em Newborn, Fotografia Infantil e de Família. <br className="hidden lg:block"/>
            <br></br>
            Criando memórias atemporais em Anápolis-GO com segurança e delicadeza.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-start items-start sm:items-center">
            <Button 
              href={WHATSAPP_URL} 
              target="_blank" 
              rel="noreferrer" 
              className="!shadow-none hover:!shadow-none hover:!translate-y-0"
            >
              Agendar Ensaio
            </Button>
            <button 
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })} 
              className="group flex items-center gap-2 text-stone-600 hover:text-ozzy-rose-dark transition-colors font-sans text-xs uppercase tracking-widest px-4 py-3"
            >
              Ver Portfólio
              <i className="fi fi-rr-arrow-small-down transform -rotate-90 sm:rotate-0 group-hover:translate-x-1 sm:group-hover:translate-x-0 sm:group-hover:translate-y-1 transition-transform"></i>
            </button>
          </div>

        </div>
      </div>

      {/* Coluna de Imagem (Direita no Desktop, Topo no Mobile) */}
      <div className="w-full md:w-1/2 h-[50vh] md:h-screen relative order-1 md:order-2 overflow-hidden">
        <img 
          src={HERO_IMAGE} 
          alt="Família feliz no Studio Ozzy" 
          className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-[2s]"
          fetchPriority="high"
        />
        {/* Gradiente sutil apenas para suavizar a transição lateral se necessário, mas mantendo a imagem limpa */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-transparent md:bg-none pointer-events-none"></div>
      </div>

    </section>
  );
};

export default Hero;