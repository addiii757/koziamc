import React from 'react'
import PageLayout from '../components/PageLayout'

const ZwrotyPage = () => {
  return (
    <PageLayout title="Zwroty i reklamacje" kanji="返">
      <div className="legal-content" style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem' }}>
        {/* Header Badge */}
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
            PRAWO PO ZAKUPIE
          </div>
          <p style={{ 
            color: 'rgba(255,255,255,0.8)', 
            fontSize: '1.15rem', 
            lineHeight: '1.7',
            maxWidth: '700px',
            margin: '0 auto'
          }}>
            Najważniejsze informacje o reklamacjach, odstąpieniu od umowy i kontakcie po zakupie.
          </p>
        </div>

        {/* Section 1 */}
        <div style={{ 
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
              Reklamacja zamówienia
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
          
          <p style={{ color: 'rgba(255,255,255,0.85)', lineHeight: '1.9', marginBottom: '2rem', fontSize: '1.05rem' }}>
            Jeśli produkt nie został aktywowany, przypisał się na błędnym nicku, płatność została pobrana, a zamówienie nie przeszło, skontaktuj się z nami:
          </p>
          
          <div style={{ display: 'grid', gap: '1.25rem' }}>
            <div style={{ 
              display: 'flex', 
              alignItems: 'flex-start',
              padding: '1.25rem',
              background: 'rgba(0,0,0,0.25)',
              borderRadius: '12px',
              border: '1px solid rgba(220,38,38,0.15)'
            }}>
              <div style={{ 
                width: '8px', 
                height: '8px', 
                background: 'var(--primary)', 
                borderRadius: '50%',
                marginTop: '0.6rem',
                marginRight: '1rem',
                flexShrink: 0,
                boxShadow: '0 0 10px var(--primary)'
              }}></div>
              <div style={{ color: 'rgba(255,255,255,0.85)', lineHeight: '1.7' }}>
                Adres do reklamacji: <strong style={{ color: '#fff', fontWeight: '600' }}>smoczyfn.business@gmail.com</strong>
              </div>
            </div>
            
            <div style={{ 
              display: 'flex', 
              alignItems: 'flex-start',
              padding: '1.25rem',
              background: 'rgba(0,0,0,0.25)',
              borderRadius: '12px',
              border: '1px solid rgba(220,38,38,0.15)'
            }}>
              <div style={{ 
                width: '8px', 
                height: '8px', 
                background: 'var(--primary)', 
                borderRadius: '50%',
                marginTop: '0.6rem',
                marginRight: '1rem',
                flexShrink: 0,
                boxShadow: '0 0 10px var(--primary)'
              }}></div>
              <div style={{ color: 'rgba(255,255,255,0.85)', lineHeight: '1.7' }}>
                Podaj nick gracza, zakupiony produkt, datę płatności, numer zamówienia lub identyfikator płatności oraz opis problemu.
              </div>
            </div>
            
            <div style={{ 
              display: 'flex', 
              alignItems: 'flex-start',
              padding: '1.25rem',
              background: 'rgba(0,0,0,0.25)',
              borderRadius: '12px',
              border: '1px solid rgba(220,38,38,0.15)'
            }}>
              <div style={{ 
                width: '8px', 
                height: '8px', 
                background: 'var(--primary)', 
                borderRadius: '50%',
                marginTop: '0.6rem',
                marginRight: '1rem',
                flexShrink: 0,
                boxShadow: '0 0 10px var(--primary)'
              }}></div>
              <div style={{ color: 'rgba(255,255,255,0.85)', lineHeight: '1.7' }}>
                Jeśli masz potwierdzenie płatności, dołącz je jako załącznik lub wklej identyfikator transakcji.
              </div>
            </div>
            
            <div style={{ 
              display: 'flex', 
              alignItems: 'flex-start',
              padding: '1.25rem',
              background: 'rgba(0,0,0,0.25)',
              borderRadius: '12px',
              border: '1px solid rgba(220,38,38,0.15)'
            }}>
              <div style={{ 
                width: '8px', 
                height: '8px', 
                background: 'var(--primary)', 
                borderRadius: '50%',
                marginTop: '0.6rem',
                marginRight: '1rem',
                flexShrink: 0,
                boxShadow: '0 0 10px var(--primary)'
              }}></div>
              <div style={{ color: 'rgba(255,255,255,0.85)', lineHeight: '1.7' }}>
                Odpowiedź na reklamację otrzymasz w terminie do <strong style={{ color: '#fff' }}>14 dni</strong> od jej otrzymania.
              </div>
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div style={{ 
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
              Możliwe rozstrzygnięcia
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
          
          <p style={{ color: 'rgba(255,255,255,0.85)', lineHeight: '1.9', marginBottom: '2rem', fontSize: '1.05rem' }}>
            Po pozytywnym rozpatrzeniu reklamacji administrator może zastosować rozwiązanie odpowiednie do sytuacji:
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
            {[
              'ponownie aktywować produkt',
              'przenieść produkt na poprawny nick',
              'wydać produkt zamiennik o tej samej wartości',
              'zwrócić środki, jeżeli produkt nie może zostać dostarczony'
            ].map((item, idx) => (
              <div key={idx} style={{
                padding: '1.5rem',
                background: 'rgba(220,38,38,0.08)',
                border: '1px solid rgba(220,38,38,0.2)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                transition: 'all 0.3s ease'
              }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  background: 'linear-gradient(135deg, var(--primary), rgba(220,38,38,0.6))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontWeight: 'bold',
                  fontSize: '0.9rem',
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
        </div>

        {/* Section 3 */}
        <div style={{ 
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
              Odstąpienie od umowy
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
          
          <div style={{ display: 'grid', gap: '1.5rem' }}>
            <p style={{ color: 'rgba(255,255,255,0.85)', lineHeight: '1.9', fontSize: '1.05rem' }}>
              Konsument może odstąpić od umowy zawartej na odległość w terminie <strong style={{ color: '#fff' }}>14 dni</strong>, o ile nie utracił tego prawa zgodnie z przepisami dotyczącymi treści cyfrowych.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.85)', lineHeight: '1.9', fontSize: '1.05rem' }}>
              Prawo odstąpienia wygasa po rozpoczęciu dostarczania produktu cyfrowego, jeżeli przed zakupem klient wyraził zgodę na natychmiastową realizację i przyjął do wiadomości utratę prawa odstąpienia.
            </p>
            <div style={{
              padding: '1.75rem',
              background: 'rgba(220,38,38,0.12)',
              border: '1px solid rgba(220,38,38,0.3)',
              borderRadius: '12px',
              borderLeft: '4px solid var(--primary)'
            }}>
              <p style={{ color: 'rgba(255,255,255,0.9)', lineHeight: '1.8', fontSize: '1.05rem', margin: 0 }}>
                Jeżeli płatność została dokonana, ale produkt nie został jeszcze aktywowany, napisz jak najszybciej na <strong style={{ color: '#fff' }}>smoczyfn.business@gmail.com</strong> z tytułem <strong style={{ color: '#fff' }}>"Odstąpienie od umowy"</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* Wzory Section */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '2.5rem', marginBottom: '2.5rem' }}>
          {/* Wzór Reklamacji */}
          <div style={{ 
            background: 'linear-gradient(135deg, rgba(30,15,15,0.7) 0%, rgba(50,20,20,0.5) 100%)',
            border: '1px solid rgba(220,38,38,0.25)',
            borderRadius: '20px',
            padding: '3rem',
            backdropFilter: 'blur(20px)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.3)'
          }}>
            <h3 style={{ 
              color: '#fff', 
              fontSize: '1.4rem', 
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
                Wzór reklamacji
              </span>
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '50px',
                height: '3px',
                background: 'linear-gradient(90deg, var(--primary), transparent)',
                borderRadius: '10px'
              }}></div>
            </h3>
            
            <div style={{ 
              background: 'rgba(0,0,0,0.4)',
              border: '1px solid rgba(220,38,38,0.2)',
              borderRadius: '12px',
              padding: '2rem',
              fontFamily: '"Courier New", monospace',
              fontSize: '0.9rem',
              lineHeight: '1.9'
            }}>
              <p style={{ margin: '0 0 1rem 0', color: 'rgba(255,255,255,0.9)' }}><strong>Temat:</strong> Reklamacja zamówienia KoziaMC</p>
              <p style={{ margin: '0 0 1rem 0', color: 'rgba(255,255,255,0.75)' }}>Nick gracza: <span style={{ color: 'var(--primary)' }}>_____________</span></p>
              <p style={{ margin: '0 0 1rem 0', color: 'rgba(255,255,255,0.75)' }}>Produkt: <span style={{ color: 'var(--primary)' }}>_____________</span></p>
              <p style={{ margin: '0 0 1rem 0', color: 'rgba(255,255,255,0.75)' }}>Data płatności: <span style={{ color: 'var(--primary)' }}>_____________</span></p>
              <p style={{ margin: '0 0 1rem 0', color: 'rgba(255,255,255,0.75)' }}>Numer zamówienia: <span style={{ color: 'var(--primary)' }}>_____________</span></p>
              <p style={{ margin: '0 0 1rem 0', color: 'rgba(255,255,255,0.75)' }}>Opis problemu: <span style={{ color: 'var(--primary)' }}>_____________</span></p>
              <p style={{ margin: 0, color: 'rgba(255,255,255,0.75)' }}>Oczekiwane rozwiązanie: <span style={{ color: 'var(--primary)' }}>_____________</span></p>
            </div>
          </div>

          {/* Wzór Odstąpienia */}
          <div style={{ 
            background: 'linear-gradient(135deg, rgba(30,15,15,0.7) 0%, rgba(50,20,20,0.5) 100%)',
            border: '1px solid rgba(220,38,38,0.25)',
            borderRadius: '20px',
            padding: '3rem',
            backdropFilter: 'blur(20px)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.3)'
          }}>
            <h3 style={{ 
              color: '#fff', 
              fontSize: '1.4rem', 
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
                Wzór odstąpienia
              </span>
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '50px',
                height: '3px',
                background: 'linear-gradient(90deg, var(--primary), transparent)',
                borderRadius: '10px'
              }}></div>
            </h3>
            
            <div style={{ 
              background: 'rgba(0,0,0,0.4)',
              border: '1px solid rgba(220,38,38,0.2)',
              borderRadius: '12px',
              padding: '2rem',
              fontFamily: '"Courier New", monospace',
              fontSize: '0.9rem',
              lineHeight: '1.9'
            }}>
              <p style={{ margin: '0 0 1rem 0', color: 'rgba(255,255,255,0.9)' }}><strong>Temat:</strong> Odstąpienie od umowy KoziaMC</p>
              <p style={{ margin: '0 0 1rem 0', color: 'rgba(255,255,255,0.75)' }}>Oświadczam, że odstępuję od umowy...</p>
              <p style={{ margin: '0 0 1rem 0', color: 'rgba(255,255,255,0.75)' }}>Nick gracza: <span style={{ color: 'var(--primary)' }}>_____________</span></p>
              <p style={{ margin: '0 0 1rem 0', color: 'rgba(255,255,255,0.75)' }}>Data zakupu: <span style={{ color: 'var(--primary)' }}>_____________</span></p>
              <p style={{ margin: '0 0 1rem 0', color: 'rgba(255,255,255,0.75)' }}>Numer zamówienia: <span style={{ color: 'var(--primary)' }}>_____________</span></p>
              <p style={{ margin: '0 0 1rem 0', color: 'rgba(255,255,255,0.75)' }}>Imię i nazwisko: <span style={{ color: 'var(--primary)' }}>_____________</span></p>
              <p style={{ margin: 0, color: 'rgba(255,255,255,0.75)' }}>Adres e-mail: <span style={{ color: 'var(--primary)' }}>_____________</span></p>
            </div>
            <p style={{ fontSize: '0.85rem', marginTop: '1.5rem', fontStyle: 'italic', color: 'rgba(255,255,255,0.6)', margin: '1.5rem 0 0 0' }}>
              Wysłanie powyższego wzoru nie jest obowiązkowe. Wystarczy jednoznaczne oświadczenie o odstąpieniu od umowy.
            </p>
          </div>
        </div>

        {/* Contact Footer */}
        <div style={{ 
          background: 'linear-gradient(135deg, rgba(220,38,38,0.15), rgba(180,28,28,0.1))',
          border: '1px solid rgba(220,38,38,0.3)',
          borderRadius: '20px',
          padding: '3rem',
          textAlign: 'center',
          backdropFilter: 'blur(20px)',
          boxShadow: '0 8px 32px rgba(220,38,38,0.2)'
        }}>
          <div style={{ 
            fontSize: '0.85rem', 
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.7)',
            marginBottom: '1.5rem',
            fontWeight: '600'
          }}>
            <i className="fas fa-envelope" style={{ marginRight: '0.75rem', color: 'var(--primary)' }}></i>
            Adres i kontakt
          </div>
          <h4 style={{ color: '#fff', fontSize: '1.3rem', marginBottom: '1rem', fontWeight: '600' }}>
            KoziaMC.PL - Obsługa sklepu i reklamacji
          </h4>
          <p style={{ color: 'rgba(255,255,255,0.85)', marginBottom: '0.75rem', fontSize: '1.05rem' }}>
            E-mail: <strong style={{ color: '#fff', fontWeight: '600' }}>smoczyfn.business@gmail.com</strong>
          </p>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.95rem', margin: 0 }}>
            Obsługa reklamacji: dni robocze 9:00-17:00
          </p>
        </div>
      </div>
    </PageLayout>
  )
}

export default ZwrotyPage