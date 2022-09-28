<template>
  <div>
    <form @submit.prevent="handleGiftSubmit">
      <div class="form-floating mb-3">
        <input
          v-model="editable.tag"
          type="text"
          class="form-control"
          id="floatingInput"
          placeholder="name@example.com"
          name="tag"
        />
        <label for="floatingInput">tag</label>
      </div>
      <div class="form-floating">
        <input
          v-model="editable.url"
          type="text"
          class="form-control"
          id="floatingPassword"
          placeholder="url"
          name="url"
        />
        <label for="floatingPassword">url</label>
      </div>
      <div>
        <button type="submit">Send Gift</button>
      </div>
    </form>
  </div>
</template>

<script>
import { ref, watchEffect } from "vue";
import { AppState } from "../AppState.js";
import { giftsService } from "../services/GiftsService.js";
export default {
  setup() {
    //TODO you'll want the watchEffect here.. already imported it
    watchEffect(() => {
      if (AppState.selectedGif) {
        editable.value.url = AppState.selectedGif;
      }
    });

    const editable = ref({});
    return {
      editable,
      async handleGiftSubmit() {
        try {
          await giftsService.sendGifts(editable.value);
          editable.value = {};
        } catch (error) {
          console.error("[handleGiftSubmit]", error);
          Pop.error(error);
        }
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
