import React, { useState, useEffect } from 'react'

const staffMembers = [
  {
    name: 'energ1aa',
    role: 'Właściciel',
    description: 'Założyciel serwera, słynny youtuber. Odpowiada za rozwój i wizerunek serwera.',
    avatar: '/energ1aa.png',
    discordId: '1380255477048279131',
    labyProfile: 'energ1aa',
  },
  {
    name: 'youngadi',
    role: 'Technik',
    description: 'Technik serwera, zajmujący się większością - pytania/błędy kierujcie właśnie do niego.',
    avatar: '/youngadi.png',
    discordId: '1434228331108106377',
    labyProfile: 'youngadi',
  },
]

const statusMessages = {
  online: 'Online',
  idle: 'Zaraz wracam',
  dnd: 'Nie przeszkadzać',
  offline: 'Offline',
}

const Staff = () => {
  const [discordStatuses, setDiscordStatuses] = useState({})

  useEffect(() => {
    const fetchDiscordStatus = async (discordId) => {
      try {
        const response = await fetch(`https://api.lanyard.rest/v1/users/${discordId}`)
        const data = await response.json()
        
        console.log(`Status dla ${discordId}:`, data)
        
        if (data.success) {
          return {
            status: data.data.discord_status,
            activities: data.data.activities,
          }
        } else {
          console.warn(`Lanyard API nie zwróciło sukcesu dla ${discordId}:`, data)
        }
      } catch (error) {
        console.error(`Błąd pobierania statusu dla ${discordId}:`, error)
      }
      return { status: 'offline', activities: [] }
    }

    const fetchAllStatuses = async () => {
      const statuses = {}
      for (const member of staffMembers) {
        if (member.discordId) {
          statuses[member.discordId] = await fetchDiscordStatus(member.discordId)
        }
      }
      setDiscordStatuses(statuses)
    }

    fetchAllStatuses()
    const interval = setInterval(fetchAllStatuses, 30000)
    
    return () => clearInterval(interval)
  }, [])

  const getStatusText = (discordId) => {
    const statusData = discordStatuses[discordId]
    if (!statusData) return 'Sprawdzanie...'
    
    const status = statusMessages[statusData.status] || 'Offline'
    
    if (statusData.activities && statusData.activities.length > 0) {
      const activity = statusData.activities[0]
      if (activity.type === 0) return `Gra w ${activity.name}`
      if (activity.type === 1) return `Streamuje ${activity.name}`
      if (activity.type === 2) return `Słucha ${activity.details || activity.name}`
    }
    
    return status
  }

  return (
    <section className="staff-section-koziamc">
      <div className="container">
        <div className="staff-header-koziamc">
          <div className="staff-badge-koziamc">
            <span className="badge-dot"></span>
            <span>NASZ ZESPÓŁ</span>
          </div>
          <h2 className="section-title-koziamc">
            <span className="title-gradient">Administracja</span>
          </h2>
          <p className="section-subtitle-koziamc">
            Osoby odpowiedzialne za porządek, rozwój i zarządzanie społecznością KoziaMC.
          </p>
        </div>
        <div className="staff-grid-koziamc">
          {staffMembers.map((member) => {
            const statusData = discordStatuses[member.discordId]
            const status = statusData?.status || 'offline'
            const profileUrl = `https://laby.net/@${member.labyProfile}`
            
            return (
              <div key={member.name} className="staff-card-koziamc">
                <div className="staff-card-glow"></div>
                <div className="staff-avatar-wrapper-koziamc">
                  <img src={member.avatar} alt={member.name} className="staff-avatar-koziamc" />
                  <div
                    className={`staff-status-koziamc status-${status}`}
                    title={getStatusText(member.discordId)}
                  ></div>
                  <div className="avatar-border"></div>
                </div>
                <h3 className="staff-name-koziamc">{member.name}</h3>
                <p className="staff-role-koziamc">
                  <i className="fas fa-crown"></i>
                  {member.role}
                </p>
                <p className="staff-description-koziamc">{member.description}</p>
                <a
                  href={profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="staff-profile-btn-koziamc"
                >
                  <i className="fas fa-user"></i>
                  <span>Zobacz profil</span>
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Staff