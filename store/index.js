import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    githubUsername: '',
    githubRepository: ''
}

const getters = {}

const mutations = {
    setNewGithubUserName(state, value){
        state.githubUsername = value
    },
    setNewGithubRepository(state, value){
        state.githubRepository = value
    }
}

export default new Vuex.Store({
    state, 
    getters,
    mutations
})