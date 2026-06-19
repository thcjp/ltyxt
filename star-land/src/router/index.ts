import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import CoursesPage from '@/pages/CoursesPage.vue'
import SubjectPage from '@/pages/SubjectPage.vue'
import GradePage from '@/pages/GradePage.vue'
import UnitPage from '@/pages/UnitPage.vue'
import LessonPage from '@/pages/LessonPage.vue'
import RewardsPage from '@/pages/RewardsPage.vue'
import ReviewPage from '@/pages/ReviewPage.vue'
import ParentPage from '@/pages/ParentPage.vue'

// 在 Electron（file:// 协议）或打包环境中使用 hash 路由，避免刷新 404
// 在 Web 开发服务器中使用 history 路由，获得更干净的 URL
const isFileProtocol = typeof window !== 'undefined' && window.location.protocol === 'file:'
const history = isFileProtocol ? createWebHashHistory() : createWebHistory()

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/courses',
    name: 'courses',
    component: CoursesPage,
  },
  {
    path: '/courses/:subject',
    name: 'subject',
    component: SubjectPage,
  },
  {
    path: '/courses/:subject/:grade',
    name: 'grade',
    component: GradePage,
  },
  {
    path: '/courses/:subject/:grade/:unit',
    name: 'unit',
    component: UnitPage,
  },
  {
    path: '/courses/:subject/:grade/:unit/:lesson',
    name: 'lesson',
    component: LessonPage,
  },
  {
    path: '/rewards',
    name: 'rewards',
    component: RewardsPage,
  },
  {
    path: '/review',
    name: 'review',
    component: ReviewPage,
  },
  {
    path: '/parent',
    name: 'parent',
    component: ParentPage,
  },
]

const router = createRouter({
  history,
  routes,
})

export default router
