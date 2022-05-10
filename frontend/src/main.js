import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/scss/bootstrap.scss'
import router from './router'
import store from './store'

import VueSimpleAlert from "vue3-simple-alert"

createApp(App).use(store).use(router).use(VueSimpleAlert).mount('#app')
