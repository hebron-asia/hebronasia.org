"use client";

import { useContent } from "@/components/Preferences";

export function SponsorshipCategories() {
  const t = useContent();

  return (
    <div className="sponsor-grid">
      {t.partner.categories.map((category) => (
        <section
          key={category.letter}
          className="sponsor-category"
          aria-labelledby={`sponsor-${category.letter}`}
        >
          <header className="sponsor-category-head">
            <span className="sponsor-letter" aria-hidden="true">
              {category.letter}
            </span>
            <div>
              <h3 id={`sponsor-${category.letter}`}>{category.title}</h3>
              <p>{category.subtitle}</p>
            </div>
          </header>

          <ul className="sponsor-items">
            {category.items.map((item) => (
              <li key={item.name}>{item.name}</li>
            ))}
          </ul>

          {category.note ? (
            <p className="sponsor-note">{category.note}</p>
          ) : null}
        </section>
      ))}
    </div>
  );
}
