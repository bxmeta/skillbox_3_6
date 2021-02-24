import Vue from 'vue';
import { messageOne, messageTwo } from '@/messages';
import printMessage from '@/func';
import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');

printMessage(messageOne);
printMessage(messageTwo);
