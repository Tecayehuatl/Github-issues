import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    test: 'tes'
}

const getters = {}

const mutations = {}

export default new Vuex.Store({
    state, 
    getters,
    mutations
})