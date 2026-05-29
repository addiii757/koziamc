import React, { createContext } from 'react'

export const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const value = {
    user: null,
    isAuthenticated: false,
    isLoading: false,
    isAdmin: false,
    login: () => {},
    logout: () => {},
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}