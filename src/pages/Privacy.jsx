import Seo from '../components/Seo.jsx'
import { SITE_NAME } from '../config.js'

export default function Privacy() {
  return (
    <>
      <Seo
        title="Privacy Policy"
        description={`Privacy policy for ${SITE_NAME}.`}
        path="/privacy"
      />
      <article className="article">
        <header>
          <h1>Privacy Policy</h1>
          <p className="muted">Last updated: April 26, 2026</p>
        </header>

        <p>
          {SITE_NAME} ("we", "us") respects your privacy. This page explains
          what limited information we collect when you visit the site and how
          it is used.
        </p>

        <h2>Information we collect</h2>
        <p>
          We do not ask you to create an account, and we do not collect names,
          email addresses, or other personal information unless you voluntarily
          submit them through the contact form or newsletter signup.
        </p>
        <p>
          Like most websites, our hosting provider may automatically log
          standard request data (IP address, user agent, referring page) for
          security and operational purposes. We use this data only in
          aggregate.
        </p>

        <h2>Cookies and analytics</h2>
        <p>
          We may use Google Analytics to understand which pages are popular.
          Google Analytics sets cookies in your browser to identify unique
          visits. You can disable cookies in your browser at any time without
          breaking the site.
        </p>

        <h2>Affiliate links</h2>
        <p>
          {SITE_NAME} participates in the Amazon Services LLC Associates
          Program, an affiliate advertising program designed to provide a
          means for sites to earn advertising fees by linking to Amazon.com.
          When you click an affiliate link and buy something, we earn a small
          commission at no extra cost to you.
        </p>
        <p>
          When you click one of these links you may be assigned cookies by the
          merchant (e.g. Amazon) that allow them to credit a sale to us. These
          cookies are governed by the merchant's privacy policy, not ours.
        </p>

        <h2>Advertising</h2>
        <p>
          We may display third-party advertising via Google AdSense or similar
          networks. These networks may use cookies to serve ads based on a
          user's previous visits to this site or other sites on the internet.
          You can opt out of personalized advertising by visiting{' '}
          <a
            href="https://www.google.com/settings/ads"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Ads Settings
          </a>
          .
        </p>

        <h2>Your rights</h2>
        <p>
          If you are in the EU, UK, or California, you have the right to
          request access to or deletion of any personal information we hold
          about you. Contact us using the email address listed on the{' '}
          <a href="#/contact">contact page</a>.
        </p>

        <h2>Changes to this policy</h2>
        <p>
          We may update this policy from time to time. The "last updated" date
          at the top of this page reflects the most recent revision.
        </p>
      </article>
    </>
  )
}
