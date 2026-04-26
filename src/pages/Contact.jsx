import Seo from '../components/Seo.jsx'
import { CONTACT_EMAIL, SITE_NAME } from '../config.js'

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact"
        description={`Get in touch with ${SITE_NAME}.`}
        path="/contact"
      />
      <article className="article">
        <header>
          <h1>Contact</h1>
          <p className="lede">
            Got a tip, a recipe, or a product we should test? We'd love to hear
            from you.
          </p>
        </header>

        <p>
          Email us at{' '}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </p>
        <p>
          We try to reply within a few days. For PR pitches, please mention the
          product and a link in the first line of your email — it helps us
          triage.
        </p>
      </article>
    </>
  )
}
