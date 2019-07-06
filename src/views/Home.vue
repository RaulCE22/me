<template>
  <v-layout align-start justify-center row wrap class="mt-4">
    <v-flex xs11 md8>
      <v-card>
        <v-layout align-center justify-center row wrap class="pb-3">
          <v-flex class="hidden-xs-only">
            <v-img :src="meUrl" contain class="my-2 mx-2"></v-img>
          </v-flex>
          <v-flex xs10 class="mt-2 mr-2">
            <v-layout>
              <v-flex xs4 class="hidden-sm-and-up">
                <v-img :src="meUrl" contain class="my-2 mx-2"></v-img>
              </v-flex>
              <v-flex xs8 >
                <div class="display-1 font-weight-thin">
                  {{ $t('home.title') }}
                  <span class="display-1">Raul Calle</span>
                </div>
                <div class="my-2 subtitle font-weight-light">{{ $t('home.subtitle') }}</div>
              </v-flex>
            </v-layout>
            <v-divider light></v-divider>
            <v-layout>
              <v-flex xs4 class="font-weight-bold">
                <div class="mt-2 ml-2">{{ $t('home.age') }}:</div>
                <div class="mt-2 ml-2">{{ $t('home.email') }}:</div>
                <div class="mt-2 ml-2">{{ $t('home.yearsworks') }}:</div>
                <div class="mt-2 ml-2">Github:</div>
                <div class="mt-2 ml-2">{{ $t('home.videocall') }}:</div>
              </v-flex>
              <v-flex xs8>
                <div class="mt-2 ml-2">28</div>
                <div class="mt-2 ml-2">rce1991@gmail.com</div>
                <div class="mt-2 ml-2">4 años</div>
                <div class="mt-2 ml-2">RaulCE22</div>
                <div class>
                  <v-btn flat icon small color="primary" @click="open('https://talky.io/raulce22')">
                    <v-icon dark>video_call</v-icon>
                  </v-btn>
                </div>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
        <v-divider light></v-divider>
        <v-card-actions style="display: block">
          <v-chip
           :class="`ma-1 animated jackInTheBox delay-${index}s`"
            v-for="(chip, index) in chips"
            v-bind:key="chip.url"
            @click="open(chip.url)"
          >{{chip.title}}</v-chip>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      chips: [
        { url: "https://angular.io/", title: "Angular" },
        { url: "https://ngrx.io/", title: "NGRX" },
        { url: "https://rxjs-dev.firebaseapp.com/", title: "RXJS" },
        { url: "https://vuejs.org/", title: "VueJS" },
        { url: "https://cordova.apache.org/", title: "Cordova" },
        { url: "https://ionicframework.com/", title: "Ionic" },
        { url: "https://quasar.dev/", title: "Quasar" },
        { url: "https://www.primefaces.org/primeng/", title: "PrimeNG" },
        { url: "https://www.python.org/", title: "Python" },
        { url: "https://nodejs.org/es/", title: "NodeJS" },
        { url: "https://www.mongodb.com/", title: "MongoDB" },
        { url: "https://www.mysql.com/", title: "SQL" }
      ]
    };
  },
  methods: {
    open(url: string) {
      window.open(url);
    }
  },
  computed: {
    meUrl: () => require("../assets/me.png")
  }
});
</script>

<style lang="scss" scoped>
</style>

