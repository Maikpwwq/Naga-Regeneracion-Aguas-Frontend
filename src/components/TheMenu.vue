<script setup lang="ts">
import { useUserStore } from "@/stores/user";
const userStore = useUserStore();
</script>

<template>
    <v-app-bar app>
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

