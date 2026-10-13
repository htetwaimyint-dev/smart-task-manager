import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TasksView from '../views/TasksView.vue'
import TaskDetailView from '../views/TaskDetailView.vue'
import ProfileView from '../views/ProfileView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/tasks', name: 'tasks', component: TasksView },
    { path: '/tasks/:id', name: 'task-detail', component: TaskDetailView },
    { path: '/profile', name: 'profile', component: ProfileView }
  ]
})

export default router