<template>
  <v-layout align-start justify-space-between row wrap>
    <v-flex xs12 sm6 class="pa-3">
      <v-card>
        <v-img src="https://vuejs.org/images/logo.png" aspect-ratio="4" contain></v-img>
        <v-card-title>
          <div>
            <span class="grey--text">VueJS</span>
            <br>
            <span>The Progressive JavaScript Framework</span>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat color="orange">WebPage</v-btn>
          <v-btn flat color="orange">Videos</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
    <v-flex xs12 sm6 class="pa-3">
      <v-card>
        <v-img height="200px" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline">Top 10 Australian beaches</span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-img>
        <v-card-title>
          <div>
            <span class="grey--text">Number 10</span>
            <br>
            <span>Whitehaven Beach</span>
            <br>
            <span>Whitsunday Island, Whitsunday Islands</span>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat color="orange">Share</v-btn>
          <v-btn flat color="orange">Explore</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({});
</script>
