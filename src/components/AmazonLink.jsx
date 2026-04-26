import { AMAZON_TRACKING_TAG } from '../config.js'

/**
 * Renders an Amazon affiliate link.
 *
 * Pass `asin` to link to a specific product (preferred — better conversion).
 * Pass `query` to link to a search results page (use this when you don't
 * have a verified ASIN — Amazon Associates still attributes purchases made
 * during the session to your tracking tag).
 */
export default function AmazonLink({ asin, query, children, className }) {
  let href
  if (asin) {
    href = `https://www.amazon.com/dp/${asin}/?tag=${AMAZON_TRACKING_TAG}`
  } else if (query) {
    href = `https://www.amazon.com/s?k=${encodeURIComponent(query)}&tag=${AMAZON_TRACKING_TAG}`
  } else {
    href = `https://www.amazon.com/?tag=${AMAZON_TRACKING_TAG}`
  }

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
