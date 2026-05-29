import React, { useState } from 'react'
import { useMutation } from '@tanstack/react-query'

const createCheckout = async (data) => {
  const response = await fetch('/api/create-checkout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  if (!response.ok) throw new Error('Błąd tworzenia płatności')
  return response.json()
}

const CheckoutModal = ({ product, customAmount, onClose }) => {
  const [nickname, setNickname] = useState('')
  const [email, setEmail] = useState('')
  const [voucherCode, setVoucherCode] = useState('')
  const [voucherStatus, setVoucherStatus] = useState(null)
  const [voucherMessage, setVoucherMessage] = useState('')
  const [voucherDiscount, setVoucherDiscount] = useState(null)
  const [termsAccepted, setTermsAccepted] = useState(false)
  const [digitalConsent, setDigitalConsent] = useState(false)

  const amount = customAmount || product.price
  
  const calculateBonus = (amt) => {
    if (amt >= 200) return Math.floor(amt * 0.1)
    if (amt >= 100) return Math.floor(amt * 0.08)
    if (amt >= 50) return Math.floor(amt * 0.05)
    if (amt >= 20) return Math.floor(amt * 0.03)
    return 0
  }

  const bonus = calculateBonus(amount)
  
  const calculateVoucherDiscount = () => {
    if (!voucherDiscount) return 0
    if (voucherDiscount.type === 'percentage') {
      return Math.round((amount * voucherDiscount.value) / 100 * 100) / 100
    }
    return Math.min(voucherDiscount.value, amount)
  }

  const voucherDiscountAmount = calculateVoucherDiscount()
  const finalAmount = Math.max(amount - voucherDiscountAmount, 0)
  const totalCoins = amount + bonus

  const mutation = useMutation({
    mutationFn: createCheckout,
    onSuccess: (data) => {
      window.location.href = data.url
    },
  })

  const handleVoucherCheck = async () => {
    if (!voucherCode.trim() || !nickname.trim()) {
      setVoucherStatus('error')
      setVoucherMessage('Najpierw wpisz swój nick i kod vouchera')
      return
    }

    if (amount < 10) {
      setVoucherStatus('error')
      setVoucherMessage('✗ Vouchery można użyć tylko przy zakupach powyżej 10 PLN')
      return
    }

    setVoucherStatus('checking')
    setVoucherMessage('Sprawdzanie vouchera...')

    try {
      const response = await fetch('/api/vouchers/validate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          code: voucherCode.trim().toUpperCase(),
          nickname: nickname.trim(),
          amount: amount
        }),
      })

      const result = await response.json()

      if (result.ok && result.data.valid) {
        setVoucherStatus('success')
        setVoucherMessage(`✓ Pomyślnie aktywowano voucher! Rabat: ${result.data.type === 'percentage' ? result.data.value + '%' : result.data.value + ' PLN'}`)
        setVoucherDiscount(result.data)
      } else {
        setVoucherStatus('error')
        setVoucherMessage(result.data?.message || '✗ Nieprawidłowy lub wykorzystany voucher')
        setVoucherDiscount(null)
      }
    } catch (error) {
      setVoucherStatus('error')
      setVoucherMessage('✗ Błąd sprawdzania vouchera')
      setVoucherDiscount(null)
    }
  }

  const handleRemoveVoucher = () => {
    setVoucherCode('')
    setVoucherStatus(null)
    setVoucherMessage('')
    setVoucherDiscount(null)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!nickname || !email || !termsAccepted || !digitalConsent) {
      alert('Wypełnij wszystkie pola i zaakceptuj wymagane zgody')
      return
    }
    
    const checkoutData = {
      amount: finalAmount,
      nickname,
      email,
      productId: product.id,
      productName: product.name,
      productType: product.productType || 'coins',
      voucherCode: voucherDiscount ? voucherCode : null,
    }
    
    if (product.productType === 'coins' || !product.productType) {
      checkoutData.coins = totalCoins
    } else {
      checkoutData.coins = 0
    }
    
    if (product.productType === 'item' && product.rconCommands) {
      checkoutData.rconCommands = product.rconCommands
    }
    
    mutation.mutate(checkoutData)
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content checkout-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <h3>{customAmount ? 'Doładowanie dowolnej kwoty' : product.name}</h3>
        
        <div className="checkout-summary">
          {voucherDiscountAmount > 0 && (
            <div className="summary-row">
              <span>Cena pierwotna:</span>
              <span className="summary-value">{amount.toFixed(2)} PLN</span>
            </div>
          )}
          {voucherDiscountAmount > 0 && (
            <div className="summary-row discount-row">
              <span>Rabat z vouchera:</span>
              <span className="summary-value discount">-{voucherDiscountAmount.toFixed(2)} PLN</span>
            </div>
          )}
          <div className="summary-row total-row">
            <span>Do zapłaty:</span>
            <span className="summary-value total">{finalAmount.toFixed(2)} PLN</span>
          </div>
          {(product.productType === 'coins' || !product.productType) && (
            <div className="summary-row coins-row">
              <span>Otrzymasz:</span>
              <span className="summary-value coins">
                {totalCoins.toFixed(0)} vPLN
                {bonus > 0 && <span className="bonus-tag"> +{bonus} bonus</span>}
              </span>
            </div>
          )}
          {product.productType === 'item' && (
            <div className="summary-row item-row">
              <span>Otrzymasz:</span>
              <span className="summary-value item">{product.name}</span>
            </div>
          )}
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nick w grze *</label>
            <input
              type="text"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              placeholder="Twój nick Minecraft"
              required
            />
          </div>

          <div className="form-group">
            <label>Voucher (opcjonalnie)</label>
            <div className="discount-input-wrapper">
              <input
                type="text"
                value={voucherCode}
                onChange={(e) => setVoucherCode(e.target.value.toUpperCase())}
                placeholder="Wpisz kod vouchera"
                disabled={voucherStatus === 'success'}
                className="discount-code-input"
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleVoucherCheck())}
              />
              {voucherStatus !== 'success' ? (
                <button
                  type="button"
                  onClick={handleVoucherCheck}
                  disabled={voucherStatus === 'checking' || !voucherCode.trim() || !nickname.trim()}
                  className="btn-apply-discount"
                >
                  {voucherStatus === 'checking' ? '...' : 'Aktywuj'}
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleRemoveVoucher}
                  className="btn-remove-discount"
                >
                  Usuń
                </button>
              )}
            </div>
            {voucherMessage && (
              <div className={`discount-message ${voucherStatus}`}>
                {voucherMessage}
              </div>
            )}
          </div>

          <div className="form-group">
            <label>Adres e-mail *</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="twoj@email.pl"
              required
            />
          </div>

          <div className="checkbox-group">
            <label>
              <input
                type="checkbox"
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
              />
              Akceptuję <a href="/regulamin" target="_blank">Regulamin</a> i <a href="/polityka" target="_blank">Politykę Prywatności</a>
            </label>
          </div>

          <div className="checkbox-group">
            <label>
              <input
                type="checkbox"
                checked={digitalConsent}
                onChange={(e) => setDigitalConsent(e.target.checked)}
              />
              Wyrażam zgodę na dostarczenie treści cyfrowej przed upływem 14 dni
            </label>
          </div>

          <button type="submit" className="btn-checkout" disabled={mutation.isPending}>
            {mutation.isPending ? 'Przetwarzanie...' : `Zapłać ${finalAmount.toFixed(2)} PLN`}
          </button>
        </form>
      </div>
    </div>
  )
}

export default CheckoutModal