<script setup></script>

<template>
  <div class="bg-gray-100 min-h-screen">
    <header class="bg-white h-16 shadow-sm flex justify-between items-center gap-2">
      <RouterLink :to="{ name: 'home' }" class="inline-flex items-center px-5">Home</RouterLink>

      <div class="flex items-center gap-2 pr-2">
        <RouterLink
          class="relative inline-flex items-center h-full px-2 group"
          :to="{ name: 'byName' }"
        >
          <span class="transition-colors duration-200 ease-in">Search Meal</span>
          <span
            class="absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-200 ease-in group-hover:w-full"
          ></span>
        </RouterLink>

        <RouterLink
          class="relative inline-flex items-center h-full px-2 group"
          :to="{ name: 'byIngredient' }"
        >
          <span class="transition-colors duration-200 ease-in">Meal by Ingredient</span>
          <span
            class="absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-300 ease-in group-hover:w-full"
          ></span>
        </RouterLink>

        <RouterLink
          class="relative inline-flex items-center h-full px-2 group"
          :to="{ name: 'byLetter' }"
        >
          <span class="transition-colors duration-200 ease-in">Meal by Letter</span>
          <span
            class="absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-300 ease-in group-hover:w-full"
          ></span>
        </RouterLink>
      </div>
    </header>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped></style>
