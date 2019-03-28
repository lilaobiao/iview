import Vue from 'vue'
import App from './App.vue'
import './plugins/iview.js'
import en from 'iview/dist/locale/en-US'
import zh from 'iview/dist/locale/zh-CN'
import VueI18n from 'vue-i18n'
import router from './router'
import devArticle from './components/dev-article.vue'

Vue.component('dev-article', devArticle)

Vue.locale = () => {
}
router.beforeEach((to, from, next) => {
  // eslint-disable-next-line no-console
  const type = to.meta.type
  if (type === 'login') {
    if (window.localStorage.getItem('login')) {
      next()
    }else {
      next('/login')
    }
  }else {
    next()
  }
})
const messages = {
  en: Object.assign({ message: 'hello' }, en),
  zh: Object.assign({ message: '你好' }, zh)
}
Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: 'zh', // set locale
  messages // set locale messages
})
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
i18n}).$mount('#app')
