<script setup lang="ts">
import type {Media}  from '~/types/backend/common/schemas-to-ts/Media';
import {getImageUrl} from '~/util/image-util';

interface Props {
  imageData?: Media,
  loading?: HTMLImageElement['loading']
}

const {imageData, loading = 'lazy'} = defineProps<Props>();
const src = getImageUrl(imageData);
const {alternativeText, width, height} = imageData?.attributes ?? {};
</script>

<template>
  <img
      :src="src"
      :alt="alternativeText ?? ''"
      :width="width"
      :height="height"
      class="img-fluid"
      :loading="loading"
  >
</template>
