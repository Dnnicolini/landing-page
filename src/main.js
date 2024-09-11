import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import * as bootstrap from 'bootstrap'
import './assets/scss/styles.scss'
import { createI18n } from 'vue-i18n';
import pt from './assets/locales/pt.json';
import en from './assets/locales/en.json';


const i18n = createI18n({
    locale: 'pt',
    fallbackLocale: 'en',
    messages: {
        pt,
        en
    }
});

export async function loadLocaleMessages() {
    const locales = await loadLocaleMessages();
    i18n.global.setLocaleMessage(locales.pt, pt);
    i18n.global.setLocaleMessage(locales.en, en);
}


const app = createApp(App)
app.use(i18n);
app.use(router)
app.mount('#app')
