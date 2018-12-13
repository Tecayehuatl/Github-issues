<template>
    <div>
        <div class="c-panel c-panel--md">
            <div class="c-panel__header">
                Obtener Issues
            </div>
            <div class="c-panel__body">
                <label>Usuario de Github</label>
                <input type="text" class="c-input c-input--small" v-model="username">
                <br>
                <label>Nombre del repositorio</label>
                <input type="text" class="c-input c-input--small" v-model="repository">
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
export default {
    data(){
        return {
            username: '',
            repository: '',
            issues: [],
            message: ''
        }
    },
      methods: {
        getIssuesFromGithub(){
            //fetching all issues from an especific username & repository
            fetch('https://api.github.com/repos/' + this.username + '/' + this.repository + '/issues')
            .then(response => response.json())
            .then(issues => {
                if(issues.length > 0) this.issues = issues                
            })
            .catch(function(response){
                console.log(reponse)
            })
        }
    }
}
</script>

