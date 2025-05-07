<script setup>
import YoutubeButton from './YoutubeButton.vue'

const { meal } = defineProps({
  meal: Object,
})
</script>

<template>
  <div class="bg-white shadow-md rounded-xl">
    <div class="overflow-hidden rounded-t-xl object-cover">
      <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
        <img :src="meal.strMealThumb" :alt="meal.strMeal" class="rounded-t-xl w-full h-full" />
      </router-link>
    </div>

    <div class="p-3 flex flex-col gap-2">
      <h3 class="font-bold">{{ meal.strMeal }}</h3>

      <div class="flex gap-2 items-center">
        <YoutubeButton :href="meal.strYoutube">Youtube</YoutubeButton>
        <!-- <RouterLink
              to="/"
              class="px-3 py-2 rounded hover:bg-green-500 hover:text-white transition-colors duration-200"
              >View</RouterLink
            > -->
      </div>
    </div>
  </div>
</template>
