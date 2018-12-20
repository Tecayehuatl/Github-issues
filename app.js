import Vue from 'vue'
import 'css/main.scss'
import store from 'store/index'
import axios from 'axios'

//Vue Components
import Issues from 'views/Issues'
import PostIssue from 'views/PostIssue'

//Component registration
Vue.component('Issues', Issues)
Vue.component('postissue', PostIssue)

//Creating a new axios instance
let instance = axios.create({
    "auth": {},
    "responseType": "json",
    "maxContentLength": 9000,
    "timeout": 9000
});
Vue.prototype.$http = instance

new Vue({
    store,
    data:{
        //Initial View by default
        component: 'Issues'
    }
}).$mount('#app')

