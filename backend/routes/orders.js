import express from 'express'

const router = express.Router()

let orders = []

router.post('/', async (req, res) => {
  const { playerNick, productId, discountCode, termsAccepted, digitalDeliveryConsent } = req.body

  if (!playerNick || !productId || !termsAccepted || !digitalDeliveryConsent) {
    return res.status(400).json({ ok: false, error: { message: 'Brak wymaganych danych' } })
  }

  const newOrder = {
    id: Date.now(),
    playerNick,
    productId,
    discountCode: discountCode || null,
    status: 'PENDING',
    createdAt: new Date().toISOString(),
    amount: 0,
  }

  orders.push(newOrder)

  res.json({ ok: true, data: { checkoutUrl: 'https://checkout.stripe.com/xxx' } })
})

router.get('/mine', async (req, res) => {
  res.json({ ok: true, data: orders })
})

router.get('/recent', async (req, res) => {
  try {
    const Order = (await import('../models/Order.js')).default
    
    console.log('📊 Pobieranie ostatnich zakupów...')
    
    const recentOrders = await Order.find({
      status: { $in: ['completed', 'COMPLETED', 'pending'] },
      $or: [
        { executedAt: { $exists: true } },
        { completedAt: { $exists: true } }
      ]
    })
      .sort({ executedAt: -1, completedAt: -1, createdAt: -1 })
      .limit(10)
      .select('minecraftNickname playerNick productName amount coins executedAt completedAt createdAt')
      .lean()
    
    console.log(`✅ Znaleziono ${recentOrders.length} zamówień`)
    console.log('🔍 Pierwsze zamówienie:', recentOrders[0])
    
    const mappedOrders = recentOrders.map(order => {
      let displayName = order.productName || 'Doładowanie'
      
      if (displayName.toLowerCase().includes('dowolne') || displayName.toLowerCase().includes('doładowanie konta')) {
        const amount = order.amount || order.coins || 0
        displayName = `Doładowanie ${amount} PLN`
      }
      
      return {
        playerNick: order.minecraftNickname || order.playerNick || 'Gracz',
        productName: displayName,
        amount: order.amount || order.coins || 0,
        completedAt: order.executedAt || order.completedAt || order.createdAt
      }
    })
    
    console.log('📦 Zwracam zamówienia:', mappedOrders.length)
    
    res.json({ ok: true, data: mappedOrders })
  } catch (error) {
    console.error('❌ Błąd pobierania ostatnich zakupów:', error)
    res.status(500).json({ ok: false, error: { message: 'Błąd serwera' } })
  }
})

router.post('/complete', async (req, res) => {
  try {
    const { sessionId, nickname, coins, productName, productType } = req.body
    
    if (!sessionId || !nickname) {
      return res.status(400).json({ ok: false, error: 'Brak wymaganych danych' })
    }

    const Order = (await import('../models/Order.js')).default
    
    const existingOrder = await Order.findOne({ paymentIntentId: sessionId })
    
    if (existingOrder) {
      console.log('✅ Zamówienie już istnieje w bazie (utworzone przez webhook):', existingOrder.orderNumber)
      return res.json({
        ok: true,
        message: 'Zamówienie już istnieje',
        order: {
          orderNumber: existingOrder.orderNumber,
          paymentIntentId: existingOrder.paymentIntentId
        }
      })
    }
    
    const orderNumber = `ORDER-${Date.now()}`
    const coinsAmount = parseInt(coins) || 0
    const rconCommands = coinsAmount > 0 ? [`aportfel add ${nickname} ${coinsAmount}`] : []
    
    console.log(`🎮 Tworzę nowe zamówienie (backup) dla ${nickname}:`, rconCommands)
    
    const newOrder = new Order({
      orderNumber,
      email: 'checkout@stripe.com',
      minecraftNickname: nickname,
      playerNick: nickname,
      productType: productType || 'coins',
      productName: productName || 'Doładowanie konta',
      amount: coinsAmount,
      coins: coinsAmount,
      currency: 'pln',
      status: 'completed',
      paymentIntentId: sessionId,
      rconCommands: rconCommands,
      commandsExecuted: false,
      completedAt: new Date(),
      createdAt: new Date()
    })

    await newOrder.save()
    
    console.log('✅ Zamówienie backup zapisane w MongoDB:', orderNumber)
    
    res.json({
      ok: true,
      order: {
        orderNumber: newOrder.orderNumber,
        paymentIntentId: newOrder.paymentIntentId,
        playerNick: newOrder.playerNick,
        productName: newOrder.productName
      }
    })
  } catch (error) {
    console.error('❌ Błąd zapisywania zamówienia:', error)
    res.status(500).json({ ok: false, error: error.message })
  }
})

export default router