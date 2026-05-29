import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const PlatnoscSukces = () => {
  const [searchParams] = useSearchParams()
  const nickname = searchParams.get('nickname')
  const coins = searchParams.get('coins')
  const productName = searchParams.get('productName')
  const productType = searchParams.get('productType')
  const sessionId = searchParams.get('session_id')
  const [orderSaved, setOrderSaved] = useState(false)

  useEffect(() => {
    const saveOrder = async () => {
      if (!sessionId || !nickname || orderSaved) return
      
      try {
        console.log('💾 Zapisywanie zamówienia do MongoDB...')
        
        const apiUrl = import.meta.env.PROD
          ? '/api/orders/complete'
          : 'http://localhost:3000/api/orders/complete'
        
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            sessionId,
            nickname,
            coins: parseInt(coins) || 0,
            productName: productName || 'Doładowanie konta',
            productType: productType || 'coins'
          }),
        })

        const data = await response.json()
        if (data.ok) {
          setOrderSaved(true)
          console.log('✅ Zamówienie zapisane w MongoDB:', data.order?.orderNumber)
        } else {
          console.error('❌ Błąd zapisu:', data.error)
        }
      } catch (err) {
        console.error('❌ Błąd połączenia:', err)
      }
    }

    const timer = setTimeout(saveOrder, 1000)
    return () => clearTimeout(timer)
  }, [sessionId, nickname, coins, productName, productType, orderSaved])

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)', padding: '2rem' }}>
      <div style={{ maxWidth: '650px', width: '100%', background: 'rgba(20,20,20,0.95)', borderRadius: '24px', padding: '3rem', border: '2px solid rgba(34,197,94,0.2)', backdropFilter: 'blur(10px)', boxShadow: '0 8px 32px rgba(0,0,0,0.4)' }}>
        
        {/* Icon */}
        <div style={{ width: '100px', height: '100px', margin: '0 auto 1.5rem', background: 'linear-gradient(135deg, rgba(34,197,94,0.15), rgba(22,163,74,0.1))', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '3px solid rgba(34,197,94,0.3)' }}>
          <svg width="50" height="50" viewBox="0 0 24 24" fill="none" style={{ color: '#22c55e' }}>
            <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        {/* Title */}
        <h1 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '0.75rem', color: '#22c55e', textAlign: 'center', letterSpacing: '-0.02em' }}>
          Płatność potwierdzona
        </h1>

        {/* Subtitle */}
        <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '2.5rem', fontSize: '1rem', textAlign: 'center', lineHeight: '1.6' }}>
          Płatność została zaksięgowana. Produkt trafi na wskazany nick po potwierdzeniu przez system.
        </p>

        {/* Order Details */}
        <div style={{ background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: '16px', padding: '1.75rem', marginBottom: '2rem' }}>
          <h3 style={{ color: 'rgba(255,255,255,0.8)', margin: '0 0 1.25rem 0', fontSize: '0.95rem', fontWeight: '600' }}>Szczegóły transakcji</h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem' }}>Numer zamówienia</span>
              <span style={{ color: 'rgba(255,255,255,0.9)', fontWeight: '600', fontSize: '0.85rem', fontFamily: 'monospace', textAlign: 'right' }}>{sessionId ? sessionId.substring(0, 15) : '---'}</span>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem' }}>Identyfikator płatności</span>
              <span style={{ color: 'rgba(255,255,255,0.9)', fontWeight: '600', fontSize: '0.85rem', fontFamily: 'monospace', textAlign: 'right', wordBreak: 'break-all', maxWidth: '60%' }}>{sessionId || '---'}</span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem' }}>Nick</span>
              <span style={{ color: 'rgba(255,255,255,0.9)', fontWeight: '600', fontSize: '0.85rem', textAlign: 'right' }}>{nickname || '---'}</span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem' }}>Produkt</span>
              <span style={{ color: 'rgba(255,255,255,0.9)', fontWeight: '600', fontSize: '0.85rem', textAlign: 'right' }}>{productName || 'Doładowanie konta'}</span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem' }}>Kwota</span>
              <span style={{ color: '#22c55e', fontWeight: '700', fontSize: '0.95rem', textAlign: 'right' }}>{coins || '0'} vPLN</span>
            </div>
          </div>
        </div>

        {/* Important Info */}
        <div style={{ background: 'rgba(234,179,8,0.08)', border: '1px solid rgba(234,179,8,0.2)', borderRadius: '16px', padding: '1.75rem', marginBottom: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ color: '#eab308', flexShrink: 0 }}>
              <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <h3 style={{ color: '#eab308', margin: 0, fontSize: '1.1rem', fontWeight: '700' }}>Ważne informacje</h3>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.7)', margin: 0, fontSize: '0.95rem', lineHeight: '1.6' }}>
            vPLN zostaną automatycznie dodane do Twojego konta gdy będziesz online na serwerze!
          </p>
        </div>

        {/* Co dalej? */}
        <div style={{ background: 'rgba(255,255,255,0.02)', borderRadius: '16px', padding: '1.75rem', marginBottom: '2rem', border: '1px solid rgba(255,255,255,0.06)' }}>
          <h4 style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '1.25rem', fontSize: '0.95rem', fontWeight: '600' }}>
            Co dalej?
          </h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            <li style={{ color: 'rgba(255,255,255,0.6)', display: 'flex', gap: '0.75rem', fontSize: '0.9rem', lineHeight: '1.5' }}>
              <span style={{ color: '#22c55e', flexShrink: 0, fontWeight: '700' }}>•</span>
              <span>Wejdź na serwer koziamc i sprawdź zakupiony produkt.</span>
            </li>
            <li style={{ color: 'rgba(255,255,255,0.6)', display: 'flex', gap: '0.75rem', fontSize: '0.9rem', lineHeight: '1.5' }}>
              <span style={{ color: '#22c55e', flexShrink: 0, fontWeight: '700' }}>•</span>
              <span>Jeżeli produkt nie pojawi się w grze po kilku minutach, zachowaj identyfikator płatności i skontaktuj się z administracją.</span>
            </li>
          </ul>
        </div>

        {/* Action Button */}
        <a 
          href="/" 
          style={{ 
            display: 'block', 
            width: '100%', 
            background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)', 
            color: 'white', 
            padding: '1rem', 
            borderRadius: '12px', 
            textAlign: 'center', 
            textDecoration: 'none', 
            fontWeight: '700', 
            fontSize: '1rem',
            border: 'none',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 12px rgba(34,197,94,0.3)'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)'
            e.currentTarget.style.boxShadow = '0 6px 16px rgba(34,197,94,0.4)'
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(34,197,94,0.3)'
          }}
        >
          Powrót do strony głównej
        </a>

        {/* Footer */}
        <div style={{ marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.08)', textAlign: 'center' }}>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem', margin: 0 }}>
            Potrzebujesz pomocy? Napisz do nas: <a href="mailto:smoczyfn.business@gmail.com" style={{ color: '#22c55e', textDecoration: 'none', fontWeight: '600' }}>smoczyfn.business@gmail.com</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default PlatnoscSukces