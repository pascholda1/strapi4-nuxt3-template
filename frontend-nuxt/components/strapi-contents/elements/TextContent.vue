<script setup lang="ts">

import type {ElementsTextContent} from '~/types/strapi-contents';
import {StrapiBlocks}             from 'vue-strapi-blocks-renderer';
import {getImageUrl}              from '~/util/image-util';
import {ImagePositionDesktop}     from '../../../../backend-strapi-4/src/components/internal/interfaces/ImageOfText';
import {ImageSizeDesktop}         from '~/types/backend/components/internal/interfaces/ImageOfText';
import StrapiImage                from '~/components/strapi-basics/StrapiImage.vue';

interface Props {
  strapiData: ElementsTextContent;
}

const {strapiData} = defineProps<Props>();

const imageOfText = strapiData?.image;

type ImagePositionDesktopParsed = {
  type: 'beside' | 'inText'
  horizontal: 'left' | 'right'
  vertical?: 'top' | 'center' | 'bottom'
}

function parseImagePositionDesktop(position?: ImagePositionDesktop): ImagePositionDesktopParsed {
  const isBeside = position?.includes('beside-');
  const isLeft = position?.includes('-left');

  let vertical: ImagePositionDesktopParsed['vertical'] = undefined;
  if (position?.includes('-top-')) {
    vertical = 'top';
  } else if (position?.includes('-center-')) {
    vertical = 'center';
  } else if (position?.includes('-bottom-')) {
    vertical = 'bottom';
  }

  return {
    type: isBeside ? 'beside' : 'inText',
    horizontal: isLeft ? 'left' : 'right',
    vertical,
  };
}

type ImageSizeDesktopParsed = {
  column?: string
  percentage?: number
}

function parseImageSizeDesktop(size?: ImageSizeDesktop): ImageSizeDesktopParsed {
  switch (size) {
    case ImageSizeDesktop.Full:
      return {
        column: 'col-sm-12',
        percentage: 100,
      };
    case ImageSizeDesktop.Half:
      return {
        column: 'col-sm-6',
        percentage: 50,
      };
    case ImageSizeDesktop.Third:
      return {
        column: 'col-sm-4',
        percentage: 33,
      };
    case ImageSizeDesktop.Quater:
      return {
        column: 'col-sm-3',
        percentage: 25,
      };
  }

  return {};
}

const desktopImagePos = parseImagePositionDesktop(imageOfText?.image_position_desktop);
const alignmentClassName = `align-items-${desktopImagePos?.vertical}`;

const imageSrc = getImageUrl(imageOfText?.image?.data);
const imageAlt = imageOfText?.image?.data.attributes.alternativeText;

const isBesideLeft = (desktopImagePos.horizontal === 'left' && desktopImagePos.type == 'beside');
const isBesideRight = (desktopImagePos.horizontal === 'right' && desktopImagePos.type == 'beside');

const imageSize = parseImageSizeDesktop(imageOfText?.image_size_desktop);


</script>

<template>
  <div class="row" :class="[alignmentClassName]">
    <div
        v-if="imageOfText?.image_position_mobile === 'before' || isBesideLeft"
        class="image-col col-12 px-0 px-sm-half-gutter mt-n50 mb-50 my-sm-0"
        :class="[!isBesideLeft?'d-sm-none': imageSize?.column]"
    >
      <StrapiImage :image-data="imageOfText?.image?.data"/>
    </div>
    <div class="text-col col clearfix">
      <div
          v-if="desktopImagePos.type === 'inText'"
          class="d-none d-sm-block"
          :style="{float: desktopImagePos.horizontal, width: `${imageSize?.percentage??0}%`}"
      >
        <StrapiImage
            :image-data="imageOfText?.image?.data"
            class="img-fluid pb-3"
            :class="[desktopImagePos.horizontal === 'left' ? 'pe-4': 'ps-4']"
        />
      </div>
      <StrapiBlocks :content="strapiData.content"/>
    </div>
    <div
        v-if="imageOfText?.image_position_mobile === 'after' || (desktopImagePos.horizontal === 'right' && desktopImagePos.type == 'beside')"
        class="image-col col-12"
        :class="[!isBesideRight ? 'd-sm-none': imageSize?.column]"
    >
      <StrapiImage
          :image-data="imageOfText?.image?.data"
          class="img-fluid"
      />
    </div>
  </div>
</template>

<style lang="scss">

@media all and (max-width: var(--bs-breakpoint-sm)) {
  .image-col {
    padding: {
      left: 0 !important;
      right: 0 !important;
    };
  }
}

.text-col {
  a:only-child {
    @extend .btn;
    color: $white;
    text-transform: uppercase;
    border-radius: 2em;
    padding: {
      left: map-get($spacers, 50);
      right: map-get($spacers, 50);
    };
    @include media-breakpoint-up(sm) {
      padding: {
        left: map-get($spacers, 100);
        right: map-get($spacers, 100);
      };

    }

    .content-background-red &,
    .content-background-red-wave & {
      @extend .btn-outline-light;
    }

    .content-background-default & {
      @extend .btn-primary;
    }
  }
}
</style>
