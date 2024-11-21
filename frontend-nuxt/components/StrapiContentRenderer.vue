<script setup lang="ts">
import type {
  BaseContent,
}                        from '~/types/strapi-contents';
import StrapiBaseContent from '~/components/strapi-contents/StrapiBaseContent.vue';

interface Props {
  contents: BaseContent[];
}

const {contents} = defineProps<Props>();

</script>

<template>
  <template v-for="content in contents">
    <StrapiBaseContent :strapi-data="content"/>
  </template>
</template>
