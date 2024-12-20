// Interface automatically generated by schemas-to-ts

import { BaseTextSettings } from '../../internal/interfaces/BaseTextSettings';
import { BaseSettings } from '../../internal/interfaces/BaseSettings';
import { BaseTextSettings_Plain } from '../../internal/interfaces/BaseTextSettings';
import { BaseSettings_Plain } from '../../internal/interfaces/BaseSettings';
import { BaseTextSettings_NoRelations } from '../../internal/interfaces/BaseTextSettings';
import { BaseSettings_NoRelations } from '../../internal/interfaces/BaseSettings';

export enum Level {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',}

export interface Headline {
  content: string;
  level: Level;
  textSettings?: BaseTextSettings;
  baseSettings?: BaseSettings;
}
export interface Headline_Plain {
  content: string;
  level: Level;
  textSettings?: BaseTextSettings_Plain;
  baseSettings?: BaseSettings_Plain;
}

export interface Headline_NoRelations {
  content: string;
  level: Level;
  textSettings?: BaseTextSettings_NoRelations;
  baseSettings?: BaseSettings_NoRelations;
}

