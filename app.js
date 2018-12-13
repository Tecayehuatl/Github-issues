import Vue from 'vue'
import 'css/main.scss'
import store from 'store/index'

//components
import Issues from 'views/Issues'
import PostIssue from 'views/PostIssue'

Vue.component('Issues', Issues)
Vue.component('postissue', PostIssue)

new Vue({
    store,
    data:{
        component: 'issue'
    }
}).$mount('#app')

