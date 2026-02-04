import { create } from 'zustand'
import { authApi, LoginRequest } from '@/lib/api/auth.api'
import { setToken, removeToken, isAuthenticated } from './token.storage'

interface AuthState {
  isAuthenticated: boolean
  isLoading: boolean
  error: string | null
  login: (credentials: LoginRequest) => Promise<boolean>
  logout: () => void
  checkAuth: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: isAuthenticated(),
  isLoading: false,
  error: null,

  login: async (credentials: LoginRequest) => {
    set({ isLoading: true, error: null })
    try {
      const response = await authApi.login(credentials)
      setToken(response.token, response.expiresAt)
      set({ isAuthenticated: true, isLoading: false })
      return true
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Login failed'
      set({ error: message, isLoading: false })
      return false
    }
  },

  logout: () => {
    removeToken()
    set({ isAuthenticated: false })
  },

  checkAuth: () => {
    set({ isAuthenticated: isAuthenticated() })
  },
}))
