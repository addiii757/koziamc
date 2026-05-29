const API_BASE = import.meta.env.VITE_API_URL || '/api'

export const api = {
  async request(endpoint, options = {}) {
    const response = await fetch(`${API_BASE}${endpoint}`, {
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    })

    if (!response.ok) {
      const error = await response.json().catch(() => ({ message: 'Wystąpił błąd' }))
      throw new Error(error.message || 'Wystąpił błąd')
    }

    return response.json()
  },

  get(endpoint) {
    return this.request(endpoint)
  },

  post(endpoint, data) {
    return this.request(endpoint, { method: 'POST', body: JSON.stringify(data) })
  },

  put(endpoint, data) {
    return this.request(endpoint, { method: 'PUT', body: JSON.stringify(data) })
  },

  delete(endpoint) {
    return this.request(endpoint, { method: 'DELETE' })
  },
}