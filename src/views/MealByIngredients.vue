<script setup>
import MealItem from '@/components/MealItem.vue'
import store from '@/store'
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const meals = computed(() => store.state.mealsByIngredient)

onMounted(() => {
  store.commit('setMealsByIngredient', [])
  store.dispatch('searchMealByIngredient', route.params.ingredient)
})
</script>

<template>
  <div class="p-8">
    <p class="text-3xl font-semibold pt-3">
      Ingredient: <span class="font-bold text-green-500">{{ route.params.ingredient }}</span>
    </p>
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 py-8">
      <!-- <pre>{{ meals }}</pre> -->
      <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
    </div>
  </div>
</template>
