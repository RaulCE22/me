<template>
    <v-layout align-start justify-center row fill-height>
        <v-timeline class="mx-2">
            <v-timeline-item v-for="(year, i) in years" :key="i" :color="year.color" small>
                <span slot="opposite" :class="`headline font-weight-bold ${year.color}--text`" v-text="year.year"></span>
                <div class="py-3">
                    <h2 :class="`headline font-weight-light mb-3 ${year.color}--text`">{{year.name}}</h2>
                    <div>
                        {{year.school}}
                    </div>
                </div>
            </v-timeline-item>
        </v-timeline>
    </v-layout>
</template>

<script lang="ts">
    import Vue from 'vue'
    export default Vue.extend({
        name: 'time-line-academy',
        data: () => ({
            years: [{
                    color: 'cyan',
                    year: '2016',
                    school: 'Universidad de Salamanca',
                    name: '* Doctorado en ingenieria informática',
                    icon: 'dii.png'
                },
                {
                    color: 'green',
                    year: '2014',
                    school: 'Universidad de Alicante',
                    name: 'Master en Automática y Robótica',
                    icon: 'mayr.png'
                },
                {
                    color: 'pink',
                    year: '2013',
                    school: 'Universidad de Alicante',
                    name: 'Curso Desarrollo Web',
                    icon: 'cdw.png'
                },
                {
                    color: 'amber',
                    year: '2013',
                    school: 'Universidad de Extremadura',
                    name: 'Ingeniería técnica en informática de sistemas',
                    icon: 'itis.png'
                },
                {
                    color: 'orange',
                    year: '2012',
                    school: 'Universidad de Extremadura',
                    name: 'Título de Monitor de Ocio y tiempo libre.',
                    icon: 'moytl.png'
                },
            ]
        })
    })
</script>
