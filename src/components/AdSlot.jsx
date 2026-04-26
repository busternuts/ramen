import { useEffect, useRef } from 'react'
import { ADSENSE_PUBLISHER_ID } from '../config.js'

export default function AdSlot({ slot, format = 'auto', responsive = true }) {
  const insRef = useRef(null)

  useEffect(() => {
    if (!ADSENSE_PUBLISHER_ID || !slot) return
    try {
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch {
      // adsbygoogle not loaded yet — script loader handles its own init
    }
  }, [slot])

  if (!ADSENSE_PUBLISHER_ID || !slot) return null

  return (
    <ins
      ref={insRef}
      className="adsbygoogle"
      style={{ display: 'block', margin: '1.5rem 0' }}
      data-ad-client={ADSENSE_PUBLISHER_ID}
      data-ad-slot={slot}
      data-ad-format={format}
      data-full-width-responsive={responsive ? 'true' : 'false'}
    />
  )
}
