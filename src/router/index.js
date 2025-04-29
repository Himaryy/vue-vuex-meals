import HomePage from '@/views/HomePage.vue'
import MealByIngredients from '@/views/MealByIngredients.vue'
import MealByLetters from '@/views/MealByLetters.vue'
import MealByName from '@/views/MealByName.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },

  // {
  //   path: '/letter/:letter',
  //   name: 'byLetter',
  // component: Letter, // change compnent name later
  // },

  {
    path: '/by-name/:name?',
    name: 'byName',
    component: MealByName,
  },

  {
    path: '/by-letter/:letter?',
    name: 'byLetter',
    component: MealByLetters,
  },

  {
    path: '/by-ingredient/:ingredient?',
    name: 'byIngredient',
    component: MealByIngredients,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
