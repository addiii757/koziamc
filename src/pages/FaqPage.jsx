import React, { useState } from 'react'
import PageLayout from '../components/PageLayout'

const faqItems = [
  { question: 'Jak dołączyć do serwera?', answer: 'Wpisz IP KoziaMC.PL w grze Minecraft. Po połączeniu zostaniesz przeniesiony do lobby.' },
  { question: 'Jakie wersje Minecraft są obsługiwane?', answer: 'Obsługujemy wszystkie wersje od 1.16 do najnowszej. Zalecamy najnowszą wersję.' },
  { question: 'Czy serwer jest płatny?', answer: 'Serwer jest całkowicie darmowy! Sklep jest opcjonalny i wspiera rozwój.' },
  { question: 'Jakie są zasady serwera?', answer: 'Szacunek do innych, zakaz cheatów, zakaz griefowania. Pełny regulamin w zakładce Regulamin.' },
  { question: 'Jak zostać moderatorem?', answer: 'Bądź aktywny, pomocny i zgłoś się przez Discord. Moderatorzy są wybierani przez adminów.' },
]

const FaqPage = () => {
  const [activeIndex, setActiveIndex] = useState(null)

  return (
    <PageLayout title="FAQ" kanji="問">
      <div className="faq-container">
        {faqItems.map((item, index) => (
          <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`}>
            <div className="faq-question" onClick={() => setActiveIndex(activeIndex === index ? null : index)}>
              <h3>{item.question}</h3>
              <i className="fas fa-chevron-down"></i>
            </div>
            <div className="faq-answer">
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  )
}

export default FaqPage