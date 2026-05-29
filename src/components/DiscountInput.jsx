import React, { useState } from 'react'

const DiscountInput = ({ onApplyDiscount, originalAmount }) => {
  const [code, setCode] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [discount, setDiscount] = useState(null)

  const handleApply = async () => {
    if (!code.trim()) {
      setMessage('Wpisz kod rabatowy')
      return
    }

    if (originalAmount < 10) {
      setMessage('Kody rabatowe można użyć tylko przy zakupach powyżej 10 PLN')
      return
    }

    setLoading(true)
    setMessage('')

    try {
      const response = await fetch('/api/discounts/validate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          code: code.trim(),
          amount: originalAmount
        }),
      })

      const result = await response.json()

      if (result.ok && result.data.valid) {
        setDiscount(result.data)
        setMessage(result.data.message)
        onApplyDiscount(result.data)
      } else {
        setMessage(result.data?.message || 'Nieprawidłowy kod')
        setDiscount(null)
        onApplyDiscount(null)
      }
    } catch (error) {
      setMessage('Błąd sprawdzania kodu')
      setDiscount(null)
      onApplyDiscount(null)
    } finally {
      setLoading(false)
    }
  }

  const handleRemove = () => {
    setCode('')
    setDiscount(null)
    setMessage('')
    onApplyDiscount(null)
  }

  const calculateDiscount = () => {
    if (!discount || !originalAmount) return 0
    
    if (discount.type === 'percentage') {
      return Math.round((originalAmount * discount.value) / 100 * 100) / 100
    } else {
      return Math.min(discount.value, originalAmount)
    }
  }

  const discountAmount = calculateDiscount()

  return (
    <div className="discount-input-container">
      <label>Kod rabatowy (opcjonalnie)</label>
      <div className="discount-input-wrapper">
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value.toUpperCase())}
          placeholder="Wpisz kod"
          disabled={!!discount}
          className="discount-code-input"
          onKeyPress={(e) => e.key === 'Enter' && handleApply()}
        />
        {!discount ? (
          <button
            type="button"
            onClick={handleApply}
            disabled={loading || !code.trim()}
            className="btn-apply-discount"
          >
            {loading ? '...' : 'Zastosuj'}
          </button>
        ) : (
          <button
            type="button"
            onClick={handleRemove}
            className="btn-remove-discount"
          >
            Usuń
          </button>
        )}
      </div>
      
      {message && (
        <div className={`discount-message ${discount ? 'success' : 'error'}`}>
          {message}
        </div>
      )}
      
      {discount && discountAmount > 0 && (
        <div className="discount-summary">
          <div className="discount-detail">
            <span>Zniżka:</span>
            <span className="discount-value">-{discountAmount.toFixed(2)} PLN</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default DiscountInput