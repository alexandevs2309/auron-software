import { useEffect } from 'react'

const PLAUSIBLE_DOMAIN = import.meta.env.VITE_PLAUSIBLE_DOMAIN as string | undefined

export function Analytics() {
  useEffect(() => {
    if (!PLAUSIBLE_DOMAIN) return
    if (document.querySelector('script[data-plausible]')) return

    const script = document.createElement('script')
    script.src = 'https://plausible.io/js/script.js'
    script.defer = true
    script.setAttribute('data-domain', PLAUSIBLE_DOMAIN)
    script.setAttribute('data-plausible', 'true')
    document.head.appendChild(script)

    return () => {
      document.querySelectorAll('script[data-plausible]').forEach((s) => s.remove())
    }
  }, [])

  return null
}
