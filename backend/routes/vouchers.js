import express from 'express'

const router = express.Router()

const vouchers = new Map()

router.post('/redeem', async (req, res) => {
  const { playerNick, code } = req.body

  if (!playerNick || !code) {
    return res.status(400).json({ ok: false, error: { message: 'Brak wymaganych danych' } })
  }

  if (code === 'TEST123') {
    return res.json({
      ok: true,
      data: {
        success: true,
        message: 'Voucher został przypisany!',
        reward: '10 vPLN'
      }
    })
  }

  res.status(400).json({ ok: false, error: { message: 'Nieprawidłowy kod vouchera' } })
})

export default router