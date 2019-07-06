<template>
  <div class="mb-5 employment">
    <employ
    :class="`animated fadeInUp delay-${index}s`"
      v-for="(employ, index) in employs"
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
          title: "employment.essengrp.title",
          description: "employment.essengrp.description",
          image: "essencegrp.png",
          company: "Essence Group",
          date: "Octubre 2016 - Noviembre 2018"
        },
        {
          title: "employment.profuturo.title",
          description: "employment.profuturo.description",
          image: "profuturo.jpg",
          company: "Fundacion Profuturo",
          date: "Octubre 2016 - Enero 2018"
        },
        {
          title: "employment.ted.title",
          description: "employment.ted.description",
          image: "ted.png",
          company: "Telefonica educacion digital",
          date: "Agosto 2015 - Octubre 2016"
        }
      ]
    };
  }
});
</script>
