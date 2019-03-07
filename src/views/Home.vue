<template>
  <v-layout align-start justify-center row wrap class="mt-4">
    <v-flex xs11 md8>
      <v-card>
        <v-layout align-center justify-center row wrap class="pb-3">
          <v-flex>
            <v-img :src="meUrl" contain class="my-2 mx-2"></v-img>
          </v-flex>
          <v-flex xs8 class="mt-2 mr-2">
            <div class="display-1 font-weight-thin">{{ $t('home.title') }} <span class="display-1 ">Raul Calle</span></div>
            <div class="my-2 subtitle font-weight-light">{{ $t('home.subtitle') }} </div>
            <v-divider light></v-divider>
            <v-layout>
              <v-flex xs4 class="font-weight-bold">
                <div class="mt-2 ml-2">{{ $t('home.age') }}:</div>
                <div class="mt-2 ml-2">{{ $t('home.email') }}:</div>
                <div class="mt-2 ml-2">Github:</div>
                <div class="mt-2 ml-2">{{ $t('home.freelance') }}:</div>
                <div class="mt-2 hidden-sm-and-down">
                  <v-btn class="text-capitalize" small color="info">{{ $t('home.vacation') }}</v-btn>
                </div>
              </v-flex>
              <v-flex xs8>
                <div class="mt-2 ml-2">28</div>
                <div class="mt-2 ml-2">rce1991@gmail.com</div>
                <div class="mt-2 ml-2">RaulCE22</div>
                <div class="mt-2 ml-2">Active</div>
                <div class="mt-2 hidden-sm-and-down">
                  <v-icon>date_range</v-icon>
                  till April 1, 2019
                </div>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
        <v-divider light></v-divider>
        <v-card-actions class="pa-3 hidden-md-and-up">
          <div class="mt-2">
            <v-btn class="text-capitalize" small color="info">On vacation</v-btn>
          </div>
          <v-spacer></v-spacer>
          <div class="mt-2">
            <v-icon>date_range</v-icon>
            till April 1, 2019
          </div>
  
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
  import Vue from 'vue'
  export default Vue.extend({
    computed: {
      meUrl: () => require('../assets/me.png'),
    }
  })
</script>

<style lang="scss" scoped>
  
</style>

