import axios from 'axios'

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_MEAL_API_ENDPOINT,
})

export default axiosClient
