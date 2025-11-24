import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { SERVICE_GALLERIES, SERVICES, WHATSAPP_URL } from '../constants';
import Button from './Button';
import Footer from './Footer';
import FloatingWhatsApp from './FloatingWhatsApp';

const ServiceGallery: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  // Rola para o topo ao abrir a galeria para garantir boa UX
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  
  const service = SERVICES.find(s => s.id === id);
  const images = id ? SERVICE_GALLERIES[id] : [];

  if (!service) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-ozzy-sand text-ozzy-heading">
         <h2 className="text-2xl font-serif mb-4">Galeria não encontrada</h2>
         <Button onClick={() => navigate('/')}>Voltar para Home</Button>
      </div>
    );
  }

  return (
    <div className="bg-ozzy-sand min-h-screen font-sans selection:bg-ozzy-rose selection:text-white">
      {/* Navigation Header - Changed from sticky to relative */}
      <nav className="bg-white/80 backdrop-blur-md relative top-0 z-50 border-b border-stone-100 transition-all duration-300">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <button 
            onClick={() => navigate('/')} 
            className="flex items-center gap-2 text-stone-600 hover:text-ozzy-rose-dark transition-colors group"
          >
            <i className="fi fi-rr-arrow-small-left text-xl group-hover:-translate-x-1 transition-transform"></i>
            <span className="text-sm font-bold tracking-wide uppercase">Voltar</span>
          </button>
          
          <div className="font-serif text-xl font-bold text-ozzy-heading hidden md:block">
            Studio Ozzy
          </div>

          <Button 
            href={WHATSAPP_URL} 
            target="_blank" 
            rel="noreferrer"
            className="!py-2 !px-4 !text-xs !shadow-none hover:!shadow-none hover:!translate-y-0"
          >
            Agendar
          </Button>
        </div>
      </nav>

      {/* Hero Section for Gallery */}
      <header className="py-16 md:py-24 text-center px-6 bg-white relative overflow-hidden border-b border-stone-50">
         <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
             <div className="absolute top-0 right-0 w-64 h-64 bg-ozzy-rose rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
         </div>
         
         <div className="relative z-10 max-w-3xl mx-auto animate-fade-in">
           <div className="inline-flex items-center justify-center w-16 h-16 bg-ozzy-sand rounded-full text-ozzy-rose-dark text-2xl mb-6 shadow-sm">
              <i className={service.iconClass}></i>
           </div>
           <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ozzy-heading mb-6">
             Galeria <span className="font-script text-ozzy-rose-dark block sm:inline mt-2 sm:mt-0">{service.title}</span>
           </h1>
           <p className="text-stone-500 text-lg font-light leading-relaxed max-w-xl mx-auto">
             {service.description}
           </p>
         </div>
      </header>

      {/* Gallery Grid */}
      <section className="py-12 pb-24 container mx-auto px-6">
        {images && images.length > 0 ? (
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {images.map((img) => (
              <div key={img.id} className="break-inside-avoid rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 bg-white p-2 group">
                <img 
                  src={img.imageUrl} 
                  alt={img.alt} 
                  className="w-full h-auto rounded-lg object-cover transform group-hover:scale-[1.02] transition-transform duration-700"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-stone-400 flex flex-col items-center">
             <div className="w-20 h-20 bg-stone-100 rounded-full flex items-center justify-center mb-4">
               <i className="fi fi-rr-picture text-3xl opacity-50"></i>
             </div>
             <p className="font-light">Em breve novas fotos nesta galeria.</p>
          </div>
        )}
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default ServiceGallery;