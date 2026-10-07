"use client";

import { FormEvent } from "react";
import { useContent } from "@/components/Preferences";
import { site } from "@/lib/content";

export function SponsorshipForm() {
  const t = useContent();
  const { form } = t.partner;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const interests = data.getAll("interest").map(String);
    const labelled = form.fields
      .filter((field) => field.type !== "textarea")
      .map((field) => `${field.label}: ${String(data.get(field.name) || "")}`);
    const lines = [
      form.mail.subject,
      "",
      `${form.mail.interests}: ${
        interests.length ? interests.join(", ") : form.mail.notSpecified
      }`,
      ...labelled,
      "",
      `${form.mail.notes}:`,
      String(data.get("notes") || ""),
    ];

    const href = `${site.emailHref}?subject=${encodeURIComponent(
      form.mail.subject,
    )}&body=${encodeURIComponent(lines.join("\n"))}`;

    window.location.href = href;
  }

  return (
    <form className="sponsor-form" onSubmit={handleSubmit}>
      <fieldset>
        <legend>{form.prompt}</legend>
        <ul className="sponsor-options">
          {form.options.map((option, optionIndex) => {
            const id = `sponsor-option-${optionIndex}`;
            return (
              <li key={option}>
                <input type="checkbox" id={id} name="interest" value={option} />
                <label htmlFor={id}>{option}</label>
              </li>
            );
          })}
        </ul>
      </fieldset>

      <div className="sponsor-fields">
        {form.fields.map((field) => {
          const id = `field-${field.name}`;
          if (field.type === "textarea") {
            return (
              <label key={field.name} className="sponsor-field" htmlFor={id}>
                <span>{field.label}</span>
                <textarea id={id} name={field.name} rows={3} />
              </label>
            );
          }

          return (
            <label key={field.name} className="sponsor-field" htmlFor={id}>
              <span>{field.label}</span>
              <input id={id} name={field.name} type={field.type} />
            </label>
          );
        })}
      </div>

      <button className="button button-primary" type="submit">
        {form.submitLabel}
      </button>
    </form>
  );
}
