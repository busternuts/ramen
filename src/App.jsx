import { useState } from 'react'
import './App.css'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <header className="hero">
        <h1>🍜 Ramen</h1>
        <p className="tagline">A generic React site, deployed on GitHub Pages.</p>
      </header>

      <section className="card">
        <button onClick={() => setCount((c) => c + 1)}>
          You've clicked {count} {count === 1 ? 'time' : 'times'}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to update.
        </p>
      </section>

      <section className="features">
        <div className="feature">
          <h3>⚛️ React 18</h3>
          <p>Built with React and the modern Vite toolchain.</p>
        </div>
        <div className="feature">
          <h3>🚀 Auto Deploy</h3>
          <p>GitHub Actions ships every push to <code>main</code>.</p>
        </div>
        <div className="feature">
          <h3>🎨 Themed</h3>
          <p>Dark mode by default, fully responsive layout.</p>
        </div>
      </section>

      <footer>
        <p>Made with React + Vite</p>
      </footer>
    </div>
  )
}
