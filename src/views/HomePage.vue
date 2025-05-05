<script setup>
import axiosClient from '@/axiosClient'
import { onMounted, ref } from 'vue'

// import store from '@/store'
// import { computed } from 'vue'

// const meal = computed(() => store.state.meals)

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
const ingredients = ref([])

// Fetch Data from MEAL DB API
onMounted(async () => {
  const res = await axiosClient.get('/list.php?i=list')
  ingredients.value = res.data
  console.log(res.data)
})
</script>

<template>
  <div class="flex p-8 justify-center flex-col items-center gap-4">
    <div class="flex gap-2 mt-2">
      <RouterLink
        v-for="(letter, index) in letters"
        :key="index"
        :to="{ name: 'byLetter', params: { letter } }"
        >{{ letter }}</RouterLink
      >
    </div>
  </div>
</template>

<style lang=""></style>
