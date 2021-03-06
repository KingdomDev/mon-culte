import Vue from 'vue'
import App from './App.vue'

import { MdButton, MdCard, MdIcon, MdMenu, MdRipple } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.config.productionTip = false
Vue.use(MdMenu);
Vue.use(MdButton);
Vue.use(MdCard);
Vue.use(MdIcon);
Vue.use(MdRipple);

new Vue({
  render: h => h(App),
}).$mount('#app')
