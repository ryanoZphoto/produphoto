import { User } from '@strapi/strapi';

declare module '@strapi/strapi' {
  interface StrapiEntity {
    id: number;
    attributes?: Record<string, any>;
  }

  interface Site extends StrapiEntity {
    name: string;
    description?: string;
    slug: string;
    theme?: string;
    isPublished: boolean;
    ageRestricted: boolean;
    user?: {
      id: number;
      [key: string]: any;
    };
    collections?: StrapiEntity[];
    mediaItems?: StrapiEntity[];
    createdAt: string;
    updatedAt: string;
    publishedAt?: string;
  }
} 