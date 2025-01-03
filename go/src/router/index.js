import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import Administracion from '../views/AdministracioN.vue';
import NotFound from '../views/NotFound.vue';
import GameOpinion from '../components/GameOpinion.vue';


// Define las rutas
const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage,
    },
    {
        path: '/opiniones/:id',
        name: 'OpinionesGames',
        component: () => import('../views/OpinionesGames.vue'), // Lazy Loading
    },
    {
        path: '/administracion/:id',
        name: 'AdministracioN',
        component: Administracion,
    },
    {
        path: '/opinion/:id', // Asegúrate de que la ruta tenga el parámetro :id
        name: 'GameOpinion',
        component: GameOpinion,
    },
    {
        path: '/:catchAll(.*)', // Cambiado para manejar rutas no encontradas
        name: 'NotFound',
        component: NotFound,
    },
];

// Crea el router
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;