import './assets/main.css'

import { createApp } from 'vue'
import { createI18n } from "vue-i18n";
import App from './App.vue'
import messages from "@intlify/unplugin-vue-i18n/messages";
// import en from './locales/en.json'
// import fi from './locales/fi.json'

/*
const prompts = {
    "en": {
       "name": "John"
    },
    "fa": {
       "name": "JJJJ"
   }
  };
*/

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: "fi",
  fallbackLocale: "en",
  availableLocales: ["en", "fi"],
  messages //: {en, fi}
});

const app = createApp(App)

app.use(i18n)
app.mount('#app')

