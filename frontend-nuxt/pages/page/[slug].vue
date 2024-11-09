<script setup lang="ts">

import type {ApiPagePage} from '../../../backend-strapi/types/generated/contentTypes';
//
const {slug} = useRoute().params;

const {data} = await useFetch<ApiPagePage>(`http://localhost:1337/api/pages?populate=*&filters[slug][$eq]=${slug}`);

</script>

<template>
  <div class="page">
    i bims 1 seite @ /page/{{ slug }}
    <pre>{{ data }}</pre>
  </div>
</template>
