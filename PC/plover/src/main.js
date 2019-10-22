import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css';
import Heardnav from "./components/Hearder-nav";
import Footer from "./components/Footer";
// import Space from './components/Space.vue'



import VideoPlayer from 'vue-video-player'
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')

Vue.use(VideoPlayer)
Vue.component("my-hearder",Heardnav)
Vue.component("my-footer",Footer)



Vue.config.productionTip = false
axios.defaults.baseURL="http://localhost:81";
Vue.prototype.axios=axios;
Vue.use(ElementUI)


Vue.component("my_Space",Space);




new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
