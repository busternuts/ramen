import Seo from '../components/Seo.jsx'
import { SITE_NAME } from '../config.js'

export default function About() {
  return (
    <>
      <Seo
        title="About"
        description={`About ${SITE_NAME} — who we are, how we test, and how we make money.`}
        path="/about"
      />
      <article className="article">
        <header>
          <h1>About {SITE_NAME}</h1>
          <p className="lede">
            A small site about ramen — the bowls, the broth, and the gear that
            makes both better.
          </p>
        </header>

        <h2>Who this is for</h2>
        <p>
          Anyone who has slurped a great bowl of ramen and wanted to know more.
          Whether you're trying to figure out what to order at your local shop,
          which $1 packet is actually worth eating, or how to start making
          ramen at home, we try to give you the kind of straight answer a
          friend would.
        </p>

        <h2>How we test</h2>
        <p>
          For instant ramen rankings we prepare each bowl per the package
          directions, plain — no doctored toppings, no extra seasoning. We
          score on broth flavor, noodle texture after the recommended cook
          time, and overall craveability. For gear we use it in our own kitchen
          for at least a month before recommending it.
        </p>

        <h2>How we make money</h2>
        <p>
          {SITE_NAME} is supported by affiliate commissions. When you click an
          Amazon link on this site and buy something, we earn a small
          percentage at no extra cost to you. We only recommend things we'd
          buy ourselves — affiliate revenue funds the site, but it doesn't
          decide what we recommend.
        </p>

        <h2>Get in touch</h2>
        <p>
          Got a ramen tip, a recipe to share, or a product we should try?
          Hit us up via the <a href="#/contact">contact page</a>.
        </p>
      </article>
    </>
  )
}
