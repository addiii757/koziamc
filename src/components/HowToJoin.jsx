import React, { useState } from 'react'

const HowToJoin = () => {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText('koziamc.pl')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  const steps = [
    {
      number: '01',
      title: 'Uruchom Minecrafta',
      description: 'Wejdź do menu multiplayer. Zaloguj się na swoim koncie Minecraft i uruchom grę w wersji 1.20 lub nowszej.',
    },
    {
      number: '02',
      title: 'Dodaj serwer',
      description: 'Dodaj nowy serwer używając adresu: koziamc.pl. Wpisz dowolną nazwę dla serwera w polu "Server Name".',
    },
    {
      number: '03',
      title: 'Dołącz do gry',
      description: 'Kliknij na dodany serwer i wybierz "Dołącz do serwera". Możesz teraz cieszyć się grą na KoziaMC!',
    },
  ]

  return (
    <section className="how-to-join-koziamc">
      <div className="container">
        <div className="join-header-koziamc">
          <div className="join-badge-koziamc">
            <span className="badge-dot"></span>
            <span>KROK PO KROKU</span>
          </div>
          <h2 className="section-title-koziamc">
            <span className="title-gradient">Jak dołączyć</span>
          </h2>
          <p className="section-subtitle-koziamc">
            Dołączenie do serwera jest proste i zajmuje tylko kilka minut. Postępuj według poniższych kroków.
          </p>
        </div>

        <div className="steps-grid-koziamc">
          {steps.map((step, index) => (
            <div key={index} className="step-card-koziamc">
              <div className="step-icon-wrapper">
                <div className="step-number-koziamc">{step.number}</div>
                <div className="step-glow"></div>
              </div>
              <h3 className="step-title-koziamc">{step.title}</h3>
              <p className="step-description-koziamc">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="join-server-box-koziamc">
          <div className="join-box-header">
            <i className="fas fa-server"></i>
            <h3>ADRES SERWERA</h3>
          </div>
          <div className="join-ip-display-koziamc">
            <code className="join-server-ip-koziamc">koziamc.pl</code>
            <button className="join-copy-btn-koziamc" onClick={handleCopy}>
              <i className={`fas fa-${copied ? 'check' : 'copy'}`}></i>
              <span>{copied ? 'Skopiowano!' : 'Kopiuj'}</span>
            </button>
          </div>
          <p className="join-version-koziamc">
            <i className="fas fa-cube"></i>
            Java Edition • 1.20
          </p>
        </div>
      </div>
    </section>
  )
}

export default HowToJoin