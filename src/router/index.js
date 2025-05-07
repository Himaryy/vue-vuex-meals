import DefaultLayout from '@/components/DefaultLayout.vue'
import GuestLayout from '@/components/GuestLayout.vue'
import MealDetails from '@/views/MealDetails.vue'
import HomePage from '@/views/HomePage.vue'
import MealByIngredients from '@/views/MealByIngredients.vue'
import MealByLetters from '@/views/MealByLetters.vue'
import MealByName from '@/views/MealByName.vue'
import { createRouter, createWebHistory } from 'vue-router'
import ByIngredient from '@/views/ByIngredient.vue'

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '/',
        name: 'home',
        component: HomePage,
      },

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
        path: '/ingredient',
        name: 'ingredient',
        component: ByIngredient,
      },

      {
        path: '/by-ingredient/:ingredient',
        name: 'byIngredient',
        component: MealByIngredients,
      },

      // For meal deatils
      {
        // /:strMeal?
        path: '/meal/:id?',
        name: 'mealDetails',
        component: MealDetails,
      },
    ],
  },
  {
    path: '/guest',
    component: GuestLayout,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
