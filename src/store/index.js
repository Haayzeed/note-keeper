import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

const api = process.env.VUE_APP_URL;
export default new Vuex.Store({
plugins: [createPersistedState()],
  state: {
    notes: {},
  },
  mutations: {
    setNotes(state, notes) {
      state.notes = notes;
    },
    newNotes(state, note) {
      state.notes.push(note)
    },
  },
  getters: {
    getAllNotes: (state) => state.notes,
  },
  actions: {
    // fetch all notes
    async fetchNotes({ commit }) {
      const response = await axios.get(api);
      commit("setNotes", response.data);
    },
    // add notes 
    async addNotes({ commit }, formData) {
      const response = await axios.post(api, formData);
      commit("newNotes", response.data);
    },
  },
  modules: {
  }
})
