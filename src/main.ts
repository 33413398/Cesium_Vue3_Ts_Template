import './assets/styles/index.scss';
import { createApp } from 'vue'
import { createPinia } from 'pinia'
// 响应式rem
import "@/utils/reSize"

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

// 全局类型
declare global {
  interface Window {
    CESIUM_BASE_URL: string
  }
}