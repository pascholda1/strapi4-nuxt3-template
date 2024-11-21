<script setup lang="ts">
import type {Seo}    from '~/types/backend/components/page/interfaces/Seo';
import {getImageUrl} from '~/util/image-util';

interface Props {
  seo?: Seo;
}

const props = defineProps<Props>();

useHeadSafe({
  title: props.seo?.title,
  meta: [
    {
      property: 'description',
      content: props.seo?.description,
    },
    {
      property: 'keywords',
      content: props.seo?.keywords,
    },
    {
      property: 'og:title',
      content: props.seo?.og_title || props.seo?.title,
    },
    {
      property: 'og:description',
      content: props.seo?.og_description || props.seo?.description,
    },
    {
      property: 'og:image',
      content: getImageUrl(props.seo?.og_image?.data),
    }],
});

</script>
