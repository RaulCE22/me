<template>
  <v-card class="ma-2">
    <v-card-title primary-title>
      <div class="mb-2">
        <v-layout justify-space-between>
          <v-flex xs12 sm10 class="headline mb-2">{{title}}</v-flex>
          <v-flex xs12 sm2 class="pr-10">
            <v-btn small outline round @click="open(code)">
              Code
              <v-icon>code</v-icon>
            </v-btn>
          </v-flex>
        </v-layout>
        <div>{{description}}</div>
        <h4 class="subtitle mt-2 mb-1">Enlaces</h4>
        <div v-for="link in links" v-bind:key="link.url">
          <a target="_blank" :href="link.url">{{link.title}}</a>
        </div>
      </div>
      <v-chip class="ma-2" v-for="chip in chips" v-bind:key="chip.url" @click="open(chip.url)">{{chip.title}}</v-chip>
    </v-card-title>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: ["title", "code", "description", "links", "chips"],
  methods: {
    open(url: string) {
      window.open(url);
    }
  }
});
</script>


<style lang="scss">
.v-chip__content {
  cursor: pointer !important;
}
</style>


