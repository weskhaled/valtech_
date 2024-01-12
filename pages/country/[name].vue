<script setup lang="ts">
const route = useRoute()
const router = useRouter()

useHead({
  title: route.params.name,
  meta: [
    { name: 'description', content: route.params.name },
  ],
})
</script>

<template>
  <div class="h-[calc(100vh-3.5rem)] w-full flex flex-col bg-white/90">
    <div class="relative isolate overflow-hidden">
      <div class="absolute inset-x-0 transform-gpu overflow-hidden blur-3xl -top-40 -z-10 sm:-top-80" aria-hidden="true">
        <div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] rotate-[30deg] from-[#ff80b5] to-[#9089fc] bg-gradient-to-tr opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] -translate-x-1/2" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
      </div>
      <div class="mx-auto max-w-2xl py-32 lg:py-56 sm:py-48">
        <div class="hidden sm:mb-8 sm:flex sm:justify-center">
          <div class="relative rounded-full px-3 py-1 text-sm text-gray-600 leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            <a href="javascript:;" class="flex items-center" @click="router.back()">
              <span class="mr-2 h-full flex items-center">
                <span class="i-carbon-arrow-left inline-block h-5 w-5" />
              </span>
              Back To list
            </a>
          </div>
        </div>
        <div class="text-center">
          <h1 class="text-4xl text-gray-900 font-bold tracking-tight sm:text-6xl">
            {{ route.params.name }}
          </h1>
          <p class="mt-6 text-lg text-gray-600 leading-8">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less">
</style>
