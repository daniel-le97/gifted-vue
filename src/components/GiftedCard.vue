<template>
  <div class="col-3">
    <div class="card elevation-3 mx-4 my-2" style="width: 18rem">
      <div class="d-flex justify-content-center">
        <img
          :src="gift?.url"
          alt=""
          class="img-fluid rounded mt-2 elevation-4"
        />
      </div>
      <div class="card-body">
        <div class="border-bottom border-dark border-3">
          <h5>{{ gift?.tag }}</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Gift } from "../models/Gift.js";

export default {
  props: {
    gift: { type: Gift, required: true },
  },
  setup(props) {
    return {
      
    };
  },
};
</script>

<style lang="scss" scoped></style>
