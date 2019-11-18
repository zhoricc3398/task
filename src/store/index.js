import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sportService: []
  },
  mutations: {
    SET_SPORTSERVICE(state, sportService) {
      state.sportService = sportService;
    }
  },
  actions: {
    getSportService({ commit }) {
      axios
        .get("https://sportservice.inplaynet.tech/api/sport/getheader/en")
        .then(res => {
          // eslint-disable-next-line no-console
          console.log(res.data);
          const parsedData = JSON.parse(res.data);
          commit("SET_SPORTSERVICE", parsedData);
        })
        .catch(err => {
          // eslint-disable-next-line no-console
          console.log(err);
        });
    }
  },
  modules: {}
});
