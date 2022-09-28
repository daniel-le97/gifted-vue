<template>
  <div class="col-6 mt-3">
    <div class="card elevation-3 mx-4 my-2">
      <div class="d-flex justify-content-center" @click="selectedGif()">
        <img 
          :src="gif?.url"
          alt=""
          class="img-fluid rounded selectable elevation-4 w-100 h-100
          "
        />
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/reactivity';
import { AppState } from '../AppState.js';
import {Gif} from '../models/Gifs.js'



export default {
  props:{
    // bamanaword must match model
    gif:{type: Gif, required:true}
  },
  setup(props) {
    //TODO add a @click ="selectedGif()" on the div holding the img , create in AppState  something like selectedGif:[] , make a method below for selectedGif() where the App state array you make = props.gif.url
    return {
      selectedGif(){
        try {
            AppState.selectedGif = props.gif.url
          } catch (error) {
            console.error('[]',error)
            Pop.error(error)
          }
      }
    //  gifs: computed(() => AppState.gifs)
    };
  },
};
</script>

<style lang="scss" scoped></style>
