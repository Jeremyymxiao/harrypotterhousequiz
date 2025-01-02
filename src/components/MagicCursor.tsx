'use client'

import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  life: number
  opacity: number
}

export default function MagicCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particles = useRef<Particle[]>([])
  const mousePosition = useRef({ x: 0, y: 0 })
  const animationFrameId = useRef<number>()

  const createParticle = (x: number, y: number): Particle => ({
    x,
    y,
    size: Math.random() * 3 + 1,
    speedX: (Math.random() - 0.5) * 2,
    speedY: (Math.random() - 0.5) * 2,
    life: 1,
    opacity: 1
  })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // 设置画布大小
    const updateCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    updateCanvasSize()
    window.addEventListener('resize', updateCanvasSize)

    // 鼠标移动事件
    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current.x = e.clientX
      mousePosition.current.y = e.clientY

      // 创建新的粒子
      for (let i = 0; i < 2; i++) {
        particles.current.push(createParticle(e.clientX, e.clientY))
      }
    }
    window.addEventListener('mousemove', handleMouseMove)

    // 动画循环
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // 更新和绘制粒子
      particles.current = particles.current.filter(particle => {
        particle.x += particle.speedX
        particle.y += particle.speedY
        particle.life -= 0.01
        particle.opacity = particle.life

        if (particle.life <= 0) return false

        // 绘制星星
        ctx.save()
        ctx.globalAlpha = particle.opacity
        ctx.beginPath()
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size
        )
        gradient.addColorStop(0, '#ffffff')
        gradient.addColorStop(0.4, '#fff5e6')
        gradient.addColorStop(1, 'rgba(255, 250, 240, 0)')
        ctx.fillStyle = gradient
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()

        return true
      })

      animationFrameId.current = requestAnimationFrame(animate)
    }
    animate()

    // 清理
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', updateCanvasSize)
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 9999
      }}
    />
  )
} 