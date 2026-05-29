import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import LoadingSpinner from './LoadingSpinner'

const AdminRoute = ({ children }) => {
  const { user, isAuthenticated, isLoading, isAdmin } = useAuth()

  if (isLoading) {
    return <LoadingSpinner />
  }

  if (!isAuthenticated || !isAdmin) {
    return <Navigate to="/" replace />
  }

  return children
}

export default AdminRoute