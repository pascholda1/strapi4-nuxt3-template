<script async setup lang="ts">
import type {Subpage} from '~/types/backend/api/subpage/content-types/subpage/subpage';
import SEO            from '~/components/strapi-contents/page/SEO.vue';
import MainNavigation from '~/components/layout/navigation/MainNavigation.vue';
import PageFooter     from '~/components/layout/footer/PageFooter.vue';

const slug = useRoute().params.slug;

const {findOne, find} = useStrapi();
const {data: pages} = await find<Subpage['attributes']>('subpages');

const page = pages.find(page => page.attributes.slug === slug);
if (!page) {
  throw new Error('Not Found');
  // useRouter().push('/');
}
const {data} = await findOne<Subpage['attributes']>('subpages', page.id, {
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
      },
    },
  },
});

useHead({
  htmlAttrs: {lang: data?.attributes.locale},
});
</script>

<template>
  <MainNavigation/>
  <SEO :seo="data.attributes.SEO"/>
  <StrapiContentRenderer :contents="data.attributes.contents"/>
  <PageFooter/>
</template>
