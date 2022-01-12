import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});

export default new Vuex.Store({
  plugins: [vuexLocal.plugin],
  state: {
    lumieres: {
      salon: false,
      chambre: false,
      grenier: false,
    },
    setTresorLoc: "",
  },
  mutations: {
    //Update light status
    setLumiere(state, piece) {
      state.lumieres[piece] = !state.lumieres[piece];
    },
    //Update tresor location
    setTresorLoc(state, piece) {
      state.setTresorLoc = piece;
    },
  },
  actions: {},
  modules: {},
});
