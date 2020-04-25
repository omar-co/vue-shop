import Vue from 'vue'
import Vuex from 'vuex'
import products from '../modules/products'
import cart from '../modules/Cart'
import VuexPersistence from "vuex-persist";
import localforage from "localforage";

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  modules: ['cart']
})

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    products,
    cart
  },
  plugins: [vuexLocal.plugin]
})
