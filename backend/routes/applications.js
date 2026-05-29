import express from 'express'

const router = express.Router()

let applications = []

router.post('/', async (req, res) => {
  const { applicationType, minecraftNick, answers } = req.body

  if (!applicationType || !minecraftNick) {
    return res.status(400).json({ ok: false, error: { message: 'Brak wymaganych danych' } })
  }

  const newApplication = {
    id: Date.now(),
    applicationType,
    minecraftNick,
    answers,
    status: 'PENDING',
    createdAt: new Date().toISOString()
  }

  applications.push(newApplication)

  res.json({ ok: true, data: { message: 'Zgłoszenie zostało wysłane' } })
})

router.get('/my', (req, res) => {
  res.json({ ok: true, data: applications })
})

export default router