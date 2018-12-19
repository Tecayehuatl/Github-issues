<template>
    <div>
        <div class="c-panel c-panel--md">
            <div class="c-panel__header">
                Obtener Issues
            </div>
            <div class="c-panel__body">
                <label>Usuario de Github</label>
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
        <div class="c-panel c-panel--md" v-if="issues.length > 0">
                <div class="c-panel__header">
                    Issues obtenidos 
                </div>
                <div class="c-panel__body">
                    <p v-if="issues.length === 0">
                        No se encontraron Issues en el repositorio.
                    </p>
                    <ul v-else>
                        <li v-for="issue in issues">{{issue.title}}</li>
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
            message: ''
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
            //fetching all issues from an especific username & repository
            fetch(`https://api.github.com/repos/${this.githubUsername}/${this.githubRepository}/issues`)
            .then(response => response.json())
            .then(issues => { if(issues.length > 0) this.issues = issues })
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

