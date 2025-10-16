<template>
  <div class="flex items-center justify-center" :class="sizeClasses">
    <div class="relative">
      <div class="w-12 h-12 border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin"></div>
      <div v-if="showText" class="mt-4 text-center">
        <p class="text-sm text-gray-600 dark:text-gray-400">{{ text }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  size?: 'sm' | 'md' | 'lg'
  text?: string
  showText?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
  text: 'Loading...',
  showText: false
})

const sizeClasses = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'h-16'
    case 'lg':
      return 'h-32'
    default:
      return 'h-24'
  }
})
</script>
