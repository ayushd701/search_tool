<script setup>
import SearchResultItem from './SearchResultItem.vue'

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <div class="result-list">
    <SearchResultItem v-for="item in items" :key="item.id" :item="item" />
  </div>
</template>

<style scoped>
.result-list {
  display: flex;
  flex-direction: column;
  gap: 14px;
}
</style>
