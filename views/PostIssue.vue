<template>
    <div>
        <div class="c-panel c-panel--md">
            <div class="c-panel__header">
                Publicar un Issue
            </div>
            <div class="c-panel__body">
                <label>Nombre del usuario</label>
                <input type="text" class="c-input c-input--small" v-model="this.$store.state.githubUsername" disabled>
                <br>
                <label>Nombre del repositorio</label>
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
        <div class="c-panel c-panel--md">
            <div class="c-panel__header">
                Todos los Issues
            </div>
            <div class="c-panel__body">
                <ul>
                    <!-- <li>Issue list</li> -->
                </ul>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    data(){
        return {
            issueTitle: 'Issue title test',
            issueBody: 'Issue body test',
        }
    },
    methods: {
        postIssue(){
            let url =  `https://api.github.com/repos/${this.username}/${this.repositoryName}/issues`

            let dataIssue= { "title": this.issueTitle, "body": this.issueBody }

            //     "headers": {
            //         "Access-Control-Allow-Origin": "*",
            //         "Access-Control-Allow-Credentials": true,
            //         "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
            //         "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization"
            //         "application/vnd.github.v3.html+json"
            this.$http.post(url, {
                    data: JSON.stringify(dataIssue)
                })
                .then(response => console.log(response))
                .catch(error => console.log(error))
        }
    }
}
</script>
