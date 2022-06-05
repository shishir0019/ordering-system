import { createApp } from "vue";
import router from './Router';
import store from './Store';
import App from './App.vue';

const app = createApp(App);

store.dispatch('init')

app.use(router)
app.use(store)
app.mount('#app')
