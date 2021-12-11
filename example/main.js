import Vue from 'vue'
import App from './App.vue'

import VueDropdownBreadcrumb from '../src/index.js'
Vue.component('vue-dropdown-breadcrumb', VueDropdownBreadcrumb)

new Vue({
  el: '#app',
  render: h => h(App)
})
