import { Service, GalleryItem, SocialLink } from './types';

export const HERO_IMAGE = "/assets/hero-image.webp";

export const ABOUT_IMAGE = "/assets/josy-kenia-fotografa.webp"; 

export const SERVICES: Service[] = [
  {
    id: 'newborn',
    title: 'Newborn',
    description: 'A delicadeza e a pureza dos primeiros dias de vida, registrados com segurança e amor.',
    imageUrl: '/assets/newborn/sessao-newborn-anapolis-studio-ozzy-8.webp',
    iconClass: 'fi fi-rr-baby-carriage'
  },
  {
    id: 'milestones',
    title: 'Acompanhamento',
    description: 'Registre o crescimento do seu bebê mês a mês e não perca nenhum sorriso novo.',
    imageUrl: '/assets/milestones/sessao-acompanhamento-anapolis-studio-ozzy-8.webp',
    iconClass: 'fi fi-rr-calendar-clock'
  },
  {
    id: 'smash',
    title: 'Smash the Cake',
    description: 'A diversão do primeiro aninho com muita bagunça deliciosa e cenários encantadores.',
    imageUrl: '/assets/smash/sessao-smash-the-cake-anapolis-studio-ozzy-1.webp',
    iconClass: 'fi fi-rr-cake-birthday'
  },
  {
    id: 'kids',
    title: 'Sessão Kids',
    description: 'A espontaneidade da infância registrada em ensaios leves, divertidos e cheios de personalidade.',
    imageUrl: '/assets/kids/sessao-kids-anapolis-studio-ozzy-2.webp',
    iconClass: 'fi fi-rr-smile'
  }
];

export const GALLERY_IMAGES: GalleryItem[] = [
  { id: '6', category: 'Kids', alt: 'Ensaio fotográfico de menina com girafa de pelúcia e balões - Studio Ozzy', imageUrl: '/assets/sessao-kids-anapolis-studio-ozzy.webp' },
  { id: '1', category: 'Família', alt: 'Foto de irmãos sorrindo e abraçados em estúdio - Studio Ozzy', imageUrl: '/assets/sessao-familia-anapolis-studio-ozzy.webp' },
  { id: '2', category: 'Kids', alt: 'Fotografia de criança em estúdio com roupa de bailarina - Studio Ozzy', imageUrl: '/assets/sessao-kids-anapolis-studio-ozzy-2.webp' },
  { id: '3', category: 'Natal', alt: 'Ensaio fotográfico natalino com menina e neve - Studio Ozzy', imageUrl: '/assets/sessao-natal-anapolis-studio-ozzy.webp' },
  { id: '4', category: 'Páscoa', alt: 'Ensaio temático de Páscoa com bebê e cenoura - Studio Ozzy', imageUrl: '/assets/sessao-pascoa-anapolis-studio-ozzy.webp' },
  { id: '5', category: 'Kids', alt: 'Ensaio fotográfico de menina com bolas coloridas - Studio Ozzy', imageUrl: '/assets/sessao-kids-anapolis-studio-ozzy-3.webp' },
];

// Detailed galleries for specific pages
export const SERVICE_GALLERIES: Record<string, GalleryItem[]> = {
  newborn: [
    { id: 'n1', category: 'Newborn', alt: 'Ensaio newborn com bebê dormindo em almofada macia - Estúdio de fotos newborn', imageUrl: '/assets/newborn/sessao-newborn-anapolis-studio-ozzy-7.webp' },
    { id: 'n2', category: 'Newborn', alt: 'Ensaio newborn em cesto com roupinha vintage e detalhes em azul - Studio Ozzy', imageUrl: '/assets/newborn/sessao-newborn-anapolis-studio-ozzy-4.webp' },
    { id: 'n3', category: 'Newborn', alt: 'Bebê recém-nascido dormindo em ensaio com mini-cama - Studio Ozzy', imageUrl: '/assets/newborn/sessao-newborn-anapolis-studio-ozzy-3.webp' },
    { id: 'n4', category: 'Newborn', alt: 'Ensaio newborn com bebê dormindo em mini-cama - Fotos de recém-nascidos', imageUrl: '/assets/newborn/sessao-newborn-anapolis-studio-ozzy-2.webp' },
    { id: 'n5', category: 'Newborn', alt: 'Bebê recém-nascido em ensaio com ursinhos - Studio Ozzy', imageUrl: '/assets/newborn/sessao-newborn-anapolis-studio-ozzy-8.webp' },
    { id: 'n6', category: 'Newborn', alt: 'Fotografia newborn de bebê dormindo com chapéu e coração - Studio Ozzy', imageUrl: '/assets/newborn/sessao-newborn-anapolis-studio-ozzy-6.webp' },
    { id: 'n7', category: 'Newborn', alt: 'Recém-nascido dormindo em cesto de madeira - Fotografia de bebê newborn', imageUrl: '/assets/newborn/sessao-newborn-anapolis-studio-ozzy-5.webp' },
  ],
  milestones: [
    { id: 'm12', category: 'Acompanhamento', alt: 'Ensaio fotográfico com bebê e tema de escola - fotos de bebê em estúdio', imageUrl: '/assets/milestones/sessao-acompanhamento-anapolis-studio-ozzy-13.webp' },
    { id: 'm6', category: 'Acompanhamento', alt: 'Fotografia de bebê rindo em estúdio - fotos de criança', imageUrl: '/assets/milestones/sessao-acompanhamento-anapolis-studio-ozzy-6.webp' },
    { id: 'm11', category: 'Acompanhamento', alt: 'Ensaio fotográfico com bebê e tema de escola - fotos de bebê em estúdio', imageUrl: '/assets/milestones/sessao-acompanhamento-anapolis-studio-ozzy-11.webp' },
    { id: 'm1', category: 'Acompanhamento', alt: 'Ensaio fotográfico de criança com pirulito e roupa com tema "love" - Studio Ozzy', imageUrl: '/assets/milestones/sessao-acompanhamento-anapolis-studio-ozzy-1.webp' },
    { id: 'm10', category: 'Acompanhamento', alt: 'Fotos de bebê com tema de aviador em estúdio - Studio Ozzy', imageUrl: '/assets/milestones/sessao-acompanhamento-anapolis-studio-ozzy-10.webp' },
    { id: 'm3', category: 'Acompanhamento', alt: 'Fotografia de bebê com tema Páscoa em estúdio - Studio Ozzy', imageUrl: '/assets/milestones/sessao-acompanhamento-anapolis-studio-ozzy-3.webp' },
    { id: 'm8', category: 'Acompanhamento', alt: 'Fotografia de bebê com roupa de urso e cavalinho de madeira - Studio Ozzy', imageUrl: '/assets/milestones/sessao-acompanhamento-anapolis-studio-ozzy-8.webp' },
    { id: 'm2', category: 'Acompanhamento', alt: 'Fotografia de bebê na lhama rosa - fotos de bebê em estúdio - Studio Ozzy', imageUrl: '/assets/milestones/sessao-acompanhamento-anapolis-studio-ozzy-2.webp' },
    { id: 'm5', category: 'Acompanhamento', alt: 'Ensaio fotográfico de bebê com pirulito e roupa com tema "love" - Studio Ozzy', imageUrl: '/assets/milestones/sessao-acompanhamento-anapolis-studio-ozzy-5.webp' },
  ],
  smash: [
    { id: 's1', category: 'Smash', alt: 'Smash the cake com bolo e balões dourados - Studio Ozzy', imageUrl: 'assets/smash/sessao-smash-the-cake-anapolis-studio-ozzy-2.webp' },
    { id: 's6', category: 'Smash', alt: 'Bolo e bebê smash the cake - Studio Ozzy', imageUrl: 'assets/smash/sessao-smash-the-cake-anapolis-studio-ozzy-1.webp' },
    { id: 's3', category: 'Smash', alt: 'Ensaio smash the cake com bolo e balões - Studio Ozzy', imageUrl: 'assets/smash/sessao-smash-the-cake-anapolis-studio-ozzy-3.webp' },
    { id: 's4', category: 'Smash', alt: 'Ensaio smash the cake com bolo e balões - Studio Ozzy', imageUrl: 'assets/smash/sessao-smash-the-cake-anapolis-studio-ozzy-4.webp' },
    { id: 's5', category: 'Smash', alt: 'Smash the cake com balões e girafa - Studio Ozzy', imageUrl: 'assets/smash/sessao-smash-the-cake-anapolis-studio-ozzy-5.webp' },
    { id: 's6', category: 'Smash', alt: 'Smash the cake gêmeos em estúdio - Studio Ozzy', imageUrl: 'assets/smash/sessao-smash-the-cake-anapolis-studio-ozzy-6.webp' },
    { id: 's7', category: 'Smash', alt: 'Smash the cake com tema de margaridas - ensaio de 1 ano - Studio Ozzy', imageUrl: 'assets/smash/sessao-smash-the-cake-anapolis-studio-ozzy-7.webp' },
  ],
  kids: [
    { id: 'k2', category: 'Kids', alt: 'Fotografia de menino com óculos e balão número 3 - Studio Ozzy', imageUrl: '/assets/kids/sessao-kids-anapolis-studio-ozzy-7.webp' },
    { id: 'k1', category: 'Kids', alt: 'Ensaio fotográfico de menina com glitter e balões - Studio Ozzy', imageUrl: '/assets/kids/sessao-kids-anapolis-studio-ozzy-3.webp' },
    { id: 'k5', category: 'Kids', alt: 'Fotos de aniversário de 3 anos com balões e confetes - Studio Ozzy', imageUrl: '/assets/kids/sessao-kids-anapolis-studio-ozzy-5.webp' },
    { id: 'k3', category: 'Kids', alt: 'Criança em ensaio fotográfico de época - Estúdio de fotos infantil em Anápolis', imageUrl: '/assets/kids/sessao-kids-anapolis-studio-ozzy-2.webp' },
    { id: 'k7', category: 'Kids', alt: 'Aniversário infantil com tema fazendinha - Studio Ozzy, fotos de crianças', imageUrl: '/assets/kids/sessao-kids-anapolis-studio-ozzy-4.webp' },
    { id: 'k4', category: 'Kids', alt: 'Fotografia infantil de bailarina em estúdio rosa com barra de balé - Studio Ozzy', imageUrl: '/assets/kids/sessao-kids-anapolis-studio-ozzy-1.webp' },
    { id: 'k6', category: 'Kids', alt: 'Ensaio fotográfico de menina com balão de número 4 e flores - Estúdio de fotos', imageUrl: '/assets/kids/sessao-kids-anapolis-studio-ozzy-6.webp' },
    { id: 'k8', category: 'Kids', alt: 'Aniversário infantil com tema de dinossauros - Studio Ozzy', imageUrl: '/assets/kids/sessao-kids-anapolis-studio-ozzy-8.webp' },
    { id: 'k9', category: 'Kids', alt: 'Ensaio fotográfico de menino com fantasia de super-herói - Studio Ozzy', imageUrl: '/assets/kids/sessao-kids-anapolis-studio-ozzy-9.webp' },
  ]
};

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: 'Instagram', url: 'https://www.instagram.com/studioozzy', iconClass: 'fi fi-brands-instagram' },
];

export const CONTACT_INFO = {
  location: 'Anápolis - Goiás, Brasil',
  locationUrl: 'https://maps.app.goo.gl/Hyi6V2fts2peTeUT8',
  phone: '(62) 9639-6681',
  email: 'studioozzyfotografia@gmail.com'
};

export const WHATSAPP_URL = "https://wa.me/556296396681?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20ensaios%20do%20Studio%20Ozzy.";