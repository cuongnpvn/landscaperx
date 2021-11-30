import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Services from "../views/Services.vue";
import Shop from "../views/Shop.vue";
import Blog from "../views/Blog.vue";
import Contact from "../views/Contact.vue";

import SingleService from "../views/SingleService.vue";
import SingleProduct from "../views/SingleProduct.vue";
import SingleBlog from "../views/SingleBlog.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/services",
    name: "Services",
    component: Services,
  },
  {
    path: "/services/:name",
    name: "SingleService",
    component: SingleService,
  },
  {
    path: "/shop",
    name: "Shop",
    component: Shop,
  },
  {
    path: "/shop/:name",
    name: "SingleProduct",
    component: SingleProduct,
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog,
  },
  {
    path: "/blog/:name",
    name: "SingleBlog",
    component: SingleBlog,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
