import express from 'express'

const router = express.Router()

const mockUser = {
  id: '1',
  username: 'Gracz',
  globalName: 'Gracz KoziaMC',
  avatar: 'https://cdn.discordapp.com/embed/avatars/0.png',
  email: 'gracz@koziamc.pl',
  roles: ['USER']
}

router.get('/me', (req, res) => {
  res.json({ ok: true, data: mockUser })
})

router.post('/logout', (req, res) => {
  res.json({ ok: true, message: 'Wylogowano' })
})

router.get('/discord', (req, res) => {
  const discordAuthUrl = `https://discord.com/api/oauth2/authorize?client_id=${process.env.DISCORD_CLIENT_ID}&redirect_uri=${encodeURIComponent(process.env.DISCORD_REDIRECT_URI)}&response_type=code&scope=identify%20email`
  res.redirect(discordAuthUrl)
})

router.get('/callback', (req, res) => {
  res.redirect(`${process.env.FRONTEND_URL || 'http://localhost:5173'}/auth/callback`)
})

export default router