<script setup lang="ts">
// import { defineComponent } from 'vue';
// @ is an alias to /src
import ThePortafolio from '@/components/ThePortafolio.vue';
// export default defineComponent({
//   name: 'PortafolioView',
//   components: {
//     ThePortafolio
//   }
// });
</script>

<template>
  <v-app class="portafolio">
    <v-main tag="portafolio" class="grey lighten-2">
      <v-container>
        <ThePortafolio msg="Bienvenido Equipo 28" />
      </v-container>
    </v-main>
  </v-app>
</template>
