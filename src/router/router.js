import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const constantRoutes = [
    {
        path: '/scroll-snap1',
        component: () => import('@/views/css1/animation/ScrollSnap1.vue'),
    },
    {
        path: '/flex1',
        component: () => import('@/views/css1/animation/Flex1.vue'),
    },
    {
        path: '/button1',
        component: () => import('@/views/css1/button/index.vue'),
    },
    {
        path: '/element-height',
        component: () => import('@/views/js1/ElementHeight.vue'),
    },
    {
        path: '/clip-path1',
        component: () => import('@/views/svg1/ClipPath1.vue'),
    },
    {
        path: '/img-error-report',
        component: () => import('@/views/imgErrorReport/imgErrorReport'),
    },
    {
        path: '/sourcemap-test',
        component: () => import('@/views/sourceMapTest/sourceMapTest'),
    },
    {
        path: '/css1',
        component: () => import('@/views/css1/animation'),
    },
    {
        path: '/animationIndex',
        component: () => import('@/views/vueAnimation/Index'),
    },
    {
        path: '/ui-events',
        component: () => import('@/views/uiEvents/uiEvents'),
    },
]

const createRouter = () =>
    new Router({
        // mode: 'history', // require service support
        scrollBehavior: () => ({ y: 0 }),
        routes: constantRoutes,
    })

const router = createRouter()

export function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher // reset router
}

export default router
