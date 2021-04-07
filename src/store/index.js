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
        pies: [
          {
            id: 5,
            diameter: 13
          }
        ]
      }
    ]
  },
  getters: {
    deals(state){
      return state.deals;
    },
    getDeal(state){
      return dealId => state.deals.find( d => d.id === dealId);
    },
    getPie(state){
      return pieId => [].concat(...state.deals.map( d => d.pies)).find( p => p.id === pieId);
    }
  },
  mutations: {
    addDeal(state, deal){
      state.deals.push(deal);
    },
    deleteDeal(){},
    addPie(){},
    deletePie(){},
    editPie(state, {pie, diameter = pie.diameter}){
      pie.diameter = diameter
    }
  },
  actions: {
    changePieSizeBy({commit},{pie, delta}){
      const newDeameter = pie.deameter + delta;
      commit('editPie', {pie, diameter: newDeameter});
    }
  },
  modules: {
  }
})
