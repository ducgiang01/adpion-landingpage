import { ref, reactive } from 'vue'

const API_BASE_URL = 'http://localhost:3001/api'

interface ApiResponse<T> {
  success: boolean
  data?: T
  message?: string
}

class ApiError extends Error {
  constructor(message: string, public status?: number) {
    super(message)
    this.name = 'ApiError'
  }
}

export function useApi() {
  const loading = ref(false)
  const error = ref<string | null>(null)

  const request = async <T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> => {
    loading.value = true
    error.value = null

    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
        ...options,
      })

      if (!response.ok) {
        throw new ApiError(
          `HTTP error! status: ${response.status}`,
          response.status
        )
      }

      const data: ApiResponse<T> = await response.json()

      if (!data.success) {
        throw new ApiError(data.message || 'API request failed')
      }

      return data.data as T
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Unknown error occurred'
      error.value = message
      throw new ApiError(message)
    } finally {
      loading.value = false
    }
  }

  const get = <T>(endpoint: string) => request<T>(endpoint, { method: 'GET' })
  const post = <T>(endpoint: string, data?: any) =>
    request<T>(endpoint, {
      method: 'POST',
      body: data ? JSON.stringify(data) : undefined,
    })
  const put = <T>(endpoint: string, data?: any) =>
    request<T>(endpoint, {
      method: 'PUT',
      body: data ? JSON.stringify(data) : undefined,
    })
  const del = <T>(endpoint: string) => request<T>(endpoint, { method: 'DELETE' })

  return {
    loading,
    error,
    get,
    post,
    put,
    delete: del,
  }
}

// Dashboard specific API functions
export function useDashboardApi() {
  const { get, loading, error } = useApi()

  const getStats = () => get('/dashboard/stats')
  const getAccountStatus = () => get('/dashboard/accounts')
  const getRecentActivities = () => get('/dashboard/activities')
  const getChartData = () => get('/dashboard/charts')

  return {
    loading,
    error,
    getStats,
    getAccountStatus,
    getRecentActivities,
    getChartData,
  }
}

// Account specific API functions
export function useAccountApi() {
  const { get, post, put, delete: del, loading, error } = useApi()

  const getAllAccounts = (params?: {
    page?: number
    limit?: number
    status?: string
    search?: string
  }) => {
    const searchParams = new URLSearchParams()
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined) {
          searchParams.append(key, String(value))
        }
      })
    }
    const query = searchParams.toString()
    return get(`/accounts${query ? `?${query}` : ''}`)
  }

  const getAccountById = (id: string) => get(`/accounts/${id}`)
  const createAccount = (data: any) => post('/accounts', data)
  const updateAccount = (id: string, data: any) => put(`/accounts/${id}`, data)
  const deleteAccount = (id: string) => del(`/accounts/${id}`)
  const topUpAccount = (id: string, amount: number) =>
    post(`/accounts/${id}/topup`, { amount })
  const deductAccount = (id: string, amount: number) =>
    post(`/accounts/${id}/deduct`, { amount })

  return {
    loading,
    error,
    getAllAccounts,
    getAccountById,
    createAccount,
    updateAccount,
    deleteAccount,
    topUpAccount,
    deductAccount,
  }
}
