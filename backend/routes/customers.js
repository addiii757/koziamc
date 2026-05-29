import express from 'express'

const router = express.Router()

const recentCustomers = [
  { id: 1, minecraftNick: 'Steve123', rewardLabel: '20 vPLN', walletTopupAmount: 20 },
  { id: 2, minecraftNick: 'Alex456', rewardLabel: '50 vPLN', walletTopupAmount: 50 },
  { id: 3, minecraftNick: 'Koxik', rewardLabel: '10 vPLN', walletTopupAmount: 10 },
  { id: 4, minecraftNick: 'MineCrafter', rewardLabel: '100 vPLN', walletTopupAmount: 100 },
  { id: 5, minecraftNick: 'Graczu', rewardLabel: '30 vPLN', walletTopupAmount: 30 },
]

router.get('/recent', (req, res) => {
  res.json({ ok: true, data: recentCustomers })
})

export default router