<script setup lang="ts">
import type {ElementsHeadlineContent} from '~/types/strapi-contents';

interface Props {
  strapiData: ElementsHeadlineContent;
}

const {strapiData} = defineProps<Props>();
</script>

<template>
  <component :is="strapiData.level">{{ strapiData.content }}</component>
</template>
