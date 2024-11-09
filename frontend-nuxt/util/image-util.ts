import type {Media} from '~/backend/common/schemas-to-ts/Media';

export function getImageUrl(media?: Media) {
  if (!media) {
    return;
  }

  const base = useStrapiUrl();
  return `${base}${media?.attributes.url}`;
}
