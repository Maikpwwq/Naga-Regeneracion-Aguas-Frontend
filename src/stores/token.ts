import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useTokenStore = defineStore('token', () => {
  const token = ref('')
  function guardarToken(name: string) {
    token.value = name
  }

  return { token, guardarToken }
})