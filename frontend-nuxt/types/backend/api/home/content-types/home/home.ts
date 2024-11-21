// Interface automatically generated by schemas-to-ts

import { Seo } from '../../../../components/page/interfaces/Seo';
import { Seo_Plain } from '../../../../components/page/interfaces/Seo';
import { Seo_NoRelations } from '../../../../components/page/interfaces/Seo';

export interface Home {
  id: number;
  attributes: {
    createdAt: Date;    updatedAt: Date;    publishedAt?: Date;    SEO?: Seo;
    contents?: any;
    locale: string;
    localizations?: { data: Home[] };
  };
}
export interface Home_Plain {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  SEO?: Seo_Plain;
  contents?: any;
  locale: string;
  localizations?: Home_Plain[];
}

export interface Home_NoRelations {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  SEO?: Seo_NoRelations;
  contents?: any;
  locale: string;
  localizations?: Home[];
}

export interface Home_AdminPanelLifeCycle {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  SEO?: Seo_Plain;
  contents?: any;
  locale: string;
  localizations?: Home[];
}