import React, { useState, useMemo } from 'react'
import { useQuery } from '@tanstack/react-query'
import ProductCard from './ProductCard'
import CheckoutModal from './CheckoutModal'
import CustomAmountModal from './CustomAmountModal'
import LoadingSpinner from './LoadingSpinner'

const fetchProducts = async () => {
  const response = await fetch('/api/products')
  if (!response.ok) throw new Error('Błąd ładowania produktów')
  const data = await response.json()
  return data.data || []
}

const Shop = () => {
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [customAmount, setCustomAmount] = useState(null)
  const [showCustomModal, setShowCustomModal] = useState(false)

  const { data: products = [], isLoading, error } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
    staleTime: 5 * 60 * 1000,
  })

  const sortedProducts = useMemo(() => {
    if (!products || !Array.isArray(products)) return []
    
    return [...products].sort((a, b) => {
      if (a.sortOrder === 0 && a.isPopular) return -1
      if (b.sortOrder === 0 && b.isPopular) return 1
      return a.sortOrder - b.sortOrder
    })
  }, [products])

  const handleCustomAmount = () => {
    setShowCustomModal(true)
  }

  const handleSelectCustomAmount = (amount) => {
    const customProduct = products.find(p => p.isCustomAmount)
    if (customProduct) {
      setCustomAmount(amount)
      setSelectedProduct(customProduct)
      setShowCustomModal(false)
    }
  }

  const handleCloseCheckout = () => {
    setSelectedProduct(null)
    setCustomAmount(null)
  }

  if (isLoading) return <LoadingSpinner />
  if (error) return <div className="error-message">Nie udało się załadować produktów</div>
  if (!products || products.length === 0) return <div className="error-message">Brak produktów w sklepie</div>

  return (
    <section id="shop" className="shop-section-koziamc">
      <div className="container">
        <div className="shop-header-koziamc">
          <div className="shop-badge-header">
            <span className="badge-dot"></span>
            <span>OFERTA SKLEPU</span>
          </div>
          <h2 className="section-title-koziamc" style={{ textAlign: 'center' }}>
            <span className="title-gradient">Doładowania</span>
          </h2>
          <p className="section-subtitle-koziamc" style={{ textAlign: 'center' }}>
            Już teraz możesz doładować konto. Kup doładowanie i korzystaj z niego na serwerze.
          </p>
        </div>

        <div className="shop-controls-koziamc">
          <div className="shop-stats">
            <div className="stat-item">
              <i className="fas fa-box"></i>
              <span>Dostępne: <strong>{sortedProducts.length}</strong></span>
            </div>
          </div>
        </div>

        <div className="products-grid-koziamc">
          {sortedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onBuy={setSelectedProduct}
              onCustomAmount={handleCustomAmount}
            />
          ))}
        </div>

        {showCustomModal && (
          <CustomAmountModal
            onClose={() => setShowCustomModal(false)}
            onSelectAmount={handleSelectCustomAmount}
          />
        )}

        {selectedProduct && (
          <CheckoutModal
            product={selectedProduct}
            customAmount={customAmount}
            onClose={handleCloseCheckout}
          />
        )}
      </div>
    </section>
  )
}

export default Shop