import axios from "axios";

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

  getCounties(state, regionName) {
    return state.regions.find(region => region.name === regionName)?.items | [];
  }
}

export const mutations = {
  setQuestions(state, value) {
    state.questions = value;
  },

  setRegions(state, value) {
    state.questions = value;
  }
}

export const actions = {
  async fetchQuestions({ commit }, county) {
    return await axios.get(apiUrl + '/' + county).then(res => commit('setQuestions', res.data));
  },

  async fetchRegions({ commit }) {
    return await axios.get(apiUrl + '/regions').then(res => commit('setRegions',
      [
        {
          name: 'region1',
          items: ['county11', 'county12']
        },
        {
          name: 'region2',
          items: ['county21', 'county22']
        }
      ]
    ));
  }
}
