import React, { useEffect, useState } from 'react'

const ServerInfo = () => {
  const [serverStatus, setServerStatus] = useState({
    online: false,
    players: { online: 0, max: 100 },
    version: '1.21.8'
  })
  const [maxPlayers, setMaxPlayers] = useState(0)

  useEffect(() => {
    const fetchServerStatus = async () => {
      try {
        const response = await fetch('/api/server/status')
        const result = await response.json()
        if (result.ok) {
          setServerStatus(result.data)
          if (result.data.players.online > maxPlayers) {
            setMaxPlayers(result.data.players.online)
          }
        }
      } catch (error) {
        console.error('Błąd pobierania statusu serwera:', error)
      }
    }

    fetchServerStatus()
    const interval = setInterval(fetchServerStatus, 30000) // Odświeżanie co 30 sekund
    return () => clearInterval(interval)
  }, [maxPlayers])

  return (
    <section className="server-info-koziamc">
      <div className="container">
        <div className="server-info-grid-koziamc">
          <div className="info-card-koziamc">
            <div className="info-icon-koziamc">
              <i className="fas fa-users"></i>
              <div className="icon-glow"></div>
            </div>
            <div className="info-content-koziamc">
              <h3>GRACZE ONLINE</h3>
              <p className="info-value-koziamc">{serverStatus.players.online} / {serverStatus.players.max}</p>
              <span className="info-label-koziamc">GRACZY</span>
            </div>
          </div>

          <div className="info-card-koziamc">
            <div className="info-icon-koziamc">
              <i className="fas fa-server"></i>
              <div className="icon-glow"></div>
            </div>
            <div className="info-content-koziamc">
              <h3>ADRES SERWERA</h3>
              <p className="info-value-koziamc">koziamc.pl</p>
              <span className="info-label-koziamc">IP SERWERA</span>
            </div>
          </div>

          <div className="info-card-koziamc">
            <div className="info-icon-koziamc">
              <i className="fas fa-clock"></i>
              <div className="icon-glow"></div>
            </div>
            <div className="info-content-koziamc">
              <h3>WERSJA GRY</h3>
              <p className="info-value-koziamc">1.21.8</p>
              <span className="info-label-koziamc">MINECRAFT</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServerInfo