import axiosClient from '@/axiosClient'

export function searchMeal({ commit }, keyword) {
  axiosClient.get(`search.php?s=${keyword}`).then(({ data }) => {
    commit('setSearchedMeal', data.meals)
  })
}
