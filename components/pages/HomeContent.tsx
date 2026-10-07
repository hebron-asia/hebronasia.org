"use client";

import { GateMark } from "@/components/GateMark";
import { LogoSlider } from "@/components/LogoSlider";
import { useContent } from "@/components/Preferences";
import { ButtonLink, TextLink } from "@/components/TextLink";
import { site } from "@/lib/content";

export function HomeContent() {
  const t = useContent();
  const { home } = t;

  return (
    <>
      <section className="hero hero-alliance">
        <div className="hero-wash" aria-hidden="true" />
        <GateMark />
        <div className="shell hero-copy">
          <LogoSlider />
          <p className="eyebrow">{home.eyebrow}</p>
          <h1>{home.headline}</h1>
          <p className="lede">{home.lede}</p>
          <div className="actions">
            <ButtonLink {...home.primaryCta} />
            <ButtonLink {...home.secondaryCta} tone="secondary" />
          </div>
        </div>
      </section>

      <section className="band" aria-labelledby="areas-heading">
        <div className="shell">
          <h2 id="areas-heading">{home.areasHeading}</h2>
          <p className="band-support">{home.support}</p>
          <ol className="area-list">
            {home.areas.map((area) => (
              <li key={area.index}>
                <p className="index">{area.index}</p>
                <h3>{area.title}</h3>
                <p>{area.body}</p>
                <TextLink {...area.link} />
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="motto" aria-label={home.motto.attribution}>
        <div className="shell motto-grid">
          <blockquote>
            <p>{home.motto.quote}</p>
          </blockquote>
          <div>
            <p className="attribution">{home.motto.attribution}</p>
            <ul className="link-row">
              <li>
                <TextLink
                  href="/partner"
                  label={home.motto.sponsorshipLink}
                />
              </li>
              <li>
                <TextLink
                  href={site.donateUrl}
                  external
                  label={t.site.donateLabel}
                />
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
