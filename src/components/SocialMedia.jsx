import React from 'react'

const socialLinks = [
  {
    name: 'Discord',
    icon: 'fab fa-discord',
    url: 'https://discord.gg/koziamc',
    color: '#5865F2',
    members: '1,500+',
    description: 'Główna platforma komunikacji',
  },
  {
    name: 'YouTube',
    icon: 'fab fa-youtube',
    url: 'https://www.youtube.com/@energiaa',
    color: '#FF0000',
    members: '500+',
    description: 'Filmy i poradniki',
  },
  {
    name: 'TikTok',
    icon: 'fab fa-tiktok',
    url: 'https://www.tiktok.com/@energiaa',
    color: '#000000',
    members: '1,000+',
    description: 'Krótkie filmy',
  },
]

const SocialMedia = () => {
  return (
    <section className="social-section">
      <div className="container">
        <h2 className="section-title">📱 Social Media</h2>
        <p className="section-subtitle">Dołącz do naszej społeczności</p>
        <div className="social-grid">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-card"
            >
              <div className="social-icon" style={{ background: social.color }}>
                <i className={social.icon}></i>
              </div>
              <h3>{social.name}</h3>
              <p>{social.description}</p>
              <div className="social-stats">
                <span>{social.members} członków</span>
                <span>24/7 aktywność</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SocialMedia