

import './bootstrap';
import Vue from 'vue'
// import App from './BasicCountryInfo';
import App from './BasicInfo';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
var jQuery = require('jquery');

Vue.use(BootstrapVue)

window.axios = require('axios');
Vue.config.productionTip = false

const app = new Vue({
    // el: '#app',
		components: { App},
		template: "<App/>"
		 // render: h => h(App)
}).$mount('#app')

