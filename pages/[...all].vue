<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <main p="x4 y10" text="center white-700 dark:gray-200">
    <div text-4xl>
      <div i-carbon-warning inline-block />
    </div>
    <div>Not found</div>
    <div>
      <button class="button button--inverted mt-4" text-sm @click="router.back()">
        Back
      </button>
    </div>
  </main>
</template>
