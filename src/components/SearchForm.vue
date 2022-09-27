<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <form>
          <div class="form-floating mb-3">
            <input
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
import SearchGifs from "./SearchGifs.vue";
export default {
  setup() {
    return {};
  },
  components: { SearchGifs },
};
</script>

<style lang="scss" scoped></style>
