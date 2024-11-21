<script setup lang="ts" xmlns="http://www.w3.org/1999/html">
import type {Component}          from 'vue';
import {
  BaseContent,
  ContentComponent,
}                                from '~/types/strapi-contents';
import StrapiContentNotFound     from '~/components/strapi-contents/StrapiContentNotFound.vue';
import ImageContent              from '~/components/strapi-contents/elements/ImageContent.vue';
import TextContent               from '~/components/strapi-contents/elements/TextContent.vue';
import HeadlineContent           from '~/components/strapi-contents/elements/HeadlineContent.vue';
import MeinLebenKeyTopicsContent from '~/components/strapi-contents/mein-leben/KeyTopics.vue';
import FormContent               from '~/components/strapi-contents/elements/FormContent.vue';

defineOptions({
  inheritAttrs: false,
});

interface Props {
  strapiData: BaseContent;
}

const {strapiData} = defineProps<Props>();

const classNames = [
  !strapiData?.baseSettings?.background || `content-background-${strapiData.baseSettings.background}`,
  !strapiData?.textSettings?.textAlign || `text-${strapiData.textSettings.textAlign}`,
].filter(c => !!c);

type ComponentMap = Partial<Record<ContentComponent, Component>>

// TODO: [new components 3] add you new Component to the componentMap
const componentMap: ComponentMap = {
  'elements.image': ImageContent,
  'elements.text': TextContent,
  'elements.headline': HeadlineContent,
  'elements.form': FormContent,
  'mein-leben.key-topics': MeinLebenKeyTopicsContent,
};

// preload background images
useHead({
  link: [
    {rel: 'preload', href: '/bg_wave_desktop.png', as: 'image'},
  ],
});

</script>

<template>
  <div class="strapi-content" :class="classNames">
    <div class="content-inner-wrap">
      <div :class="strapiData?.baseSettings?.container ?? 'container'">
        <Component
            v-if="componentMap[strapiData.__component]"
            :is="componentMap[strapiData.__component]"
            :strapi-data="strapiData"
        />
        <StrapiContentNotFound
            v-else
            :strapi-data="strapiData"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.strapi-content {
  position: relative;
  margin: {
    bottom: map-get($spacers, 50);
  };
  @include media-breakpoint-up(sm) {
    margin: {
      bottom: map-get($spacers, 100);

    };

  }

  // background
  &.content-background {

    &-default {
      // default
    }

    &-red:has(+ footer) {
      margin-bottom: map-get($spacers, 50) * -1;

      .content-inner-wrap {
        padding-bottom: map-get($spacers, 50) * -1;
      }

    }

    &-red {
      .content-inner-wrap {
        padding: {
          top: map-get($spacers, 50);
          bottom: map-get($spacers, 50);
        };
        @include media-breakpoint-up(sm) {
          margin: {
            top: map-get($spacers, 100);
            bottom: map-get($spacers, 100);

          };
        }
        background-color: var(--bs-secondary);
        color: var(--bs-white);
      }
    }

    &-red-wave {

      &:before,
      &:after {
        content: ' ';
        display: block;
        background-size: 100% 100%;
        aspect-ratio: 20/1;
        //background-repeat: no-repeat;
      }

      &:before {
        background-image: url("/bg_wave_desktop_before.png");
      }

      &:after {
        background-image: url("/bg_wave_desktop_after.png");
      }

      //background-image: url("/bg_wave_desktop.png");
      //background-size: 100% 100%;


      .content-inner-wrap {
        padding: {
          top: map-get($spacers, 4);
          bottom: map-get($spacers, 4);
        };
        @include media-breakpoint-up(sm) {
          margin: {
            top: map-get($spacers, 50);
            bottom: map-get($spacers, 50);

          };
        }
        background-color: var(--bs-secondary);
        color: var(--bs-white);
      }

    }
  }

  // text-align
  &.text {
    &-left {
      text-align: left;
    }

    &-center {
      text-align: center;
    }

    &-right {
      text-align: right;
    }
  }
}

</style>
