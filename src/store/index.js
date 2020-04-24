import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import products from '../modules/products'
import cart from '../modules/Cart'

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    products,
    cart
  }
})
