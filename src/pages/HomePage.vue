<template>
  <div class="container">
    <div class="row">
      <GiftedCard v-for="g in gifts" :gift="g" />
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { giftsService } from "../services/GiftsService.js";
import { AppState } from "../AppState.js";
import Pop from "../utils/Pop.js";
export default {
  setup() {
    async function getGifts() {
      try {
        await giftsService.getGifts();
      } catch (error) {
        console.error("[]", error);
        Pop.error(error);
      }
    }
    getGifts();
    return {
      gifts: computed(() => AppState.gifts),
    };
  },
};
</script>

<style scoped lang="scss"></style>
