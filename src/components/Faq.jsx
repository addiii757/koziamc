import React, { useState } from 'react'

const faqItems = [
  {
    question: 'Jak dołączyć do serwera?',
    answer: 'Wystarczy wpisać IP serwera w grze Minecraft: KoziaMC.PL. Po połączeniu zostaniesz przeniesiony do lobby, gdzie możesz wybrać tryb gry.'
  },
  {
    question: 'Jakie wersje Minecraft są obsługiwane?',
    answer: 'Obsługujemy wszystkie wersje od 1.16 do najnowszej. Zalecamy używanie najnowszej wersji dla najlepszego doświadczenia.'
  },
  {
    question: 'Czy serwer jest płatny?',
    answer: 'Serwer jest całkowicie darmowy! Opcjonalnie możesz wesprzeć nas przez zakupy w sklepie, które pomagają w rozwoju serwera.'
  },
  {
    question: 'Jakie są zasady serwera?',
    answer: 'Główne zasady to: szacunek do innych graczy, zakaz używania cheatów, zakaz griefowania. Pełny regulamin znajdziesz w zakładce Regulamin.'
  },
  {
    question: 'Jak mogę zostać moderatorem?',
    answer: 'Moderatorzy są wybierani spośród aktywnych i pomocnych członków społeczności. Bądź aktywny na Discord i pomagaj innym graczom.'
  },
]

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null)

  return (
    <section className="faq-section-koziamc">
      <div className="container">
        <div className="faq-header-koziamc">
          <div className="faq-badge-koziamc">
            <i className="fas fa-question-circle"></i>
            <span>FAQ</span>
          </div>
          <h2 className="section-title-koziamc">
            <span className="title-gradient">Często zadawane pytania</span>
          </h2>
        </div>
        <div className="faq-container-koziamc">
          {faqItems.map((item, index) => (
            <div key={index} className={`faq-item-koziamc ${activeIndex === index ? 'active' : ''}`}>
              <div className="faq-question-koziamc" onClick={() => setActiveIndex(activeIndex === index ? null : index)}>
                <div className="faq-q-content">
                  <i className="fas fa-circle-question"></i>
                  <h3>{item.question}</h3>
                </div>
                <i className={`fas fa-chevron-down faq-chevron ${activeIndex === index ? 'rotated' : ''}`}></i>
              </div>
              <div className="faq-answer-koziamc">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Faq