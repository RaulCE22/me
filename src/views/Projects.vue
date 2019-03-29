<template>
  <div class="projects">
    <v-card class="ma-2">
      <v-card-title primary-title>
        <div class="mb-2">
          <v-layout>
            <v-flex xs10 class="headline mb-2">SelfieMaton</v-flex>
            <v-flex xs2 class="text-xs-right">
              <v-btn small outline round @click="open('https://github.com/RaulCE22/Adeter/tree/master/Selfiematon/Raspberrypi')">
                Code
              <v-icon>code</v-icon>
              </v-btn>
            </v-flex>
          </v-layout>
          <div>SelfieMatón es un dispositivo de autocaptura de imágenes personales y subida automática a diferentes redes sociales. Todo ello aplicando metodologías de gamificación a fin de involucrar a la audiencia. El dispositivo se ubicará en grandes recintos (centros comerciales, festivales, salones de bodas) y se basa en la aplicación y uso del Neuromarketing, entendiendo este como el marketing de las experiencias, de las emociones, es decir un tipo de marketing basado en provocar sentimientos y emociones en el consumidor para que éste conecte con una marca de un modo mucho más profundo, todo ello teniendo un claro enfoque a eventos. El objetivo es promover el valor y la notoriedad de nuestros sponsors en las redes sociales, así como monetizar la experiencias generadas. Es una apuesta por las últimas tecnologías, internet y diversas tendencias de marketing tales como la gamificación. El proyecto tiene como fin promover el impacto social.</div>
          <h4 class="subtitle mt-2 mb-1">Enlaces</h4>
          <div>
            <a href="http://www.adeter.org/594/">SelfieMaton en Canal Extremadura</a>
          </div>
          <div>
            <a href="http://www.adeter.org">Website Adeter</a>
          </div>
          <div>
            <a href="https://www.facebook.com/SefieMaton/">Facebook</a>
          </div>
        </div>
        <v-chip>Pyhton</v-chip>
        <v-chip>Raspberry Pi</v-chip>
        <v-chip>Dropbox</v-chip>
        <v-chip>IFTTT</v-chip>
        <v-chip>Facebook</v-chip>
      </v-card-title>
    </v-card>
    <v-card class="ma-2">
      <v-card-title primary-title>
        <div class="mb-2">
          <v-layout>
            <v-flex xs10 class="headline mb-2">InfoSolidario</v-flex>
            <v-flex xs2 class="text-xs-right">
              <v-btn small outline round @click="open('https://github.com/RaulCE22/InfoSolidario/tree/master/infosolidario')">
                Code
              <v-icon>code</v-icon>
              </v-btn>
            </v-flex>
          </v-layout>
          <div>Proyecto web multiplataforma que quiere servir como respuesta a la tendencia a acumular objetos que ya no se usan en los hogares. La web quiere facilitar la donación de comida, objetos o ropa en desuso a las personas que quieran deshacerse de ellos pero que, a menudo, no saben cómo. Con “Infosolidario” se pueden hacer múltiples propuestas de donación (desde objetos a tiempo).</div>
          <h4 class="subtitle mt-2 mb-1">Enlaces</h4>
          <div>
            <a href="https://saladeprensa.usal.es/node/50732">Universidad de Salamanca -</a>
          </div>
        </div>
        <v-chip>Ruby</v-chip>
        <v-chip>NodeJs</v-chip>
        <v-chip>Express</v-chip>
      </v-card-title>
    </v-card>
    <h3>{{$t('workinprogress')}}</h3>
    <v-progress-linear :indeterminate="true"></v-progress-linear>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({

  methods: {
    open(url: string) {
      window.open(url)
    }
  }
});
</script>

