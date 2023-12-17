<script setup lang="ts">

</script>

<template>
  <header>
    <div class="header--container">
      <div class="header--logo">
        <NuxtLink to="/">
          <img src="/images/logo.svg" width="auto" height="100%" alt="logo">
        </NuxtLink>
      </div>
      <div class="header--nav">
        <nav>
          <ul>
            <li>
              <NuxtLink to="/">
                Index
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/advanced-grid">
                Advanced grid
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<style lang="less">
header {
    background-color: rgba(35, 35, 35, 0.95);
    padding: .2rem 0;
    backdrop-filter: blur(4px);
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease-in-out;

    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.45);

    >div.header--container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 0 1rem;
        max-width: 1600px;

        >div.header--logo {
            >a {
                >img {
                    width: 100px;
                    height: 50px;
                }
            }
        }

        >div.header--nav {
            >nav {
                >ul {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    >li {
                        color: white;
                        margin: 0 0.3rem;

                        >a {
                            padding: 0.5rem;
                            border-radius: 2px;
                            transition: all 0.3s ease-in-out;

                            &:hover {
                                background-color: rgba(0, 0, 0, 0.2);
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
