import { http } from './http'

export interface LoginRequest {
  username: string
  password: string
}

export interface LoginResponse {
  token: string
  expiresAt: string
}

export const authApi = {
  login: async (credentials: LoginRequest): Promise<LoginResponse> => {
    const response = await http.post<LoginResponse>('/auth/login', credentials)
    return response.data
  },
}
