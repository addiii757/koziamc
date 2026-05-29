import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { useAuth } from '../hooks/useAuth'
import PageLayout from '../components/PageLayout'
import LoadingSpinner from '../components/LoadingSpinner'

const fetchVoucherHistory = async () => {
  const response = await fetch('/api/vouchers/history', { credentials: 'include' })
  if (!response.ok) throw new Error('Błąd ładowania')
  return response.json()
}

const HistoriaVoucherowPage = () => {
  const { isAuthenticated, isLoading: authLoading } = useAuth()
  const { data, isLoading, error } = useQuery({
    queryKey: ['voucherHistory'],
    queryFn: fetchVoucherHistory,
    enabled: isAuthenticated,
  })

  if (authLoading || isLoading) return <LoadingSpinner />
  if (!isAuthenticated) {
    return (
      <PageLayout title="Historia voucherów" kanji="歴">
        <div className="login-required">
          <p>Zaloguj się, aby zobaczyć historię voucherów.</p>
          <a href="/api/auth/discord" className="btn-primary">Zaloguj przez Discord</a>
        </div>
      </PageLayout>
    )
  }
  if (error) return <PageLayout title="Historia voucherów" kanji="歴"><div className="error">Błąd ładowania</div></PageLayout>

  const vouchers = data?.data || []

  return (
    <PageLayout title="Historia voucherów" kanji="歴">
      <div className="voucher-history">
        {vouchers.length === 0 ? (
          <p>Nie masz jeszcze użytych voucherów.</p>
        ) : (
          <div className="voucher-list">
            {vouchers.map((voucher) => (
              <div key={voucher.id} className="voucher-item">
                <span className="voucher-code">{voucher.code}</span>
                <span className="voucher-reward">{voucher.reward}</span>
                <span className="voucher-date">{new Date(voucher.usedAt).toLocaleDateString()}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </PageLayout>
  )
}

export default HistoriaVoucherowPage