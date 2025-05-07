import axiosClient from '@/axiosClient'

export function searchMeal({ commit }, keyword) {
  axiosClient.get(`/search.php?s=${keyword}`).then(({ data }) => {
    commit('setSearchedMeal', data.meals)
  })
}

export function searchMealByLetter({ commit }, letter) {
  axiosClient.get(`/search.php?f=${letter}`).then(({ data }) => {
    commit('setMealsByLetter', data.meals)
  })
}

export function searchMealByIngredient({ commit }, ingredient) {
  axiosClient.get(`/filter.php?i=${ingredient}`).then(({ data }) => {
    commit('setMealsByIngredient', data.meals || [])
  })
}

export function getAllIngredients({ commit }) {
  axiosClient.get('/list.php?i=list').then(({ data }) => {
    commit('setAllIngredients', data.meals || [])
  })
}
