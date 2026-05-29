import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useCopyToClipboard } from '../hooks/useCopyToClipboard'

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { copied, copy } = useCopyToClipboard()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location])

  const navLinks = [
    { name: 'START', path: '/', isAnchor: true, scrollToTop: true },
    { name: 'SKLEP', path: '/#shop', isAnchor: true, targetId: 'shop' },
    { name: 'OSTATNIE', path: '/#ostatnie', isAnchor: true, targetId: 'ostatnie' },
    { name: 'FAQ', path: '/faq' },
    { name: 'REGULAMIN', path: '/regulamin' },
  ]

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true
    if (path !== '/' && location.pathname.startsWith(path)) return true
    return false
  }

  const handleCopyIP = () => {
    copy('koziamc.pl')
  }

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <img src="/logo.png" alt="KOZIAMC" />
          <span>KOZIAMC</span>
        </Link>

        <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.path}>
              {link.isAnchor ? (
                <a
                  href={link.path}
                  className={`nav-link ${isActive(link.path) ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault()
                    if (link.scrollToTop) {
                      window.scrollTo({ top: 0, behavior: 'smooth' })
                    } else if (link.targetId) {
                      const element = document.getElementById(link.targetId)
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                      }
                    }
                  }}
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  to={link.path}
                  className={`nav-link ${isActive(link.path) ? 'active' : ''}`}
                >
                  {link.name}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <button className="ip-badge" onClick={handleCopyIP} title="Kliknij aby skopiować">
            <span className="ip-text">koziamc.pl</span>
            <span className="ip-version">1.21.8</span>
            {copied && <span className="copied-tooltip">Skopiowano!</span>}
          </button>

          <a
            href="https://discord.gg/koziamc"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-discord-small"
          >
            <i className="fab fa-discord"></i>
          </a>

          <div className={`hamburger ${mobileMenuOpen ? 'active' : ''}`} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header