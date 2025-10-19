import App from './App'
import uView from '@/uni_modules/uview-ui'

import Vue from 'vue'
import './uni.promisify.adaptor'
Vue.config.productionTip = false


import i18n from "@/locales/language/i18n.js";
Vue.prototype.$i18n = i18n;

Vue.use(uView)
App.mpType = 'app'
const app = new Vue({
	...App
})
app.$mount()