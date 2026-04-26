import Seo from '../components/Seo.jsx'
import AmazonLink from '../components/AmazonLink.jsx'
import AffiliateDisclosure from '../components/AffiliateDisclosure.jsx'

const picks = [
  {
    rank: 1,
    name: 'Nongshim Shin Ramyun Black',
    query: 'Nongshim Shin Ramyun Black',
    blurb:
      'A spicy, deeply beefy upgrade on classic Shin. Two packets — one beef bone broth, one chili — give it the body of a real shop bowl. The noodles hold their bite even after a long sit.',
    pros: ['Rich, layered broth', 'Springy noodles', 'Easy to find'],
    cons: ['Hot for the spice-averse'],
  },
  {
    rank: 2,
    name: 'Sapporo Ichiban Original',
    query: 'Sapporo Ichiban Original ramen',
    blurb:
      'The blueprint for shoyu instant. Light, garlicky, and clean — the noodles are unusually good for the price. Add a soft egg and scallions and it punches way above its weight.',
    pros: ['Balanced shoyu broth', 'Best-in-class noodle for the price'],
    cons: ['Plain on its own — needs a topping'],
  },
  {
    rank: 3,
    name: 'Nissin Raoh Tonkotsu',
    query: 'Nissin Raoh Tonkotsu ramen',
    blurb:
      'Non-fried noodles and a thick pork-bone broth that gets close to shop tonkotsu. The closest you can get to a Hakata bowl from a packet.',
    pros: ['Non-fried noodles', 'Rich, creamy broth'],
    cons: ['Pricier than supermarket instant'],
  },
  {
    rank: 4,
    name: 'Indomie Mi Goreng',
    query: 'Indomie Mi Goreng',
    blurb:
      'Technically a fried noodle, not soup ramen — but no instant list is complete without it. Sweet, savory, and addictive. Crack an egg and add chili oil.',
    pros: ['Crazy flavor for the price', 'Great fridge-clean-out base'],
    cons: ['Not a soup'],
  },
  {
    rank: 5,
    name: 'Maruchan Ramen, Chicken',
    query: 'Maruchan ramen chicken flavor',
    blurb:
      'The college dorm classic. It earns a spot because the noodles are a perfect blank canvas — dump the seasoning, build your own broth, and you have a 90-cent foundation for a real bowl.',
    pros: ['Cheapest path to homemade-ish ramen', 'Great noodle texture'],
    cons: ['Stock seasoning is rough'],
  },
]

export default function BestInstantRamen() {
  return (
    <>
      <Seo
        title="The 5 Best Instant Ramen, Ranked"
        description="A taste-tested ranking of the best instant ramen you can buy online — from Shin Ramyun to Sapporo Ichiban."
        path="/best-instant-ramen"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          itemListElement: picks.map((p) => ({
            '@type': 'ListItem',
            position: p.rank,
            name: p.name,
          })),
        }}
      />
      <article className="article">
        <header>
          <h1>The 5 Best Instant Ramen, Ranked</h1>
          <p className="lede">
            We tasted every instant ramen we could get our hands on, prepared
            per the package directions, plain. Here's what's worth your money.
          </p>
        </header>

        <AffiliateDisclosure />

        <ol className="ranked-list">
          {picks.map((p) => (
            <li key={p.name}>
              <h2>
                <span className="rank">#{p.rank}</span> {p.name}
              </h2>
              <p>{p.blurb}</p>
              <div className="proscons">
                <div>
                  <h3>Pros</h3>
                  <ul>
                    {p.pros.map((x) => <li key={x}>{x}</li>)}
                  </ul>
                </div>
                <div>
                  <h3>Cons</h3>
                  <ul>
                    {p.cons.map((x) => <li key={x}>{x}</li>)}
                  </ul>
                </div>
              </div>
              <AmazonLink query={p.query} className="cta">
                Find on Amazon →
              </AmazonLink>
            </li>
          ))}
        </ol>
      </article>
    </>
  )
}
