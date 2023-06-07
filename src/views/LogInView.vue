<script setup lang="ts">
// email prueba@gmail.com password micontraseña
import TheLogin from '@/components/auth/TheLogin.vue';
import TheMenu from '@/components/TheMenu.vue';
</script>

<template>
  <v-container fluid="true" class="d-flex justify-content-between align-content-end flex-column" width="100%">
    <!-- <v-row>
      <v-col> -->
    <TheMenu />
    <v-navigation-drawer>
      <TheLogin>
        <template v-slot:titulo>
          <h3>Formulario de Login</h3>
        </template>
        <template v-slot:subtitulo>
          <h5>Por favor ingrese su email y contraseña</h5>
        </template>
      </TheLogin>
    </v-navigation-drawer>

    <!-- </v-col>
    </v-row> -->
  </v-container>
</template>