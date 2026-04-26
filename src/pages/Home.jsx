import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import { SITE_NAME, SITE_TAGLINE } from '../config.js'

const features = [
  {
    to: '/best-instant-ramen',
    title: 'Best Instant Ramen, Ranked',
    blurb: 'A blind taste test of 12 instant noodles, from supermarket to import-store finds.',
  },
  {
    to: '/ramen-styles',
    title: 'Ramen Styles Explained',
    blurb: 'Tonkotsu, shoyu, miso, shio — what they actually taste like and where they come from.',
  },
  {
    to: '/gear',
    title: 'Essential Ramen Gear',
    blurb: 'The bowls, spoons, and pots that make home ramen taste like a shop.',
  },
  {
    to: '/recipes/quick-shoyu',
    title: 'Quick Shoyu Ramen (30 min)',
    blurb: 'A weeknight bowl that punches well above its prep time.',
  },
]

export default function Home() {
  return (
    <>
      <Seo
        title="Honest reviews and recipes for ramen lovers"
        description={SITE_TAGLINE}
        path="/"
      />
      <section className="hero">
        <h1>{SITE_NAME}</h1>
        <p className="lede">{SITE_TAGLINE}</p>
      </section>

      <section className="grid">
        {features.map((f) => (
          <Link key={f.to} to={f.to} className="card-link">
            <h2>{f.title}</h2>
            <p>{f.blurb}</p>
            <span className="card-arrow">Read →</span>
          </Link>
        ))}
      </section>
    </>
  )
}
