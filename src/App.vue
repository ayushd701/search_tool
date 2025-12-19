<script setup>
import { ref, watch } from 'vue'
import SearchBar from './components/SearchBar.vue'
import { searchApi } from './services/api'

const searchQuery = ref('')
const results = ref([])
const loading = ref(false)

function handleSearch(value) {
  searchQuery.value = value
}

watch(searchQuery, async (newQuery) => {
  if (!newQuery) {
    results.value = []
    return
  }

  loading.value = true
  results.value = []

  const response = await searchApi(newQuery)

  results.value = response
  loading.value = false
})
</script>

<template>
  <div class="app">
    <SearchBar @search="handleSearch" />

    <p v-if="loading">Loading...</p>

    <ul v-if="!loading && results.length">
      <li v-for="item in results" :key="item.id">
        <h4>{{ item.title }}</h4>
        <p>{{ item.description }}</p>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.app {
  max-width: 600px;
  margin: 40px auto;
  font-family: sans-serif;
}
</style>

