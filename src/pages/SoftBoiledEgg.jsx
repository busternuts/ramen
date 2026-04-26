import Seo from '../components/Seo.jsx'
import AmazonLink from '../components/AmazonLink.jsx'
import AffiliateDisclosure from '../components/AffiliateDisclosure.jsx'

const ingredients = [
  '4 large eggs (cold from the fridge)',
  '1/2 cup soy sauce',
  '1/2 cup mirin',
  '1/2 cup water',
  '1 tbsp sugar',
  '1 ice bath (large bowl with ice + water)',
]

const steps = [
  'Make the marinade: in a small saucepan, warm the soy sauce, mirin, water, and sugar just until the sugar dissolves. Cool to room temperature.',
  'Bring a wide pot of water to a rolling boil. Use enough water to fully submerge the eggs.',
  'Lower the eggs into the boiling water with a slotted spoon. Set a timer for exactly 6 minutes 30 seconds.',
  'When the timer rings, immediately transfer the eggs to the ice bath. Let them sit for at least 5 minutes.',
  'Peel the eggs under a thin stream of cool running water. Start at the wide end where the air pocket is.',
  'Place the peeled eggs in a small container or zip-top bag and pour the cooled marinade over them. Press a paper towel against the surface so the eggs stay submerged.',
  'Refrigerate for 4 to 12 hours. Less time = lighter color and gentler flavor; longer = deeper savory color but the whites can get rubbery past 24 hours.',
  'Slice in half lengthwise just before serving on top of your ramen.',
]

export default function SoftBoiledEgg() {
  const recipeJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Recipe',
    name: 'Ajitsuke Tamago (Soft-Boiled Ramen Egg)',
    description:
      'A classic Japanese soy-marinated soft-boiled egg with a jammy yolk and silky white — the canonical ramen topping.',
    recipeYield: '4 eggs',
    totalTime: 'PT4H15M',
    cookTime: 'PT7M',
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
        title="How to Make a Soft-Boiled Ramen Egg (Ajitsuke Tamago)"
        description="A foolproof recipe for the jammy, soy-marinated soft-boiled eggs you find on top of a great bowl of ramen."
        path="/recipes/soft-boiled-ramen-egg"
        jsonLd={recipeJsonLd}
      />
      <article className="article">
        <header>
          <h1>How to Make a Soft-Boiled Ramen Egg</h1>
          <p className="lede">
            Ajitsuke tamago — the soy-marinated soft-boiled egg — is the most
            iconic ramen topping. The technique is simple if you respect the
            timer. Here's the version we make every week.
          </p>
        </header>

        <AffiliateDisclosure />

        <h2>The 6:30 rule</h2>
        <p>
          Almost every ramen-egg failure comes from one of two things: starting
          with cold eggs and a soft boil instead of a hard rolling boil, or
          missing the timer. <strong>6 minutes 30 seconds</strong> from
          fridge-cold eggs into a rolling boil produces a fully set white and
          a yolk that is jammy in the center but no longer raw. Off by 30
          seconds in either direction and you'll either chase soup with a
          runny yolk or end up with a hard-boiled egg.
        </p>

        <h2>Ingredients</h2>
        <ul className="ingredients">
          {ingredients.map((i) => <li key={i}>{i}</li>)}
        </ul>

        <h2>Method</h2>
        <ol className="method">
          {steps.map((s, i) => <li key={i}>{s}</li>)}
        </ol>

        <h2>Gear that makes this easier</h2>
        <p>
          A spider strainer or slotted spoon for lowering the eggs in without
          cracking them, and a digital timer you trust. We use a fine-mesh
          skimmer for both ramen broth and these eggs:
        </p>
        <p>
          <AmazonLink asin="B077WSL3M3" className="cta">
            Fine-mesh skimmer on Amazon →
          </AmazonLink>
        </p>

        <h2>Storage</h2>
        <p>
          The marinated eggs keep in the fridge, in the marinade, for about 4
          days. After that the whites turn mealy. If you want to make a bigger
          batch, pull eggs out of the marinade after 24 hours and store them
          plain.
        </p>
      </article>
    </>
  )
}
