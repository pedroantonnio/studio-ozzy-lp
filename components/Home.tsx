import React from 'react';
import Hero from './Hero';
import About from './About';
import Services from './Services';
import Gallery from './Gallery';
import Footer from './Footer';
import FloatingWhatsApp from './FloatingWhatsApp';

const Home: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="font-sans text-stone-800 bg-ozzy-sand selection:bg-ozzy-rose selection:text-white">
      {/* Navigation Bar (Overlay) */}
      <nav className="absolute top-0 left-0 w-full z-50 py-6">
        <div className="container mx-auto px-6">
          
          {/* Mobile Layout: Logo Centered */}
          <div className="md:hidden flex justify-center w-full">
            <div className="font-serif text-2xl font-bold text-ozzy-heading">
               Studio Ozzy
            </div>
          </div>

          {/* Desktop Layout: Split Menu (2 links | Logo | 2 links) */}
          <div className="hidden md:flex justify-center items-center gap-12 w-full">
             <div className="flex gap-10 text-stone-600 font-medium text-sm tracking-wide">
               <button 
                 onClick={() => scrollToSection('about')} 
                 className="hover:text-ozzy-rose-dark transition-colors bg-transparent border-none cursor-pointer p-0"
               >
                 A Fotógrafa
               </button>
               <button 
                 onClick={() => scrollToSection('services')} 
                 className="hover:text-ozzy-rose-dark transition-colors bg-transparent border-none cursor-pointer p-0"
               >
                 Serviços
               </button>
             </div>

             <div className="font-serif text-3xl font-bold text-ozzy-heading px-4">
                Studio Ozzy
             </div>

             <div className="flex gap-10 text-stone-600 font-medium text-sm tracking-wide">
               <button 
                 onClick={() => scrollToSection('portfolio')} 
                 className="hover:text-ozzy-rose-dark transition-colors bg-transparent border-none cursor-pointer p-0"
               >
                 Portfólio
               </button>
               <button 
                 onClick={() => scrollToSection('contact')} 
                 className="hover:text-ozzy-rose-dark transition-colors bg-transparent border-none cursor-pointer p-0"
               >
                 Contato
               </button>
             </div>
          </div>

        </div>
      </nav>

      <Hero />
      <About />
      <Services />
      <Gallery />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Home;