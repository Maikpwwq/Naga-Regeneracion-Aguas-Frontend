<script setup lang="ts">
import { HeaderNav, SecServicios, SecFormulario } from './home/index'
import SecBanner from './home/SecBanner.vue'
// import SecServicios from './home/SecServicios.vue'
import SecDescripcion from './home/SecDescripcion.vue'
import SecCasosExito from './home/SecCasosExito.vue'
// import SecFormulario from './home/SecFormulario.vue'
import SecFooter from './home/SecFooter.vue'

// data: () => ({
//     icons: [
//       'mdi-facebook',
//       'mdi-twitter',
//       'mdi-linkedin',
//       'mdi-instagram',
//     ],
//   }),
</script>

<template>
  <v-container class="d-flex justify-content-between align-content-end" width="100%">
    <v-row class="text-center">
      <HeaderNav />
      <v-col class="mb-8">
        <div class="container pt-5 mt-5">
          <SecBanner />
          <SecDescripcion />
          <SecServicios />
          <SecCasosExito />
        </div>
      </v-col>
      <SecFormulario />
      <SecFooter />
    </v-row>
  </v-container>
</template>

