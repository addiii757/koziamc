import React from 'react'
import { Link } from 'react-router-dom'

const Regulations = () => {
  return (
    <section className="regulations-preview">
      <div className="container">
        <h2 className="section-title">📜 Regulamin</h2>
        <div className="regulations-preview-content">
          <div className="regulation-item">
            <h3>§1. Ogólne Zasady</h3>
            <ul>
              <li>Zakaz używania cheatów i modyfikacji dających przewagę</li>
              <li>Zakaz griefowania i niszczenia cudzych konstrukcji</li>
              <li>Zakaz reklamowania innych serwerów</li>
            </ul>
          </div>
          <div className="regulation-item">
            <h3>§2. Zachowanie na Serwerze</h3>
            <ul>
              <li>Szacunek do innych graczy i administracji</li>
              <li>Zakaz mowy nienawiści i obrażania innych</li>
              <li>Zakaz spamu na czacie</li>
            </ul>
          </div>
          <div className="regulation-item">
            <h3>§3. Płatności i Sklep</h3>
            <ul>
              <li>Wszystkie zakupy są dobrowolne</li>
              <li>Produkty cyfrowe nie podlegają zwrotowi po aktywacji</li>
              <li>W przypadku problemów kontakt przez Discord</li>
            </ul>
          </div>
        </div>
        <div className="regulations-footer">
          <Link to="/regulamin" className="btn-read-more">Pełny regulamin →</Link>
        </div>
      </div>
    </section>
  )
}

export default Regulations