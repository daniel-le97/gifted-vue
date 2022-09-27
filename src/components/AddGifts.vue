<template>
  <div>
    <form>
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
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const editable = ref({});
    return {
      editable,
    };
  },
};
</script>

<style lang="scss" scoped></style>
