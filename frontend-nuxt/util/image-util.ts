import type {Media} from '~/types/backend/common/schemas-to-ts/Media';

export function getImageUrl(media?: Media) {
  if (!media) {
    return;
  }

  const {strapi, public:p} = useRuntimeConfig();

  return `${strapi?.url ?? p?.strapi.url}${media?.attributes.url}`;
}
