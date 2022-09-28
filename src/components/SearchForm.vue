<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <form @submit.prevent="searchGifs()">
          <div class="form-floating mb-3">
            <input
              v-model="editable.value"
              type="search"
              class="form-control"
              id="SearchInput"
              placeholder="search"
              name="search"
            />
            <label for="SearchInput">search</label>
          </div>
        </form>
      </div>
    </div>
    <div class="row">
      <searchGifs v-for="g in gifs" :key="g.id" :gif="g" />
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { ref } from "vue";
import { AppState } from "../AppState.js";
import { Gif } from "../models/Gifs.js";

import { gifsService } from "../services/GifsService.js";
import Pop from "../utils/Pop.js";
import SearchGifs from "./SearchGifs.vue";
export default {
  // props:{
  //   gifs:{type:Gif, required: true}
  // },
  setup() {
    const editable = ref({});
    return {
      editable,
      async searchGifs() {
        try {
          await gifsService.searchGifs(editable._rawValue.value);
        } catch (error) {
          console.error("[searchGifs]", error);
          Pop.error(error);
        }
      },
      gifs: computed(() => AppState.gifs),
    };
  },
  components: { SearchGifs },
};
</script>

<style lang="scss" scoped></style>
