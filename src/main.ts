import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { Container } from "typedi";
import { ClimateService } from "./services/IClimateService";
import { ClimateServiceMock } from "./services/ClimateServiceMock";
import { ClimateServiceImpl } from "./services/ClimateServiceImpl";
import "reflect-metadata";

Vue.config.productionTip = false;

Vue.use(BootstrapVue);

Container.set(ClimateService, Container.get(ClimateServiceImpl));

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
