import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import App from './App.vue'
import router from './router/router'
import './assets/styles/iconfont.css'
import 'swiper/dist/css/swiper.css'
import vueAxios from 'vue-axios'
import axios from 'axios'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'


Vue.use(vueAxios , axios)
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false;
Vue.use(MuseUI);

// Vue.use(VueAwesomeSwiper)
/*动态设置 :root 的font-size*/
(function(designWidth, maxWidth) {
  var doc = document,
      win = window,
      docEl = doc.documentElement,
      remStyle = document.createElement("style"),
      tid;

  function refreshRem() {
    var width = docEl.getBoundingClientRect().width;
    maxWidth = maxWidth || 540;
    width>maxWidth && (width=maxWidth);
    var rem = width * 100 / designWidth;
    remStyle.innerHTML = 'html{font-size:' + rem + 'px;}';
  }

  if (docEl.firstElementChild) {
    docEl.firstElementChild.appendChild(remStyle);
  } else {
    var wrap = doc.createElement("div");
    wrap.appendChild(remStyle);
    doc.write(wrap.innerHTML);
    wrap = null;
  }
  //要等 wiewport 设置好后才能执行 refreshRem，不然 refreshRem 会执行2次；
  refreshRem();

  win.addEventListener("resize", function() {
    clearTimeout(tid); //防止执行两次
    tid = setTimeout(refreshRem, 300);
  }, false);

  win.addEventListener("pageshow", function(e) {
    if (e.persisted) { // 浏览器后退的时候重新计算
      clearTimeout(tid);
      tid = setTimeout(refreshRem, 300);
    }
  }, false);

  if (doc.readyState === "complete") {
    doc.body.style.fontSize = "20px";
  } else {
    doc.addEventListener("DOMContentLoaded", function(e) {
      doc.body.style.fontSize = "20px";
    }, false);
  }
})(640, 640);
new Vue({

  render: h => h(App),

  // es6语法省略 router:router
  router

}).$mount('#app')


