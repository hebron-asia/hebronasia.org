"use client";

import { useContent } from "@/components/Preferences";
import { TextLink } from "@/components/TextLink";

export function WorkContent() {
  const t = useContent();
  const { work } = t;

  return (
    <article className="page">
      <header className="page-intro page-intro-light">
        <div className="shell">
          <p className="eyebrow">{work.eyebrow}</p>
          <h1>{work.title}</h1>
          <p className="lede">{work.lede}</p>
        </div>
      </header>

      <div className="shell work-stack">
        {work.sections.map((section) => (
          <section className="work-block" key={section.title}>
            <p className="eyebrow">{section.eyebrow}</p>
            <h2>{section.title}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {section.list ? (
              <ul className="pathways">
                {section.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
            <TextLink {...section.link} />
          </section>
        ))}
      </div>
    </article>
  );
}
