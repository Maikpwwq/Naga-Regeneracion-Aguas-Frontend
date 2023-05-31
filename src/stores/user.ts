import { ref } from 'vue'
import { defineStore } from 'pinia'

export interface UserState {
  rol: string
}

export const useUserStore = defineStore('user', () => {
  const user = ref({
    rol: ''
  })
  // rol 'Administrador' || 'Vendedor' || 'Almacenero'
  function setUser(params: UserState) {
    user.value = params
  }

  return { user, setUser}
})