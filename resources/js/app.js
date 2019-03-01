require('./bootstrap');

import Vue from 'vue';

import Search from './components/Search.vue';
import InstantSearch from 'vue-instantsearch';

Vue.use(InstantSearch);

new Vue({
  el: '#app',
  render: h => h(Search),
});
