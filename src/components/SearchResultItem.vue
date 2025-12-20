<script setup>
import { ref } from 'vue'

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
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

    <transition name="expand">
      <p v-show="isOpen">
        {{ item.description }}
      </p>
    </transition>
  </div>
</template>

<style scoped>
.item {
  padding: 18px;
  border-radius: 14px;
  background: var(--card);
  border: 1px solid var(--border);
  cursor: pointer;
  transition:
    transform 0.15s ease,
    box-shadow 0.15s ease;
}

.item:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
}

h4 {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: var(--text);
}

p {
  margin-top: 10px;
  font-size: 14px;
  line-height: 1.6;
  color: #777;
}
</style>
