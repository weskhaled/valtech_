<script lang="ts" setup>
const router = useRouter()

const { data, pending } = useFetch('/api/countries?skip=0')
</script>

<template>
  <Loader v-if="pending" />
  <div class="grid-wrapper">
    <div class="images-grid">
      <CountryCard
        v-for="(item, index) in data" :key="index" :item="item"
        :class="[item.isPrimary && 'primary', item.isSecondary && 'secondary']"
        :tabindex="index + 1"
        @read-more-click="router.push(`/country/${item.country}`)"
      />
    </div>
  </div>
</template>

<style lang="less">
// grid styles
.grid-wrapper {
    min-height: 100vh;
    display: flex;
    min-width: 100vw;
    box-sizing: border-box;
    position: relative;

    .images-grid {
        display: grid;
        padding: 0.5rem;
        box-sizing: border-box;
        width: 100%;
        max-width: 1280px;
        margin: 0 auto;
        grid-template-columns: repeat(1, minmax(0, 1fr));
        gap: 0.5rem;

        &>div {
            height: 25rem;
            &.primary {
                grid-column: span 1 / span 1;
            }

            &.secondary {
                grid-column: span 1 / span 1;
            }
        }
    }
}

// responsive styles
@media (min-width: 1280px) {
    .images-grid {
        background-color: rgb(255, 255, 255);
        box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.25);
    }
}

@media (min-width: 768px) {
    .grid-wrapper {
        .images-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            padding: 1rem;
            gap: 1rem;

            &>div {
                &.primary {
                    grid-column: span 2 / span 2;
                }

                &.secondary {
                    grid-column: span 1 / span 1;
                }
            }
        }
    }
}

@media (min-width: 1024px) {
    .grid-wrapper {
        .images-grid {
            grid-template-columns: repeat(4, minmax(0, 1fr));

            &>div {
                &.primary {
                    grid-column: span 4 / span 4;
                }

                &.secondary {
                    grid-column: span 2 / span 4;
                }
            }
        }
    }
}
</style>
