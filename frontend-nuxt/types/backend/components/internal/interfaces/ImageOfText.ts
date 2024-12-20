// Interface automatically generated by schemas-to-ts

import { Media } from '../../../common/schemas-to-ts/Media';
import { Media_Plain } from '../../../common/schemas-to-ts/Media';

export enum ImagePositionDesktop {
  InTextLeft = 'in-text-left',
  InTextRight = 'in-text-right',
  BesideTextTopLeft = 'beside-text-top-left',
  BesideTextTopRight = 'beside-text-top-right',
  BesideTextCenterLeft = 'beside-text-center-left',
  BesideTextCenterRight = 'beside-text-center-right',
  BesideTextBottomLeft = 'beside-text-bottom-left',
  BesideTextBottomRight = 'beside-text-bottom-right',}
export enum ImagePositionMobile {
  Before = 'before',
  After = 'after',}
export enum ImageSizeDesktop {
  Full = 'full',
  Half = 'half',
  Third = 'third',
  Quater = 'quater',}

export interface ImageOfText {
  image?: { data: Media };
  image_position_desktop: ImagePositionDesktop;
  image_position_mobile?: ImagePositionMobile;
  image_size_desktop?: ImageSizeDesktop;
}
export interface ImageOfText_Plain {
  image?: Media_Plain;
  image_position_desktop: ImagePositionDesktop;
  image_position_mobile?: ImagePositionMobile;
  image_size_desktop?: ImageSizeDesktop;
}

export interface ImageOfText_NoRelations {
  image?: number;
  image_position_desktop: ImagePositionDesktop;
  image_position_mobile?: ImagePositionMobile;
  image_size_desktop?: ImageSizeDesktop;
}

