import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const constantRoutes = [
    {
        path: '/scroll-snap1',
        component: () => import('@/views/css1/ScrollSnap1.vue'),
    },
    {
        path: '/flex1',
        component: () => import('@/views/css1/Flex1.vue'),
    },
    {
        path: '/button1',
        component: () => import('@/views/css1/Button1.vue'),
    },
    {
        path: '/button2',
        component: () => import('@/views/css1/Button2.vue'),
    }   ,
    {
        path: '/element-height',
        component: () => import('@/views/js1/ElementHeight.vue'),
    }
]


const createRouter = () => new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({y: 0}),
    routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher // reset router
}

export default router
