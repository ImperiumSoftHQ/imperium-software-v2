import axios, { AxiosError, AxiosInstance, InternalAxiosRequestConfig } from 'axios'
import { getToken, removeToken } from '@/features/admin/auth/token.storage'

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'

export const http: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

http.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = getToken()
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  }
)

http.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      removeToken()
      window.location.href = '/admin/login'
    }
    return Promise.reject(error)
  }
)
