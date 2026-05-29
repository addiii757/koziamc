import React from 'react'
import PageLayout from '../components/PageLayout'

const RegulationsPage = () => {
  const sections = [
    {
      title: '§ 1 Wprowadzenie i kontakt',
      content: (
        <>
          <p style={{ marginBottom: '1.25rem' }}>
            Niniejszy regulamin określa zasady korzystania ze sklepu internetowego dostępnego na stronie koziamc.pl, serwera Minecraft KoziaMC i podobnych usług dostarczanych przez administratora.
          </p>
          <p style={{ marginBottom: '1.25rem' }}>
            Właścicielem sklepu, serwera oraz strony jest KoziaMC.PL, z siedzibą pod adresem e-mail smoczyfn.business@gmail.com.
          </p>
          <p style={{ margin: 0 }}>
            Skorzystanie z dowolnego z serwisów KoziaMC oznacza akceptację niniejszego Regulaminu. Użytkownik, który nie akceptuje Regulaminu, nie może korzystać z naszych usług.
          </p>
        </>
      )
    },
    {
      title: '§ 2 Definicje',
      content: (
        <div style={{ display: 'grid', gap: '1.25rem' }}>
          {[
            { term: 'Sklep', def: 'Sklep internetowy prowadzony pod adresem koziamc.pl.' },
            { term: 'Klient', def: 'Osoba korzystająca ze sklepu lub serwera Minecraft, która może złożyć zamówienie.' },
            { term: 'Produkt', def: 'Usługa/dobro cyfrowe dostępne w Sklepie, takie jak rangi, konta, coins, vouchery, które są dostarczane poprzez grę Minecraft.' },
            { term: 'Zamówienie', def: 'Oświadczenie woli klienta złożone poprzez sklep, zmierzające do zakupu Produktu.' },
            { term: 'Płatność', def: 'Uiszczenie należności przez klienta za pomocą systemu płatności online (Stripe lub innych).' },
            { term: 'Regulamin', def: 'Niniejszy dokument wraz z Polityką Prywatności i innymi dokumentami dostępnymi na stronie.' }
          ].map((item, idx) => (
            <div key={idx} style={{
              padding: '1.5rem',
              background: 'rgba(0,0,0,0.25)',
              border: '1px solid rgba(220,38,38,0.2)',
              borderLeft: '4px solid var(--primary)',
              borderRadius: '12px'
            }}>
              <div style={{ color: '#fff', fontWeight: '600', marginBottom: '0.5rem', fontSize: '1.05rem' }}>{item.term}</div>
              <div style={{ color: 'rgba(255,255,255,0.8)', lineHeight: '1.7' }}>{item.def}</div>
            </div>
          ))}
        </div>
      )
    },
    {
      title: '§ 3 Zasady ogólne serwera',
      content: (
        <>
          <p style={{ marginBottom: '2rem' }}>
            Korzystanie z serwera Minecraft KoziaMC wymaga przestrzegania następujących zasad:
          </p>
          <div style={{ display: 'grid', gap: '1.25rem', marginBottom: '2rem' }}>
            {[
              'Zakaz używania cheatów, hack clientów i innych modyfikacji dających przewagę.',
              'Zakaz griefowania, niszczenia cudzych budowli bez zgody właściciela.',
              'Zakaz reklamowania innych serwerów Minecraft, o ile to nie jest uzgodnione z administratorem.',
              'Zakaz mowy nienawiści, obrażania innych graczy, dyskryminacji rasowej, religijnej, płciowej.',
              'Szacunek dla administracji i innych użytkowników.',
              'Zakaz wykorzystywania błędów i exploitów do uzyskiwania nieuczciwych korzyści.',
              'Zakaz podszywania się pod administrację lub innych graczy.',
              'Zakaz namawiania innych graczy do łamania regulaminu.'
            ].map((rule, idx) => (
              <div key={idx} style={{
                display: 'flex',
                alignItems: 'flex-start',
                padding: '1.25rem',
                background: 'rgba(0,0,0,0.25)',
                borderRadius: '12px',
                border: '1px solid rgba(220,38,38,0.15)'
              }}>
                <div style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, var(--primary), rgba(220,38,38,0.6))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontWeight: 'bold',
                  fontSize: '0.85rem',
                  flexShrink: 0,
                  marginRight: '1rem'
                }}>
                  {idx + 1}
                </div>
                <div style={{ color: 'rgba(255,255,255,0.85)', lineHeight: '1.7', paddingTop: '0.25rem' }}>
                  {rule}
                </div>
              </div>
            ))}
          </div>
          <div style={{
            padding: '1.75rem',
            background: 'rgba(220,38,38,0.15)',
            border: '1px solid rgba(220,38,38,0.3)',
            borderRadius: '12px',
            borderLeft: '4px solid var(--primary)'
          }}>
            <strong style={{ color: '#fff', display: 'block', marginBottom: '0.75rem', fontSize: '1.05rem' }}>⚠️ Uwaga</strong>
            <p style={{ margin: 0, color: 'rgba(255,255,255,0.9)', lineHeight: '1.7' }}>
              Naruszenie zasad serwera może skutkować banem, wyciszeniem, kickiem lub innymi sankcjami według uznania administracji. Zakupione produkty nie są zwracane w przypadku banu za złamanie regulaminu.
            </p>
          </div>
        </>
      )
    },
    {
      title: '§ 4 Zasady czatu i komunikacji',
      content: (
        <div style={{ display: 'grid', gap: '1.25rem' }}>
          {[
            { rule: 'Zakaz spamowania', desc: 'Wielokrotne powtarzanie tego samego komunikatu, nadużywanie CAPS LOCK, nadmierne używanie emoji.' },
            { rule: 'Zakaz wulgaryzmów', desc: 'Używanie przekleństw i wulgaryzmów jest zabronione. Dozwolone są łagodne formy w kontekście humorystycznym.' },
            { rule: 'Zakaz floodowania', desc: 'Wysyłanie wielu wiadomości w krótkim czasie w celu zakłócenia czatu.' },
            { rule: 'Zakaz reklamy', desc: 'Reklamowanie produktów, usług, serwerów Discorda, stron internetowych bez zgody administracji.' },
            { rule: 'Szanuj prywatność', desc: 'Nie ujawniaj danych osobowych innych graczy bez ich zgody.' },
            { rule: 'Kulturalna dyskusja', desc: 'Zachowuj się kulturalnie w dyskusjach, szanuj odmienne zdania innych graczy.' }
          ].map((item, idx) => (
            <div key={idx} style={{
              padding: '1.5rem',
              background: 'rgba(0,0,0,0.25)',
              border: '1px solid rgba(220,38,38,0.2)',
              borderLeft: '4px solid var(--primary)',
              borderRadius: '12px'
            }}>
              <div style={{ color: '#fff', fontWeight: '600', marginBottom: '0.5rem', fontSize: '1.05rem' }}>
                {idx + 1}. {item.rule}
              </div>
              <div style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.7' }}>{item.desc}</div>
            </div>
          ))}
        </div>
      )
    },
    {
      title: '§ 5 Zasady PvP i rozgrywki',
      content: (
        <div style={{ display: 'grid', gap: '1.25rem' }}>
          {[
            { rule: 'Kill Aura / Auto Clicker', desc: 'Używanie programów automatycznie atakujących innych graczy jest surowo zabronione.' },
            { rule: 'Fly / Speed Hack', desc: 'Modyfikacje pozwalające latać lub poruszać się szybciej niż normalnie są zakazane.' },
            { rule: 'X-Ray / Wallhack', desc: 'Cheaty pozwalające widzieć przez ściany lub znajdować rudy są surowo zakazane.' },
            { rule: 'Team Griefing', desc: 'Niszczenie dorobku własnej drużyny lub sojuszników jest zabronione.' },
            { rule: 'TP Kill', desc: 'Zapraszanie graczy teleportem w celu ich zabicia bez ich zgody jest zakazane.' }
          ].map((item, idx) => (
            <div key={idx} style={{
              padding: '1.5rem',
              background: 'rgba(0,0,0,0.25)',
              border: '1px solid rgba(220,38,38,0.2)',
              borderLeft: '4px solid var(--primary)',
              borderRadius: '12px'
            }}>
              <div style={{ color: '#fff', fontWeight: '600', marginBottom: '0.5rem', fontSize: '1.05rem' }}>
                {idx + 1}. {item.rule}
              </div>
              <div style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.7' }}>{item.desc}</div>
            </div>
          ))}
        </div>
      )
    },
    {
      title: '§ 6 Zasady budowania',
      content: (
        <div style={{ display: 'grid', gap: '1.25rem' }}>
          {[
            { rule: 'Szanuj budowle innych', desc: 'Nie niszczyć, nie modyfikować budowli innych graczy bez ich wyraźnej zgody.' },
            { rule: 'Zakaz budowania ofensywnych struktur', desc: 'Konstrukcje o charakterze wulgarnym, nazistowskim lub obraźliwym są zakazane i będą usuwane.' },
            { rule: 'Lag machines', desc: 'Budowanie urządzeń powodujących lag serwera jest zabronione i skutkuje banem.' },
            { rule: 'Respektuj granice', desc: 'Nie buduj zbyt blisko budowli innych graczy bez ich zgody (minimum 100 bloków odległości).' },
            { rule: 'Porzucone budowle', desc: 'Nieaktywne budowle mogą zostać usunięte po 30 dniach nieaktywności właściciela konta.' }
          ].map((item, idx) => (
            <div key={idx} style={{
              padding: '1.5rem',
              background: 'rgba(0,0,0,0.25)',
              border: '1px solid rgba(220,38,38,0.2)',
              borderLeft: '4px solid var(--primary)',
              borderRadius: '12px'
            }}>
              <div style={{ color: '#fff', fontWeight: '600', marginBottom: '0.5rem', fontSize: '1.05rem' }}>
                {idx + 1}. {item.rule}
              </div>
              <div style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.7' }}>{item.desc}</div>
            </div>
          ))}
        </div>
      )
    },
    {
      title: '§ 7 Kary i odwołania',
      content: (
        <>
          <div style={{ marginBottom: '2rem' }}>
            <h4 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1.25rem' }}>Rodzaje kar:</h4>
            <div style={{ display: 'grid', gap: '1.25rem', marginBottom: '2.5rem' }}>
              {[
                { type: 'Ostrzeżenie (Warn)', desc: 'Pierwsze naruszenie zasad - gracze otrzymują ostrzeżenie jako przypomnienie.' },
                { type: 'Wyciszenie (Mute)', desc: 'Tymczasowe lub permanentne pozbawienie możliwości pisania na czacie (od 10 minut do permanentnego).' },
                { type: 'Kick', desc: 'Wyrzucenie z serwera - gracz może się ponownie połączyć po wyrzuceniu.' },
                { type: 'Ban czasowy (Tempban)', desc: 'Tymczasowe zablokowanie dostępu do serwera (od 1 dnia do 30 dni).' },
                { type: 'Ban permanentny (Permaban)', desc: 'Trwałe zablokowanie dostępu za poważne naruszenia regulaminu.' }
              ].map((item, idx) => (
                <div key={idx} style={{
                  padding: '1.5rem',
                  background: 'rgba(0,0,0,0.25)',
                  border: '1px solid rgba(220,38,38,0.2)',
                  borderLeft: '4px solid var(--primary)',
                  borderRadius: '12px'
                }}>
                  <div style={{ color: '#fff', fontWeight: '600', marginBottom: '0.5rem', fontSize: '1.05rem' }}>
                    {item.type}
                  </div>
                  <div style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.7' }}>{item.desc}</div>
                </div>
              ))}
            </div>

            <h4 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1.25rem' }}>Procedura odwołania:</h4>
            <div style={{ display: 'grid', gap: '1.25rem' }}>
              {[
                'Odwołania można składać przez serwer Discord KoziaMC w dedykowanym kanale.',
                'Odwołanie powinno zawierać: nick Minecraft, datę i powód bana oraz uzasadnienie prośby.',
                'Czas rozpatrzenia odwołania wynosi do 7 dni roboczych od momentu zgłoszenia.',
                'Decyzja administracji w sprawie odwołania jest ostateczna i niepodważalna.',
                'Możliwość odwołania NIE dotyczy banów za używanie cheatów i hack clientów.'
              ].map((rule, idx) => (
                <div key={idx} style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  padding: '1.25rem',
                  background: 'rgba(0,0,0,0.25)',
                  borderRadius: '12px',
                  border: '1px solid rgba(220,38,38,0.15)'
                }}>
                  <div style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, var(--primary), rgba(220,38,38,0.6))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    fontWeight: 'bold',
                    fontSize: '0.85rem',
                    flexShrink: 0,
                    marginRight: '1rem'
                  }}>
                    {idx + 1}
                  </div>
                  <div style={{ color: 'rgba(255,255,255,0.85)', lineHeight: '1.7', paddingTop: '0.25rem' }}>
                    {rule}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )
    },
    {
      title: '§ 8 Zasady zakupów w sklepie',
      content: (
        <>
          <p style={{ marginBottom: '2rem' }}>
            Dokonując zakupu w sklepie KoziaMC, klient akceptuje następujące warunki:
          </p>
          <div style={{ display: 'grid', gap: '1.25rem' }}>
            {[
              'Zakupy są dobrowolne i służą wspieraniu rozwoju serwera.',
              'Produkty są dostarczane w formie cyfrowej bezpośrednio na serwerze Minecraft.',
              'Klient musi podać poprawny nick Minecraft przy składaniu zamówienia.',
              'Po dokonaniu płatności produkt jest automatycznie aktywowany na koncie gracza.',
              'Wszystkie ceny podane są w PLN i zawierają podatek VAT (jeśli dotyczy).',
              'Sklep zastrzega sobie prawo do zmiany cen produktów bez wcześniejszego powiadomienia.',
              'Zakupione rangi są permanentne i nie wygasają.'
            ].map((rule, idx) => (
              <div key={idx} style={{
                display: 'flex',
                alignItems: 'flex-start',
                padding: '1.25rem',
                background: 'rgba(0,0,0,0.25)',
                borderRadius: '12px',
                border: '1px solid rgba(220,38,38,0.15)'
              }}>
                <div style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, var(--primary), rgba(220,38,38,0.6))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontWeight: 'bold',
                  fontSize: '0.85rem',
                  flexShrink: 0,
                  marginRight: '1rem'
                }}>
                  {idx + 1}
                </div>
                <div style={{ color: 'rgba(255,255,255,0.85)', lineHeight: '1.7', paddingTop: '0.25rem' }}>
                  {rule}
                </div>
              </div>
            ))}
          </div>
        </>
      )
    },
    {
      title: '§ 9 Płatności',
      content: (
        <>
          <p style={{ marginBottom: '2rem' }}>
            Płatności w sklepie obsługiwane są przez bezpieczny system płatności Stripe:
          </p>
          <div style={{ display: 'grid', gap: '1.25rem' }}>
            {[
              { icon: '💳', text: 'Akceptujemy karty płatnicze: Visa, Mastercard, American Express.' },
              { icon: '🔒', text: 'Wszystkie transakcje są szyfrowane i zabezpieczone protokołem SSL.' },
              { icon: '⚡', text: 'Płatność jest przetwarzana natychmiast, a produkt dostarczany automatycznie.' },
              { icon: '📧', text: 'Po zakupie otrzymasz potwierdzenie na podany adres e-mail.' },
              { icon: '🛡️', text: 'Nie przechowujemy danych Twojej karty płatniczej - robi to Stripe.' }
            ].map((item, idx) => (
              <div key={idx} style={{
                display: 'flex',
                alignItems: 'center',
                padding: '1.5rem',
                background: 'rgba(0,0,0,0.25)',
                borderRadius: '12px',
                border: '1px solid rgba(220,38,38,0.15)',
                gap: '1.25rem'
              }}>
                <div style={{
                  fontSize: '2rem',
                  flexShrink: 0
                }}>
                  {item.icon}
                </div>
                <div style={{ color: 'rgba(255,255,255,0.85)', lineHeight: '1.7' }}>
                  {item.text}
                </div>
              </div>
            ))}
          </div>
        </>
      )
    },
    {
      title: '§ 10 Zwroty i reklamacje',
      content: (
        <>
          <p style={{ marginBottom: '2rem' }}>
            Zgodnie z przepisami prawa konsumenckiego:
          </p>
          <div style={{
            padding: '1.75rem',
            background: 'rgba(220,38,38,0.15)',
            border: '1px solid rgba(220,38,38,0.3)',
            borderRadius: '12px',
            marginBottom: '2rem',
            borderLeft: '4px solid var(--primary)'
          }}>
            <strong style={{ color: '#fff', display: 'block', marginBottom: '0.75rem', fontSize: '1.05rem' }}>📌 Ważne informacje o zwrotach</strong>
            <p style={{ margin: 0, color: 'rgba(255,255,255,0.9)', lineHeight: '1.7' }}>
              Ze względu na charakter sprzedawanych produktów (treści cyfrowe), które są dostarczane natychmiast po dokonaniu płatności,
              <strong style={{ color: '#fff' }}> nie ma możliwości odstąpienia od umowy po aktywacji produktu</strong>. Reklamacje należy zgłaszać na adres: smoczyfn.business@gmail.com lub przez Discord.
            </p>
          </div>
        </>
      )
    }
  ]

  return (
    <PageLayout title="Regulamin" kanji="規">
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
            Zasady sklepu, płatności, odwołań i korzystania z serwera KoziaMC.
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

        <div style={{ 
          background: 'linear-gradient(135deg, rgba(220,38,38,0.15), rgba(180,28,28,0.1))',
          border: '1px solid rgba(220,38,38,0.3)',
          borderRadius: '20px',
          padding: '3rem',
          textAlign: 'center',
          backdropFilter: 'blur(20px)',
          boxShadow: '0 8px 32px rgba(220,38,38,0.2)'
        }}>
          <i className="fas fa-envelope" style={{ fontSize: '2rem', color: 'var(--primary)', marginBottom: '1.5rem', display: 'block' }}></i>
          <h4 style={{ color: '#fff', fontSize: '1.3rem', marginBottom: '1rem', fontWeight: '600' }}>
            Masz pytania?
          </h4>
          <p style={{ color: 'rgba(255,255,255,0.85)', marginBottom: '0', fontSize: '1.05rem', lineHeight: '1.7' }}>
            Pytania dotyczące regulaminu lub sklepu prosimy kierować na adres:<br/>
            <strong style={{ color: '#fff', fontWeight: '600' }}>smoczyfn.business@gmail.com</strong>
          </p>
        </div>
      </div>
    </PageLayout>
  )
}

export default RegulationsPage