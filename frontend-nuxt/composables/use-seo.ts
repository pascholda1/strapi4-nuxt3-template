import type {Seo}         from '~/types/backend/components/page/interfaces/Seo';
import {getImageUrl}      from '~/util/image-util';
import {ComputedRef, Ref} from 'vue';

export function useSeo(seo: ComputedRef<Seo | undefined>) {

  useHeadSafe({
    title: seo.value?.title,
    meta: [
      {
        property: 'description',
        content: seo.value?.description,
      },
      {
        property: 'keywords',
        content: seo.value?.keywords,
      },
      {
        property: 'og:title',
        content: seo.value?.og_title || seo.value?.title,
      },
      {
        property: 'og:description',
        content: seo.value?.og_description || seo.value?.description,
      },
      {
        property: 'og:image',
        content: getImageUrl(seo.value?.og_image?.data),
      }],
  });
}
