<script lang="ts">
// import { validationMixin } from 'vuelidate' deprecated
import { useVuelidate } from '@vuelidate/core'
import { required, maxLength, email } from '@vuelidate/validators'

export default {
  name: 'SecFooter',

  // mixins: [validationMixin], deprecated
  setup: () => ({ v$: useVuelidate() }),

  validations: {
    name: { required, maxLength: maxLength(10) },
    email: { required, email },
    select: { required },
    checkbox: {
      checked(val: any) {
        return val
      },
    },
  },

  data: () => ({
    form: {},
    name: '',
    email: '',
    select: null,
    items: [
      'Plantas de tratamiento de aguas residuales (PTAR)',
      'Plantas de tratamiento de Residuos Industriales Líquidos (RILES) ',
      'Estaciones depuradoras de aguas residuales (EDARS)',
    ],
    checkbox: false,
  }),

  computed: {
    checkboxErrors() {
      const errors: any[] = []
      if (!this.v$.checkbox.$dirty) return errors
      !this.v$.checkbox.checked && errors.push('Debes aceptar continuar!')
      return errors
    },
    selectErrors() {
      const errors: any[] = []
      if (!this.v$.select.$dirty) return errors
      !this.v$.select.required && errors.push('El servicio es obligatorio')
      return errors
    },
    nameErrors() {
      const errors: any[] = []
      if (!this.v$.name.$dirty) return errors
      !this.v$.name.maxLength && errors.push('El nombre debe tener como máximo 10 caracteres')
      !this.v$.name.required && errors.push('Se requiere el nombre')
      return errors
    },
    emailErrors() {
      const errors: any[] = []
      if (!this.v$.email.$dirty) return errors
      !this.v$.email.email && errors.push('Debe ser un correo electrónico válido')
      !this.v$.email.required && errors.push('Correo electrónico es requerido')
      return errors
    },
  },

  methods: {
    submit() {
      this.v$.$touch()
    },
    clear() {
      this.v$.$reset()
      this.form = {}
      this.name = ''
      this.email = ''
      this.select = null
      this.checkbox = false
    },
  },
}
</script>

<template>
  <div class="bg-green my-7" style="width: 100%; padding-bottom: 50px">
    <div class="container">
      <div class="row d-flex align-items-center">
        <div class="col-sm-12 col-md-12 my-3">
          <h3 class="text-center text-light my-5">¡Contáctenos!</h3>
        </div>
      </div>
      <div class="row d-flex align-items-center">
        <div class="col-sm-12 col-md-6 my-3">
          <v-card class="mx-auto px-6 py-8" max-width="344">
            <h5 class="text-center text-white">
              Déjenos conocer acerca de su requerimiento
            </h5>
            <p class="text-white text-left text-light ml-9 pl-12">
              <em>
                Uno de nuestros asesores le contactara pronto para <br> ayudarlo a elegir la configuración más acertada.
              </em>
            </p>
            <v-form v-model="form" @submit.prevent="submit">
              <v-text-field v-model="name" :error-messages="nameErrors" :counter="10" label="Nombre" type="input"
                variant="solo-inverted" required="true" @update:model-value="v$.name.$touch()"
                @blur="v$.name.$touch()"></v-text-field>
              <v-text-field v-model="email" :error-messages="emailErrors" label="E-mail" type="email"
                variant="solo-inverted" required="true" @update:model-value="v$.email.$touch()"
                @blur="v$.email.$touch()"></v-text-field>
              <v-select v-model="select" :items="items" :error-messages="selectErrors" label="Servicio"
                variant="solo-inverted" required="true" @change="v$.select.$touch()"
                @blur="v$.select.$touch()"></v-select>
              <v-checkbox v-model="checkbox" label="Estás de acuerdo?" variant="solo-inverted" required="true"
                :error-messages="checkboxErrors" @change="v$.checkbox.$touch()" @blur="v$.checkbox.$touch()"></v-checkbox>
              <v-btn class="mr-4" @click="submit">
                Enviar
              </v-btn>
              <v-btn @click="clear">
                Limpiar
              </v-btn>
            </v-form>
          </v-card>
        </div>
        <div class="col-sm-12 col-md-6 my-3">
          <div class="text-center">
            <h5 class="text-center text-white">
              Ing. Michael Arias Fajardo
            </h5>
            <p class="text-white text-center text-light ml-5">
              <em>
                Director de proyectos de ingeniería <br>
                gestion.proyectos@naga.com <br> WhatsApp 319-613-8057 <br>
                Bogotá - Santa Marta - Soacha - Pereira
              </em>
            </p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127248.55141992215!2d-74.19494987829628!3d4.679779468814669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f8482ae9f1b6f%3A0xda6f84c963a00f4a!2sPTAR%20El%20Salitre!5e0!3m2!1ses!2sco!4v1608816260319!5m2!1ses!2sco"
              width="80%" height="280px" frameborder="0" style="border:0;" allowfullscreen="true" aria-hidden="false"
              tabindex="0"></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.footer.wrap-footer {
  background-color: #333333;
  width: 100%;
  bottom: 0;
}

.wrap-footer .container .row .col-4.col-md-3 img.img-fluid {
  margin: 0.75rem 0;
  width: auto;
  max-height: 40px;
}

.bg-green {
  background: #4faf57;
}

.wrap-footer .container .row .col-8.col-md-9 ul.nav {
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
}

.wrap-footer .container .row .col-8.col-md-9 .nav li.nav-item {
  justify-items: center;
}

.wrap-footer .container .row .col-8.col-md-9 .nav .nav-item a {
  color: #fff;
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
}

.wrap-footer .container .row .col-8.col-md-9 .nav .nav-item a:hover {
  color: #999;
}

v-text-field,
v-select,
v-checkbox {
  display: flex;
  height: 25px;
  background-color: white;
  margin: 5px 10px;
}</style>