<template>
  <div class="mb-5">
    <proyect :class="`animated fadeInUp delay-${index}s`" v-for="(proyect, index) in proyects" v-bind:key="proyect.title"
      :title="proyect.title"
      :code="proyect.code"
      :description="proyect.description"
      :links="proyect.links"
      :chips="proyect.chips"
    ></proyect>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import proyect from "../components/Proyect.vue";

export default Vue.extend({
  components: { proyect },
  data() {
    return {
      proyects: [
        {
          title: "Music Live Map",
          code: "https://github.com/RaulCE22/LiveMusicMap",
          description: "project.musiclivemap",
          links: [
            {url: 'http://bit.do/musicmap', title: 'Music Map'}
          ],
          chips: [
            {url: 'https://vuejs.org/', title: 'VueJs'},
            {url: 'https://quasar-framework.org/', title: 'Quasar'},
            {url: 'https://firebase.google.com/', title: 'Firebase'},
          ]
        },
        {
          title: "Covuaturage le la",
          code: "https://github.com/RaulCE22",
          description: "project.covuaturage",
          links: [
            {url: 'https://www.linfo.re/tags/embouteillages', title: 'La reunion - Embouteillages'}
          ],
          chips: [
            {url: 'https://vuejs.org/', title: 'VueJs'},
            {url: 'https://quasar-framework.org/', title: 'Quasar'},
            {url: 'https://firebase.google.com/', title: 'Firebase'},
          ]
        },
        {
          title: "SelfieMaton",
          code: "https://github.com/RaulCE22/Adeter/tree/master/Selfiematon/Raspberrypi",
          description: "project.selfiematon",
          links: [
            {url: 'http://www.adeter.org/594/', title: 'SelfieMaton en Canal Extremadura'}
          ],
          chips: [
            {url: 'https://www.python.org/', title: 'Pyhton'},
            {url: 'https://www.raspberrypi.org/', title: 'Raspberry Pi'},
            {url: 'https://www.dropbox.com/es/', title: 'Dropbox'},
            {url: 'https://ifttt.com/', title: 'IFTTT'},
            {url: 'https://es-es.facebook.com/', title: 'Facebook'}
          ]
        },
        {
          title: "InfoSolidario",
          code: "https://github.com/RaulCE22/InfoSolidario/tree/master/infosolidario",
          description: "project.infosolidario",
          links: [
            {url: 'https://saladeprensa.usal.es/node/50732', title: 'Universidad de Salamanca - Prensa'}
          ],
          chips: [
            {url: 'https://rubyonrails.org/', title: 'Ruby On Rails'}
          ]
        }
      ]
    };
  }
});
</script>




