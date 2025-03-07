import { Strapi } from '@strapi/strapi';

declare module '@strapi/strapi' {
  interface StrapiEntity {
    id: number;
    [key: string]: any;
  }

  interface StrapiUser extends StrapiEntity {
    username: string;
    email: string;
    provider: string;
    confirmed: boolean;
    blocked: boolean;
    role: StrapiEntity;
  }

  interface StrapiSite extends StrapiEntity {
    name: string;
    description?: string;
    slug: string;
    theme?: string;
    isPublished: boolean;
    ageRestricted: boolean;
    user: StrapiUser;
    collections?: StrapiEntity[];
    mediaItems?: StrapiEntity[];
    createdAt: string;
    updatedAt: string;
    publishedAt?: string;
  }

  interface StrapiFilters {
    [key: string]: any;
  }
} 