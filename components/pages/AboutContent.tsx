"use client";

import { useContent } from "@/components/Preferences";
import { TextLink } from "@/components/TextLink";
import { site } from "@/lib/content";

export function AboutContent() {
  const t = useContent();
  const { about } = t;

  return (
    <article className="page">
      <header className="page-intro page-intro-light">
        <div className="shell">
          <p className="eyebrow">{about.eyebrow}</p>
          <h1>{about.title}</h1>
          <p className="lede">{about.lede}</p>
        </div>
      </header>

      <div className="shell prose-stack">
        <section>
          <h2>{about.nameHeading}</h2>
          {about.nameParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </section>

        <section>
          <h2>{about.commitmentHeading}</h2>
          {about.commitmentParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </section>

        <section>
          <h2>{about.philosophyHeading}</h2>
          {about.philosophyParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </section>

        <section>
          <h2>{about.aimsHeading}</h2>
          <p>{about.aimsIntro}</p>
          <ol className="aims">
            {about.aims.map((aim) => (
              <li key={aim}>{aim}</li>
            ))}
          </ol>
        </section>

        <section>
          <h2>{about.partnersHeading}</h2>
          <p>{about.partnersIntro}</p>
          <ul className="partner-timeline">
            {about.partners.map((item) => (
              <li key={item.when + item.what}>
                <p className="index">{item.when}</p>
                <p>{item.what}</p>
              </li>
            ))}
          </ul>
          <p>{about.partnersNote}</p>
        </section>

        <section>
          <h2>{about.whereHeading}</h2>
          {about.whereParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <dl className="facts">
            {about.facts.map((fact) => (
              <div key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section>
          <h2>{about.campusHeading}</h2>
          {about.campusParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <TextLink
            href={site.haitUrl}
            external
            label={about.campusLinkLabel}
          />
        </section>
      </div>
    </article>
  );
}
