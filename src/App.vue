<template>
  <v-app>
    <v-toolbar>
      <v-toolbar-title>R<span class="font-weight-light">C</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat to="/home">Home</v-btn>
        <v-btn flat to="/project">Project</v-btn>
        <v-btn flat to="/academy">Academy</v-btn>
        <v-btn flat to="/contact">Contact</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <router-view></router-view>
  </v-app>
</template>

<script lang="ts">
  import Vue from 'vue'
  export default Vue.extend({
    name: 'App',
  })
</script>

<style lang="scss" scoped>

</style>
