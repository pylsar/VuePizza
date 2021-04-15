import Vue from 'vue'
import Vuex from 'vuex'
import markId from '../services/markId';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    deals:[
      {
        id: markId(),
        pies: [
          {
            id: markId(), 
            diameter: 10
          },
          {
            id: markId(), 
            diameter: 10
          }
        ]
      },
      {
        id: markId(),
        pies: [
          {
            id: markId(),
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
    createDeal({commit, dispatch}){
      const deal = {
        id: markId(),
        pies: []
      }
      commit('addDeal', deal);
      dispatch('createPie', {deal});
    },
    createPie({commit}, {deal}){
      const pie = {
        id: markId(),
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
