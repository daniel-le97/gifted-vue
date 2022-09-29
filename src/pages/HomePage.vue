<template>
  <div class="container">
    <div class="row flex-wrap">
      <GiftedCard v-for="g in gifts" :gift="g" />
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { giftsService } from "../services/GiftsService.js";
import { AppState } from "../AppState.js";
import Pop from "../utils/Pop.js";
import NewForm from "../components/NewForm.vue";
export default {
    setup() {
        async function getGifts() {
            try {
                await giftsService.getGifts();
            }
            catch (error) {
                console.error("[]", error);
                Pop.error(error);
            }
        }
        getGifts();
        return {
            gifts: computed(() => AppState.gifts),
        };
    },
    components: { NewForm }
};
</script>

<style scoped lang="scss"></style>
