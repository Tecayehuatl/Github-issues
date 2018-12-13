import Vue from 'vue'
import 'css/main.scss'
import store from 'store/index'

//components
import Issues from 'views/Issues'

Vue.component('Issues', Issues)

new Vue({
    store
}).$mount('#app')

