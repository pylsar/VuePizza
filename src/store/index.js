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
    addPie(state, {deal, pie}){
      deal.pies.push(pie);
    },
    deletePie(){},
    editPie(state, {pie, diameter = pie.diameter}){
      pie.diameter = diameter
    }
  },
  actions: {
    createPie({commit}, {deal}){
      const pie = {
        id: 0,
        diameter: 10
      };
      commit('addPie', {deal, pie});
    },
    changePieSizeBy({commit},{pie, delta}){
      const newDiameter = pie.diameter + delta;
      commit('editPie', {pie, diameter: newDiameter});
    }
  },
  modules: {
  }
})
