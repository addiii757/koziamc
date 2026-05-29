import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { name: 'Strona Główna', path: '/', isAnchor: true, scrollToTop: true },
    { name: 'Sklep', path: '/#shop', isAnchor: true, targetId: 'shop' },
    { name: 'Ostatnie', path: '/#ostatnie', isAnchor: true, targetId: 'ostatnie' },
    { name: 'Zwroty', path: '/zwroty' },
    { name: 'Regulamin', path: '/regulamin' },
    { name: 'Polityka', path: '/polityka' },
  ]

  return (
    <footer className="footer-koziamc">
      <div className="footer-decoration"></div>
      <div className="container">
        <div className="footer-content-koziamc">
          <div className="footer-col-koziamc footer-brand">
            <div className="footer-logo-koziamc">
              <img src="/logo.png" alt="KoziaMC" />
              <span>KoziaMC.PL</span>
            </div>
            <p className="footer-description">Najlepszy serwer Minecraft, z unikalnym stylem i pomysłem. Dołącz do naszej społeczności!</p>
            <div className="footer-server-ip">
              <i className="fas fa-server"></i>
              <code>koziamc.pl</code>
            </div>
          </div>

          <div className="footer-col-koziamc">
            <h4>Nawigacja</h4>
            <ul className="footer-links">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  {link.isAnchor ? (
                    <a
                      href={link.path}
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
                      <i className="fas fa-angle-right"></i>
                      {link.name}
                    </a>
                  ) : (
                    <Link to={link.path}>
                      <i className="fas fa-angle-right"></i>
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col-koziamc">
            <h4>Kontakt</h4>
            <div className="contact-info-koziamc">
              <a href="mailto:smoczyfn.business@gmail.com" className="contact-item">
                <i className="fas fa-envelope"></i>
                <span>smoczyfn.business@gmail.com</span>
              </a>
              <a href="https://discord.gg/koziamc" className="contact-item">
                <i className="fab fa-discord"></i>
                <span>dc.koziamc.pl</span>
              </a>
              <div className="contact-item">
                <i className="fas fa-server"></i>
                <span>KoziaMC.PL</span>
              </div>
            </div>
          </div>

          <div className="footer-col-koziamc">
            <h4>Social Media</h4>
            <div className="social-links-koziamc">
              <a href="https://discord.gg/koziamc" target="_blank" rel="noopener noreferrer" className="social-link discord">
                <i className="fab fa-discord"></i>
              </a>
              <a href="https://www.youtube.com/@energiaa" target="_blank" rel="noopener noreferrer" className="social-link youtube">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="https://www.tiktok.com/@energiaa" target="_blank" rel="noopener noreferrer" className="social-link tiktok">
                <i className="fab fa-tiktok"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom-koziamc">
          <p>&copy; {currentYear} KoziaMC.PL - Wszystkie prawa zastrzeżone</p>
          <p className="disclaimer-koziamc">Serwer nie jest w żaden sposób powiązany z firmą Mojang AB ani Microsoft.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer