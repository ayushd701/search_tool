<script setup>
import { ref, watch, onUnmounted } from 'vue'

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
    <input type="text" v-model="query" placeholder="Search..." />
  </div>
</template>

<style scoped>
.search-bar {
  margin-bottom: 32px;
}

input {
  width: 100%;
  padding: 16px 18px;
  font-size: 16px;
  border-radius: 12px;
  border: 1px solid var(--border);
  background: var(--card);
  color: var(--text);
  outline: none;
}

input::placeholder {
  color: #888;
}

input:focus {
  border-color: var(--text);
}
</style>
