# 🎁 Kody Rabatowe - System Zniżek

## 📋 Lista Aktywnych Kodów

### Kody Procentowe

| Kod | Zniżka | Opis |
|-----|--------|------|
| `START10` | 10% | 10% zniżki na pierwsze zakupy |
| `KOZIA15` | 15% | 15% zniżki - kod powitalny |
| `VIP20` | 20% | 20% zniżki dla VIPów |
| `MEGA25` | 25% | 25% zniżki - kod specjalny |
| `TEST` | 50% | 50% zniżki - kod testowy |

### Kody Kwotowe (stałe zniżki)

| Kod | Zniżka | Opis |
|-----|--------|------|
| `BONUS5` | 5 PLN | 5 PLN zniżki |
| `GRATIS10` | 10 PLN | 10 PLN zniżki |
| `EXTRA15` | 15 PLN | 15 PLN zniżki |
| `SUPER20` | 20 PLN | 20 PLN zniżki |
| `FREE5` | 5 PLN | 5 PLN gratis |

## 🛠️ Jak Dodać Nowe Kody

### Lokalizacja Pliku
Kody rabatowe znajdują się w pliku:
```
KOZIAMC.PL/backend/routes/discounts.js
```

### Struktura Kodu

#### Kod Procentowy
```javascript
['NAZWAKODU', { 
  type: 'percentage', 
  value: 15,
  description: 'Opis kodu' 
}]
```

#### Kod Kwotowy
```javascript
['NAZWAKODU', { 
  type: 'fixed', 
  value: 10,
  description: 'Opis kodu' 
}]
```

### Przykład Dodawania Nowego Kodu

1. Otwórz plik `KOZIAMC.PL/backend/routes/discounts.js`
2. Znajdź tablicę `discountCodes`
3. Dodaj nowy wpis:

```javascript
const discountCodes = new Map([
  ['NOWY30', { 
    type: 'percentage', 
    value: 30, 
    description: '30% zniżki - kod specjalny' 
  }],
])
```

## 💡 Typy Zniżek

### 1. Percentage (Procentowa)
- **type**: `'percentage'`
- **value**: wartość od 1 do 100
- **Działanie**: Oblicza zniżkę jako procent od kwoty zakupu
- **Przykład**: Kod `VIP20` (20%) na zakup 100 PLN = 20 PLN zniżki

### 2. Fixed (Stała kwotowa)
- **type**: `'fixed'`
- **value**: kwota w PLN
- **Działanie**: Odejmuje stałą kwotę od zakupu
- **Przykład**: Kod `BONUS5` (5 PLN) na zakup 50 PLN = 5 PLN zniżki
- **Uwaga**: Jeśli kwota zniżki jest większa niż kwota zakupu, zniżka = kwota zakupu - 1 PLN

## 🎯 Przykłady Użycia

### Przykład 1: Kod Procentowy
```
Zakup: 100 PLN
Kod: START10 (10%)
Zniżka: 10 PLN
Do zapłaty: 90 PLN
```

### Przykład 2: Kod Kwotowy
```
Zakup: 50 PLN
Kod: BONUS5 (5 PLN)
Zniżka: 5 PLN
Do zapłaty: 45 PLN
```

### Przykład 3: Kod Kwotowy z Limitacją
```
Zakup: 3 PLN
Kod: GRATIS10 (10 PLN)
Zniżka: 2 PLN (maksymalna możliwa)
Do zapłaty: 1 PLN (minimum)
```

## 🔧 API Endpoints

### Walidacja Kodu
**POST** `/api/discounts/validate`

Request:
```json
{
  "code": "START10"
}
```

Response (sukces):
```json
{
  "ok": true,
  "data": {
    "valid": true,
    "code": "START10",
    "type": "percentage",
    "value": 10,
    "message": "10% zniżki na pierwsze zakupy"
  }
}
```

Response (błąd):
```json
{
  "ok": true,
  "data": {
    "valid": false,
    "message": "Nieprawidłowy kod rabatowy"
  }
}
```

### Obliczenie Zniżki
**POST** `/api/discounts/calculate`

Request:
```json
{
  "code": "START10",
  "amount": 100
}
```

Response:
```json
{
  "ok": true,
  "data": {
    "originalAmount": 100,
    "discountAmount": 10,
    "finalAmount": 90,
    "discount": {
      "code": "START10",
      "type": "percentage",
      "value": 10,
      "description": "10% zniżki na pierwsze zakupy"
    }
  }
}
```

## 📝 Zasady Kodów Rabatowych

1. **Wielkość liter**: Kody są automatycznie konwertowane na wielkie litery
2. **Długość**: Zalecana długość 3-10 znaków
3. **Znaki**: Używaj tylko liter i cyfr (bez znaków specjalnych)
4. **Minimum płatności**: Po zastosowaniu zniżki minimum to 1 PLN
5. **Jeden kod**: Można użyć tylko jednego kodu na transakcję

## 🎨 Funkcje Dodatkowe

### System Bonusów
Oprócz kodów rabatowych działa system automatycznych bonusów:

- **20-49 PLN**: +3% bonusu
- **50-99 PLN**: +5% bonusu
- **100-199 PLN**: +8% bonusu
- **200+ PLN**: +10% bonusu

**Uwaga**: Bonusy są obliczane PRZED zastosowaniem kodu rabatowego.

### Dowolna Kwota
Użytkownicy mogą wybrać dowolną kwotę od 1 do 999 PLN z suwakiem lub wprowadzić ręcznie.

## 🔄 Restart Serwera

Po dodaniu lub edycji kodów rabatowych należy zrestartować serwer backend:

```bash
# W katalogu projektu
npm run dev
```

Lub jeśli używasz PM2:
```bash
pm2 restart backend
```

## ⚠️ Bezpieczeństwo

- Wszystkie kody są przechowywane po stronie serwera
- Walidacja odbywa się na backendzie
- Frontend nie ma dostępu do pełnej listy kodów
- Każda próba użycia kodu jest logowana

## 📞 Kontakt

W razie problemów z kodami rabatowymi skontaktuj się z administratorem serwera.

---

**Ostatnia aktualizacja**: 2026-05-18
**Wersja dokumentu**: 1.0