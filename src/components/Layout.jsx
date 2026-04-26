import { Link, NavLink, Outlet } from 'react-router-dom'
import { SITE_NAME, SITE_TAGLINE } from '../config.js'
import HeadIntegrations from './HeadIntegrations.jsx'
import Newsletter from './Newsletter.jsx'
import TipJar from './TipJar.jsx'

export default function Layout() {
  return (
    <div className="site">
      <HeadIntegrations />
      <header className="site-header">
        <Link to="/" className="brand">
          <span className="brand-mark">🍜</span>
          <span className="brand-text">{SITE_NAME}</span>
        </Link>
        <nav className="site-nav">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/best-instant-ramen">Best Instant</NavLink>
          <NavLink to="/best-ramen-cookbooks">Cookbooks</NavLink>
          <NavLink to="/ramen-styles">Styles</NavLink>
          <NavLink to="/gear">Gear</NavLink>
          <NavLink to="/which-ramen-to-order">What to Order</NavLink>
        </nav>
      </header>

      <main className="site-main">
        <Outlet />
        <Newsletter />
      </main>

      <footer className="site-footer">
        <p>{SITE_TAGLINE}</p>
        <nav className="footer-nav">
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/privacy">Privacy</Link>
        </nav>
        <TipJar />
        <p className="muted">© {new Date().getFullYear()} {SITE_NAME}</p>
      </footer>
    </div>
  )
}
