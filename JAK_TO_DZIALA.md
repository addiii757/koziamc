# 🎯 JAK DZIAŁA CAŁY SYSTEM - KROK PO KROKU

## 📋 Przegląd systemu:

```
STRONA WWW → STRIPE → WEBHOOK → BACKEND → MongoDB → PLUGIN MC → GRACZ
```

---

## 🔄 PEŁNY PRZEPŁYW ZAKUPU:

### **KROK 1: Gracz kupuje na stronie**
```
1. Gracz wchodzi na stronę: http://localhost:5173
2. Wpisuje swój nick: "youngadi"
3. Wybiera produkt: "VIP Ranga (30 dni)" - 49.99 PLN
4. Klika "KUP TERAZ"
5. Przechodzi do Stripe (płatność BLIK/karta)
```

### **KROK 2: Stripe przetwarza płatność**
```
1. Gracz płaci przez Stripe
2. Płatność jest potwierdzona ✅
3. Stripe wysyła webhook do backend
```

### **KROK 3: Backend zapisuje do MongoDB**
```javascript
// Webhook Stripe w backend/server.js

app.post('/webhook', async (req, res) => {
  const session = event.data.object
  
  // Zapisz zamówienie do MongoDB:
  await Order.create({
    minecraftNickname: "youngadi",
    productName: "VIP Ranga (30 dni)",
    rconCommands: [
      "lp user youngadi parent add vip",
      "give youngadi diamond 64"
    ],
    commandsExecuted: false,  // ← WAŻNE! Plugin to sprawdza
    status: 'completed'
  })
})
```

### **KROK 4: Plugin sprawdza MongoDB (co 10 sekund)**
```java
// Plugin w Minecraft

private void checkOrders() {
  // Znajdź zamówienia gdzie commandsExecuted = false
  Document query = new Document("commandsExecuted", false)
                      .append("rconCommands", exists: true);
  
  for (Document order : ordersCollection.find(query)) {
    processOrder(order);  // Przetwórz zamówienie
  }
}
```

### **KROK 5: Plugin wykonuje komendy**
```java
private void processOrder(Document order) {
  String nickname = "youngadi";
  List<String> commands = order.get("rconCommands");
  
  // Sprawdź czy gracz jest ONLINE
  Player player = Bukkit.getPlayer(nickname);
  
  if (player != null && player.isOnline()) {
    // Wykonaj komendy:
    Bukkit.dispatchCommand(console, "lp user youngadi parent add vip");
    Bukkit.dispatchCommand(console, "give youngadi diamond 64");
    
    // Oznacz jako wykonane w MongoDB:
    ordersCollection.updateOne(
      { "_id": order.getId() },
      { "$set": { "commandsExecuted": true } }
    );
    
    // Powiadom gracza:
    player.sendMessage("§a🎁 Otrzymałeś VIP rangę!");
  }
}
```

### **KROK 6: Gracz dostaje przedmioty!**
```
✅ youngadi dostał rangę VIP
✅ youngadi dostał 64 diamenty
✅ Wiadomość na chacie: "🎁 Otrzymałeś VIP rangę!"
```

---

## 🎮 CO SIĘ DZIEJE W PRAKTYCE:

### **Scenariusz A: Gracz jest ONLINE**
```
1. Gracz kupuje na stronie
2. Backend zapisuje do MongoDB
3. Plugin sprawdza MongoDB (max 10 sekund)
4. Plugin wykrywa nowe zamówienie
5. Plugin wykonuje komendy OD RAZU
6. Gracz dostaje przedmioty!
```

### **Scenariusz B: Gracz jest OFFLINE**
```
1. Gracz kupuje na stronie
2. Backend zapisuje do MongoDB
3. Plugin sprawdza MongoDB
4. Plugin widzi że gracz jest offline
5. Plugin NIE wykonuje komend (czeka)
6. Gracz loguje się na serwer
7. Plugin sprawdza ponownie (co 10s)
8. Plugin wykrywa że gracz jest już online
9. Plugin wykonuje komendy!
10. Gracz dostaje przedmioty!
```

---

## 💾 STRUKTURA DANYCH W MONGODB:

### **Przykładowe zamówienie:**
```json
{
  "_id": "676a3f2e8d9c1b0012345678",
  "orderNumber": "TEST-1735670190123",
  "email": "gracz@example.com",
  "minecraftNickname": "youngadi",
  "productType": "item",
  "productName": "VIP Ranga (30 dni)",
  "amount": 49.99,
  "currency": "pln",
  "status": "completed",
  "rconCommands": [
    "lp user youngadi parent add vip",
    "give youngadi diamond 64",
    "say §ayoungadi §7otrzymał rangę VIP!"
  ],
  "commandsExecuted": false,    ← Plugin szuka tego!
  "createdAt": "2025-12-31T12:00:00Z"
}
```

### **Po wykonaniu komend:**
```json
{
  ...
  "commandsExecuted": true,     ← Plugin ustawia na true
  "executedAt": "2025-12-31T12:00:10Z"
}
```

---

## 🔧 KONFIGURACJA WYMAGANA:

### **1. Backend (`backend/.env`):**
```env
MONGODB_URI=mongodb+srv://youngadi:pinio2009@...
STRIPE_SECRET_KEY=sk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...
```

### **2. Plugin (`plugins/KoziamcShop/config.yml`):**
```yaml
mongodb:
  uri: "mongodb+srv://youngadi:pinio2009@..."
  database: "test"
  collection: "orders"
  
check-interval: 10  # Sprawdzaj co 10 sekund
```

---

## ✅ ZALETY TEGO SYSTEMU:

1. **Nie potrzebujesz RCON** - wszystko przez MongoDB
2. **Nie potrzebujesz łączności plugin↔backend** - tylko MongoDB
3. **Działa na localhost** - backend może być na Twoim PC
4. **Plugin może być na hostingu** - ma dostęp do MongoDB przez internet
5. **Automatyczne retry** - jeśli gracz offline, plugin czeka
6. **Bez duplikatów** - `commandsExecuted` zapobiega powtórkom

---

## 🚀 TESTOWANIE:

### **Test 1: Z konsoli Node.js**
```bash
node test_plugin_commands.js
# Podaj nick: youngadi
# Zostanie utworzone zamówienie w MongoDB
# Plugin wykona je za max 10 sekund
```

### **Test 2: Z prawdziwym zakupem**
```bash
# 1. Uruchom backend:
npm run dev

# 2. Uruchom frontend:
npm run dev

# 3. Wejdź na http://localhost:5173
# 4. Kup coś
# 5. Sprawdź MongoDB czy zamówienie się zapisało
# 6. Plugin wykona w max 10 sekund
```

### **Test 3: Z komendy MC**
```
/shoptest youngadi
# Testowa komenda - daje 1 diament od razu
```

---

## 🎯 GOTOWE!

Wszystko działa przez **MongoDB** jako centralną bazę danych:
- ✅ Backend zapisuje zamówienia
- ✅ Plugin sprawdza zamówienia
- ✅ Plugin wykonuje komendy
- ✅ Plugin oznacza jako wykonane

**Nie potrzebujesz połączenia plugin↔backend!**
**Tylko plugin↔MongoDB (działa przez internet)!**

🚀 **PROSTY, NIEZAWODNY, AUTOMATYCZNY!**