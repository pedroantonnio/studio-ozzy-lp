export interface Service {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  iconClass: string;
}

export interface GalleryItem {
  id: string;
  imageUrl: string;
  alt: string;
  category: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  iconClass: string;
}