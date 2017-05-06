global.$ = require('jquery');
global._ = require("lodash");
global.gsap = require("gsap");
global.howler = require("howler");
var Vue = require("vue/dist/vue.common");
var VueRouter = require("vue-router");
var Vuex = require("vuex");

Vue.use(VueRouter);
Vue.use(Vuex);

var Home = require('./home.vue');
var flow = require('./flow-store.js');
/*
//Routes
var Home = require('./home.vue');

//Stores
var flow = require('./flow-store.js');

Vue.use(VueRouter);
Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        flow: flow
    }
});

const routes = [
    { path: '/',  component: Home }
]
//Router instance
const router = new VueRouter({
    routes: routes
});

const app = new Vue({
    store: store,
    router: router,
}).$mount('#app');
    */

// 0. If using a module system, call Vue.use(VueRouter)
const store = new Vuex.Store({
    modules: {
        flow: flow
    }
});

// 1. Define route components.
// These can be imported from other files

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// Vue.extend(), or just a component options object.
// We'll talk about nested routes later.
const routes = [
    { path: '/', component: Home },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
    routes: routes
})

// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
const app = new Vue({
    store: store,
    router: router
}).$mount('#app')