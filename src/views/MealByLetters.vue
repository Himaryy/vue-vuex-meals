<template>
  <div class="p-8">
    <div class="flex justify-center flex-col items-center gap-4">
      <div class="flex gap-2 mt-2">
        <RouterLink
          v-for="(letter, index) in letters"
          :key="index"
          :to="{ name: 'byLetter', params: { letter } }"
          >{{ letter }}</RouterLink
        >
      </div>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 py-8">
      <!-- <pre>{{ meals }}</pre> -->
      <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
    </div>
  </div>
</template>

<script setup>
import MealItem from '@/components/MealItem.vue'
import store from '@/store'
import { computed, onMounted, watch } from 'vue'
import { RouterLink, useRoute, useRouter } from 'vue-router'

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
const meals = computed(() => store.state.mealsByLetter)
const route = useRoute()
const router = useRouter()

onMounted(() => {
  const defaultLetter = route.params.letter || 'A'

  if (!route.params.letter) {
    router.push({ name: 'byLetter', params: { letter: defaultLetter } })
  }

  store.commit('setMealsByLetter', [])
  store.dispatch('searchMealByLetter', defaultLetter)
})

watch(
  () => route.params.letter,
  (newLetter) => {
    store.dispatch('searchMealByLetter', newLetter)
  },
)
</script>

<style></style>
