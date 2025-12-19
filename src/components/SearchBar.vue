<script setup>
import { ref, watch , onUnmounted  } from 'vue'

const emit = defineEmits(['search'])

const query = ref('')
let debounceTimer = null

watch(query, (newValue) => {
  clearTimeout(debounceTimer)

  debounceTimer = setTimeout(() => {
    emit('search', newValue)
  }, 300)
})

onUnmounted(() => {
  clearTimeout(debounceTimer)
})
</script>

<template>
  <div class="search-bar">
    <input
      type="text"
      v-model="query"
      placeholder="Search..."
    />
  </div>
</template>

<style scoped>
.search-bar {
  width: 100%;
}

input {
  width: 100%;
  padding: 10px 12px;
  font-size: 16px;
}
</style>