import { createWebHistory, createRouter } from "vue-router";
const routes =  [
  {
    path: "/",
    alias: "/explorers",
    name: "explorers",
    component: () => import("./components/ExplorersList")
  },
  {
    path: "/explorer/:id",
    name: "explorer-details",
    component: () => import("./components/Explorer")
  },
  {
    path: "/add",
    name: "add-explorer",
    component: () => import("./components/AddExplorer")
  },

  {
    path: "/",
    alias: "/mc",
    name: "mc",
    component: () => import("./components/MissionCommanderList")
  },
  {
    path: "/mc/:id",
    name: "mc-details",
    component: () => import("./components/MissionCommander")
  },
  {
    path: "/mc/add",
    name: "add-mc",
    component: () => import("./components/AddMissionCommander")
  }

];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
