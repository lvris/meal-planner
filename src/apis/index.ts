import { useUserStore } from '@/stores/userStore'
import axios from 'axios'

const request = axios.create({
  timeout: 50000,
  headers: {
    Accept: 'application/json'
  }
})

// Req
request.interceptors.request.use(
  (config) => {
    config.baseURL = import.meta.env.VITE_AXIOS_BASE_URL
    const token = useUserStore().userData?.token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    console.log(`error: ${error}`)
    return Promise.reject(error)
  }
)

// Res
request.interceptors.response.use(
  (response) => {
    if (response.status != 200) return Promise.reject(`${response.status}:${response.statusText}`)
    return response
  },
  (error) => {
    console.log(`Error: ${error}`)
    return Promise.reject('Network Error')
  }
)

export default request
