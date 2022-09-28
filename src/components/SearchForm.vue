<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <form>
          <div class="form-floating mb-3">
            <input
              v-model=""
              type="search"
              class="form-control"
              id="SearchInput"
              placeholder="search"
            />
            <label for="SearchInput">search</label>
          </div>
        </form>
      </div>
    </div>
    <div class="row">
      <SearchGifs />
      <SearchGifs />
      <SearchGifs />
      <SearchGifs />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import SearchGifs from "./SearchGifs.vue";
export default {
  setup() {
    const editable = ref{{}}
    return {
       async searchGifs(){
        try {
            await gifsService.searchGifs
          } catch (error) {
            console.error('[]',error)
            Pop.error(error)
          }
      }
    };
  },
  components: { SearchGifs },
};
</script>

<style lang="scss" scoped></style>
