import { useEffect, useRef } from 'react'

/**
 * Adds `is-in` class when the element scrolls into view.
 * Respects prefers-reduced-motion (handled in CSS fallback).
 */
export function useReveal(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.14, rootMargin: '0px 0px -8% 0px', ...options },
    )

    io.observe(el)
    return () => io.disconnect()
  }, [])

  return ref
}
