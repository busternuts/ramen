import { BUYMEACOFFEE_USERNAME } from '../config.js'

export default function TipJar() {
  if (!BUYMEACOFFEE_USERNAME) return null
  return (
    <a
      className="tipjar"
      href={`https://www.buymeacoffee.com/${BUYMEACOFFEE_USERNAME}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      ☕ Buy me a coffee
    </a>
  )
}
