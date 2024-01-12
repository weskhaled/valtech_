<script setup lang="ts">

</script>

<template>
  <div class="h-auto min-h-screen flex flex-col">
    <!-- Header -->
    <Header class="sticky top-0 flex-none" />
    <!-- Content -->
    <div class="flex flex-1 flex-col overflow-hidden">
      <slot />
    </div>
  </div>
</template>

<style lang="less" scoped>
</style>
