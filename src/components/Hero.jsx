import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useCopyToClipboard } from '../hooks/useCopyToClipboard'

const Hero = () => {
  const { copied, copy } = useCopyToClipboard()
  const heroRef = useRef(null)
  const [serverStatus, setServerStatus] = useState({
    online: false,
    players: { online: 0, max: 100 },
    version: '1.21.8'
  })

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.scrollY
        heroRef.current.style.transform = `translateY(${scrolled * 0.5}px)`
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const fetchServerStatus = async () => {
      try {
        const response = await fetch('/api/server/status')
        const result = await response.json()
        if (result.ok) {
          setServerStatus(result.data)
        }
      } catch (error) {
        console.error('Błąd pobierania statusu serwera:', error)
      }
    }

    fetchServerStatus()
    const interval = setInterval(fetchServerStatus, 30000) // Odświeżanie co 30 sekund
    return () => clearInterval(interval)
  }, [])

  const handleCopyIP = () => {
    copy('koziamc.pl')
  }

  return (
    <section className="hero-koziamc">
      <div className="hero-bg-koziamc" ref={heroRef}>
        <div className="hero-particles"></div>
      </div>
      
      <div className="hero-kanji-left">山</div>
      <div className="hero-kanji-right">羊</div>
      
      <div className="hero-content-koziamc">
        <div className="hero-badge-koziamc">
          <span className={`badge-dot ${serverStatus.online ? 'online' : 'offline'}`}></span>
          <span>SERWER {serverStatus.online ? 'ONLINE' : 'OFFLINE'}</span>
        </div>
        
        <h1 className="hero-title-koziamc">
          <span className="title-main">KOZIAMC</span>
          <span className="title-subtitle">• MINECRAFT • SPOŁECZNOŚĆ</span>
        </h1>

        <p className="hero-description-koziamc">
          KoziaMC to serwer Minecraft z doskonałą rozrywką, aktywną społecznością i wyjątkowym klimatem. Wejdź do gry, nawiąż kontakty i bądź częścią unikalnej przygody.
        </p>

<div className="hero-actions">
  <Link to="/#shop" className="btn-hero-primary" onClick={(e) => {
    e.preventDefault();
    const element = document.getElementById('shop');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }}>
    <i className="fas fa-shopping-bag"></i>
    <span>Sklep</span>
  </Link>
  <a href="https://discord.gg/koziamc" target="_blank" rel="noopener noreferrer" className="btn-hero-secondary">
    <span>Discord</span>
    <i className="fas fa-arrow-right"></i>
  </a>
</div>

        <div className="hero-server-status">
          <div className="server-online-box">
            <div className="online-indicator">
              <span className={`online-dot ${serverStatus.online ? 'online' : 'offline'}`}></span>
              <span className="online-count">{serverStatus.players.online} / {serverStatus.players.max}</span>
            </div>
            <span className="online-label">GRACZY ONLINE</span>
          </div>
          
          <div className="server-ip-display">
            <label className="ip-label-small">ADRES SERWERA</label>
            <div className="ip-copy-wrapper">
              <code className="server-ip-code">koziamc.pl</code>
              <button className="copy-btn-icon" onClick={handleCopyIP} title="Kopiuj">
                <i className={copied ? "fas fa-check" : "far fa-copy"}></i>
              </button>
            </div>
          </div>
          
          <div className="server-version-box">
            <span className="version-number">1.21.8</span>
            <span className="version-label">Java Edition</span>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <span></span>
      </div>
    </section>
  )
}

export default Hero