<template>
    <div>
        <div class="c-panel c-panel--md">
            <div class="c-panel__header">
                Obtener Issues
            </div>
            <div class="c-panel__body">                
                <label>Usuario de Github para obtener los Issues</label>
                <input type="text" class="c-input c-input--small" v-model="$store.state.githubUsername" @input="setNewGithubUserName">
                <br>
                <label>Nombre del repositorio</label>
                <input type="text" class="c-input c-input--small" v-model="$store.state.githubRepository" @input="setNewGithubRepository">
                <br>
                <button class="c-button c-button--green" @click="getIssuesFromGithub">
                    Obtener
                </button>
            </div>
        </div>
        <div class="c-panel c-panel--md">
            <div class="c-panel__header">
                Issues obtenidos 
            </div>
            <div class="c-panel__body">
                <p v-if="hasIssues === false">
                    No se encontraron Issues en el repositorio.
                </p>
                <ul v-if="issues.length > 0" class="c-menu c-menu--issues">
                    <li class="c-menu__item" v-for="issue in issues" :key="issue.node_id">{{issue.title}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
    data(){
        return {            
            issues: [],
            message: '',
            hasIssues: null
        }
    },
    computed: {
        ...mapState({
            githubUsername: state => state.githubUsername,
            githubRepository: state => state.githubRepository,
        }),
    },
    methods: {
        getIssuesFromGithub(){
            this.$http.get(`https://api.github.com/repos/${this.$store.state.githubUsername}/${this.$store.state.githubRepository}/issues`)
            .then(response => { 
                if(response.data.length > 0) {
                    this.issues = response.data; 
                    this.hasIssues = true;
                }
                else if(response.data.length === 0) {
                    this.issues = []
                    this.hasIssues = false
                }
            })
            .catch(function(error){ console.log(error) })
        },
        setNewGithubUserName(event){
            this.$store.commit('setNewGithubUserName', event.target.value)
        },
        setNewGithubRepository(event){
            this.$store.commit('setNewGithubRepository', event.target.value)
        }
    }
}
</script>

