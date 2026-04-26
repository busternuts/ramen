import Seo from '../components/Seo.jsx'

const profiles = [
  {
    title: 'Order tonkotsu if…',
    text:
      "you love rich, fatty foods — French onion soup, carbonara, chicken liver pâté. Tonkotsu is the most indulgent ramen on the menu, with a milky pork-bone broth that coats the noodles and your spoon.",
  },
  {
    title: 'Order shoyu if…',
    text:
      "you usually order chicken noodle soup or pho. Shoyu is the cleanest, most savory style — bright, soy-forward, and easy to keep eating without the broth wearing you out.",
  },
  {
    title: 'Order miso if…',
    text:
      "you like miso soup, gochujang stews, or anything fermented. Miso ramen is thick, slightly sweet, and warms you up. It's the right call on a cold day.",
  },
  {
    title: 'Order shio if…',
    text:
      "you want to taste the actual stock the cook made. Shio is salt-seasoned and the most delicate — it's the version you order when you trust the shop.",
  },
  {
    title: 'Order tsukemen if…',
    text:
      "you care more about the noodles than the soup. Tsukemen is a dipping ramen — the noodles come cold next to a small bowl of intense, concentrated broth. Try this when you're at a shop known for their noodles.",
  },
]

export default function WhichRamenToOrder() {
  return (
    <>
      <Seo
        title="Which Ramen Should You Order? A Decision Guide"
        description="Tonkotsu, shoyu, miso, shio, or tsukemen? A simple guide to picking the right ramen at any shop based on what you already like to eat."
        path="/which-ramen-to-order"
      />
      <article className="article">
        <header>
          <h1>Which Ramen Should You Order?</h1>
          <p className="lede">
            You've sat down at a ramen shop and the menu lists five things you
            don't recognize. Here's how to pick the one you'll actually love
            — based on food you already like.
          </p>
        </header>

        <h2>If you only do this once</h2>
        <p>
          The single most useful question is: <em>do you want a rich bowl or
          a clean bowl?</em> Tonkotsu and miso are rich. Shoyu and shio are
          clean. Tsukemen is its own thing.
        </p>

        <h2>Pick by what you already like</h2>
        <div className="styles">
          {profiles.map((p) => (
            <section key={p.title} className="style">
              <h2>{p.title}</h2>
              <p>{p.text}</p>
            </section>
          ))}
        </div>

        <h2>One more tip</h2>
        <p>
          If the shop has a "house" or "signature" bowl listed at the top of
          the menu, order that. The cook is telling you what they're proud of.
          You can come back and explore once you've tasted their best work.
        </p>
        <p>
          Want to go deeper on each style? Read the full{' '}
          <a href="#/ramen-styles">ramen styles guide</a>.
        </p>
      </article>
    </>
  )
}
