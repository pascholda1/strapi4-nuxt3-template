<script setup lang="ts">
import type {BaseContent} from '~/types/strapi-contents';

interface Props {
  strapiData: BaseContent;
}

const {strapiData} = defineProps<Props>();

</script>

<template>
  <div class="bg-warning-subtle p-3">
    COMPONENT NOT FOUND
    <p>Check comments //TODO: [new components]</p>
    <pre>
      {{ strapiData }}
    </pre>
  </div>
</template>

<style scoped>

</style>
