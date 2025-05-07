<script setup>
import IngredientItems from '@/components/IngredientItems.vue'
import store from '@/store'
import { computed, onMounted, ref } from 'vue'

const keyword = ref('')
const ingredients = computed(() => store.state.allIngredients)
const filterIngredient = ref('')

const computedIngredient = computed(() => {
  if (!filterIngredient.value) return ingredients.value
  return ingredients.value.filter((item) => {
    return item.strIngredient.toLowerCase().includes(filterIngredient.value.toLowerCase())
  })
})

const triggerSearch = () => {
  filterIngredient.value = keyword.value
}

onMounted(() => {
  store.dispatch('getAllIngredients')
})
</script>

<template>
  <div class="p-8">
    <h1 class="text-4xl font-bold mb-4">Ingredients</h1>

    <input
      v-model="keyword"
      @change="triggerSearch"
      type="text"
      class="rounded border-2 border-gray-300 w-full"
      placeholder="Search for ingredients"
    />

    <div class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 py-8 text-center">
      <IngredientItems
        v-for="ingredient in computedIngredient"
        :key="ingredient.idIngredient"
        :ingredient="ingredient"
      />
    </div>
  </div>
</template>
