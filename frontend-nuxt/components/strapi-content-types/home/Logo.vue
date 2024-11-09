<script setup lang="ts">
import type {Media_Plain} from '../../../../backend-strapi/src/common/schemas-to-ts/Media';

export interface LogoData extends Media_Plain {
  documentId: string,
  provider_metadata: unknown,
  publishedAt: Date
}

interface Props {
  logo: LogoData;
}

const runtimeConfig = useRuntimeConfig();
const props = defineProps<Props>();
</script>

<template>
  <div class="logo-wrap">
    <img
        :src="`${runtimeConfig?.strapi?.url}${props.logo.url}`"
        :alt="props.logo.alternativeText ?? 'Logo'"
        :width="props.logo.width"
        :height="props.logo.height"
    >
  </div>

</template>

<style scoped>
.logo-wrap {
  display: flex;
  justify-content: center;
}
</style>
