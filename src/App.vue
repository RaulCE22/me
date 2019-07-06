<template>
  <v-app v-touch="{
        left: () => swipe(1),
        right: () => swipe(-1),
      }">
    <v-toolbar dark>
      <v-toolbar-title>R<span class="font-weight-light">C</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-up">
        <v-btn flat icon to="/home">
          <v-icon>home</v-icon>
        </v-btn>
        <v-btn flat icon to="/employment">
          <v-icon>people</v-icon>
        </v-btn>
  
        <v-btn flat icon to="/academy">
          <v-icon>school</v-icon>
        </v-btn>
              <v-btn flat icon to="/projects">
          <v-icon>laptop_mac</v-icon>
        </v-btn>
        <!-- <v-btn flat icon to="/curiosities">
          <v-icon>touch_app</v-icon>
        </v-btn> -->
      </v-toolbar-items>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat to="/home">{{$t('navbar.home')}}
          <v-icon right>home</v-icon>
        </v-btn>
        <v-btn flat to="/employment">{{$t('navbar.employment')}}
          <v-icon right>people</v-icon>
        </v-btn>
        <v-btn flat to="/academy">{{$t('navbar.academy')}}
          <v-icon right>school</v-icon>
        </v-btn>
        <v-btn flat to="/projects">{{$t('navbar.projects')}}
          <v-icon right>laptop_mac</v-icon>
        </v-btn>
     
        <!-- <v-btn flat to="/curiosities">{{$t('navbar.curiosities')}}
          <v-icon right>touch_app</v-icon>
        </v-btn> -->
      </v-toolbar-items>

    </v-toolbar>
    <div class="hidden-sm-and-up" v-if="$router.currentRoute.name != 'home'">
      <v-divider light></v-divider>
      <v-toolbar  dense dark>
        <v-toolbar-title style="margin: auto;"><span class="font-weight-light" style="text-transform: capitalize;">{{$router.currentRoute.name}}</span>
      </v-toolbar-title>
      </v-toolbar>

    </div>

    <router-view>
    </router-view>
    <v-footer fixed class="pa-3" dark>
      <v-speed-dial v-model="fab" direction="right">
        <template v-slot:activator>
                <v-btn v-model="fab" flat color="primary" fab small>
                  <v-icon>language</v-icon>
                  <v-icon>close</v-icon></v-btn>
</template>
      <v-btn fab flat small color="red" v-on:click="changeLanguage('es')">es</v-btn>
      <v-btn fab flat small color="green" v-on:click="changeLanguage('en')">en</v-btn>
      <v-btn fab flat small color="indigo" v-on:click="changeLanguage('fr')">fr</v-btn>
    </v-speed-dial>
    <v-spacer></v-spacer>
    <div>v0.4 (6/07/2019)</div>
  </v-footer>
  <!-- <curiosities></curiosities> -->
  </v-app>
</template>

<script lang="ts">
  import Vue from 'vue';
  import router from './router';
  
  import i18n from '@/plugins/i18n';
  import curiosities from './components/curiosities.vue';

  export default Vue.extend({
    name: 'App',
    components: {
      curiosities
    },
    data() {
      return {
        fab: null,
        routes: ['home', 'employment', 'academy' ,'projects', 'contact']
      }
    },
    methods: {
      changeLanguage(locale: string) {
        i18n.locale = locale
      },
      swipe(direction: number) {
        
        let index = this.routes.indexOf(router.currentRoute.name || 'home');
        console.log(index, router.currentRoute.name);
        router.push(this.routes[index + direction] || router.currentRoute.name || 'home');
      }
    }
  })
</script>

<style>
@import './assets/animate.css';
</style>
