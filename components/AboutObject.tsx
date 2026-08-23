"use client";

import Image from "next/image";
import { useState } from "react";

const details = {
  uiux: {
    label: "UI / UX",
    title: "I care about how software feels.",
    description:
      "I enjoy thinking about usability, hierarchy, interaction, and the small decisions that make an interface feel intuitive.",
    items: ["User flows", "Interfaces", "Prototyping", "Interaction"],
  },
  design: {
    label: "DESIGN",
    title: "Design is part of how I think.",
    description:
      "I like experimenting with typography, spacing, visual systems, composition, and interfaces that feel intentional.",
    items: ["Typography", "Layout", "Visual systems", "Motion"],
  },
  code: {
    label: "CODE",
    title: "I like turning ideas into working things.",
    description:
      "I enjoy solving problems, learning new technologies, and building products rather than stopping at the concept stage.",
    items: ["TypeScript", "React", "Next.js", "Problem solving"],
  },
  fullstack: {
    label: "FULL-STACK",
    title: "I like understanding the whole product.",
    description:
      "Frontend experience matters to me, but I also enjoy the backend systems, APIs, and data that make everything work.",
    items: ["Frontend", "Backend", "APIs", "Databases"],
  },
} as const;

type DetailKey = keyof typeof details;

const topics = Object.entries(details) as [DetailKey, (typeof details)[DetailKey]][];

export default function AboutObject() {
  const [activeDetail, setActiveDetail] = useState<DetailKey>("uiux");
  const [hasInteracted, setHasInteracted] = useState(false);
  const current = details[activeDetail];

  function selectDetail(detail: DetailKey) {
    setActiveDetail(detail);
    setHasInteracted(true);
  }

  return (
    <div className="about-interaction">
      <div className="about-visual">
        <div className="about-orbit about-orbit-one" />
        <div className="about-orbit about-orbit-two" />

        <div className="about-character-image">
          <Image
            src="/images/luffy.png"
            alt="Luffy smiling in a straw hat"
            width={500}
            height={500}
            sizes="(max-width: 900px) 58vw, 280px"
          />
        </div>

        <div className="about-topics" aria-label="About topics">
          {topics.map(([key, detail]) => (
            <button
              key={key}
              type="button"
              className={`about-topic topic-${key} ${
                activeDetail === key ? "is-active" : ""
              }`}
              aria-pressed={activeDetail === key}
              aria-controls="about-detail-panel"
              onMouseEnter={() => selectDetail(key)}
              onFocus={() => selectDetail(key)}
              onClick={() => selectDetail(key)}
            >
              {detail.label}
            </button>
          ))}
        </div>

        <p
          className={`about-topic-hint ${hasInteracted ? "is-hidden" : ""}`}
          aria-hidden={hasInteracted}
        >
          Hover a tag to know me better ↗
        </p>
      </div>

      <aside
        id="about-detail-panel"
        className="about-detail-panel"
        aria-live="polite"
        aria-atomic="true"
      >
        <div className="about-detail-content" key={activeDetail}>
          <p className="detail-number">{current.label}</p>
          <h3>{current.title}</h3>
          <p className="detail-description">{current.description}</p>

          <div className="detail-grid">
            {current.items.map((item) => (
              <div key={item}>
                <span>INTEREST</span>
                <strong>{item}</strong>
              </div>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
}
