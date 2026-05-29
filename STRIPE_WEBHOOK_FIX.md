# 🔧 STRIPE WEBHOOK - DLACZEGO NIE DZIAŁA I JAK NAPRAWIĆ

## ❌ PROBLEM:

Kupujesz na stronie → MongoDB **NIE ZAPISUJE** zamówienia → Plugin **NIE DOSTAJE** danych

**PRZYCZYNA:** Stripe nie wie gdzie wysyłać webhooks na localhost!

---

## ✅ ROZWIĄZANIE: Stripe CLI

### **KROK 1: Zainstaluj Stripe CLI**

**Windows:**
```bash
# Pobierz z:
https://github.com/stripe/stripe-cli/releases/latest

# Lub przez scoop:
scoop install stripe
```

**Mac/Linux:**
```bash
brew install stripe/stripe-cli/stripe
```

### **KROK 2: Zaloguj się do Stripe**

```bash
stripe login
```

To otworzy przeglądarkę - zaloguj się do swojego konta Stripe.

### **KROK 3: Uruchom webhook forwarding**

```bash
# W NOWYM TERMINALU (zostaw go otwartego!):
stripe listen --forward-to localhost:3000/webhook
```

**Zobaczysz:**
```
> Ready! You are using Stripe API Version [2024-12-18]. 
> Your webhook signing secret is whsec_xxxxxxxxxxxxx (^C to quit)
```

### **KROK 4: Skopiuj webhook secret**

```
whsec_xxxxxxxxxxxxx
        ^^^^^^^^^^^
     SKOPIUJ TO!
```

### **KROK 5: Dodaj do backend/.env**

```env
STRIPE_WEBHOOK_SECRET=whsec_xxxxxxxxxxxxx
```

### **KROK 6: Zrestartuj backend**

```bash
# Zatrzymaj (Ctrl+C) i uruchom ponownie:
npm run dev
```

---

## 🧪 TEST:

### **Terminal 1: Backend**
```bash
npm run dev
```

### **Terminal 2: Stripe CLI (ZOSTAW OTWARTY!)**
```bash
stripe listen --forward-to localhost:3000/webhook
```

### **Terminal 3: Frontend**
```bash
npm run dev
```

### **Przeglądarka:**
```
http://localhost:5173

1. Wybierz: 🧪 TEST (DARMOWY) - 0 PLN
2. Wpisz nick: youngadi
3. Email: test@test.pl
4. Kliknij KUP TERAZ
5. Użyj testowej karty:
   
   Numer karty: 4242 4242 4242 4242
   Data: 12/34
   CVC: 123
   
6. Zapłać
```

### **W terminalu 2 (Stripe CLI) zobaczysz:**
```
<-- [201] POST http://localhost:3000/webhook [evt_xxxxx]
✅ Płatność potwierdzona dla youngadi
💾 Zamówienie zapisane w MongoDB (coins)
```

### **Sprawdź MongoDB:**
```bash
# Powinno być nowe zamówienie!
db.orders.find().sort({createdAt: -1}).limit(1)
```

---

## 🎯 DLACZEGO TO JEST POTRZEBNE?

### **BEZ Stripe CLI:**
```
Strona → Stripe → ??? → Backend (webhook NIE DOCIERA!)
                  ↑
            Stripe nie wie gdzie jest localhost
```

### **Z Stripe CLI:**
```
Strona → Stripe → Stripe CLI → localhost:3000/webhook → MongoDB ✅
                      ↓
              Przekierowuje webhook!
```

---

## 📋 PRODUKCJA (gdy wdrożysz na VPS):

Na produkcji NIE POTRZEBUJESZ Stripe CLI!

1. Wejdź na: https://dashboard.stripe.com/webhooks
2. Kliknij "+ Add endpoint"
3. Podaj URL: `https://twoja-domena.pl/webhook`
4. Wybierz event: `checkout.session.completed`
5. Skopiuj webhook secret
6. Dodaj do `.env` na VPS

**Gotowe! Na produkcji działa bez Stripe CLI!**

---

## ⚠️ WAŻNE:

- **Stripe CLI MUSI BYĆ WŁĄCZONY** podczas testowania lokalnie
- **Bez Stripe CLI** webhook nie dotrze do localhost
- **Na produkcji** (VPS z publicznym URL) Stripe CLI NIE jest potrzebne

---

## 🎁 BONUS: Testowy produkt

Dodałem produkt:
```
🧪 TEST (DARMOWY) - 0 PLN
```

Użyj go do testów z kartą `4242 4242 4242 4242` - nie zapłacisz ani grosza! 🎉