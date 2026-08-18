"use client";

import { useEffect, useMemo, useState } from "react";
import styles from "./contact.module.css";

const calendlyByType = {
  advisory: {
    label: "Schedule a Founder Strategy Conversation",
    href: "https://calendly.com/scott8smith/founder-strategy-conversation",
  },
  operator: {
    label: "Schedule a Dedicated Operator Conversation",
    href: "https://calendly.com/scott8smith/dedicated-operator-conversation",
  },
  housing: {
    label: "Schedule a Housing Strategy Conversation",
    href: "https://calendly.com/scott8smith/housing-strategy-conversation",
  },
};

export default function ContactForm() {
  const [source, setSource] = useState("website-contact");
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    inquiryType: "",
    message: "",
    website: "",
  });
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const type = params.get("type") || "";
    const incomingSource = params.get("source") || "website-contact";

    setSource(incomingSource);
    if (["advisory", "operator", "housing", "other"].includes(type)) {
      setForm((current) => ({ ...current, inquiryType: type }));
    }
  }, []);

  const nextStep = useMemo(
    () => calendlyByType[form.inquiryType] || null,
    [form.inquiryType],
  );

  function updateField(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  async function submitForm(event) {
    event.preventDefault();
    setStatus("submitting");
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, source }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className={styles.successPanel}>
        <p className="eyebrow">Message received</p>
        <h2>Thank you.</h2>
        <p>
          Your note has been received and added to Akhada's inquiry log. Scott
          will review it and respond personally.
        </p>
        {nextStep ? (
          <div className={styles.nextStep}>
            <p>If you would rather put time on the calendar now:</p>
            <a
              className="button"
              href={nextStep.href}
              target="_blank"
              rel="noreferrer"
            >
              {nextStep.label} <span>↗</span>
            </a>
          </div>
        ) : null}
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={submitForm}>
      <div className={styles.fieldRow}>
        <label>
          <span>Name</span>
          <input
            name="name"
            type="text"
            autoComplete="name"
            value={form.name}
            onChange={updateField}
            required
          />
        </label>
        <label>
          <span>Email</span>
          <input
            name="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={updateField}
            required
          />
        </label>
      </div>

      <label>
        <span>Company or organization</span>
        <input
          name="company"
          type="text"
          autoComplete="organization"
          value={form.company}
          onChange={updateField}
        />
      </label>

      <label>
        <span>What would you like to discuss?</span>
        <select
          name="inquiryType"
          value={form.inquiryType}
          onChange={updateField}
          required
        >
          <option value="" disabled>
            Select one
          </option>
          <option value="advisory">Principal Advisory</option>
          <option value="operator">Dedicated Offshore Operator</option>
          <option value="housing">Affordable Housing Advisory</option>
          <option value="other">Something Else</option>
        </select>
      </label>

      <label>
        <span>Brief context</span>
        <textarea
          name="message"
          rows="7"
          value={form.message}
          onChange={updateField}
          placeholder="What is happening, what have you already tried, and what would be useful to understand or change?"
          required
        />
      </label>

      <label className={styles.honeypot} aria-hidden="true">
        Website
        <input
          name="website"
          type="text"
          tabIndex="-1"
          autoComplete="off"
          value={form.website}
          onChange={updateField}
        />
      </label>

      {error ? <p className={styles.error}>{error}</p> : null}

      <button className="button" type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Send your note"}
        <span>→</span>
      </button>

      <p className={styles.privacyNote}>
        We use the information you provide only to respond to your inquiry and
        manage the conversation.
      </p>
    </form>
  );
}
