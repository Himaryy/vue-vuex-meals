<script setup>
import axiosClient from '@/axiosClient'
import YoutubeButton from '@/components/YoutubeButton.vue'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const meal = ref({})

onMounted(() => {
  axiosClient.get(`/lookup.php?i=${route.params.id}`).then(({ data }) => {
    meal.value = data.meals[0] || {}
  })
})
</script>

<template>
  <div class="w-[80%] mx-auto">
    <div class="flex flex-col gap-3 justify-center items-center">
      <h1 class="text-4xl font-bold my-5">{{ meal.strMeal }}</h1>
      <div class="w-full h-64 sm:h-96 overflow-hidden">
        <img :src="meal.strMealThumb" :alt="meal.strMeal" class="w-full h-full object-contain" />
      </div>
      <div class="flex gap-3 text-sm sm:text-lg py-2">
        <div><strong class="font-bold">Category:</strong> {{ meal.strCategory }}</div>
        <div><strong class="font-bold">Area:</strong> {{ meal.strArea }}</div>
        <div><strong class="font-bold">Tags:</strong> {{ meal.strTags }}</div>
      </div>
    </div>

    <div class="container mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <h2 class="text-2xl font-semibold">Ingredients</h2>
        <div class="col-span-1 md:col-span-2 lg:col-span-3">
          <ul class="grid grid-flow-col grid-rows-6 gap-x-6 gap-y-2">
            <template v-for="(item, index) in new Array(20)" :key="index">
              <li v-if="meal[`strIngredient${index + 1}`]">
                {{ index + 1 }}. {{ meal[`strIngredient${index + 1}`] }} -
                {{ meal[`strMeasure${index + 1}`] }}
              </li>
            </template>
          </ul>
        </div>
      </div>
    </div>

    <div class="py-8">
      <YoutubeButton :href="meal.strYoutube">Youtube</YoutubeButton>
    </div>

    <div class="prose max-w-none text-gray-800 pb-8">
      <h2 class="text-2xl font-semibold mb-4">Instructions</h2>
      <p class="whitespace-pre-line leading-relaxed">
        {{ meal.strInstructions }}
      </p>
    </div>
  </div>
</template>

<style></style>
