import axiosClient from '@/axiosClient'

export function searchMeal({ commit }, keyword) {
  axiosClient.get(`search.php?s=${keyword}`).then(({ data }) => {
    commit('setSearchedMeal', data.meals)
  })
}

export function searchMealByLetter({ commit }, letter) {
  axiosClient.get(`search.php?f=${letter}`).then(({ data }) => {
    commit('setMealsByLetter', data.meals)
  })
}

export function searchMealByIngredient({ commit }, ingredient) {
  axiosClient.get(`search.php?i=${ingredient}`).then(({ data }) => {
    commit('setMealsByIngredient', data.meals)
  })
}
