import axios from "axios";
import {allRegions} from "assets/regions";

const apiUrl = 'http://10.250.162.184:8000';
export const state = () => ({
  questions: [],
  regions: allRegions,
  answers: []
})

export const getters = {
  getQuestions(state) {
    return state.questions;
  },

  getRegions(state) {
    return state.regions;
  },

  getAnswers(state) {
    return state.answers;
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
  },

  addAnswer(state, answer) {
    state.answers.push(answer);
  }
}

export const actions = {
  async fetchQuestions({state, commit}, county) {
    const regionName = state.regions.find(region => region.items.includes(county)).name;
    return await axios.get(apiUrl + '/questions',
      {
        params: {
          region: regionName,
          powiat: county
      }
    }).then(res => commit('setQuestions', res.data))
      .catch(e => console.log(e));
  },

  async fetchRegions({commit}) {
    return await axios.get(apiUrl + '/regions')
      .then(res => commit('setRegions', allRegions))
      .catch(e => console.log(e))
  },

  addAnswer({ commit }, answer) {
    commit('addAnswer', answer);
  }
}
