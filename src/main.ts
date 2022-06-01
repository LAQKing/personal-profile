import { createApp } from "vue";
import App from './App.vue';
import router from "./router";
import store from "./store";
import { ElPopover } from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import '@/style/index.css';

const app = createApp(App)

app.use(store)
app.use(router)
app.use(ElPopover)
app.mount("#app");