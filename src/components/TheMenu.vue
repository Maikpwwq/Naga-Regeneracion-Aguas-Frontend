<script setup lang="ts">
import { useUserStore } from "@/stores/user";
const userStore = useUserStore();
</script>

<template>
    <v-app-bar app class="fixed-top">
        <v-app-bar-title>
            <a class="navbar-brand" href="/">
                <img src="/img/Naga.jpg" class="img-flui" title="Logo Naga" width="33px"
                    alt="Naga Regeneración de aguas" />
                Naga | Regeneración de aguas
            </a>
        </v-app-bar-title>
        <v-spacer></v-spacer>
        <v-tabs color="deep-purple accent-4" right>
            <template v-if="!userStore.user">
                <v-tab>
                    <router-link :to="{ name: 'login' }" class="mr-5 ml-5" exact>
                        Login
                    </router-link>
                </v-tab>
                <v-tab>
                    <router-link :to="{ name: 'signup' }" class="mr-5 ml-5" exact>
                        Registrarse
                    </router-link>
                </v-tab>
                <v-tab>
                    <router-link :to="{ name: 'portafolio' }" class="mr-5 ml-5" exact>
                        Portafolio
                    </router-link>
                </v-tab>
            </template>

            <template v-else>
                <v-tab>
                    <router-link :to="{ name: 'dashboard' }" class="mr-5 ml-5" exact>
                        Dashboard
                    </router-link>
                </v-tab>
                <v-tab>
                    <router-link :to="{ name: 'portafolio' }" class="mr-5 ml-5" exact>
                        Portafolio
                    </router-link>
                </v-tab>
            </template>

        </v-tabs>
    </v-app-bar>
</template>

