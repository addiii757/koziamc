import React from 'react'

const PlatnoscBlad = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)', padding: '2rem' }}>
      <div style={{ maxWidth: '650px', width: '100%', background: 'rgba(20,20,20,0.95)', borderRadius: '24px', padding: '3rem', border: '2px solid rgba(239,68,68,0.2)', backdropFilter: 'blur(10px)', boxShadow: '0 8px 32px rgba(0,0,0,0.4)' }}>
        
        {/* Icon */}
        <div style={{ width: '100px', height: '100px', margin: '0 auto 1.5rem', background: 'linear-gradient(135deg, rgba(239,68,68,0.15), rgba(220,38,38,0.1))', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '3px solid rgba(239,68,68,0.3)' }}>
          <svg width="50" height="50" viewBox="0 0 24 24" fill="none" style={{ color: '#ef4444' }}>
            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        {/* Title */}
        <h1 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '0.75rem', color: '#ef4444', textAlign: 'center', letterSpacing: '-0.02em' }}>
          Transakcja przerwana
        </h1>

        {/* Subtitle */}
        <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '2.5rem', fontSize: '1rem', textAlign: 'center', lineHeight: '1.6' }}>
          Płatność została anulowana przed finalizacją. Środki pozostają na Twoim koncie.
        </p>

        {/* Error Info */}
        <div style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: '16px', padding: '1.75rem', marginBottom: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ color: '#ef4444', flexShrink: 0 }}>
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
              <path d="M12 8v4M12 16h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <h3 style={{ color: '#ef4444', margin: 0, fontSize: '1.1rem', fontWeight: '700' }}>Płatność nieukończona</h3>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.7)', margin: 0, fontSize: '0.95rem', lineHeight: '1.6' }}>
            Transakcja nie została dokończona. Żadne środki nie zostały pobrane z Twojego konta.
          </p>
        </div>

        {/* Possible Causes */}
        <div style={{ background: 'rgba(255,255,255,0.02)', borderRadius: '16px', padding: '1.75rem', marginBottom: '2rem', border: '1px solid rgba(255,255,255,0.06)' }}>
          <h4 style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '1.25rem', fontSize: '0.95rem', fontWeight: '600', textAlign: 'center' }}>
            Co mogło pójść nie tak?
          </h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            <li style={{ color: 'rgba(255,255,255,0.6)', display: 'flex', gap: '0.75rem', fontSize: '0.9rem', lineHeight: '1.5' }}>
              <span style={{ color: '#ef4444', flexShrink: 0, fontWeight: '700', fontSize: '1.2rem' }}>×</span>
              <span>Transakcja została przerwana przed zakończeniem</span>
            </li>
            <li style={{ color: 'rgba(255,255,255,0.6)', display: 'flex', gap: '0.75rem', fontSize: '0.9rem', lineHeight: '1.5' }}>
              <span style={{ color: '#ef4444', flexShrink: 0, fontWeight: '700', fontSize: '1.2rem' }}>×</span>
              <span>Niewystarczająca ilość środków na koncie</span>
            </li>
            <li style={{ color: 'rgba(255,255,255,0.6)', display: 'flex', gap: '0.75rem', fontSize: '0.9rem', lineHeight: '1.5' }}>
              <span style={{ color: '#ef4444', flexShrink: 0, fontWeight: '700', fontSize: '1.2rem' }}>×</span>
              <span>Odrzucenie przez bank lub system płatności</span>
            </li>
            <li style={{ color: 'rgba(255,255,255,0.6)', display: 'flex', gap: '0.75rem', fontSize: '0.9rem', lineHeight: '1.5' }}>
              <span style={{ color: '#ef4444', flexShrink: 0, fontWeight: '700', fontSize: '1.2rem' }}>×</span>
              <span>Problem z połączeniem internetowym</span>
            </li>
          </ul>
        </div>

        {/* Next Steps */}
        <div style={{ background: 'rgba(99,102,241,0.05)', border: '1px solid rgba(99,102,241,0.15)', borderRadius: '16px', padding: '1.5rem' }}>
          <h4 style={{ color: '#a5b4fc', marginBottom: '1rem', fontSize: '0.95rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontSize: '1.2rem' }}>💡</span>
            Co możesz zrobić?
          </h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <li style={{ color: 'rgba(255,255,255,0.7)', display: 'flex', gap: '0.75rem', fontSize: '0.9rem', lineHeight: '1.5' }}>
              <span style={{ color: '#818cf8', flexShrink: 0, fontWeight: '700' }}>→</span>
              <span>Sprawdź stan konta i spróbuj ponownie</span>
            </li>
            <li style={{ color: 'rgba(255,255,255,0.7)', display: 'flex', gap: '0.75rem', fontSize: '0.9rem', lineHeight: '1.5' }}>
              <span style={{ color: '#818cf8', flexShrink: 0, fontWeight: '700' }}>→</span>
              <span>Upewnij się, że Twoje połączenie jest stabilne</span>
            </li>
            <li style={{ color: 'rgba(255,255,255,0.7)', display: 'flex', gap: '0.75rem', fontSize: '0.9rem', lineHeight: '1.5' }}>
              <span style={{ color: '#818cf8', flexShrink: 0, fontWeight: '700' }}>→</span>
              <span>Jeśli problem się powtarza, skontaktuj się z nami</span>
            </li>
          </ul>
        </div>

        {/* Footer */}
        <div style={{ marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.08)', textAlign: 'center' }}>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem', margin: 0 }}>
            Potrzebujesz pomocy? Napisz do nas: <a href="mailto:smoczyfn.business@gmail.com" style={{ color: '#ef4444', textDecoration: 'none', fontWeight: '600' }}>smoczyfn.business@gmail.com</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default PlatnoscBlad