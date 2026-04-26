import { useState } from 'react'
import {
  NEWSLETTER_ACTION_URL,
  NEWSLETTER_PROVIDER,
  SITE_NAME,
} from '../config.js'

export default function Newsletter() {
  const [status, setStatus] = useState('idle') // idle | submitting | ok | error
  const [email, setEmail] = useState('')

  if (!NEWSLETTER_ACTION_URL) return null

  async function handleSubmit(e) {
    e.preventDefault()
    if (!email) return
    setStatus('submitting')
    try {
      const body = new FormData()
      body.append('email', email)
      const res = await fetch(NEWSLETTER_ACTION_URL, {
        method: 'POST',
        body,
        // Buttondown / Formspree both accept opaque CORS posts; we fall back to no-cors
        // to avoid CORS errors for providers that don't return CORS headers.
        mode: NEWSLETTER_PROVIDER === 'formspree' ? 'cors' : 'no-cors',
      })
      if (NEWSLETTER_PROVIDER === 'formspree' && !res.ok) throw new Error('bad')
      setStatus('ok')
      setEmail('')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="newsletter">
      <h2>One bowl a week</h2>
      <p>
        New article from {SITE_NAME} every Sunday. No spam, unsubscribe with
        one click.
      </p>
      <form onSubmit={handleSubmit} className="newsletter-form">
        <input
          type="email"
          name="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          aria-label="Email address"
        />
        <button type="submit" disabled={status === 'submitting'}>
          {status === 'submitting' ? 'Subscribing…' : 'Subscribe'}
        </button>
      </form>
      {status === 'ok' && (
        <p className="newsletter-msg">Thanks! Check your inbox to confirm.</p>
      )}
      {status === 'error' && (
        <p className="newsletter-msg error">
          Something went wrong. Try again in a moment.
        </p>
      )}
    </section>
  )
}
