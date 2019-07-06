<template>
  <div class="mb-5">
    <proyect v-for="proyect in proyects" v-bind:key="proyect.title"
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
          description: "Web app para compartir conciertos de musica en directo. De una forma facil e intuitiva podremos buscar y agregar en el mapa conciertos de música en directo. Podremos incluso instalarla en los diferentes dispositivos móviles para tener un acceso más rápido y así no perdernos ningún espectáculo músical.  ",
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
          description: "Progresive web app para compartir viajes en coche. Creado para ser utilizado en la Isla de la Reunion como proyecto para reducir los embotellamientos y la emision continua de gases probocada por la masiva utilización del coche unipersonal",
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
          description: "SelfieMatón es un dispositivo de autocaptura de imágenes personales y subida automática a diferentes redes sociales. Todo ello aplicando metodologías de gamificación a fin de involucrar a la audiencia. El dispositivo se ubicará en grandes recintos (centros comerciales, festivales, salones de bodas) y se basa en la aplicación y uso del Neuromarketing, entendiendo este como el marketing de las experiencias, de las emociones, es decir un tipo de marketing basado en provocar sentimientos y emociones en el consumidor para que éste conecte con una marca de un modo mucho más profundo, todo ello teniendo un claro enfoque a eventos. El objetivo es promover el valor y la notoriedad de nuestros sponsors en las redes sociales, así como monetizar la experiencias generadas. Es una apuesta por las últimas tecnologías, internet y diversas tendencias de marketing tales como la gamificación. El proyecto tiene como fin promover el impacto social.",
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
          description: "Proyecto web multiplataforma que quiere servir como respuesta a la tendencia a acumular objetos que ya no se usan en los hogares. La web quiere facilitar la donación de comida, objetos o ropa en desuso a las personas que quieran deshacerse de ellos pero que, a menudo, no saben cómo. Con “Infosolidario” se pueden hacer múltiples propuestas de donación (desde objetos a tiempo).",
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




