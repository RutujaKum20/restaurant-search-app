import { createWebHistory,createRouter } from "vue-router";
import RestoHome from "./components/RestoHome";
import SignUp from './components/SignUp';
import RestoLogin from './components/RestoLogin';
import AddResto from './components/AddResto';
import UpdateResto from './components/UpdateResto';

const routes=[
    {
        name:'RestoHome',
        component:RestoHome,
        path:'/'
    },
    {
        name:'SignUp',
        component:SignUp,
        path:'/signup'
    },
    {
        name:'RestoLogin',
        component:RestoLogin,
        path:'/restologin'
    },
    {
        name:'AddResto',
        component:AddResto,
        path:'/addresto'
    },
    {
        name:'updateResto',
        component:UpdateResto,
        path:'/updateresto/:id'
    },
];

const router=createRouter({
    history:createWebHistory(),
    routes
});

export default router
