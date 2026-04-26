import Seo from '../components/Seo.jsx'

const ingredients = [
  '2 packs fresh or dried ramen noodles',
  '4 cups good chicken stock',
  '1 cup dashi (instant is fine)',
  '3 tbsp soy sauce',
  '1 tbsp mirin',
  '1 tsp sugar',
  '2 cloves garlic, smashed',
  '1 inch ginger, sliced',
  '4 slices store-bought chashu (or rotisserie chicken)',
  '2 soft-boiled eggs, halved',
  '2 scallions, thinly sliced',
  '1 sheet nori, cut into halves',
]

const steps = [
  'In a small saucepan, combine soy sauce, mirin, and sugar. Warm just until the sugar dissolves, then divide between two ramen bowls. This is your tare.',
  'In a separate pot, combine chicken stock, dashi, garlic, and ginger. Bring to a gentle simmer for 10 minutes, then strain.',
  'Cook the noodles in a third pot of plain boiling water according to package directions, usually 2–4 minutes. Don\'t cook them in the broth — the starch will cloud it.',
  'Pour the hot broth into each bowl, on top of the tare. Stir once.',
  'Drain the noodles well and divide between the bowls. Use chopsticks to pull them up into a neat mound at the surface.',
  'Top with chashu, halved soft-boiled egg, scallions, and nori. Serve immediately.',
]

export default function QuickShoyu() {
  const recipeJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Recipe',
    name: 'Quick Shoyu Ramen (30 minutes)',
    recipeYield: '2 servings',
    totalTime: 'PT30M',
    recipeIngredient: ingredients,
    recipeInstructions: steps.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      text: s,
    })),
  }

  return (
    <>
      <Seo
        title="Quick Shoyu Ramen Recipe (30 Minutes)"
        description="A weeknight shoyu ramen that comes together in 30 minutes — using shortcuts that don't sacrifice flavor."
        path="/recipes/quick-shoyu"
        jsonLd={recipeJsonLd}
      />
      <article className="article">
        <header>
          <h1>Quick Shoyu Ramen (30 minutes)</h1>
          <p className="lede">
            A weeknight bowl that uses good chicken stock and a couple of
            shortcut ingredients — but tastes like you spent the afternoon on
            it.
          </p>
          <p className="meta">
            <strong>Yield:</strong> 2 bowls &nbsp;·&nbsp;{' '}
            <strong>Time:</strong> 30 min
          </p>
        </header>

        <h2>Ingredients</h2>
        <ul className="ingredients">
          {ingredients.map((i) => <li key={i}>{i}</li>)}
        </ul>

        <h2>Method</h2>
        <ol className="method">
          {steps.map((s, i) => <li key={i}>{s}</li>)}
        </ol>

        <h2>Notes</h2>
        <p>
          The "tare in the bowl, broth poured over" technique is the same one
          used in shops. It seasons the soup precisely without making the
          broth itself too salty for sipping.
        </p>
        <p>
          If you don't have dashi, replace it with another cup of chicken stock
          and a 2-inch piece of kombu, simmered in the broth for 10 minutes and
          then removed.
        </p>
      </article>
    </>
  )
}
