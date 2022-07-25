import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Mixins from '@/mixins'
import 'bootstrap/dist/css/bootstrap.min.css'

createApp(App).use(store).mixin(Mixins).use(router).mount('#app')
