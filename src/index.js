// JS - ./js/common.js
import './js/common'
// CSS (example)
import './css/main.css'
// SCSS
import './scss/main.scss'

// Bootstrap (example)
// import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/css/bootstrap.min.css'

// import 'vue'
// import Vue from 'vue'
window.Vue = require('vue')

Vue.component('example-component', require('./components/Example.vue').default)

const app = new Vue({
  el: '#app'
})