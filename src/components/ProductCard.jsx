import React from 'react'

const formatPrice = (price) => {
  return new Intl.NumberFormat('pl-PL', { style: 'currency', currency: 'PLN' }).format(price)
}

const ProductCard = ({ product, onBuy, onCustomAmount }) => {
  if (!product) return null
  
  const calculateBonus = (amount) => {
    if (amount >= 200) return Math.floor(amount * 0.1)
    if (amount >= 100) return Math.floor(amount * 0.08)
    if (amount >= 50) return Math.floor(amount * 0.05)
    if (amount >= 20) return Math.floor(amount * 0.03)
    return 0
  }

  if (product.isCustomAmount) {
    return (
      <div className="product-card-koziamc">
        {product.isPopular && (
          <div className="product-badge-koziamc popular-badge-koziamc">
            <i className="fas fa-fire"></i>
            <span>POPULARNE</span>
          </div>
        )}
        <div className="product-glow"></div>
        <div className="product-image-koziamc">
          <img src={product.imageUrl || '/logo.png'} alt={product.name} />
          <div className="product-image-overlay">
            <i className="fas fa-coins"></i>
          </div>
        </div>
        <div className="product-content-koziamc" style={{ textAlign: 'center' }}>
          <h3 className="product-name-koziamc">{product.name}</h3>
          <div className="product-price-koziamc">
            <span className="price-main">2,00 zł</span>
          </div>
          <button className="btn-buy-koziamc" onClick={(e) => {
            e.stopPropagation()
            onCustomAmount && onCustomAmount()
          }}>
            <span>Wybierz kwotę</span>
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="product-card-koziamc">
      {product.isPopular && (
        <div className="product-badge-koziamc popular-badge-koziamc">
          <i className="fas fa-fire"></i>
          <span>POPULARNE</span>
        </div>
      )}
      <div className="product-glow"></div>
      <div className="product-image-koziamc">
        <img src={product.imageUrl || '/logo.png'} alt={product.name} />
        <div className="product-image-overlay">
          <i className="fas fa-coins"></i>
        </div>
      </div>
      <div className="product-content-koziamc" style={{ textAlign: 'center' }}>
        <h3 className="product-name-koziamc">{product.name}</h3>
        <div className="product-price-koziamc">
          <span className="price-main">{formatPrice(product.price)}</span>
        </div>
        <button className="btn-buy-koziamc" onClick={(e) => {
          e.stopPropagation()
          onBuy(product)
        }}>
          <span>Kup teraz</span>
        </button>
      </div>
    </div>
  )
}

export default ProductCard