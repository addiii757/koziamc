import React, { useEffect, useRef } from 'react'

const SakuraCanvas = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let animationId
    let particles = []

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createParticles = () => {
      const particleCount = Math.min(50, Math.floor(window.innerWidth / 30))
      particles = []
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: 5 + Math.random() * 10,
          speedX: -0.5 + Math.random() * 1,
          speedY: 0.5 + Math.random() * 2,
          opacity: 0.3 + Math.random() * 0.5,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: -0.02 + Math.random() * 0.04,
        })
      }
    }

    const drawPetal = (ctx, x, y, size, rotation, opacity) => {
      ctx.save()
      ctx.translate(x, y)
      ctx.rotate(rotation)
      ctx.beginPath()
      ctx.moveTo(0, 0)
      ctx.bezierCurveTo(size * 0.5, -size * 0.3, size, -size * 0.1, size * 0.8, size * 0.3)
      ctx.bezierCurveTo(size * 0.5, size * 0.5, size * 0.2, size * 0.3, 0, 0)
      ctx.fillStyle = `rgba(232, 160, 180, ${opacity * 0.6})`
      ctx.fill()
      ctx.restore()
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach(p => {
        p.x += p.speedX
        p.y += p.speedY
        p.rotation += p.rotationSpeed

        if (p.x < -50) p.x = canvas.width + 50
        if (p.x > canvas.width + 50) p.x = -50
        if (p.y > canvas.height + 50) {
          p.y = -50
          p.x = Math.random() * canvas.width
        }

        drawPetal(ctx, p.x, p.y, p.size, p.rotation, p.opacity)
      })

      animationId = requestAnimationFrame(animate)
    }

    resizeCanvas()
    createParticles()
    animate()

    window.addEventListener('resize', () => {
      resizeCanvas()
      createParticles()
    })

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="sakura-canvas" style={{ position: 'fixed', top: 0, left: 0, pointerEvents: 'none', zIndex: 9999 }} />
}

export default SakuraCanvas