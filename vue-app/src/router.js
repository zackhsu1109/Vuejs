import { createRouter, createWebHistory } from "vue-router";
import HomeView from "./views/HomeView.vue";
import AboutView from "./views/AboutView.vue";
import ContactView from "./views/ContactView.vue";
import Team1View from "./views/Team1View.vue";
import Team2View from "./views/Team2View.vue";
import MemberView from "./views/MemberView.vue";
import NotFound from "./views/NotFound.vue";
import TodosView from "./views/TodosView.vue";
import TabsView from "./views/TabsView.vue";
import AdminView from "./views/AdminView.vue";
import UserView from "./views/UserView.vue";
import MemberMgmt from "./views/MemberMgmt.vue";
import SpotsView from "./views/SpotsView.vue";

import BonusMallView from "./views/BonusMallView.vue";

//路由設定
//URL => Component
const routes = [
    //http://localhost:5173/ => HomeView.vue
    //http://localhost:5173/home => HomeView.vue
    { path: "/", component: HomeView, name: "home", alias: '/home' },
    //http://localhost:5173/about => /about/team1 => AboutView.vue Team1View.vue
    {
        path: "/about", component: AboutView, name: "about",
        redirect: '/about/team1',
        children: [
            //http://localhost:5173/about/team1 => Team1View.vue
            { path: 'team1', component: Team1View, name: "team1" },
            //http://localhost:5173/about/team2 => Team2View.vue
            { path: 'team2', component: Team2View, name: "team2" }
        ]
    },
    //http://localhost:5173/contact => ContactView.vue
    { path: "/contact", component: ContactView, name: "contact" },
    //http://localhost:5173/todos => TodosView.vue
    { path: "/todos", component: TodosView, name: "todos" },
    //http://localhost:5173/tabs => TabssView.vue
    { path: "/tabs", component: TabsView, name: "tabs" },

    //http://localhost:5173/BonusMall => BonusMallView.vue
    { path: "/BonusMall", component: BonusMallView, name: "BonusMall" },

    //http://localhost:5173/spots => SpotsView.vue
    { path: "/spots", component: SpotsView, name: "spots" },
    //http://localhost:5173/admin => AdminView.vue
    { path: "/admin", component: AdminView, name: "admin" },
    //http://localhost:5173/user => UserView.vue
    { path: "/user", component: UserView, name: "user" },
    //http://localhost:5173/mgmt => MemberMgmt.vue
    { path: "/mgmt", component: MemberMgmt, name: "mgmt" },
    //http://localhost:5173/member/參數 => MemberView.vue
    { path: "/member/:id", component: MemberView, name: "member", props: true },
    { path: '/:pathMatch(.*)*', component: NotFound }
]

const router = createRouter({
    history: createWebHistory(),//指定用哪一種方式產生歷史紀錄
    routes //指定路由設定，參數名稱跟路由設定的變數名稱一樣
})

export default router