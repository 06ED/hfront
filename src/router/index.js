import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue')
  },
  {
    path: '/rent',
    name: 'rent',
    component: () => import('@/views/RentView.vue')
  },
  {
    path: '/booking',
    name: 'booking',
    component: () => import('@/views/BookingView.vue')
  },
  {
    path: '/booking/:id',
    name: 'selfbooking',
    component: () => import('@/views/SelfBookingView.vue')
  },
  {
    path: '/excursion',
    name: 'excursion',
    component: () => import('@/views/ExcursionView.vue')
  },
  {
    path: '/financial',
    name: 'financial',
    component: () => import('@/views/CapitalView.vue')
  },
  {
    path: '/dairy',
    name: 'dairy',
    component: () => import('@/views/DairyView.vue')
  },
  {
    path: '/marry',
    name: 'marry',
    component: () => import('@/views/MarryView.vue')
  },
  {
    path: '/events',
    name: 'event',
    component: () => import('@/views/EventsView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
