import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@renderer/assets/basic-element.css'
import router from './router/mainRouter'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const pinia = createPinia()
const electronApp = createApp(App).use(ElementPlus).use(router).use(pinia)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  electronApp.component(key, component)
}

electronApp.mount('#app')
