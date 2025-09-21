"use client"

import { useEffect, useRef, useState } from 'react'

export default function AnimateOnView({ children, className = 'animate-fadeInUp', once = true, rootMargin = '0px 0px -10% 0px' }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!ref.current) return
    const el = ref.current
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            if (once) obs.unobserve(el)
          }
        })
      },
      { threshold: 0.15, rootMargin }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [once, rootMargin])

  return (
    <div ref={ref} className={`${visible ? className : 'opacity-0 translate-y-4'} transition-all duration-700`}>{children}</div>
  )
}
