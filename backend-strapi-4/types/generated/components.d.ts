import type { Attribute, Schema } from '@strapi/strapi';

export interface ElementsForm extends Schema.Component {
  collectionName: 'components_elements_forms';
  info: {
    description: '';
    displayName: 'Form';
  };
  attributes: {
    errorMessage: Attribute.Blocks & Attribute.Required;
    form_id: Attribute.Enumeration<['contact', 'workpaper']> &
      Attribute.Required &
      Attribute.DefaultTo<'contact'>;
    successMessage: Attribute.Blocks & Attribute.Required;
  };
}

export interface ElementsHeadline extends Schema.Component {
  collectionName: 'components_common_headlines';
  info: {
    description: '';
    displayName: 'headline';
  };
  attributes: {
    baseSettings: Attribute.Component<'internal.base-settings'>;
    content: Attribute.String & Attribute.Required;
    level: Attribute.Enumeration<['h1', 'h2', 'h3', 'h4']> &
      Attribute.Required &
      Attribute.DefaultTo<'h1'>;
    textSettings: Attribute.Component<'internal.base-text-settings'>;
  };
}

export interface ElementsImage extends Schema.Component {
  collectionName: 'components_elements_images';
  info: {
    description: '';
    displayName: 'Image';
  };
  attributes: {
    baseSettings: Attribute.Component<'internal.base-settings'>;
    content: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    isHeaderImage: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    textSettings: Attribute.Component<'internal.base-text-settings'>;
  };
}

export interface ElementsText extends Schema.Component {
  collectionName: 'components_common_texts';
  info: {
    description: '';
    displayName: 'Text';
  };
  attributes: {
    baseSettings: Attribute.Component<'internal.base-settings'>;
    content: Attribute.Blocks;
    image: Attribute.Component<'internal.image-of-text'>;
    textSettings: Attribute.Component<'internal.base-text-settings'>;
  };
}

export interface InternalBaseSettings extends Schema.Component {
  collectionName: 'components_internal_base_settings';
  info: {
    description: '';
    displayName: 'BaseSettings';
  };
  attributes: {
    background: Attribute.Enumeration<['default', 'red', 'red-wave']> &
      Attribute.DefaultTo<'default'>;
    container: Attribute.Enumeration<['container', 'container-fluid']>;
  };
}

export interface InternalBaseTextSettings extends Schema.Component {
  collectionName: 'components_internal_base_text_settings';
  info: {
    displayName: 'BaseTextSettings';
  };
  attributes: {
    textAlign: Attribute.Enumeration<['left', 'center', 'right']>;
  };
}

export interface InternalImageOfText extends Schema.Component {
  collectionName: 'components_internal_image_of_texts';
  info: {
    description: '';
    displayName: 'ImageOfText';
  };
  attributes: {
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    image_position_desktop: Attribute.Enumeration<
      [
        'in-text-left',
        'in-text-right',
        'beside-text-top-left',
        'beside-text-top-right',
        'beside-text-center-left',
        'beside-text-center-right',
        'beside-text-bottom-left',
        'beside-text-bottom-right'
      ]
    > &
      Attribute.Required &
      Attribute.DefaultTo<'in-text-left'>;
    image_position_mobile: Attribute.Enumeration<['before', 'after']>;
    image_size_desktop: Attribute.Enumeration<
      ['full', 'half', 'third', 'quater']
    >;
  };
}

export interface InternalKeyTopicItem extends Schema.Component {
  collectionName: 'components_internal_key_topic_items';
  info: {
    description: '';
    displayName: 'KeyTopicItem';
  };
  attributes: {
    content: Attribute.Blocks;
    headline: Attribute.String;
    image: Attribute.Media<'images'> & Attribute.Required;
  };
}

export interface MeinLebenKeyTopics extends Schema.Component {
  collectionName: 'components_mein_leben_key_topics';
  info: {
    description: '';
    displayName: 'KeyTopics';
  };
  attributes: {
    baseSettings: Attribute.Component<'internal.base-settings'>;
    headline: Attribute.String;
    intro: Attribute.Blocks;
    topics: Attribute.Component<'internal.key-topic-item', true>;
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
      'elements.form': ElementsForm;
      'elements.headline': ElementsHeadline;
      'elements.image': ElementsImage;
      'elements.text': ElementsText;
      'internal.base-settings': InternalBaseSettings;
      'internal.base-text-settings': InternalBaseTextSettings;
      'internal.image-of-text': InternalImageOfText;
      'internal.key-topic-item': InternalKeyTopicItem;
      'mein-leben.key-topics': MeinLebenKeyTopics;
      'page.seo': PageSeo;
    }
  }
}
