import Vue from 'vue';
import Main from './main-component.vue';

let MainComponent = Vue.extend(Main);

window.onload = function () {
    new MainComponent().$mount("#main");
}
