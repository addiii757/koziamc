import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { useAuth } from '../hooks/useAuth'
import PageLayout from '../components/PageLayout'
import LoadingSpinner from '../components/LoadingSpinner'
import { formatPrice, formatDate } from '../utils/formatters'

const fetchOrders = async () => {
  const response = await fetch('/api/orders/mine', { credentials: 'include' })
  if (!response.ok) throw new Error('Błąd ładowania')
  return response.json()
}

const statusColors = {
  PENDING: 'status-pending',
  COMPLETED: 'status-completed',
  FAILED: 'status-failed',
  CANCELLED: 'status-cancelled',
}

const statusLabels = {
  PENDING: 'Oczekuje',
  COMPLETED: 'Zrealizowane',
  FAILED: 'Nieudane',
  CANCELLED: 'Anulowane',
}

const MojeZamowieniaPage = () => {
  const { isAuthenticated, isLoading: authLoading } = useAuth()
  const { data, isLoading, error } = useQuery({
    queryKey: ['orders'],
    queryFn: fetchOrders,
    enabled: isAuthenticated,
  })

  if (authLoading || isLoading) return <LoadingSpinner />
  if (!isAuthenticated) {
    return (
      <PageLayout title="Moje zamówienia" kanji="買">
        <div className="login-required">
          <p>Zaloguj się, aby zobaczyć swoje zamówienia.</p>
          <a href="/api/auth/discord" className="btn-primary">Zaloguj przez Discord</a>
        </div>
      </PageLayout>
    )
  }
  if (error) return <PageLayout title="Moje zamówienia" kanji="買"><div className="error">Błąd ładowania</div></PageLayout>

  const orders = data?.data || []

  return (
    <PageLayout title="Moje zamówienia" kanji="買">
      <div className="orders-list">
        {orders.length === 0 ? (
          <p>Nie masz jeszcze żadnych zamówień.</p>
        ) : (
          orders.map((order) => (
            <div key={order.id} className="order-card">
              <div className="order-header">
                <span className="order-id">#{order.orderId}</span>
                <span className={`order-status ${statusColors[order.status]}`}>{statusLabels[order.status]}</span>
              </div>
              <div className="order-details">
                <p><strong>Produkt:</strong> {order.productName}</p>
                <p><strong>Nick:</strong> {order.playerNick}</p>
                <p><strong>Kwota:</strong> {formatPrice(order.finalAmount)}</p>
                <p><strong>Data:</strong> {formatDate(order.createdAt)}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </PageLayout>
  )
}

export default MojeZamowieniaPage