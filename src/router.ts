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
      path: "/contact",
      name: "contact",
      component: () => import(/* webpackChunkName: "contact" */ "./views/Contact.vue")
    }
  ]
});
