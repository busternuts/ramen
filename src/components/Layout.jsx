import { Link, NavLink, Outlet } from 'react-router-dom'
import { SITE_NAME, SITE_TAGLINE } from '../config.js'

export default function Layout() {
  return (
    <div className="site">
      <header className="site-header">
        <Link to="/" className="brand">
          <span className="brand-mark">🍜</span>
          <span className="brand-text">{SITE_NAME}</span>
        </Link>
        <nav className="site-nav">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/best-instant-ramen">Best Instant</NavLink>
          <NavLink to="/ramen-styles">Styles Guide</NavLink>
          <NavLink to="/gear">Gear</NavLink>
          <NavLink to="/recipes/quick-shoyu">Recipe</NavLink>
        </nav>
      </header>

      <main className="site-main">
        <Outlet />
      </main>

      <footer className="site-footer">
        <p>{SITE_TAGLINE}</p>
        <p className="muted">© {new Date().getFullYear()} {SITE_NAME}</p>
      </footer>
    </div>
  )
}
