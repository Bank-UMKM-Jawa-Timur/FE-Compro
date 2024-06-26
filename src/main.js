import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios";
import { i18n } from "./plugins/i18n";
import "./assets/css/animation.css";
import store from './store'
Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
// Vue.prototype.$serverURL = "http://localhost:8000/";
Vue.prototype.$serverURL = "https://backoffice.bankumkm.id/";
Vue.prototype.$url_origin = "https://bankumkm.id";
Vue.prototype.$imgProfile = (imageName) => require("@/assets/" + imageName);
Vue.prototype.$imgKarir = (imageName) =>
  require("@/assets/images/karir/" + imageName);
new Vue({
  i18n,
  router,
  store,
  render: (h) => h(App)
}).$mount("#app");
