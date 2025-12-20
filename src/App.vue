<script setup>
import { ref, watch, onMounted } from 'vue'
import SearchBar from './components/SearchBar.vue'
import SearchResultList from './components/SearchResultList.vue'
import { searchApi } from './services/api'

const searchQuery = ref('')
const results = ref([])
const loading = ref(false)
const loadingMore = ref(false)
const page = ref(1)
const hasMore = ref(true)
const theme = ref('light')
const hasSearched = ref(false)

function toggleTheme() {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
  document.body.className = theme.value
  localStorage.setItem('theme', theme.value)
}

onMounted(() => {
  const saved = localStorage.getItem('theme')
  if (saved) {
    theme.value = saved
    document.body.className = saved
  }
})

function handleSearch(value) {
  searchQuery.value = value
  if (!value) {
    hasSearched.value = false
    results.value = []
    page.value = 1
    hasMore.value = false
    return
  }
  hasSearched.value = true
  page.value = 1
  results.value = []
  hasMore.value = true
}

watch(searchQuery, async (newQuery) => {
  if (!newQuery) {
    results.value = []
    hasMore.value = false
    return
  }

  loading.value = true

  const response = await searchApi(newQuery, page.value)

  results.value = response
  hasMore.value = response.length > 0
  loading.value = false
})

async function loadMore() {
  loadingMore.value = true
  page.value++

  const moreResults = await searchApi(searchQuery.value, page.value)

  if (moreResults.length === 0) {
    hasMore.value = false
  } else {
    results.value.push(...moreResults)
  }

  loadingMore.value = false
}
</script>

<template>
  <div class="app">
    <div class="header">
      <div class="title-wrap">
        <h1 class="heading">Search Explorer</h1>
        <button class="theme-btn" @click="toggleTheme" aria-label="Toggle theme">
          <span v-if="theme === 'light'">🌙</span>
          <span v-else>☀️</span>
        </button>
      </div>
    </div>

    <SearchBar @search="handleSearch" />

    <p v-if="loading" class="status">Loading results…</p>

    <p v-if="!hasSearched && !loading" class="empty-text">Start typing to search</p>

    <p v-if="hasSearched && !loading && results.length === 0" class="empty-text">
      No results found for "{{ searchQuery }}"
    </p>

    <SearchResultList v-if="results.length" :items="results" />

    <button
      v-if="hasMore && results.length"
      @click="loadMore"
      class="load-more"
      :disabled="loadingMore"
    >
      <span v-if="!loadingMore">Load more</span>
      <span v-else>Loading…</span>
    </button>

    <p v-if="!hasMore && results.length" class="end-text">You’ve reached the end of results</p>
  </div>
</template>

<style scoped>
.app {
  max-width: 720px;
  margin: 60px auto;
  padding: 0 16px;
  font-family:
    system-ui,
    -apple-system,
    BlinkMacSystemFont;
  background: var(--bg);
  color: var(--text);
}

.header {
  display: flex;
  justify-content: center;
  margin-bottom: 32px;
}

.title-wrap {
  display: flex;
  align-items: center;
  gap: 50px;
}

.heading {
  font-size: 28px;
  font-weight: 600;
}

.theme-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: transparent;
  border: 1px solid var(--border);
  color: var(--text);
  cursor: pointer;
  font-size: 16px;
}

.theme-btn:hover {
  background: var(--card);
}

.status {
  text-align: center;
  margin: 16px 0;
  color: #666;
}

.empty-text {
  text-align: center;
  margin-top: 40px;
  font-size: 15px;
  color: #777;
}

.load-more {
  display: block;
  margin: 28px auto;
  padding: 10px 20px;
  border-radius: 6px;
  border: none;
  background: var(--text);
  color: var(--bg);
  cursor: pointer;
}

.load-more:hover {
  opacity: 0.9;
}

.end-text {
  text-align: center;
  margin-top: 20px;
  font-size: 14px;
  color: #777;
}
</style>
