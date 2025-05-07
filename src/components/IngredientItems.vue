<script setup>
const { ingredient } = defineProps({
  ingredient: Object,
})
</script>

<template>
  <div class="bg-white shadow-md rounded-xl">
    <div class="overflow-hidden rounded-t-xl object-cover">
      <router-link :to="{ name: 'byIngredient', params: { ingredient: ingredient.strIngredient } }">
        <div class="p-3 flex flex-col gap-2">
          <h3 class="font-bold">{{ ingredient.strIngredient }}</h3>
        </div>
      </router-link>
    </div>
  </div>
</template>
