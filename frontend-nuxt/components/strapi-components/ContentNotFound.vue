<script setup lang="ts">
import {BlocksContent} from 'vue-strapi-blocks-renderer';
import {Background}    from '../../../backend-strapi/src/components/shared/interfaces/RichText';

interface Props {
  strapiData: unknown;
}

const props = defineProps<Props>();

</script>

<template>
<div class="bg-warning-subtle p-3">
  COMPONENT NOT FOUND
  <pre>
    {{ strapiData}}
  </pre>
</div>
</template>

<style scoped>

</style>
