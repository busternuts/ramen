import { AMAZON_TRACKING_TAG } from '../config.js'

export default function AmazonLink({ asin, children, className }) {
  const href = `https://www.amazon.com/dp/${asin}/?tag=${AMAZON_TRACKING_TAG}`
  return (
    <a
      href={href}
      target="_blank"
      rel="nofollow sponsored noopener"
      className={className}
    >
      {children}
    </a>
  )
}
