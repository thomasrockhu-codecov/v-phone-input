/* eslint-disable import/no-extraneous-dependencies */
import 'flag-icons/css/flag-icons.min.css';
import 'world-flags-sprite/stylesheets/flags32.css';
import Vue, { VNode } from 'vue';
import VueClipboard from 'vue-clipboard2';
import { VAutocomplete } from 'vuetify/lib';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import VPhoneInputPlugin from '@/entry.esm';

// Trick to import input SCSS because it won't be available when using
// vue-cli-service build if not dynamically imported.
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import('@/scss/v-phone-input.scss');
Vue.use(VPhoneInputPlugin);

Vue.component('VAutocomplete', VAutocomplete);
Vue.use(VueClipboard);

Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: (h): VNode => h(App),
}).$mount('#app');
