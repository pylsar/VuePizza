import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    deals:[
      {
        id: 1,
        pies: [
          {
            id: 2, 
            diameter: 10
          },
          {
            id: 3, 
            diameter: 10
          }
        ]
      },
      {
        id: 4,
        diameter: 13
      }
    ]
  },
  getters: {
    numberOfDeals(state){
      return state.deals.length;
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
