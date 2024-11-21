<script async setup lang="ts">
import type {Home}    from '~/types/backend/api/home/content-types/home/home';
import SEO            from '~/components/strapi-contents/page/SEO.vue';
import MainNavigation from '~/components/layout/navigation/MainNavigation.vue';
import PageFooter     from '~/components/layout/footer/PageFooter.vue';
import LogoHeader     from '~/components/layout/LogoHeader.vue';

const {findOne} = useStrapi();
const {data} = await findOne<Home['attributes']>('home', undefined, {
  populate: {
    SEO: {
      populate: '*',
    },
    contents: {
      populate: {
        content: {
          populate: '*',
        },
        baseSettings: {
          populate: '*',
        },
        textSettings: {
          populate: '*',
        },
        image: {
          populate: '*',
        },
        topics: {
          populate: '*',
        },
        successMessage: {
          populate: '*',
        },
        errorMessage: {
          populate: '*',
        },
      },
    },
  },
});

useHead({
  htmlAttrs: {lang: data?.attributes.locale},
});

useSeo(computed(() => data.attributes.SEO));

</script>

<template>
  <div class="home page">
    <MainNavigation/>
    <LogoHeader/>
    <StrapiContentRenderer :contents="data.attributes.contents"/>
    <PageFooter/>
  </div>
</template>

