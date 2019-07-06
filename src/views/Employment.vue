<template>
  <div class="mb-5 employment">
    <employ
      v-for="employ in employs"
      v-bind:key="employ.description"
      :title="employ.title"
      :description="employ.description"
      :image="employ.image"
      :company="employ.company"
      :date="employ.date"
    ></employ>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import employ from "../components/Employ.vue";

export default Vue.extend({
  components: { employ },
  data() {
    return {
      employs: [
        {
          title: 'Analista programador "Front-End"',
          description:
            'Empleando metodologías ágiles junto a un equipo de 5-6 personas multidisciplinal, realizamos el análisis, diseño e implementación del producto principal de la compañía. Aplicación móvil implementada en Angular 6 e Ionic, con comunicación mediante servicios REST con el Back-End. Aplicación web "responsive" implementada en Angular 6 y usando como framework ui PrimeNG, para la gestión de roles y de datos. ',
          image: "essencegrp.png",
          company: "Essence Group",
          date: "Octubre 2016 - Noviembre 2018"
        },
        {
          title: 'Analist programador "Front-End"',
          description:
            'Desarrollo de aplicaciones multi-dispositivo (movil, tablet) basadas en Angular, Cordova e Ionic. Para un proyecto educativo para países en vías de desarrollo.',
          image: "profuturo.jpg",
          company: "Fundacion Profuturo",
          date: "Octubre 2016 - Enero 2018"
        },
        {
          title: 'Programador Junior',
          description:
            'Desarrollo de aplicaciones móviles en AngularJS y Cordova para proyectos de educación.',
          image: "ted.png",
          company: "Telefonica educacion digital",
          date: "Agosto 2015 - Octubre 2016"
        }
      ]
    };
  }
});
</script>
