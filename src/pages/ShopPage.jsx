import React, { useState, useMemo } from 'react'
import { useQuery } from '@tanstack/react-query'
import PageLayout from '../components/PageLayout'
import ProductCard from '../components/ProductCard'
import CheckoutModal from '../components/CheckoutModal'
import CustomAmountModal from '../components/CustomAmountModal'
import LoadingSpinner from '../components/LoadingSpinner'

const fetchProducts = async () => {
  const response = await fetch('/api/products')
  if (!response.ok) throw new Error('Błąd ładowania')
  return response.json()
}

const ShopPage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [customAmount, setCustomAmount] = useState(null)
  const [showCustomModal, setShowCustomModal] = useState(false)
  const { data, isLoading, error } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
    staleTime: 5 * 60 * 1000,
  })

  const products = data?.data || []

  const sortedProducts = useMemo(() => {
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
  if (error) return <div className="error">Nie udało się załadować produktów</div>

  return (
    <PageLayout title="Sklep" kanji="店">
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
    </PageLayout>
  )
}

export default ShopPage