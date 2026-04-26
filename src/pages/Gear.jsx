import Seo from '../components/Seo.jsx'
import AmazonLink from '../components/AmazonLink.jsx'
import AffiliateDisclosure from '../components/AffiliateDisclosure.jsx'

const gear = [
  {
    name: 'Wide ramen bowls (set of 4)',
    asin: 'B07PNH3D3R',
    why: 'A proper ramen bowl is wide and shallow, not deep like a soup bowl. The wide surface keeps your noodles spread out so they don\'t turn to mush, and gives you room to plate toppings.',
    category: 'Bowls',
  },
  {
    name: 'Slotted bamboo ramen spoon',
    asin: 'B07W4TZNDS',
    why: 'A standard soup spoon is wrong. You want one with a deep bowl and a flat tip you can press flush against the side of your dish — and slots help when fishing toppings out of broth.',
    category: 'Utensils',
  },
  {
    name: 'Heavy stock pot (8 qt)',
    asin: 'B00PUZE7H2',
    why: 'Long broth simmers need thick walls and a tight lid so you don\'t cook off all your liquid in 4 hours. An 8-quart is the sweet spot for home cooks.',
    category: 'Cookware',
  },
  {
    name: 'Fine-mesh skimmer',
    asin: 'B077WSL3M3',
    why: 'For pulling scum off the top of a long simmer. Cheap, essential, and the difference between a clean bowl and a muddy one.',
    category: 'Cookware',
  },
  {
    name: 'Kombu (dried kelp)',
    asin: 'B003KNDPWK',
    why: 'The umami backbone of dashi. A small bag lasts months and dramatically lifts any broth you make.',
    category: 'Pantry',
  },
  {
    name: 'Bonito flakes (katsuobushi)',
    asin: 'B07X6DCRBR',
    why: 'The other half of dashi. Pair with kombu for a base broth that adds depth to anything from shoyu ramen to tsukemen dipping sauce.',
    category: 'Pantry',
  },
]

const categories = [...new Set(gear.map((g) => g.category))]

export default function Gear() {
  return (
    <>
      <Seo
        title="Essential Ramen Gear for Home Cooks"
        description="The bowls, spoons, pots, and pantry staples that make home ramen taste like a shop bowl."
        path="/gear"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          itemListElement: gear.map((g, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: g.name,
          })),
        }}
      />
      <article className="article">
        <header>
          <h1>Essential Ramen Gear</h1>
          <p className="lede">
            You don't need much to make great ramen at home — but a few specific
            pieces of gear make a real difference. These are the ones that have
            stayed in our kitchen.
          </p>
        </header>

        <AffiliateDisclosure />

        {categories.map((cat) => (
          <section key={cat} className="gear-category">
            <h2>{cat}</h2>
            <div className="gear-grid">
              {gear.filter((g) => g.category === cat).map((g) => (
                <div key={g.asin} className="gear-card">
                  <h3>{g.name}</h3>
                  <p>{g.why}</p>
                  <AmazonLink asin={g.asin} className="cta">
                    Check on Amazon →
                  </AmazonLink>
                </div>
              ))}
            </div>
          </section>
        ))}
      </article>
    </>
  )
}
