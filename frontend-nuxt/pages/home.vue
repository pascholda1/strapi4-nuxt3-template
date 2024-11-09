<script setup lang="ts">
import type {Home} from '~/backend/api/home/content-types/home/home';
import SEO         from '~/components/strapi-components/common/SEO.vue';

const {find} = useStrapi();
const response = await find('home', {
  populate: ['SEO.og_image'],
});
const data = response.data as unknown as Home;
</script>

<template>
  <SEO :seo="data.attributes.SEO"/>
  <!--    <div class="container">-->
  <!--      <StrapiComponentRenderer v-if="renderItems" :render-items="renderItems"/>-->
  <!--    </div>-->


  data:
  <pre>
    {{ data }}
  </pre>

</template>
