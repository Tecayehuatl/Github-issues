<template>
    <div>
        <div class="c-panel c-panel--md">
            <div class="c-panel__header">
                Publicar un Issue
            </div>
            <div class="c-panel__body">
                <label>Tu nombre de usuario de Github</label>
                <input type="text" class="c-input c-input--small" v-model="ownGithubUsername">
                <br>
                <label>Contraseña de tu cuenta de Github</label>
                <input type="password" class="c-input c-input--small" v-model="ownGithubPassword">
                <br>
                <br>
                <label>Nombre del usuario a publicar un Issue</label>
                <input type="text" class="c-input c-input--small" v-model="this.$store.state.githubUsername" disabled>
                <br>
                <label>Nombre del repositorio a publicar un Issue</label>
                <input type="text" class="c-input c-input--small" v-model="this.$store.state.githubRepository" disabled>
                <br>
                <br>
                <label>Título del Issue</label>
                <input type="text" class="c-input c-input--small" v-model="issueTitle">
                <br>
                <label>Detalle del Issue</label>
                <input type="text" class="c-input c-input--small" v-model="issueBody">
                <br>
                <button class="c-button c-button--green" @click="postIssue">
                    Publicar Issue
                </button>
            </div>
        </div>
        <div class="c-panel c-panel--md" v-if="issues.length >0">
            <div class="c-panel__header">
                Todos los Issues
            </div>
            <div class="c-panel__body">
                <ul class="c-menu c-menu--issues">
                    <li class="c-menu__item" v-for="issue in issues" :key="issue.node_id">{{issue.title}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            ownGithubUsername: '',
            ownGithubPassword: '',
            issues: [],
            issueTitle: '',
            issueBody: '',
            urlGithub: `https://api.github.com/repos/${this.$store.state.githubUsername}/${this.$store.state.githubRepository}/issues`
        }
    },
    methods: {
        postIssue(){
            this.$http.defaults.auth = {"username": this.ownGithubUsername, "password": this.ownGithubPassword};
            this.$http.post(this.urlGithub, { "title": this.issueTitle, "body": this.issueBody })
                .then(response => {
                    this.getIssuesFromGithub()
                    this.issueTitle = ''
                    this.issueBody = ''
                })
                .catch(error => console.log(error))
        },
        getIssuesFromGithub(){
            this.$http.get(this.urlGithub)
            .then(response => { if(response.data.length > 0) this.issues = response.data })
            .catch(function(error){ console.log(error) })
        },
    }
}
</script>
