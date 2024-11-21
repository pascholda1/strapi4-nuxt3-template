import type {Image}         from '~/types/backend/components/elements/interfaces/Image';
import type {
  Text,
}                           from '~/types/backend/components/elements/interfaces/Text';
import type {
  Headline,
}                           from '~/types/backend/components/elements/interfaces/Headline';
import type {BlocksContent} from 'vue-strapi-blocks-renderer';
import type {
  BaseSettings,
}                           from '~/types/backend/components/internal/interfaces/BaseSettings';
import type {
  BaseTextSettings,
}                           from '~/types/backend/components/internal/interfaces/BaseTextSettings';

// Base Content Definition
// TODO: [component global props] define global properties wich can be used in /components/strapi-contents/StrapiBaseContent.vue

export interface BaseContent {
  id: number;
  __component: ContentComponent;
  baseSettings?: BaseSettings;
  textSettings?: BaseTextSettings;
}

// Custom Components
// TODO: [new components 1] create a new component using Strapis "Content-Type Builder" and add component ids here
export type ContentComponent =
    'elements.image'
    | 'elements.headline'
    | 'elements.text'
    | 'elements.form'
    | 'mein-leben.key-topics';

// TODO: [new components 2] add an Content interface the new strapi component which extends
//  BaseContent and the backend generated component interface.
export interface ElementsImageContent extends BaseContent, Image {
  __component: 'elements.image';
}

export interface ElementsHeadlineContent extends BaseContent, Headline {
  __component: 'elements.headline';
}

export interface ElementsTextContent extends BaseContent, Text {
  __component: 'elements.text',
  content: BlocksContent
}

