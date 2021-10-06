import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/components/Home";
import Flow from "@/components/Flow";
import Suricata from "@/components/Suricata";
import NetworkTraffic from "@/components/NetworkTraffic";
import TerminalStatus from "@/components/TerminalStatus";


Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    redirect:"/home"
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
    // redirect: "/flow",
    children: [
      {
        path: "/flow",
        name: "Flow",
        component: Flow
      },
      {
        path: "/suricata",
        name: "Suricata",
        component: Suricata
      },
      {
        path: "/networkTraffic",
        name: "NetworkTraffic",
        component: NetworkTraffic
      },
      {
        path: "/terminalStatus",
        name: "TerminalStatus",
        component: TerminalStatus
      }
    ]
  },

];

const router = new VueRouter({
  mode:'history',
  routes
})

export default router
