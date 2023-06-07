import { defineStore } from 'pinia'

export const useUser = defineStore('useraa', {
  state: () => {
    return {
      name: '',
      uid: ''
    }
  },
  getters: {
    getNameWithUid: state => `${state.name} ${state.uid}`
  },
  actions: {
    setUser(name: string, uid: string) {
      this.name = name
      this.uid = uid
    }
  }
})
