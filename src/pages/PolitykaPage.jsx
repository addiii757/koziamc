import React from 'react'
import PageLayout from '../components/PageLayout'

const PolitykaPage = () => {
  const sections = [
    {
      title: '§ 1 Administrator danych',
      content: (
        <>
          <p style={{ marginBottom: '1.25rem' }}>
            Administratorem danych osobowych przetwarzanych w związku ze stroną koziamc.pl, sklepem KoziaMC i serwerem Minecraft KoziaMC, jest KoziaMC.PL (adres e-mail: smoczyfn.business@gmail.com).
          </p>
          <p style={{ marginBottom: '1.25rem' }}>
            Administratora możesz kontaktować pod adresem e-mail <strong style={{ color: '#fff' }}>smoczyfn.business@gmail.com</strong>.
          </p>
          <p style={{ margin: 0 }}>
            Administrator nie ma wyznaczonej osoby do spraw ochrony danych, jednakże kontaktować się możesz z administratorem na podany adres e-mail, w temacie "Ochrona danych", jeśli to konieczne.
          </p>
        </>
      )
    },
    {
      title: '§ 2 Jakie dane przetwarzamy',
      content: (
        <>
          <p style={{ marginBottom: '2rem' }}>
            Zakres przetwarzanych danych osobowych zależy, czy korzystasz ze strony bez logowania, czy jesteś zarejestrowanym użytkownikiem:
          </p>
          <div style={{ display: 'grid', gap: '1.5rem' }}>
            {[
              { title: 'Nick gracza', desc: 'Jest używany do zapisywania efektów zakupów i identyfikacji gracza na serwerze.' },
              { title: 'Dane użytkownika sklepu', desc: 'Dane osobowe wymagane do realizacji zamówienia (w tym e-mail), są niezbędne do prawidłowego przetwarzania płatności i dostarczenia produktu.' },
              { title: 'Dane transakcji', desc: 'Dane transakcji są zbierane automatycznie (nazwa użytkownika, data zakupu, kwota, produkt).' },
              { title: 'Dane cookies i identyfikatory sesji', desc: 'Podczas wizyty zbierane są dane z wykorzystaniem cookies i podobnych technologii. Możesz zarządzać nimi w ustawieniach.' },
              { title: 'Adres e-mail', desc: 'Podany podczas rejestracji lub realizacji zamówienia na naszej stronie.' },
              { title: 'Dane płatnicze zebrane przez Stripe', desc: 'Podczas płatności przetwarzanych przez stronę mamy dostęp do niektórych danych (np. kraj), numer transakcji, środek płatności i informacje zebrane przez bramę płatniczą.' }
            ].map((item, idx) => (
              <div key={idx} style={{
                padding: '1.75rem',
                background: 'rgba(0,0,0,0.3)',
                border: '1px solid rgba(220,38,38,0.2)',
                borderLeft: '4px solid var(--primary)',
                borderRadius: '12px'
              }}>
                <div style={{ color: '#fff', fontWeight: '600', marginBottom: '0.75rem', fontSize: '1.05rem' }}>{item.title}</div>
                <div style={{ color: 'rgba(255,255,255,0.8)', lineHeight: '1.7' }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </>
      )
    },
    {
      title: '§ 3 Cele i podstawy prawne',
      content: (
        <>
          <p style={{ marginBottom: '1.5rem' }}>
            Twoje dane przetwarzamy w różnych celach i zgodnie z różnymi podstawami prawnymi:
          </p>
          <div style={{ display: 'grid', gap: '1rem' }}>
            {[
              'Realizacja zamówień i dostarczenie produktów cyfrowych – art. 6 ust. 1 lit. b RODO.',
              'Księgowość (faktury, korekty) – art. 6 ust. 1 lit. b i c RODO.',
              'Analityka strony (np. Google Analytics) – art. 6 ust. 1 lit. c RODO.',
              'Wykorzystanie cookies: art. 6 ust. 1 lit. a (zgoda) i 1 lit. f (prawny interes).',
              'Przechowywanie informacji podatkowych przez okres obowiązku prawnego – art. 6 ust. 1 lit. c.',
              'Marketing własnych produktów za pośrednictwem e-mails (jeżeli wyraziłeś zgodę) – art. 6 ust. 1 lit. f RODO.',
              'Zabezpieczenie prawne lub przekazanie danych na żądanie organów publicznych – zgodnie z obowiązującymi przepisami prawnymi.'
            ].map((item, idx) => (
              <div key={idx} style={{
                display: 'flex',
                alignItems: 'flex-start',
                padding: '1rem 1.25rem',
                background: 'rgba(0,0,0,0.2)',
                borderRadius: '10px',
                border: '1px solid rgba(220,38,38,0.15)'
              }}>
                <div style={{
                  width: '6px',
                  height: '6px',
                  background: 'var(--primary)',
                  borderRadius: '50%',
                  marginTop: '0.6rem',
                  marginRight: '1rem',
                  flexShrink: 0,
                  boxShadow: '0 0 8px var(--primary)'
                }}></div>
                <div style={{ color: 'rgba(255,255,255,0.85)', lineHeight: '1.7' }}>{item}</div>
              </div>
            ))}
          </div>
        </>
      )
    },
    {
      title: '§ 4 Odbiorcy danych',
      content: (
        <>
          <p style={{ marginBottom: '1.5rem' }}>
            Twoje dane mogą być udostępniane podmiotom, które pomagają prowadzić sklep:
          </p>
          <div style={{ display: 'grid', gap: '1rem', marginBottom: '2rem' }}>
            {[
              'Podmioty / Partnerzy związani z infrastrukturą (np. dostawca hostingu lub e-mail).',
              'Dostawca hostingu, infrastruktury serwerów (w celu przechowywania informacji oraz obsługi platformy).',
              'Bramka płatnicza (Stripe) oraz inne podmioty zajmujące się realizacją płatności.',
              'Podmioty współpracujące przy infrastrukturze zgodności publicznej (np. organy podatkowe na żądanie).',
              'Podmioty współpracujące ze strony technologicznej, które realizują zamówienia lub dostarczają funkcjonalność.'
            ].map((item, idx) => (
              <div key={idx} style={{
                display: 'flex',
                alignItems: 'flex-start',
                padding: '1rem 1.25rem',
                background: 'rgba(0,0,0,0.2)',
                borderRadius: '10px',
                border: '1px solid rgba(220,38,38,0.15)'
              }}>
                <div style={{
                  width: '6px',
                  height: '6px',
                  background: 'var(--primary)',
                  borderRadius: '50%',
                  marginTop: '0.6rem',
                  marginRight: '1rem',
                  flexShrink: 0,
                  boxShadow: '0 0 8px var(--primary)'
                }}></div>
                <div style={{ color: 'rgba(255,255,255,0.85)', lineHeight: '1.7' }}>{item}</div>
              </div>
            ))}
          </div>
          <div style={{
            padding: '1.5rem',
            background: 'rgba(220,38,38,0.12)',
            border: '1px solid rgba(220,38,38,0.3)',
            borderRadius: '12px',
            borderLeft: '4px solid var(--primary)'
          }}>
            <strong style={{ color: '#fff', display: 'block', marginBottom: '0.5rem' }}>Ważne:</strong>
            <p style={{ margin: 0, color: 'rgba(255,255,255,0.85)', lineHeight: '1.7' }}>
              Administrator nie sprzedaje Twoich danych innym firmom dla celów marketingowych. Dane są przekazywane wyłącznie w ramach niezbędnej współpracy oraz wymagań prawnych.
            </p>
          </div>
        </>
      )
    },
    {
      title: '§ 5 Przekazywanie danych poza EOG',
      content: (
        <>
          <p style={{ marginBottom: '1.25rem' }}>
            Co do zasady dane są przetwarzane na terenie Europejskiego Obszaru Gospodarczego.
          </p>
          <p style={{ marginBottom: '1.25rem' }}>
            Jeżeli korzystamy z dostawców spoza EOG (np. Google Analytics, Stripe), to dane są przekazywane z zastosowaniem mechanizmów zgodności z RODO (np. Standardowe Klauzule Umowne zatwierdzone przez Komisję Europejską).
          </p>
          <p style={{ margin: 0 }}>
            Więcej szczegółów na temat zabezpieczeń stosowanych przez partnerów spoza EOG dostępne są w ich własnych politykach prywatności.
          </p>
        </>
      )
    },
    {
      title: '§ 6 Prawa użytkownika',
      content: (
        <>
          <p style={{ marginBottom: '1.5rem' }}>
            Masz do dyspozycji kilka podstawowych praw w zakresie przetwarzania Twoich danych:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem', marginBottom: '2rem' }}>
            {[
              'Prawo dostępu do danych',
              'Prawo sprostowania danych',
              'Prawo usunięcia danych',
              'Prawo ograniczenia przetwarzania',
              'Prawo przenoszenia danych',
              'Prawo sprzeciwu wobec przetwarzania',
              'Prawo wniesienia skargi do UODO'
            ].map((item, idx) => (
              <div key={idx} style={{
                padding: '1.25rem',
                background: 'rgba(220,38,38,0.08)',
                border: '1px solid rgba(220,38,38,0.2)',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem'
              }}>
                <div style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '6px',
                  background: 'linear-gradient(135deg, var(--primary), rgba(220,38,38,0.6))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontWeight: 'bold',
                  fontSize: '0.85rem',
                  flexShrink: 0
                }}>
                  {idx + 1}
                </div>
                <div style={{ color: 'rgba(255,255,255,0.9)', lineHeight: '1.5', fontSize: '0.95rem' }}>
                  {item}
                </div>
              </div>
            ))}
          </div>
          <div style={{
            padding: '2rem',
            background: 'linear-gradient(135deg, rgba(220,38,38,0.15), rgba(220,38,38,0.05))',
            borderRadius: '12px',
            border: '1px solid rgba(220,38,38,0.3)',
            textAlign: 'center'
          }}>
            <i className="fas fa-info-circle" style={{ fontSize: '1.5rem', color: 'var(--primary)', marginBottom: '1rem', display: 'block' }}></i>
            <p style={{ margin: 0, color: 'rgba(255,255,255,0.9)', lineHeight: '1.8', fontSize: '1.05rem' }}>
              Aby skorzystać z tych praw, napisz do nas na <strong style={{ color: '#fff' }}>smoczyfn.business@gmail.com</strong> z tytułem "RODO" podając szczegóły swojego zapytania oraz sposób weryfikacji tożsamości (np. nick Minecraft, adres e-mail powiązany z zakupem).
            </p>
          </div>
        </>
      )
    }
  ]

  return (
    <PageLayout title="Polityka Prywatności" kanji="守">
      <div className="legal-content" style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{ 
            display: 'inline-block',
            background: 'linear-gradient(135deg, rgba(220,38,38,0.25), rgba(180,28,28,0.15))',
            border: '1px solid rgba(220,38,38,0.5)',
            borderRadius: '50px',
            padding: '0.75rem 2rem',
            fontSize: '0.8rem',
            fontWeight: '700',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            marginBottom: '2rem',
            boxShadow: '0 4px 20px rgba(220,38,38,0.15)'
          }}>
            Wersja 3.0 - Ostatnia aktualizacja: 18 maja 2026
          </div>
          <p style={{ 
            color: 'rgba(255,255,255,0.8)', 
            fontSize: '1.15rem', 
            lineHeight: '1.7',
            maxWidth: '700px',
            margin: '0 auto'
          }}>
            Dla nas priorytetem jest przejrzystość w zakresie tego, w jaki sposób zbieramy i przetwarzamy Twoje dane osobowe.
          </p>
        </div>

        {sections.map((section, idx) => (
          <div key={idx} style={{ 
            background: 'linear-gradient(135deg, rgba(30,15,15,0.7) 0%, rgba(50,20,20,0.5) 100%)',
            border: '1px solid rgba(220,38,38,0.25)',
            borderRadius: '20px',
            padding: '3rem',
            marginBottom: '2.5rem',
            backdropFilter: 'blur(20px)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.3)'
          }}>
            <h3 style={{ 
              color: '#fff', 
              fontSize: '1.6rem', 
              marginBottom: '2rem',
              fontWeight: '600',
              position: 'relative',
              paddingBottom: '1rem'
            }}>
              <span style={{
                background: 'linear-gradient(90deg, var(--primary), rgba(220,38,38,0.6))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                {section.title}
              </span>
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '60px',
                height: '3px',
                background: 'linear-gradient(90deg, var(--primary), transparent)',
                borderRadius: '10px'
              }}></div>
            </h3>
            <div style={{ color: 'rgba(255,255,255,0.85)', lineHeight: '1.9', fontSize: '1.05rem' }}>
              {section.content}
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  )
}

export default PolitykaPage