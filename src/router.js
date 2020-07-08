import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            alias: '/patients',
            name: 'patients',
            component: () => import('./components/ListaPaciente')
        },
        {
            path: '/patients/:id',
            name: 'detalhes-paciente',
            component: () => import('./components/Paciente')
        },
        {
            path: '/adicionar',
            name: 'adicionarPaciente',
            component: () => import('./components/AdicionarPaciente')
        }
    ]
});