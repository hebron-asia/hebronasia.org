"use client";

import { ContactDetails } from "@/components/ContactDetails";
import { useContent } from "@/components/Preferences";
import { SponsorshipCategories } from "@/components/SponsorshipCategories";
import { SponsorshipForm } from "@/components/SponsorshipForm";
import { ButtonLink, TextLink } from "@/components/TextLink";
import { site } from "@/lib/content";

export function PartnerContent() {
  const t = useContent();
  const { partner } = t;

  return (
    <article className="page">
      <header className="page-intro page-intro-light">
        <div className="shell">
          <p className="eyebrow">{partner.eyebrow}</p>
          <h1>{partner.headline}</h1>
          <p className="lede">{partner.lede}</p>
          <div className="actions">
            <ButtonLink {...partner.donateCta} />
          </div>
        </div>
      </header>

      <section className="band" aria-labelledby="partner-intro">
        <div className="shell">
          <h2 id="partner-intro">{partner.introHeading}</h2>
          <p className="band-support">{partner.intro}</p>

          <ul className="pillar-row">
            {partner.pillars.map((pillar) => (
              <li key={pillar.title}>
                <h3>{pillar.title}</h3>
                <p>{pillar.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        className="band sponsor-band"
        aria-labelledby="opportunities-heading"
      >
        <div className="shell">
          <h2 id="opportunities-heading">{partner.opportunitiesHeading}</h2>
          <p className="band-support">{partner.opportunitiesSupport}</p>
          <SponsorshipCategories />
        </div>
      </section>

      <section className="band form-band" aria-labelledby="selection-heading">
        <div className="shell form-layout">
          <div>
            <h2 id="selection-heading">{partner.form.heading}</h2>
            <blockquote className="impact-quote">
              <p>{partner.impact}</p>
            </blockquote>
            <SponsorshipForm />
          </div>

          <aside className="contact-card" aria-labelledby="contact-heading">
            <h2 id="contact-heading">{partner.contactHeading}</h2>
            <p>{partner.contactBody}</p>
            <ContactDetails />
            <p className="contact-web">
              <a href={site.haitUrl} target="_blank" rel="noopener noreferrer">
                {site.haitLabel}
                <span className="sr-only">{t.ui.newTab}</span>
              </a>
            </p>
            <p className="contact-web">
              <a
                href={site.donateUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.site.donateLabel}
                <span className="sr-only">{t.ui.newTab}</span>
              </a>
            </p>
          </aside>
        </div>
      </section>

      <section className="band" aria-labelledby="other-ways">
        <div className="shell">
          <h2 id="other-ways">{partner.otherWaysHeading}</h2>
          <ol className="path-list">
            {partner.paths.map((path) => (
              <li key={path.index}>
                <p className="index">{path.index}</p>
                <div>
                  <h3>{path.title}</h3>
                  <p>{path.body}</p>
                  <ul className="link-row">
                    {path.links.map((link) => (
                      <li key={link.href + link.label}>
                        <TextLink {...link} />
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </article>
  );
}
