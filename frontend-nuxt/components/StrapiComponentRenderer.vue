<script setup lang="ts">
import type {RenderItem} from '~/util/component-types';

interface Props {
  renderItems: RenderItem[];
}

const props = defineProps<Props>();

</script>

<template>
  <template v-for="renderItem in props.renderItems">
    <template v-if="renderItem.component">
      <component
          :is="renderItem.component"
          :strapi-data="renderItem.data"
      />
    </template>
  </template>
</template>

<style scoped>

</style>
