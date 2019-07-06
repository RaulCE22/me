<template class="mt-5">
  <v-card class="ma-2">
    <v-layout align-center justify-center row fill-height>
      <v-flex xs7>
        <v-card-title primary-title>
          <div>
            <div class="mb-2 headline">{{$t(title)}}</div>
            <div>{{$t(description)}}</div>
          </div>
        </v-card-title>
      </v-flex>
      <v-flex xs5>
        <v-img :src="computedImage" height="120px" contain></v-img>
      </v-flex>
    </v-layout>
    <v-divider light></v-divider>
    <v-card-actions class="pa-3">
      <v-icon class="mr-2">people</v-icon>
      {{company}}
      <v-spacer></v-spacer>
      <v-icon class="mr-2">event</v-icon>
      <div>{{date}}</div>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: ["title", "description", "date", "image", "company"],
  methods: {
    open(url: string) {
      window.open(url);
    }
  },
  computed: {
    computedImage(this) {
      return require("../assets/" + this.image);
    }
  }
});
</script>


<style lang="scss">
.v-chip__content {
  cursor: pointer !important;
}
</style>


