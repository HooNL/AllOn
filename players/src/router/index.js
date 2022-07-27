import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import OverView from '@/views/OverView.vue'
import ContactView from '@/views/ContactView.vue'
import Player from '@/components/bucket/SinglePlayer'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: 'Home',
    },
  },
  {
    path: '/overons',
    name: 'overons',
    component: OverView,
    meta: {
      title: 'Over ons',
    },
  },
  {
    path: '/player',
    name: 'player',
    component: Player,
    meta: {
      title: 'Player',
    },
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView,
    meta: {
      title: 'Contact',
    },
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    document.getElementById('app').scrollIntoView({ behavior: 'smooth' })
  },
})

router.beforeEach((to, from, next) => {
  const docT = `${to.meta.title} | Players  `
  document.title = docT
  next()
})

export default router
