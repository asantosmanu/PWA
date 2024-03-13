<script setup>
  import { useMonitor } from '@/composables/monitor';

  const { menu, Footer } = useMonitor();
</script>

<template>
  <div>
    <component :is="menu" />
    <main>
      <router-view />
    </main>
    <component :is="Footer" />
  </div>
</template>