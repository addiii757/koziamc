import React, { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import PageLayout from '../components/PageLayout'

const redeemVoucher = async (data) => {
  const response = await fetch('/api/vouchers/redeem', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  if (!response.ok) throw new Error('Nieprawidłowy kod lub nick')
  return response.json()
}

const VoucherPage = () => {
  const [nickname, setNickname] = useState('')
  const [code, setCode] = useState('')
  const [message, setMessage] = useState(null)

  const mutation = useMutation({
    mutationFn: redeemVoucher,
    onSuccess: (data) => {
      setMessage({ type: 'success', text: data.data?.message || 'Voucher aktywowany!' })
      setNickname('')
      setCode('')
    },
    onError: (error) => {
      setMessage({ type: 'error', text: error.message })
    },
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!nickname || !code) {
      setMessage({ type: 'error', text: 'Wypełnij wszystkie pola' })
      return
    }
    mutation.mutate({ playerNick: nickname, code: code.toUpperCase() })
  }

  return (
    <PageLayout title="Voucher" kanji="券">
      <div className="voucher-container">
        <p className="voucher-description">Wpisz nick i kod, a nagroda zostanie przypisana do Twojego konta.</p>
        <form onSubmit={handleSubmit} className="voucher-form">
          <input type="text" placeholder="Nick w grze" value={nickname} onChange={(e) => setNickname(e.target.value)} className="voucher-input" />
          <input type="text" placeholder="Kod vouchera" value={code} onChange={(e) => setCode(e.target.value.toUpperCase())} className="voucher-input" />
          <button type="submit" className="btn-primary" disabled={mutation.isPending}>
            {mutation.isPending ? 'Aktywowanie...' : 'Aktywuj voucher'}
          </button>
        </form>
        {message && <div className={`voucher-message ${message.type}`}>{message.text}</div>}
      </div>
    </PageLayout>
  )
}

export default VoucherPage