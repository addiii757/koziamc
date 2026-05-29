import React, { useEffect, useState } from 'react'

const RecentPurchases = () => {
  const [purchases, setPurchases] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchRecentPurchases = async () => {
      try {
        const response = await fetch('/api/orders/recent')
        const result = await response.json()
        
        if (result.ok) {
          setPurchases(result.data || [])
        }
      } catch (error) {
        console.error('Błąd pobierania ostatnich zakupów:', error)
        setPurchases([])
      } finally {
        setLoading(false)
      }
    }

    fetchRecentPurchases()
    const interval = setInterval(fetchRecentPurchases, 60000)
    return () => clearInterval(interval)
  }, [])

  const getTimeAgo = (dateString) => {
    const now = new Date()
    const purchaseDate = new Date(dateString)
    const diffInMinutes = Math.floor((now - purchaseDate) / 60000)

    if (diffInMinutes < 1) return 'przed chwilą'
    if (diffInMinutes === 1) return '1 minutę temu'
    if (diffInMinutes < 5) return `${diffInMinutes} minuty temu`
    if (diffInMinutes < 60) return `${diffInMinutes} minut temu`
    
    const diffInHours = Math.floor(diffInMinutes / 60)
    if (diffInHours === 1) return '1 godzinę temu'
    if (diffInHours < 24) return `${diffInHours} godzin temu`
    
    const diffInDays = Math.floor(diffInHours / 24)
    if (diffInDays === 1) return 'wczoraj'
    return `${diffInDays} dni temu`
  }

  const displayPurchases = purchases.length > 0
    ? [...purchases, ...purchases]
    : []

  return (
    <section id="ostatnie" className="recent-purchases-section">
      <div className="container">
        <div className="purchases-header">
          <span className="purchases-badge">OSTATNIE ZAKUPY</span>
          <h2 className="section-title">Ostatnie zakupy</h2>
          <p className="section-subtitle">
            Nasi gracze wsparli na serwera, pomagając go rozwijać i dodając nowe funkcję.
          </p>
        </div>
      </div>

      {loading ? (
        <div className="purchases-marquee">
          <div className="marquee-track">
            <div className="purchase-card">
              <div className="purchase-avatar">
                <i className="fas fa-spinner fa-spin"></i>
              </div>
              <div className="purchase-info">
                <p className="purchase-username">Ładowanie...</p>
                <p className="purchase-item">Pobieranie ostatnich zakupów</p>
              </div>
            </div>
          </div>
        </div>
      ) : purchases.length === 0 ? (
        <div className="container" style={{ display: 'flex', justifyContent: 'center', padding: '2rem 0' }}>
          <div className="purchase-card">
            <div className="purchase-avatar">
              <i className="fas fa-shopping-bag"></i>
            </div>
            <div className="purchase-info">
              <p className="purchase-username">Brak zakupów</p>
              <p className="purchase-item">Bądź pierwszym wspierającym!</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="purchases-marquee">
          <div className="marquee-track">
            {displayPurchases.map((purchase, index) => (
              <div key={`purchase-${index}`} className="purchase-card">
                <div className="purchase-avatar">
                  <i className="fas fa-user-circle"></i>
                </div>
                <div className="purchase-info">
                  <p className="purchase-username">{purchase.playerNick}</p>
                  <p className="purchase-item">{purchase.productName}</p>
                </div>
                <span className="purchase-time">{getTimeAgo(purchase.completedAt)}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}

export default RecentPurchases