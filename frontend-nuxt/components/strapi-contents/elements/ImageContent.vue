<script setup lang="ts">

import type {ElementsImageContent} from '~/types/strapi-contents';
import StrapiImage                 from '~/components/strapi-basics/StrapiImage.vue';

interface Props {
  strapiData: ElementsImageContent;
}

const {strapiData} = defineProps<Props>();
</script>

<template>
  <div class="image-content" :class="{isHeaderImage: strapiData.isHeaderImage}">
    <StrapiImage :image-data="strapiData.content?.data"/>
  </div>
</template>

<style lang="scss">
.image-content.isHeaderImage img {
  max-height: 60vh;
  object-fit: cover;
  //object-position: top;
}

.container-fluid > .image-content {
  margin: {
    left: calc(var(--bs-gutter-x) * 0.5 * -1);
    right: calc(var(--bs-gutter-x) * 0.5 * -1);
  };

  .img-fluid {
    width: 100% !important;
  }
}

//.strapi-content:has(> .container-fluid > .image-content) {
//  margin: 0 !important;
//}
</style>
