const TOKEN_KEY = 'imperium_auth_token'
const TOKEN_EXPIRY_KEY = 'imperium_token_expiry'

export const getToken = (): string | null => {
  const token = localStorage.getItem(TOKEN_KEY)
  const expiry = localStorage.getItem(TOKEN_EXPIRY_KEY)

  if (!token || !expiry) {
    return null
  }

  if (new Date(expiry) < new Date()) {
    removeToken()
    return null
  }

  return token
}

export const setToken = (token: string, expiresAt: string): void => {
  localStorage.setItem(TOKEN_KEY, token)
  localStorage.setItem(TOKEN_EXPIRY_KEY, expiresAt)
}

export const removeToken = (): void => {
  localStorage.removeItem(TOKEN_KEY)
  localStorage.removeItem(TOKEN_EXPIRY_KEY)
}

export const isAuthenticated = (): boolean => {
  return getToken() !== null
}
