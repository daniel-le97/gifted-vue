<template>
  <div class="col-3">
    <div
      v-if="gift.opened == true"
      class="card elevation-3 mx-4 my-2"
      style="width: 18rem; height: 25rem"
    >
      <div class="d-flex justify-content-center">
        <img
          :src="gift?.url"
          alt=""
          class="img-fluid rounded p-2 elevation-4 gif-image"
        />
      </div>
      <div class="card-body">
        <div class="border-bottom border-dark border-3">
          <h5>{{ gift?.tag }}</h5>
        </div>
      </div>
    </div>

    <div
      v-else="gift.opened == false"
      class="card elevation-3 mx-4 my-2"
      style="width: 18rem; height: 25rem"
    >
      <img
        @click="toggleGift()"
        src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d2/Stitch_%28Lilo_%26_Stitch%29.svg/1200px-Stitch_%28Lilo_%26_Stitch%29.svg.png"
        class="img-fluid"
        alt=""
      />
    </div>
  </div>
</template>

<script>
import { Gift } from "../models/Gift.js";
import { giftsService } from "../services/GiftsService.js";
import Pop from "../utils/Pop.js";

export default {
  props: {
    gift: { type: Gift, required: true },
  },
  setup(props) {
    return {
      async toggleGift() {
        try {
          await giftsService.toggleGift(props.gift.id);
          Pop.success("Opened Gift");
        } catch (error) {
          console.error("[toggleGift]", error);
          Pop.error(error);
        }
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.gif-image {
  height: 200px;
  width: 300px;
  object-fit: cover;
}
</style>
