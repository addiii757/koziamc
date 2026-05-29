import React, { useState, useEffect } from 'react'

const CookieConsent = () => {
  const [visible, setVisible] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  })

  useEffect(() => {
    const consent = localStorage.getItem('koziamc-cookie-consent')
    if (!consent) {
      setTimeout(() => setVisible(true), 1000)
    } else {
      const parsed = JSON.parse(consent)
      setPreferences(parsed)
    }
  }, [])

  const saveConsent = (prefs) => {
    localStorage.setItem('koziamc-cookie-consent', JSON.stringify(prefs))
    setPreferences(prefs)
    setVisible(false)
    setShowSettings(false)
  }

  const acceptAll = () => {
    saveConsent({ necessary: true, analytics: true, marketing: true })
  }

  const rejectAll = () => {
    saveConsent({ necessary: true, analytics: false, marketing: false })
  }

  const savePreferences = () => {
    saveConsent(preferences)
  }

  if (!visible) return null

  return (
    <div className="cookie-consent">
      {!showSettings ? (
        <>
          <h4>🍪 Ustawienia plików cookie</h4>
          <p>
            Używamy plików cookie, aby zapewnić najlepsze doświadczenia na naszej stronie.
            Możesz zaakceptować wszystkie lub dostosować ustawienia.
          </p>
          <div className="cookie-buttons">
            <button className="cookie-btn cookie-btn-accept" onClick={acceptAll}>
              Akceptuj wszystkie
            </button>
            <button className="cookie-btn cookie-btn-settings" onClick={() => setShowSettings(true)}>
              Dostosuj
            </button>
            <button className="cookie-btn cookie-btn-settings" onClick={rejectAll}>
              Odrzuć
            </button>
          </div>
        </>
      ) : (
        <>
          <h4>🍪 Dostosuj ustawienia</h4>
          <div className="cookie-settings">
            <label>
              <input type="checkbox" checked={preferences.necessary} disabled />
              <span>Niezbędne (zawsze aktywne)</span>
            </label>
            <label>
              <input
                type="checkbox"
                checked={preferences.analytics}
                onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
              />
              <span>Analityczne</span>
            </label>
            <label>
              <input
                type="checkbox"
                checked={preferences.marketing}
                onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
              />
              <span>Marketingowe</span>
            </label>
          </div>
          <div className="cookie-buttons">
            <button className="cookie-btn cookie-btn-accept" onClick={savePreferences}>
              Zapisz ustawienia
            </button>
            <button className="cookie-btn cookie-btn-settings" onClick={() => setShowSettings(false)}>
              Wstecz
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default CookieConsent