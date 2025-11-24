import React from 'react';
import { SERVICES } from '../constants';
import Button from './Button';
import { useNavigate } from 'react-router-dom';

const Services: React.FC = () => {
  const navigate = useNavigate();

  const handleViewGallery = (id: string) => {
    navigate(`/gallery/${id}`);
    window.scrollTo(0, 0);
  };

  return (
    <section className="py-20 bg-white" id="services">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-ozzy-rose-dark text-sm tracking-widest uppercase mb-2 block">O que fazemos</span>
          <h2 className="font-serif text-3xl md:text-4xl text-ozzy-heading">Nossas Especialidades</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="group bg-ozzy-sand rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-stone-100 flex flex-col"
            >
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10"></div>
                <img 
                  src={service.imageUrl} 
                  alt={service.title} 
                  className="w-full h-full object-cover object-top transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur rounded-full p-2 w-10 h-10 flex items-center justify-center text-ozzy-rose-dark shadow-sm">
                  <i className={service.iconClass}></i>
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-serif text-xl text-ozzy-heading mb-3 group-hover:text-ozzy-rose-dark transition-colors">
                  {service.title}
                </h3>
                <p className="font-sans text-stone-500 text-sm leading-relaxed mb-6 flex-1 font-light">
                  {service.description}
                </p>
                <div className="mt-auto">
                   <Button 
                      variant="text" 
                      className="text-sm font-bold flex items-center gap-1"
                      onClick={() => handleViewGallery(service.id)}
                   >
                      Ver Galeria <i className="fi fi-rr-arrow-small-right mt-1"></i>
                   </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;