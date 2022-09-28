<template>
  <div
    class="offcanvas offcanvas-start"
    tabindex="-1"
    id="offcanvasExample"
    aria-labelledby="offcanvasExampleLabel"
  >
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasExampleLabel">Add Gifts</h5>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">
      <div>
        <AddGifts />
      </div>
      <div class="mt-5">
        <SearchForm />
      </div>
    </div>
  </div>
</template>

<script>
import SearchGifs from "./SearchGifs.vue";
import SearchForm from "./SearchForm.vue";
import AddGifts from "./AddGifts.vue";
export default {
  
  setup() {
    return {};
  },
  components: { SearchGifs, SearchForm, AddGifts },
};
</script>

<style lang="scss" scoped></style>
