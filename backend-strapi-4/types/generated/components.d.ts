import type { Attribute, Schema } from '@strapi/strapi';

export interface ElementsHeadline extends Schema.Component {
  collectionName: 'components_common_headlines';
  info: {
    description: '';
    displayName: 'headline';
  };
  attributes: {
    background: Attribute.Enumeration<['default', 'red', 'red-wave']> &
      Attribute.Required &
      Attribute.DefaultTo<'default'>;
    content: Attribute.String & Attribute.Required;
    level: Attribute.Enumeration<['h1', 'h2', 'h3', 'h4']> &
      Attribute.Required &
      Attribute.DefaultTo<'h1'>;
  };
}

export interface ElementsImage extends Schema.Component {
  collectionName: 'components_elements_images';
  info: {
    displayName: 'Image';
  };
  attributes: {
    content: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ElementsText extends Schema.Component {
  collectionName: 'components_common_texts';
  info: {
    description: '';
    displayName: 'Text';
  };
  attributes: {
    background: Attribute.Enumeration<['default', 'red', 'red-wave']>;
    content: Attribute.Blocks;
  };
}

export interface PageSeo extends Schema.Component {
  collectionName: 'components_common_seos';
  info: {
    description: '';
    displayName: 'SEO';
    icon: 'cog';
  };
  attributes: {
    description: Attribute.Text;
    keywords: Attribute.String;
    og_description: Attribute.Text;
    og_image: Attribute.Media<'images'>;
    og_title: Attribute.String;
    title: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'elements.headline': ElementsHeadline;
      'elements.image': ElementsImage;
      'elements.text': ElementsText;
      'page.seo': PageSeo;
    }
  }
}
