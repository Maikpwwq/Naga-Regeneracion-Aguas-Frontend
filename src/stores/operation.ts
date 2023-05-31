import { ref } from 'vue'
import { defineStore } from 'pinia'

export interface OperationState {
  operation: string | null
}

export const useOperationStore = defineStore('operation', () => {
  const operation = ref('')
  function setOperation(name: string) {
    operation.value = name
  }

  return { operation, setOperation }
})
