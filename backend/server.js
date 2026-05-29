import dotenv from 'dotenv'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

dotenv.config({ path: join(__dirname, '.env') })

import express from 'express'
import Stripe from 'stripe'
import cors from 'cors'
import { status, RCON } from 'minecraft-server-util'
import mongoose from 'mongoose'

const app = express()
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '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')
const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ Połączono z MongoDB'))
  .catch(err => console.error('❌ Błąd MongoDB:', err))

import ordersRouter from './routes/orders.js'
app.use('/api/orders', ordersRouter)

const products = [
  { id: 1, name: 'Doładowanie 5 PLN', price: 5, coins: 5, isPopular: false, sortOrder: 1 },
  { id: 2, name: 'Doładowanie 10 PLN', price: 10, coins: 10, isPopular: false, sortOrder: 2 },
  { id: 3, name: 'Doładowanie 20 PLN', price: 20, coins: 21, isPopular: true, sortOrder: 3 },
  { id: 4, name: 'Doładowanie 30 PLN', price: 30, coins: 31, isPopular: false, sortOrder: 4 },
  { id: 5, name: 'Doładowanie 50 PLN', price: 50, coins: 52, isPopular: false, sortOrder: 5 },
  { id: 6, name: 'Doładowanie dowolne', price: 1, coins: 1, isPopular: false, sortOrder: 6, isCustomAmount: true },
]

app.get('/api/products', (req, res) => {
  res.json({ ok: true, data: products })
})

app.get('/api/customers/recent', (req, res) => {
  res.json({ ok: true, data: [] })
})

app.get('/api/admins', (req, res) => {
  res.json({ ok: true, data: [
    { nick: 'energ1aa', role: 'OWNER', bio: 'Założyciel serwera, słynny youtuber.' },
    { nick: 'youngadi', role: 'ADMIN', bio: 'Technik serwera, zajmujący się większością.' }
  ] })
})

const voucherCodes = new Map([
  ['START', { type: 'percentage', value: 10, description: '10% zniżki na pierwsze zakupy' }],
  
  ['ENERG1AA', { type: 'fixed', value: 5, description: '5 PLN zniżki' }],
])

app.post('/api/vouchers/validate', (req, res) => {
  const { code, nickname, amount } = req.body
  
  if (!code) {
    return res.json({ ok: true, data: { valid: false, message: 'Nie podano kodu' } })
  }

  const voucher = voucherCodes.get(code.toUpperCase())
  
  if (!voucher) {
    return res.json({ ok: true, data: { valid: false, message: 'Nieprawidłowy kod vouchera' } })
  }

  if (amount && amount < 10) {
    return res.json({
      ok: true,
      data: {
        valid: false,
        message: 'Vouchery można użyć tylko przy zakupach powyżej 10 PLN'
      }
    })
  }

  res.json({
    ok: true,
    data: {
      valid: true,
      code: code.toUpperCase(),
      type: voucher.type,
      value: voucher.value,
      message: voucher.description
    }
  })
})

app.post('/api/vouchers/redeem', (req, res) => {
  const { playerNick, code } = req.body
  if (code === 'TEST123') {
    res.json({ ok: true, data: { message: 'Voucher aktywowany!', reward: '10 vPLN' } })
  } else {
    res.status(400).json({ ok: false, error: { message: 'Nieprawidłowy kod' } })
  }
})

app.post('/api/discounts/validate', (req, res) => {
  const { code, amount } = req.body
  
  if (!code) {
    return res.json({ ok: true, data: { valid: false, message: 'Nie podano kodu' } })
  }

  const discount = voucherCodes.get(code.toUpperCase())
  
  if (!discount) {
    return res.json({ ok: true, data: { valid: false, message: 'Nieprawidłowy kod rabatowy' } })
  }

  if (amount && amount < 10) {
    return res.json({
      ok: true,
      data: {
        valid: false,
        message: 'Kody rabatowe można użyć tylko przy zakupach powyżej 10 PLN'
      }
    })
  }

  res.json({
    ok: true,
    data: {
      valid: true,
      code: code.toUpperCase(),
      type: discount.type,
      value: discount.value,
      message: discount.description
    }
  })
})

app.get('/api/vouchers/history', (req, res) => {
  res.json({ ok: true, data: [] })
})

app.get('/api/server/status', async (req, res) => {
  try {
    const result = await status('83.168.94.236', 50054, { timeout: 5000 })
    
    res.json({
      ok: true,
      data: {
        online: true,
        players: {
          online: result.players.online,
          max: result.players.max
        },
        version: result.version.name,
        motd: result.motd.clean || 'KoziaMC'
      }
    })
  } catch (error) {
    res.json({
      ok: true,
      data: {
        online: false,
        players: {
          online: 0,
          max: 100
        },
        version: '1.21.8',
        motd: 'KoziaMC'
      }
    })
  }
})

app.post('/api/auth/callback', (req, res) => {
  res.json({ ok: true })
})

app.get('/api/auth/me', (req, res) => {
  res.json({ ok: true, data: null })
})

app.post('/api/create-checkout', async (req, res) => {
    try {
        const { amount, nickname, email, coins, productName, productId, productType, rconCommands } = req.body
        
        if (!nickname || !amount) {
            return res.status(400).json({ error: 'Brak wymaganych danych' })
        }

        let description = ''
        if (productType === 'item') {
            description = productName
        } else {
            description = `${coins} vPLN na koncie ${nickname}`
        }

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card', 'blik'],
            line_items: [{
                price_data: {
                    currency: 'pln',
                    product_data: {
                        name: productName || `Doładowanie portfela - ${nickname}`,
                        description: description,
                        images: ['https://koziamc.pl/logo.png']
                    },
                    unit_amount: Math.round(amount * 100),
                },
                quantity: 1,
            }],
            mode: 'payment',
            success_url: `${process.env.FRONTEND_URL}/platnosc/sukces?session_id={CHECKOUT_SESSION_ID}&nickname=${encodeURIComponent(nickname)}&coins=${coins}&productName=${encodeURIComponent(productName)}&productType=${productType}`,
            cancel_url: `${process.env.FRONTEND_URL}/platnosc/blad`,
            customer_email: email,
            metadata: {
                nickname: nickname,
                coins: (coins || 0).toString(),
                productName: productName || `Doładowanie ${coins} vPLN`,
                productId: (productId || 0).toString(),
                productType: productType || 'coins',
                rconCommands: rconCommands ? JSON.stringify(rconCommands) : ''
            }
        })
        
        console.log(`💳 Sesja checkout utworzona dla ${nickname}: ${productName}`)
        res.json({ url: session.url, sessionId: session.id })
        
    } catch (error) {
        console.error('❌ Błąd Stripe:', error)
        res.status(500).json({ error: error.message })
    }
})



const PORT = 3000
app.listen(PORT, () => {
    console.log(`🚀 Backend na porcie ${PORT}`)
    console.log(`💳 Stripe gotowy`)
    console.log(`📦 Produkty: ${products.length}`)
    console.log(`🗄️  MongoDB połączone`)
})