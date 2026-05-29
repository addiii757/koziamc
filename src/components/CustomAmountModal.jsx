import React, { useState } from 'react'

const CustomAmountModal = ({ onClose, onSelectAmount }) => {
  const [amount, setAmount] = useState(50)
  const minAmount = 2
  const maxAmount = 500

  const calculateBonus = (amt) => {
    if (amt >= 200) return Math.floor(amt * 0.1)
    if (amt >= 100) return Math.floor(amt * 0.08)
    if (amt >= 50) return Math.floor(amt * 0.05)
    if (amt >= 20) return Math.floor(amt * 0.03)
    return 0
  }

  const bonus = calculateBonus(amount)
  const totalCoins = amount + bonus

  const handleSubmit = (e) => {
    e.preventDefault()
    if (amount >= minAmount && amount <= maxAmount) {
      onSelectAmount(amount)
    }
  }

  const handleSliderChange = (e) => {
    setAmount(parseInt(e.target.value))
  }

  const handleInputChange = (e) => {
    const value = parseInt(e.target.value) || minAmount
    setAmount(Math.min(maxAmount, Math.max(minAmount, value)))
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content custom-amount-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        
        <h3>Wybierz dowolną kwotę</h3>
        <p className="modal-subtitle">Od {minAmount} zł do {maxAmount} zł</p>

        <form onSubmit={handleSubmit}>
          <div className="amount-display">
            <div className="amount-value">{amount} PLN</div>
            <div className="amount-coins">
              +{totalCoins} zł na konto
            </div>
          </div>

          <div className="amount-slider-container">
            <input
              type="range"
              min={minAmount}
              max={maxAmount}
              value={amount}
              onChange={handleSliderChange}
              className="amount-slider"
            />
            <div className="slider-labels">
              <span>{minAmount} zł</span>
              <span>{maxAmount} zł</span>
            </div>
          </div>

          <div className="form-group">
            <label>Lub wpisz dokładną kwotę:</label>
            <input
              type="number"
              min={minAmount}
              max={maxAmount}
              value={amount}
              onChange={handleInputChange}
              className="amount-input"
            />
          </div>


          <button type="submit" className="btn-checkout">
            Przejdź do płatności
          </button>
        </form>
      </div>
    </div>
  )
}

export default CustomAmountModal