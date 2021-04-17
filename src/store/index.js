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
    getPie(state, getters){
      
      return pieId =>{
        const deal = getters.getDealContainingPieId(pieId);
        return deal.pies.find( p => p.id === pieId);
      } 
    },
    getDealContainingPieId(state){
      return pieId => state.deals.find(d => d.pies.some(p => p.id === pieId));
    },
    stats(state){
      const circleArea = radius => Math.PI * radius * radius;
      const sum = numbers => numbers.reduce((acc, number) => acc + number, 0);
      const pieArea = pie => circleArea(pie.diameter/2);
      const dealArea = deal => sum(deal.pies.map(pieArea));

      const stats = state.deals.map( deal => ({
        dealId: deal.id,
        area: dealArea(deal),
      }));
      stats.sort((a, b) => b.area - a.area);

      stats.forEach((stat, index) => {
        stat.isLargest = index === 0;

        const comparisonStat = index === 0 ? stats[1] : stats[0];
        stat.diff = ( stat.area - comparisonStat.area) / comparisonStat.area;
      });

      return stats.reduce((acc, stat) => {
          acc[stat.dealId] = stat;
          return acc;
      }, {});
    }
  },
  mutations: {
    addDeal(state, deal){
      state.deals.push(deal);
    },

    removeDeal(state, deal){
      const index = state.deals.indexOf(deal);
      state.deals.splice(index, 1);
    },

    addPie(state, {deal, pie}){
      deal.pies.push(pie);
    },

    removePie(state, {deal, pie}){
      const index = deal.pies.indexOf(pie);
      deal.pies.splice(index, 1);
    },
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
    deleteDeal({commit}, {deal}){
      commit('removeDeal', deal);
    },
    createPie({commit}, {deal}){
      const pie = {
        id: markId(),
        diameter: 10
      };
      commit('addPie', {deal, pie});
    },
    deletePie({commit, getters},{pie}){
      const deal = getters.getDealContainingPieId(pie.id);
      commit('removePie', {deal, pie});
    },
    changePieSizeBy({commit},{pie, delta}){
      const newDiameter = pie.diameter + delta;
      commit('editPie', {pie, diameter: newDiameter});
    }
  },
  modules: {
  }
})
