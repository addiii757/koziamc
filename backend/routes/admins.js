import express from 'express'

const router = express.Router()

const admins = [
  { nick: 'energ1aa', role: 'OWNER', bio: 'Założyciel serwera, słynny youtuber.' },
  { nick: 'youngadi', role: 'ADMIN', bio: 'Technik serwera, zajmujący się większością.' },
]

router.get('/', (req, res) => {
  res.json({ ok: true, data: admins })
})

export default router