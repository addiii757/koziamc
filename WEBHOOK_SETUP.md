# Konfiguracja Stripe Webhook i RCON

## 1. Konfiguracja Stripe Webhook

### Uzyskanie Webhook Secret

1. Zaloguj się do [Stripe Dashboard](https://dashboard.stripe.com)
2. Przejdź do **Developers** → **Webhooks**
3. Kliknij **Add endpoint**
4. Podaj URL: `https://twoja-domena.pl/webhook`
5. Wybierz event: `checkout.session.completed`
6. Skopiuj **Signing secret** (zaczyna się od `whsec_`)
7. Wklej go do pliku `backend/.env` jako `STRIPE_WEBHOOK_SECRET`

### Testowanie lokalnie (ngrok)

Jeśli testujesz lokalnie, użyj ngrok:

```bash
ngrok http 3000
```

Następnie użyj URL ngrok (np. `https://abc123.ngrok.io/webhook`) w konfiguracji Stripe webhook.

## 2. Konfiguracja RCON (Minecraft)

### Włączenie RCON na serwerze Minecraft

W pliku `server.properties`:

```properties
enable-rcon=true
rcon.port=25575
rcon.password=TWOJE_BEZPIECZNE_HASLO
```

### Aktualizacja .env

W pliku `backend/.env` ustaw:

```env
RCON_HOST=83.168.94.236
RCON_PORT=25575
RCON_PASSWORD=TWOJE_BEZPIECZNE_HASLO
```

## 3. Jak to działa

Gdy klient dokona płatności:

1. **Stripe** wysyła webhook do `/webhook`
2. **Backend** weryfikuje webhook signature
3. **Wykonuje się komenda RCON**: `/aportfel add <nick> <kwota>`
4. **Zamówienie** jest zapisywane do MongoDB ze statusem `COMPLETED`
5. **Ostatnie zakupy** automatycznie aktualizują się na stronie

## 4. Testowanie

### Test RCON (ręczny)

```javascript
import { RCON } from 'minecraft-server-util'

const rcon = new RCON()
await rcon.connect('83.168.94.236', 25575)
await rcon.login('TWOJE_HASLO')
const response = await rcon.execute('aportfel add TestPlayer 100')
console.log(response)
await rcon.close()
```

### Test Webhook (lokalnie)

Użyj [Stripe CLI](https://stripe.com/docs/stripe-cli):

```bash
stripe listen --forward-to localhost:3000/webhook
stripe trigger checkout.session.completed
```

## 5. Wymagane zmienne środowiskowe

Sprawdź, czy w `backend/.env` masz wszystkie:

```env
PORT=3000
STRIPE_SECRET_KEY=sk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...
FRONTEND_URL=http://localhost:5173
MONGODB_URI=mongodb+srv://...
RCON_HOST=83.168.94.236
RCON_PORT=25575
RCON_PASSWORD=twoje_haslo
```

## 6. Bezpieczeństwo

⚠️ **WAŻNE:**
- Nigdy nie commituj pliku `.env` do repozytorium
- Używaj mocnych haseł RCON
- Webhook musi być dostępny przez HTTPS w produkcji
- Sprawdzaj signature każdego webhooka