import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router/mainRouter'
const electronApp = createApp(App).use(ElementPlus).use(router)
electronApp.mount('#app')
