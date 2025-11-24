import React from 'react';
import { GALLERY_IMAGES } from '../constants';

const Gallery: React.FC = () => {
  return (
    <section className="py-20 bg-ozzy-sand" id="portfolio">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center text-center mb-12 gap-4">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl text-ozzy-heading mb-2">Momentos Eternizados</h2>
            <p className="text-stone-500 font-light">Uma prévia do nosso feed</p>
          </div>
          <a href="https://www.instagram.com/studioozzy" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-stone-600 hover:text-ozzy-rose-dark transition-colors text-sm font-medium border-b border-stone-300 pb-1 hover:border-ozzy-rose-dark">
            <i className="fi fi-brands-instagram"></i>
            @studioozzy
          </a>
        </div>

        {/* Masonry Layout Simulation using CSS Columns */}
        <div className="columns-2 md:columns-3 gap-6 space-y-6">
          {GALLERY_IMAGES.map((image) => (
            <div key={image.id} className="break-inside-avoid relative group rounded-xl overflow-hidden cursor-pointer">
              <img 
                src={image.imageUrl} 
                alt={image.alt} 
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-serif text-sm tracking-wide">{image.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;