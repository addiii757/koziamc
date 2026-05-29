import express from 'express'

const router = express.Router()

const discountCodes = new Map([
  ['START10', { type: 'percentage', value: 10, description: '10% zniżki na pierwsze zakupy' }],
  ['KOZIA15', { type: 'percentage', value: 15, description: '15% zniżki - kod powitalny' }],
  ['VIP20', { type: 'percentage', value: 20, description: '20% zniżki dla VIPów' }],
  ['MEGA25', { type: 'percentage', value: 25, description: '25% zniżki - kod specjalny' }],
  
  ['BONUS5', { type: 'fixed', value: 5, description: '5 PLN zniżki' }],
  ['GRATIS10', { type: 'fixed', value: 10, description: '10 PLN zniżki' }],
  ['EXTRA15', { type: 'fixed', value: 15, description: '15 PLN zniżki' }],
  ['SUPER20', { type: 'fixed', value: 20, description: '20 PLN zniżki' }],
  
  ['TEST', { type: 'percentage', value: 50, description: '50% zniżki - kod testowy' }],
  ['FREE5', { type: 'fixed', value: 5, description: '5 PLN gratis' }],
])

router.post('/validate', async (req, res) => {
  const { code, amount } = req.body
  
  if (!code) {
    return res.status(400).json({ ok: false, error: { message: 'Nie podano kodu rabatowego' } })
  }

  const discount = discountCodes.get(code.toUpperCase())
  
  if (!discount) {
    return res.json({
      ok: true,
      data: {
        valid: false,
        message: 'Nieprawidłowy kod rabatowy'
      }
    })
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

router.post('/calculate', async (req, res) => {
  const { code, amount } = req.body
  
  if (!code || !amount) {
    return res.status(400).json({ ok: false, error: { message: 'Brak wymaganych danych' } })
  }

  const discount = discountCodes.get(code.toUpperCase())
  
  if (!discount) {
    return res.status(404).json({ ok: false, error: { message: 'Nieprawidłowy kod rabatowy' } })
  }

  let discountAmount = 0
  if (discount.type === 'percentage') {
    discountAmount = Math.round((amount * discount.value) / 100 * 100) / 100
  } else {
    discountAmount = Math.min(discount.value, amount)
  }

  const finalAmount = Math.max(1, amount - discountAmount)

  res.json({
    ok: true,
    data: {
      originalAmount: amount,
      discountAmount,
      finalAmount,
      discount: {
        code: code.toUpperCase(),
        ...discount
      }
    }
  })
})

export default router