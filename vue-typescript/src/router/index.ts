import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import TodoApp from "../views/TodoApp.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/todo",
    name: "todo-app",
    component: TodoApp
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
