<template>
  <header>
    <Navbar />
  </header>
  <main>
    <router-view />
  </main>
  <GiftsCanvas />
</template>

<script>
import { computed } from "vue";
import { AppState } from "./AppState";
import GiftsCanvas from "./components/GiftsCanvas.vue";

export default {
  name: "App",
  setup() {
    return {
      appState: computed(() => AppState),
    };
  },
  components: { GiftsCanvas },
};
</script>
<style lang="scss">
@import "./assets/scss/main.scss";
</style>
