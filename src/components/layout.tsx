import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Navbar } from './navbar'
import { Footer } from './footer'

const NAV_OFFSET = 88

export function Layout() {
  const location = useLocation()

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const id = location.hash.slice(1)

    if (!id) {
      window.scrollTo(0, 0)
      return
    }

    let tries = 0
    const timer = window.setInterval(() => {
      const el = document.getElementById(id)
      if (el) {
        window.clearInterval(timer)
        const y = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET
        window.scrollTo({ top: Math.max(y, 0), behavior: reduce ? 'auto' : 'smooth' })
      } else if (++tries > 40) {
        window.clearInterval(timer)
      }
    }, 50)
    return () => window.clearInterval(timer)
  }, [location])

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
