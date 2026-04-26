import { useEffect } from 'react'
import {
  ADSENSE_PUBLISHER_ID,
  GA_MEASUREMENT_ID,
  GSC_VERIFICATION,
} from '../config.js'

function ensureScript(id, build) {
  if (document.getElementById(id)) return
  const el = build()
  el.id = id
  document.head.appendChild(el)
}

function ensureMeta(name, content) {
  if (!content) return
  if (document.head.querySelector(`meta[name="${name}"]`)) return
  const el = document.createElement('meta')
  el.setAttribute('name', name)
  el.setAttribute('content', content)
  document.head.appendChild(el)
}

export default function HeadIntegrations() {
  useEffect(() => {
    if (GSC_VERIFICATION) {
      ensureMeta('google-site-verification', GSC_VERIFICATION)
    }

    if (ADSENSE_PUBLISHER_ID) {
      ensureScript('adsense-loader', () => {
        const s = document.createElement('script')
        s.async = true
        s.crossOrigin = 'anonymous'
        s.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_PUBLISHER_ID}`
        return s
      })
    }

    if (GA_MEASUREMENT_ID) {
      ensureScript('ga-loader', () => {
        const s = document.createElement('script')
        s.async = true
        s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
        return s
      })
      ensureScript('ga-init', () => {
        const s = document.createElement('script')
        s.text = `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `
        return s
      })
    }
  }, [])

  return null
}
