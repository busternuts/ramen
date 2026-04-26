import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'

export default function NotFound() {
  return (
    <>
      <Seo title="Page not found" description="Page not found" path="/404" />
      <div className="notfound">
        <h1>404</h1>
        <p>That page slipped out of the bowl.</p>
        <Link to="/" className="cta">Back to home →</Link>
      </div>
    </>
  )
}
