# 🎮 Produkty z automatycznym nadawaniem przez RCON

## Przegląd systemu

System pozwala na automatyczne nadawanie przedmiotów, rang i innych benefitów na serwerze Minecraft po zakupie w sklepie. Po udanej płatności przez Stripe, serwer automatycznie wykona skonfigurowane komendy RCON na serwerze Minecraft.

## Jak to działa?

1. **Użytkownik kupuje produkt** w sklepie (np. "Diamentowy Miecz" za 15 PLN)
2. **Stripe przetwarza płatność** i wysyła webhook do backendu
3. **Backend łączy się z serwerem Minecraft** przez RCON
4. **Wykonywane są komendy** skonfigurowane dla danego produktu
5. **Gracz otrzymuje przedmioty/rangę** automatycznie na serwerze

## Konfiguracja produktów

### Typy produktów

System wspiera dwa typy produktów:

#### 1. `coins` - Doładowania vPLN (portfel wirtualny)
```javascript
{
  id: 1,
  name: 'Doładowanie 20 PLN',
  price: 20,
  coins: 21,  // Ile vPLN otrzyma gracz
  productType: 'coins'
}
```

#### 2. `item` - Przedmioty/Rangi z komendami RCON
```javascript
{
  id: 100,
  name: 'Diamentowy Miecz',
  price: 15,
  coins: 0,
  productType: 'item',
  rconCommands: [
    'give {nickname} diamond_sword{Enchantments:[{id:"minecraft:sharpness",lvl:5}]} 1'
  ]
}
```

### Dostępne przykłady produktów

W pliku `backend/routes/products.js` znajdują się przykładowe produkty:

1. **Diamentowy Miecz** (15 PLN)
   - Miecz z Sharpness V

2. **Zestaw Diamentowy** (40 PLN)
   - Pełna diamentowa zbroja z Protection IV

3. **Ranga VIP** (25 PLN)
   - Ranga VIP na 30 dni (wymaga LuckPerms)

4. **64x Diamenty** (10 PLN)
   - Stack diamentów

## Dodawanie nowych produktów

### Krok 1: Edytuj plik `backend/routes/products.js`

```javascript
{
  id: 104,  // Unikalny numer ID
  name: 'Nazwa produktu',
  price: 25,  // Cena w PLN
  coins: 0,  // 0 dla produktów typu 'item'
  isPopular: false,  // true jeśli ma być oznaczony jako popularny
  isCustomAmount: false,
  sortOrder: 104,  // Kolejność wyświetlania
  imageUrl: '/logo.png',
  description: 'Opis produktu',
  productType: 'item',  // 'item' dla przedmiotów/rang
  rconCommands: [
    'give {nickname} diamond 64',
    'give {nickname} emerald 32'
  ]
}
```

### Krok 2: Zastosuj zmiany

Zapisz plik i uruchom ponownie serwer:
```bash
cd backend
npm start
```

## Placeholder {nickname}

W komendach RCON użyj `{nickname}` - zostanie automatycznie zastąpiony nickiem gracza:

```javascript
rconCommands: [
  'give {nickname} diamond 64',           // ✅ Poprawnie
  'lp user {nickname} parent add vip',    // ✅ Poprawnie
  'give PlayerName diamond 64'            // ❌ Źle - nick zahardcodowany
]
```

## Przykładowe komendy RCON

### Nadawanie przedmiotów
```javascript
// Podstawowe przedmioty
'give {nickname} diamond 64'
'give {nickname} emerald 32'
'give {nickname} golden_apple 16'

// Przedmioty z enchantami
'give {nickname} diamond_sword{Enchantments:[{id:"minecraft:sharpness",lvl:5}]} 1'
'give {nickname} bow{Enchantments:[{id:"minecraft:power",lvl:5},{id:"minecraft:infinity",lvl:1}]} 1'
'give {nickname} diamond_pickaxe{Enchantments:[{id:"minecraft:efficiency",lvl:5},{id:"minecraft:fortune",lvl:3}]} 1'

// Zbroja
'give {nickname} diamond_helmet{Enchantments:[{id:"minecraft:protection",lvl:4}]} 1'
'give {nickname} diamond_chestplate{Enchantments:[{id:"minecraft:protection",lvl:4}]} 1'
```

### Nadawanie rang (LuckPerms)
```javascript
// Dodanie rangi
'lp user {nickname} parent add vip'
'lp user {nickname} parent add mvp'

// Dodanie permisji
'lp user {nickname} permission set essentials.fly true'
'lp user {nickname} permission set worldedit.* true'

// Ustawienie prefixu
'lp user {nickname} meta setprefix "&6[VIP] &r"'
```

### Ekonomia (Vault/EssentialsX)
```javascript
// Dodanie pieniędzy
'eco give {nickname} 10000'
'eco add {nickname} 5000'

// Wykonanie poleceń dla gracza
'sudo {nickname} fly'
```

### Teleportacja i inne
```javascript
// Teleportacja
'tp {nickname} spawn'
'tp {nickname} 100 64 200'

// Wykonanie komendy jako gracz
'sudo {nickname} sethome vip'
```

## Testowanie

### Test lokalny produktu typu 'coins':
1. Przejdź do sklepu
2. Wybierz "Doładowanie 20 PLN"
3. Wpisz swój nick Minecraft
4. Dokończ płatność (środowisko testowe Stripe)
5. Sprawdź czy otrzymałeś vPLN na serwerze: `/aportfel`

### Test produktu typu 'item':
1. Wybierz produkt z `productType: 'item'` (np. "Diamentowy Miecz")
2. Wpisz swój nick
3. Dokończ płatność
4. Sprawdź ekwipunek w grze - powinieneś otrzymać przedmiot

### Logowanie

Sprawdź logi serwera podczas płatności:
```bash
cd backend
npm start
```

Po udanej płatności zobaczysz:
```
✅ Płatność potwierdzona dla NickGracza
🎮 Wykonywanie 1 komend dla NickGracza
📝 Komenda: give NickGracza diamond_sword{Enchantments:[{id:"minecraft:sharpness",lvl:5}]} 1
📝 Odpowiedź: Gave 1 [Diamond Sword] to NickGracza
💾 Zamówienie zapisane w bazie danych
```

## Konfiguracja RCON

Upewnij się, że w pliku `backend/.env` masz poprawne dane RCON:

```env
RCON_HOST=83.168.94.234
RCON_PORT=25575
RCON_PASSWORD=twoje_haslo
```

### Włączenie RCON na serwerze Minecraft

W pliku `server.properties`:
```properties
enable-rcon=true
rcon.port=25575
rcon.password=twoje_haslo
```

## Bezpieczeństwo

⚠️ **WAŻNE:**
- Nie udostępniaj hasła RCON publicznie
- Trzymaj `backend/.env` w `.gitignore`
- Używaj silnego hasła RCON
- Rozważ użycie firewall'a, aby ograniczyć dostęp do portu RCON

## Rozwiązywanie problemów

### Komendy się nie wykonują
1. Sprawdź logi backendu (`npm start`)
2. Zweryfikuj dane RCON w `.env`
3. Sprawdź czy RCON jest włączony na serwerze (`enable-rcon=true`)
4. Test połączenia RCON:
```bash
node
> const { RCON } = require('minecraft-server-util')
> const rcon = new RCON()
> await rcon.connect('twoj_host', 25575)
> await rcon.login('haslo')
> await rcon.execute('list')
```

### Produkt nie pojawia się w sklepie
1. Sprawdź `backend/routes/products.js`
2. Upewnij się, że produkt ma unikalny `id`
3. Uruchom ponownie backend (`npm start`)

### Gracz nie otrzymał przedmiotu
1. Sprawdź logi - czy komendy zostały wykonane?
2. Sprawdź czy nick gracza jest poprawny
3. Sprawdź czy gracz był online podczas zakupu
4. Niektóre przedmioty mogą wymagać, aby gracz był online

## Model danych

Produkty są zapisywane w MongoDB (`Order` model):
```javascript
{
  orderId: "cs_xxx",
  playerNick: "NickGracza",
  productId: 100,
  productName: "Diamentowy Miecz",
  amount: 15,
  coins: 0,
  status: "COMPLETED",
  completedAt: new Date()
}
```

## Wsparcie

Jeśli masz problemy:
1. Sprawdź logi backendu
2. Sprawdź logi serwera Minecraft
3. Przetestuj połączenie RCON ręcznie
4. Sprawdź czy składnia komend jest poprawna