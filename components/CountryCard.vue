<script setup lang="ts">
defineProps({
  item: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(['readMoreClick'])
</script>

<template>
  <div class="figure--card">
    <figure>
      <img :src="item?.imageUrl" width="1200" :alt="item?.alt">
      <figcaption>
        <div>
          <div class="title">
            <h3>{{ item?.country }}</h3>
            <template v-if="item.logoUrl">
              <img :src="item.logoUrl" :alt="item?.alt">
            </template>
            <h2 v-else>
              {{ item?.name }}
            </h2>
          </div>
          <div class="description">
            <p>
              {{ item?.description }}
            </p>
            <button class="button button--inverted" data-text="Read more" @click="emit('readMoreClick')">
              <span>
                Read more
              </span>
            </button>
          </div>
        </div>
      </figcaption>
    </figure>
  </div>
</template>

<style scoped lang="less">
div.figure--card {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: .3rem;
    overflow: hidden;
    position: relative;
    transition: all 0.3s ease-in-out;

    &:hover {
        box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
    }

    // for accessibility
    &:focus>figure>figcaption,
    &:hover>figure>figcaption {
        background-color: rgba(0, 0, 0, 0.75);

        >div>div.description {
            visibility: visible;
            opacity: 1;
            pointer-events: all;
            height: 100%;
        }
    }

    >figure {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0;
        margin: 0;
        width: 100%;
        height: 100%;

        >img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        >figcaption {
            position: absolute;
            background-color: rgba(0, 0, 0, 0.25);
            transition: all 0.3s ease-in-out;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            color: white;
            padding: 0.5rem;

            >div {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                text-align: center;

                >div.title {
                    >h2 {
                        text-transform: uppercase;
                        font-size: 1.8rem;
                        font-weight: 700;
                        margin: 0.3rem 0;
                        padding: 0;
                    }

                    >h3 {
                        text-transform: uppercase;
                        font-size: 1.2rem;
                        font-weight: 400;
                    }
                }

                >div.description {
                    visibility: hidden;
                    opacity: 0;
                    pointer-events: none;
                    height: 0;
                    margin-top: 1rem;
                    transition: all 0.3s ease-in-out;

                    >p {
                        font-size: 1rem;
                        font-weight: 400;
                        margin: 0;
                        padding: 0;
                        display: none;
                    }

                    >button {
                        margin-top: 1rem;
                    }
                }
            }
        }
    }
}

@media (min-width: 768px) {
    div.figure--card {
        >figure {
            >figcaption {
                >div {
                    >div.title {
                        >h2 {
                            font-size: 2.5rem;
                        }

                        >h3 {
                            font-size: 1.5rem;
                        }
                    }

                    >div.description {
                        >p {
                            display: block;
                        }
                    }
                }
            }
        }
    }
}
</style>
