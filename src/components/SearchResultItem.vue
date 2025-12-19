<script setup>
import { ref } from 'vue'

const props = defineProps({
  item: {
    type: Object,
    required: true
  }
})

const isOpen = ref(false)

function toggle() {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <div class="item">
    <h4 @click="toggle">
      {{ item.title }}
    </h4>

    <p v-show="isOpen">
      {{ item.description }}
    </p>
  </div>
</template>

<style scoped>
.item {
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
  cursor: pointer;
}

h4 {
  margin: 0;
}
</style>
