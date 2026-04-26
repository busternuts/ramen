import Seo from '../components/Seo.jsx'
import AmazonLink from '../components/AmazonLink.jsx'
import AffiliateDisclosure from '../components/AffiliateDisclosure.jsx'

const books = [
  {
    title: 'Ivan Ramen',
    author: 'Ivan Orkin',
    query: 'Ivan Ramen Ivan Orkin cookbook',
    blurb:
      'Part memoir, part recipe book — the story of an American who opened a beloved ramen shop in Tokyo. Recipes are detailed and the writing is excellent. The single best book to read if you want to understand why ramen people are obsessed.',
    bestFor: 'Story-driven readers; people building toward shop-style ramen',
  },
  {
    title: "Let's Make Ramen!",
    author: 'Hugh Amano & Sarah Becan',
    query: "Let's Make Ramen graphic novel cookbook",
    blurb:
      'A graphic-novel-style cookbook. Genuinely the most accessible ramen book in print — every technique is illustrated, and the recipes scale down for home cooks. Buy this one first if you\'re new.',
    bestFor: 'Beginners; visual learners; gifts',
  },
  {
    title: 'Ramen Otaku',
    author: 'Sarah Gavigan',
    query: 'Ramen Otaku Sarah Gavigan cookbook',
    blurb:
      'A deeper, more technical book from the chef behind Otaku Ramen in Nashville. Strong chapters on tares, broths, and noodle-pairing logic. Recipes assume you have time and patience.',
    bestFor: 'Intermediate cooks ready for a long broth project',
  },
  {
    title: 'The Ramen-ya',
    author: 'Mr. Taka',
    query: 'The Ramen-ya Mr Taka cookbook',
    blurb:
      'Recipes from the New York shop. Dense with technique notes and shop-style assembly tips. The aroma-oil section alone is worth the price.',
    bestFor: 'Cooks chasing shop-quality finish at home',
  },
]

export default function BestRamenCookbooks() {
  return (
    <>
      <Seo
        title="The 4 Best Ramen Cookbooks for Home Cooks"
        description="Our picks for the best ramen cookbooks — from beginner illustrated guides to deep technical references."
        path="/best-ramen-cookbooks"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          itemListElement: books.map((b, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: `${b.title} by ${b.author}`,
          })),
        }}
      />
      <article className="article">
        <header>
          <h1>The 4 Best Ramen Cookbooks</h1>
          <p className="lede">
            Whether you want to read about ramen culture, learn to make a
            casual home bowl, or chase shop-quality tonkotsu — one of these
            books will get you there.
          </p>
        </header>

        <AffiliateDisclosure />

        <ol className="ranked-list">
          {books.map((b) => (
            <li key={b.title}>
              <h2>
                {b.title}{' '}
                <span className="muted" style={{ fontWeight: 400 }}>
                  by {b.author}
                </span>
              </h2>
              <p>{b.blurb}</p>
              <p>
                <strong>Best for:</strong> {b.bestFor}
              </p>
              <AmazonLink query={b.query} className="cta">
                Find on Amazon →
              </AmazonLink>
            </li>
          ))}
        </ol>
      </article>
    </>
  )
}
