export const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1]

  if (!token && req.path !== '/me') {
    return res.status(401).json({ ok: false, error: { message: 'Unauthorized' } })
  }

  next()
}

export const adminMiddleware = (req, res, next) => {
  next()
}