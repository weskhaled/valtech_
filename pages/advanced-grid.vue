<script setup lang="ts">
import { useInfiniteScroll, useScroll, useVirtualList, useWindowSize } from '@vueuse/core'

const router = useRouter()
const { height: windowHeight } = useWindowSize()

const minItemHeight = computed(() => windowHeight.value > 500 ? (windowHeight.value - 56) : 500)
const nextItemInViewIndex = ref(0)
const lastScrollDirection = ref('down')
const allData = ref<any[]>([])
const skip = ref(0)

const { data, pending } = await useFetch('/api/countries', {
  query: { skip },
  onResponse({ response }) {
    const data = response._data
    const grouped = []
    for (let i = 0; i < data.length; i += 7) {
      grouped.push({
        height: minItemHeight.value,
        items: data.slice(i, i + 7),
      })
    }
    allData.value.push(...grouped)
  },
})

const filteredItems = computed(() => {
  if (skip.value > 0)
    return allData.value

  const grouped = []
  if (data.value?.length) {
    for (let i = 0; i < data.value.length; i += 7) {
      grouped.push({
        height: minItemHeight.value,
        items: data.value.slice(i, i + 7),
      })
    }
    allData.value.push(...grouped)
  }
  return grouped
})

const { list, containerProps, wrapperProps } = useVirtualList(
  filteredItems,
  {
    itemHeight: i => (filteredItems.value[i].height),
    overscan: 10,
  },
)

const { y, isScrolling, directions } = useScroll(containerProps.ref)

useInfiniteScroll(
  containerProps.ref,
  () => {
    if (pending.value)
      return

    skip.value = allData.value.length * 7
  },
  { distance: minItemHeight.value },
)

watch(isScrolling, (value) => {
  if (value)
    lastScrollDirection.value = directions.top ? 'up' : 'down'
})

watch(y, (value) => {
  const indexInView = Math.floor(value / (minItemHeight.value))
  nextItemInViewIndex.value = indexInView + 1
}, { immediate: true })
</script>

<template>
  <div v-bind="containerProps" class="relative w-full overflow-x-hidden bg-gray-500/5 !h-[calc(100vh-3.5rem)]">
    <Loader v-if="pending" />
    <div v-bind="wrapperProps" class="flex flex-col">
      <div
        v-for="{ index, data: dataItem } in list" :key="index"
        :data-index="index"
        :style="{
          height: `${dataItem.height}px`,
        }"
        class="flex overflow-visible"
        :class="[
          (index === nextItemInViewIndex && lastScrollDirection === 'down') && 'animate__animated',
          (index > nextItemInViewIndex && lastScrollDirection === 'down') && '!opacity-0',
          (index < nextItemInViewIndex && lastScrollDirection === 'down' || lastScrollDirection === 'up') && 'animate__animated',
        ]"
      >
        <div class="grid--card">
          <CountryCard
            v-for="(item, cardIndex) in dataItem.items" :key="(index * 7) + cardIndex + 1"
            :item="item"
            :tabindex="(index * 7) + cardIndex + 1"
            :class="[item.isPrimary && 'primary', item.isSecondary && 'secondary']"
            @read-more-click="router.push(`/country/${item.country}`)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.grid--card {
  @apply grid md:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-6 gap-4 p-2 w-full h-full m-auto overflow-y-hidden rounded;

  div.primary {
    @apply col-span-2 row-span-2;
  }

  div.secondary {
    @apply col-span-2;
  }
}

.animate__animated {
  @apply overflow-y-visible;

  >div {
    @apply overflow-y-visible;
  }

  .grid--card {
    >div {
      @apply animated animated-fade-in-up;

      &:nth-child(1) {
        @apply animated animated-fade-in-bottom-left;
        @apply animate-delay-100;
      }

      &:nth-child(2) {
        @apply animated animated-fade-in-up;
        @apply animate-delay-200;
      }

      &:nth-child(3) {
        @apply animated animated-fade-in-bottom-right;
        @apply animate-delay-250;
      }

      &:nth-child(4) {
        @apply animated animated-fade-in-bottom-right;
        @apply animate-delay-400;
      }

      &:nth-child(5) {
        @apply animate-delay-500;
      }

      &:nth-child(6) {
        @apply animate-delay-550;
      }

      &:nth-child(7) {
        @apply animated animated-fade-in-bottom-right;
        @apply animate-delay-700;
      }

    }
  }
}
</style>
