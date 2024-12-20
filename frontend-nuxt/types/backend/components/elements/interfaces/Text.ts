// Interface automatically generated by schemas-to-ts

import { BaseSettings } from '../../internal/interfaces/BaseSettings';
import { ImageOfText } from '../../internal/interfaces/ImageOfText';
import { BaseTextSettings } from '../../internal/interfaces/BaseTextSettings';
import { BaseSettings_Plain } from '../../internal/interfaces/BaseSettings';
import { ImageOfText_Plain } from '../../internal/interfaces/ImageOfText';
import { BaseTextSettings_Plain } from '../../internal/interfaces/BaseTextSettings';
import { BaseSettings_NoRelations } from '../../internal/interfaces/BaseSettings';
import { ImageOfText_NoRelations } from '../../internal/interfaces/ImageOfText';
import { BaseTextSettings_NoRelations } from '../../internal/interfaces/BaseTextSettings';

export interface Text {
  content?: any;
  baseSettings?: BaseSettings;
  image?: ImageOfText;
  textSettings?: BaseTextSettings;
}
export interface Text_Plain {
  content?: any;
  baseSettings?: BaseSettings_Plain;
  image?: ImageOfText_Plain;
  textSettings?: BaseTextSettings_Plain;
}

export interface Text_NoRelations {
  content?: any;
  baseSettings?: BaseSettings_NoRelations;
  image?: ImageOfText_NoRelations;
  textSettings?: BaseTextSettings_NoRelations;
}

