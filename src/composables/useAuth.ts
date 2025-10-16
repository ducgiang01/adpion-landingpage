import { ref, computed } from 'vue'
import { useApi } from './useApi'

interface User {
  id: string
  username: string
  email: string
  role: string
}

interface AuthState {
  user: User | null
  token: string | null
  isAuthenticated: boolean
}

// Global auth state
const authState = ref<AuthState>({
  user: null,
  token: localStorage.getItem('auth_token'),
  isAuthenticated: false
})

// Initialize auth state from localStorage
const initializeAuth = () => {
  const token = localStorage.getItem('auth_token')
  const userStr = localStorage.getItem('auth_user')
  
  if (token && userStr) {
    try {
      authState.value.token = token
      authState.value.user = JSON.parse(userStr)
      authState.value.isAuthenticated = true
    } catch (error) {
      console.error('Error parsing stored user data:', error)
      clearAuth()
    }
  }
}

// Clear auth state
const clearAuth = () => {
  authState.value.user = null
  authState.value.token = null
  authState.value.isAuthenticated = false
  localStorage.removeItem('auth_token')
  localStorage.removeItem('auth_user')
}

export function useAuth() {
  const { post, loading, error } = useApi()
  
  // Helper function to make API calls
  const apiCall = async (endpoint: string, data: any) => {
    const token = localStorage.getItem('auth_token')
    
    const response = await fetch(`http://localhost:3001/api${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(token && { 'Authorization': `Bearer ${token}` })
      },
      body: JSON.stringify(data)
    })
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    
    return response.json()
  }

  // Computed properties
  const user = computed(() => authState.value.user)
  const token = computed(() => authState.value.token)
  const isAuthenticated = computed(() => authState.value.isAuthenticated)
  const isAdmin = computed(() => authState.value.user?.role === 'admin')

  // Login function
  const login = async (email: string, password: string) => {
    try {
      const response = await apiCall('/auth/login', { email, password }) as {
        user: User
        token: string
      }

      // Store auth data
      authState.value.user = response.user
      authState.value.token = response.token
      authState.value.isAuthenticated = true
      
      localStorage.setItem('auth_token', response.token)
      localStorage.setItem('auth_user', JSON.stringify(response.user))

      return { success: true, data: response }
    } catch (err) {
      console.error('Login error:', err)
      return { success: false, error: err }
    }
  }

  // Register function
  const register = async (username: string, email: string, password: string) => {
    try {
      const response = await apiCall('/auth/register', { username, email, password }) as {
        user: User
        token: string
      }

      // Store auth data
      authState.value.user = response.user
      authState.value.token = response.token
      authState.value.isAuthenticated = true
      
      localStorage.setItem('auth_token', response.token)
      localStorage.setItem('auth_user', JSON.stringify(response.user))

      return { success: true, data: response }
    } catch (err) {
      console.error('Registration error:', err)
      return { success: false, error: err }
    }
  }

  // Logout function
  const logout = () => {
    clearAuth()
  }

  // Get user profile
  const getProfile = async () => {
    try {
      const token = localStorage.getItem('auth_token')
      
      const response = await fetch('http://localhost:3001/api/auth/profile', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          ...(token && { 'Authorization': `Bearer ${token}` })
        }
      })
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      const data = await response.json() as { user: User }
      authState.value.user = data.user
      localStorage.setItem('auth_user', JSON.stringify(data.user))
      return { success: true, data }
    } catch (err) {
      console.error('Get profile error:', err)
      // If token is invalid, clear auth
      if (err instanceof Error && err.message.includes('401')) {
        clearAuth()
      }
      return { success: false, error: err }
    }
  }

  // Initialize auth on first load
  initializeAuth()

  return {
    // State
    user,
    token,
    isAuthenticated,
    isAdmin,
    loading,
    error,
    
    // Actions
    login,
    register,
    logout,
    getProfile,
    clearAuth
  }
}
