<script setup lang="ts">
import type {Seo}    from '~/backend/components/common/interfaces/Seo';
import {getImageUrl} from '~/util/image-util';

interface Props {
  seo?: Seo;
}

const props = defineProps<Props>();

useHeadSafe({
  title: props.seo?.title,
  meta: [
    {
      name: 'description',
      content: props.seo?.description,
    },
    {
      name: 'keywords',
      content: props.seo?.keywords,
    },
    {
      name: 'og:title',
      content: props.seo?.og_title || props.seo?.title,
    },
    {
      name: 'og:description',
      content: props.seo?.og_description || props.seo?.description,
    },
    {
      name: 'og:image',
      content: getImageUrl(props.seo?.og_image?.data),
    }],
});

</script>
