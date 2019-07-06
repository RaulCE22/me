import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      name: "home",
      component: () => import(/* webpackChunkName: "projects" */ "./views/Home.vue")
    },
    {
      path: "/employment",
      name: "employment",
      component: () => import(/* webpackChunkName: "employment" */ "./views/Employment.vue")
    },
    {
      path: "/projects",
      name: "projects",
      component: () => import(/* webpackChunkName: "projects" */ "./views/Projects.vue")
    },
    {
      path: "/academy",
      name: "academy",
      component: () => import(/* webpackChunkName: "academy" */ "./views/Academy.vue")
    },
    {
      path: "/curiosities",
      name: "curiosities",
      component: () => import(/* webpackChunkName: "curiosities" */ "./views/Curiosities.vue")
    }
  ]
})