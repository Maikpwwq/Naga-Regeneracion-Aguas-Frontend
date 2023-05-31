import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import PortafolioView from "@/views/PortafolioView.vue";
// import { useUserStore } from "../stores/user";

// const userStore = useUserStore()

const routes = [
  {
    path: "/",
    name: "portafolio",
    // component: HomeView,
    component: PortafolioView,
    meta: {
      public: true,
    },
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/views/AboutView.vue')
  },
  {
    path: "/login",
    name: "login",
    component: () => import( "@/views/LogInView.vue"),
    meta: {
      public: true,
    },
  },
  {
    path: "/signup",
    name: "signup",
    component: () =>
      import(/* webpackChunkName: "signup" */ "@/views/SignUpView.vue"),
    meta: {
      public: true,
    },
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: () =>
      import(
        /* webpackChunkName: "dashboard" */ "@/views/DashboardView.vue"
      ),
    meta: {
      auth: true,
    },
    children: [
      {
        path: "articulos",
        name: "TablaArticulos",
        component: () =>
          import(
            /* webpackChunkName: "articulos" */ "@/views/TablaArticulos.vue"
          ),
        meta: {
          auth: true,
          Almacenero: true,
          //vendedor: true,
        },
      },
      {
        path: "categorias",
        name: "TablaCategorias",
        component: () =>
          import(
            /* webpackChunkName: "categorias" */ "@/views/TablaCategorias.vue"
          ),
        meta: {
          auth: true,
          Almacenero: true,
        },
      },
      {
        path: "usuarios",
        name: "TablaUsuarios",
        component: () =>
          import(
            /* webpackChunkName: "usuarios" */ "@/views/TablaUsuarios.vue"
          ),
        meta: {
          auth: true,
          Administrador: true,
        },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

// router.beforeEach((to, from, next) => {
//   if (to.matched.some((record) => record.meta.public)) {
//     next();
//   } else if (to.matched.some((record) => record.meta.auth)) {
//     if (userStoreuser) {
//       /* if (userStore.user.rol === 'Administrador' || 'Vendedor' || 'Almacenero'){
          
//         } else {
//           return from.status(403).send({
//             message: 'Usuario no autorizado'
//           });
//         }*/
//       next();
//     } else {
//       next({ name: "LogIn" });
//     }
//   } else {
//     next();
//   }
// });

export default router
