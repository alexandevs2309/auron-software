import { useEffect } from 'react'

interface SeoProps {
  title: string
  description: string
  path: string
  type?: 'website' | 'article' | 'product'
  noindex?: boolean
  jsonLd?: object | object[]
}

const SITE_URL = 'https://auronsoftware.com'

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

export function Seo({ title, description, path, type = 'website', noindex, jsonLd }: SeoProps) {
  const jsonLdKey = JSON.stringify(jsonLd ?? null)

  useEffect(() => {
    const url = `${SITE_URL}${path}`
    document.title = title
    upsertMeta('name', 'description', description)
    upsertMeta('property', 'og:title', title)
    upsertMeta('property', 'og:description', description)
    upsertMeta('property', 'og:url', url)
    upsertMeta('property', 'og:type', type)
    upsertMeta('property', 'og:image', `${SITE_URL}/og-image.png`)
    upsertMeta('name', 'twitter:title', title)
    upsertMeta('name', 'twitter:description', description)
    upsertMeta('name', 'twitter:image', `${SITE_URL}/og-image.png`)

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', url)

    let robots = document.head.querySelector<HTMLMetaElement>('meta[name="robots"]')
    if (!robots) {
      robots = document.createElement('meta')
      robots.setAttribute('name', 'robots')
      document.head.appendChild(robots)
    }
    robots.setAttribute('content', noindex ? 'noindex, follow' : 'index, follow')

    document.head.querySelectorAll('script[data-seo-jsonld]').forEach((s) => s.remove())
    if (jsonLd) {
      const scripts = Array.isArray(jsonLd) ? jsonLd : [jsonLd]
      scripts.forEach((data) => {
        const script = document.createElement('script')
        script.type = 'application/ld+json'
        script.setAttribute('data-seo-jsonld', 'true')
        script.textContent = JSON.stringify(data)
        document.head.appendChild(script)
      })
    }
  }, [title, description, path, type, noindex, jsonLdKey]) // eslint-disable-line react-hooks/exhaustive-deps

  return null
}
