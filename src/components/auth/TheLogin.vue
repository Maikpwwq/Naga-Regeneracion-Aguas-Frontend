<script lang="ts">
import axios from 'axios';
import swal from 'sweetalert';
import { defineComponent } from 'vue';
import { useTokenStore } from "@/stores/token";
import { useAuthStore } from "@/stores/auth";
const tokenStore = useTokenStore();
const authStore = useAuthStore();


export default defineComponent({
  name: 'TheLogin',
  components: {

  },
  data() {
    return {
      body: {
        email: "",
        password: ""
      },
      valid: true,
      passwordRules: [
        (v: any) => !!v || 'El campo Password es requerido',
        (v: string | any[]) => (v && v.length >= 10) || 'Password debe contener almenos 8 caracteres',
      ],
      emailRules: [
        (v: any) => !!v || 'El campo E-mail es requerido',
        (v: string) => /.+@.+\..+/.test(v) || 'el E-mail debe ser valido',
      ],
    }
  },
  beforeCreate() {
    authStore.autoLogin();
  },
  methods: {
    // Maneja el evento de hacer click en el boton de inicio de sesion
    loginUser() {
      // this.$refs.form.validate();
      axios
        .post('/api/usuario/login', this.body)
        .then(response => {
          return response.data
        })
        .then(data => {
          console.log(data)
          tokenStore.guardarToken(data.tokenReturn);
          authStore.guardarAuth(data.auth);
          swal("Login exitoso!", "Se ha accedido en forma correcta, bienvenido!", "success");
          this.$router.push({ name: 'dashboard' });
        })
        .catch(error => {
          swal("Oops!", "Algo salió mal!", "error"); // warning
          console.log(error)
          return error
        })
    }
  }
});
</script>

<template>
  <v-layout>
    <v-flex class='mb-3'>
      <v-row align="center" align-content="center" style="heigt:70vh" justify="center">
        <v-card class="pa-5 col-md-8" height="600" width="250">
          <v-form ref="form" lazy-validation v-model="valid" justify="center"
            class="text-center border border-primary p-5"
            style="margin-top:70px;height:auto;padding-top:100px !important;" @submit.prevent="loginUser">


            <v-card-title>
              <slot name="titulo"></slot>
            </v-card-title>
            <v-card-text>
              <slot name="subtitulo"></slot>
            </v-card-text>

            <v-text-field v-model="body.email" label="E-mail" :rules="emailRules" outlined required></v-text-field>

            <v-text-field v-model="body.password" counter label="Password" :rules="passwordRules" outlined
              required></v-text-field>

            <v-btn :disabled="!valid" color="success" class="mr-4 w-75" @click="loginUser">
              Iniciar Sesión
            </v-btn>

          </v-form>
          <!-- 
                  <pre>
                  {{body}}
                  </pre> 
                -->
        </v-card>
      </v-row>
    </v-flex>
  </v-layout>
</template>