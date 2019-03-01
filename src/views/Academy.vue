<template>
  <div class="academy">
    <time-line-academy></time-line-academy>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TimeLineAcademy from '../components/TimeLineAcademy.vue'

export default Vue.extend({
  components: {
    'time-line-academy': TimeLineAcademy
  }
})
</script>
