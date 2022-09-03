import de from './lang/de.json'
import en from './lang/en.json'
import es from './lang/es.json'
import fr from './lang/fr.json'
import ja from './lang/ja.json'
import le from './lang/le.json'
import ru from './lang/ru.json'
import tr from './lang/tr.json'
import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export default new VueI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages: {
        de,
        en,
        es,
        fr,
        ja,
        le,
        ru,
        tr
    }
})