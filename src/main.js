import Vue from 'vue'
import App from './App.vue'
import { registerLicense } from '@syncfusion/ej2-base'

registerLicense("ORg4AjUWIQA/Gnt2VVhjQlFaclhJXGFWfUx0RWFbb1p6d1xMZF1BNQtUQF1hS39SdkZjXXtecHVQTmJa");

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
