import React from 'react'
import PageLayout from '../components/PageLayout'

const KontaktPage = () => {
  return (
    <PageLayout title="Kontakt" kanji="連">
      <div className="contact-page">
        <div className="contact-card">
          <h3><i className="fas fa-envelope"></i> E-mail</h3>
          <p>smoczyfn.business@gmail.com</p>
        </div>
        <div className="contact-card">
          <h3><i className="fab fa-discord"></i> Discord</h3>
          <p>dc.koziamc.pl</p>
          <a href="https://discord.gg/koziamc" target="_blank" className="btn-secondary">Dołącz na Discord</a>
        </div>
        <div className="contact-card">
          <h3><i className="fas fa-server"></i> Adres serwera</h3>
          <p>KoziaMC.PL</p>
        </div>
      </div>
    </PageLayout>
  )
}

export default KontaktPage