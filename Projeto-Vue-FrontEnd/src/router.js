import { createRouter, createWebHistory } from "vue-router";

function layLoad (view){
    return () => import (`./views/${view}.vue`)
}

const routes = [{
         path: '/',
         name: 'inicio',
         component: layLoad('Inicio')
},{
    path: '/cadastro',
    name: 'cadastro',
    component: layLoad('Cadastro')
},{
    path: '/clientes',
    name: 'clientes',
    component: layLoad('Clientes')
}]


const router = createRouter({history: createWebHistory(), routes});


export default router;