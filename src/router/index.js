import Vue from "vue";
import VueRouter from "vue-router";

//views
import TopPage from "../views/TopPage.vue";
import PrivacyPolicy from "../views/PrivacyPolicy.vue";
import UseagePolicy from "../views/UseagePolicy.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "TopPage",
    component: TopPage,
  },
  {
    path: "/PrivacyPolicy",
    name: "PrivacyPolicy",
    component: PrivacyPolicy,
  },
  {
    path: "/UseagePolicy",
    name: "UseagePolicy",
    component: UseagePolicy,
  },
  // {
  //   path: "/topBike",
  //   name: "topBike",
  //   component: TopBike,
  // },
];
const router = new VueRouter({
  mode: "history", //これだと実機でrouterが動かない
  base: "/",
  routes,
});

export default router;
