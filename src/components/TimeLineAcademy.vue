<template>
  <v-layout align-start justify-center row fill-height>
    <v-timeline class="mx-2">
      <v-timeline-item v-for="(year, i) in years" :key="i" :color="year.color" small>
        <span
          slot="opposite"
          :class="`headline font-weight-bold ${year.color}--text`"
          v-text="year.year"
        ></span>
        <div class="py-3">
          <h2 :class="`headline font-weight-light mb-3 ${year.color}--text`">{{$t(year.name)}}</h2>
          <div>{{$t(year.school)}}</div>
        </div>
      </v-timeline-item>
    </v-timeline>
  </v-layout>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "time-line-academy",
  data: () => ({
    years: [
      {
        color: "cyan",
        year: "2016",
        school: "academy.uni_sala",
        name: "academy.doctor",
        icon: "dii.png"
      },
      {
        color: "green",
        year: "2014",
        school: "academy.uni_sala",
        name: "academy.master",
        icon: "mayr.png"
      },
      {
        color: "pink",
        year: "2013",
        school: "academy.uni_sala",
        name: "academy.web_course",
        icon: "cdw.png"
      },
      {
        color: "amber",
        year: "2013",
        school: "academy.uni_extre",
        name: "academy.degree",
        icon: "itis.png"
      },
      {
        color: "orange",
        year: "2012",
        school: "academy.uni_extre",
        name: "academy.title_monitor",
        icon: "moytl.png"
      }
    ]
  })
});
</script>
