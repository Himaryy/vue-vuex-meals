<script setup>
import MealItem from '@/components/MealItem.vue'
import store from '@/store'
import { computed, onMounted, ref, watch } from 'vue'
import { onBeforeRouteLeave, useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const keyword = ref('')

const meals = computed(() => store.state.searchedMeal)

function searchMeal() {
  if (keyword.value) {
    router.push({ name: 'byName', params: { name: keyword.value } })
  }
}

// Fetch the meal when the component is mounted and the route params are available
onMounted(() => {
  if (route.params.name) {
    keyword.value = route.params.name
    store.dispatch('searchMeal', keyword.value)
  }
})

// Watch for changes in the route params and update the keyword and meals accordingly
watch(
  () => route.params.name,
  (newName) => {
    keyword.value = newName
    if (newName) {
      store.dispatch('searchMeal', newName)
    }
  },
)

// Clear the searched meal when leaving the route
// This is to prevent showing the previous search results when navigating back to this route
onBeforeRouteLeave(() => {
  store.commit('setSearchedMeal', [])
})
</script>

<template>
  <div class="p-8">
    <input
      v-model="keyword"
      @change="searchMeal"
      type="text"
      class="rounded border-2 border-gray-300 w-full"
      placeholder="Search for meals"
    />
    <div
      v-if="meals && meals.length > 0"
      class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 py-8"
    >
      <!-- <pre>{{ meals }}</pre> -->
      <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
    </div>
    <p v-else class="text-center text-gray-500 py-10">No meals found.</p>
  </div>
</template>
