import axios from "axios";
import {regions} from "assets/regions";

const apiUrl = '';
export const state = () => ({
  questions: [],
  regions: []
})

export const getters = {
  getQuestions(state) {
    return state.questions;
  },

  getRegions(state) {
    return state.regions;
  },

  getCounties: (state) => (regionName) => {
    if (regionName === 'Cały Kraj') {
      return [...state.regions.reduce((acc, currentValue) => [...acc, ...currentValue.items], [])].sort((a, b) => a.localeCompare(b));
    }
    return [...state.regions.find(region => region.name === regionName)?.items].sort((a, b) => a.localeCompare(b)) || [];
  }
}

export const mutations = {
  setQuestions(state, value) {
    state.questions = value;
  },

  setRegions(state, value) {
    state.regions = value.sort(function (a, b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
  }
}

export const actions = {
  async fetchQuestions({ commit }, county) {
    return await axios.get(apiUrl + '/' + county).then(res => commit('setQuestions', res.data));
  },

  async fetchRegions({ commit }) {
    return await axios.get(apiUrl + '/regions').then(res => commit('setRegions', regions));
  }
}
