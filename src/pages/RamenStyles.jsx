import Seo from '../components/Seo.jsx'

const styles = [
  {
    name: 'Tonkotsu',
    region: 'Hakata, Fukuoka',
    description:
      'A milky, rich pork-bone broth simmered for 12+ hours. Pairs with thin, straight noodles you can order kaedama-style — extra noodles dropped into your remaining broth.',
    flavor: 'Rich, fatty, deeply porky',
    typicalToppings: 'Chashu, kikurage mushrooms, scallions, pickled ginger',
  },
  {
    name: 'Shoyu',
    region: 'Tokyo',
    description:
      'The original ramen. A clear soy-sauce-based broth, usually built on chicken and a little pork. Bright, savory, and easier on the palate than tonkotsu.',
    flavor: 'Clean, savory, slightly sweet',
    typicalToppings: 'Chashu, menma, nori, narutomaki, soft-boiled egg',
  },
  {
    name: 'Miso',
    region: 'Sapporo, Hokkaido',
    description:
      'Born in Hokkaido as a way to fight the winter cold. Fermented soybean paste makes the broth thick, complex, and slightly sweet. Often served with corn and butter.',
    flavor: 'Thick, fermented, savory-sweet',
    typicalToppings: 'Ground pork, corn, butter, beansprouts, scallions',
  },
  {
    name: 'Shio',
    region: 'Hakodate, Hokkaido',
    description:
      'The lightest of the four. A salt-based broth that lets the underlying stock shine — usually chicken, sometimes seafood. Pale, golden, and clean.',
    flavor: 'Light, crisp, salty',
    typicalToppings: 'Chashu, scallions, menma, soft-boiled egg',
  },
  {
    name: 'Tsukemen',
    region: 'Tokyo (1960s)',
    description:
      'Not a soup ramen but a dipping ramen. Thick, cold noodles served alongside a small bowl of intense, concentrated broth for dunking. The noodles are the star.',
    flavor: 'Concentrated, often pork-and-fish (gyokai)',
    typicalToppings: 'Chashu, menma, soft-boiled egg, lemon wedge',
  },
]

export default function RamenStyles() {
  return (
    <>
      <Seo
        title="Ramen Styles Explained: Tonkotsu, Shoyu, Miso, Shio, Tsukemen"
        description="The 5 major ramen styles, what they taste like, and where they come from — a beginner-friendly guide."
        path="/ramen-styles"
      />
      <article className="article">
        <header>
          <h1>Ramen Styles, Explained</h1>
          <p className="lede">
            Five styles cover most of the ramen you'll meet in the wild. Here's
            what each one tastes like and where it came from.
          </p>
        </header>

        <div className="styles">
          {styles.map((s) => (
            <section key={s.name} className="style">
              <h2>{s.name}</h2>
              <p className="muted">{s.region}</p>
              <p>{s.description}</p>
              <dl>
                <dt>Flavor</dt>
                <dd>{s.flavor}</dd>
                <dt>Typical toppings</dt>
                <dd>{s.typicalToppings}</dd>
              </dl>
            </section>
          ))}
        </div>
      </article>
    </>
  )
}
