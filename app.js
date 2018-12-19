import Vue from 'vue'
import 'css/main.scss'
import store from 'store/index'
import axios from 'axios'

//Vue Components
import Issues from 'views/Issues'
import PostIssue from 'views/PostIssue'

Vue.prototype.$http = axios

//Overwrite default headers parameters from axios globally
axios.defaults.headers.common['Accept'] = "application/json"
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.defaults.headers.common['Authorization'] = 'Basic 5fc41a656e96223e147f188eb2de3da0ee42ae83';

axios.defaults.headers.common['User-Agent'] = "Tecayehuatl"

//Component registration
Vue.component('Issues', Issues)
Vue.component('postissue', PostIssue)



new Vue({
    store,
    data:{
        //Initial View by default
        component: 'postissue'
    }
}).$mount('#app')

