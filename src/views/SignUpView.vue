<script setup lang="ts">
// email prueba@gmail.com password micontraseña
import TheRegistro from '@/components/auth/TheRegistro.vue';
import TheMenu from '@/components/TheMenu.vue';
</script>

<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <TheMenu />
        <TheRegistro>
          <template v-slot:titulo>
            <h3>Formulario de Registro</h3>
          </template>
          <template v-slot:subtitulo>
            <h5>Por favor haga su registro</h5>
          </template>
        </TheRegistro>
      </v-col>
    </v-row>
  </v-container>
</template>