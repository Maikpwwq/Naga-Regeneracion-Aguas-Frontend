import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
  const auth = ref('')
  // rol 
  function setAuth(name: string) {
    auth.value = name
  }
  function autoLogin() {
    auth.value = ""
  }
  function salir() {
    auth.value = ""
  }
  function guardarAuth(name: string) {
    auth.value = name
  }

  return { auth, setAuth, autoLogin, salir, guardarAuth }
})