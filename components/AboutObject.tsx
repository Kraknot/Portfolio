"use client";

import Image from "next/image";
import { useState } from "react";

const details = {
  engineering: {
    label: "ENGINEERING",
    number: "01",
    title: "I like building the whole thing.",
    description:
      "I enjoy turning ideas into working software, understanding how the pieces connect, and solving the engineering problems behind a product.",
    items: ["TypeScript", "React / Next.js", "APIs", "Backend systems"],
  },

  product: {
    label: "PRODUCT",
    number: "02",
    title: "I think beyond the code.",
    description:
      "I care about what should be built, who it is for, and whether the final product actually solves the problem it started with.",
    items: ["Product thinking", "User problems", "Prototyping", "Iteration"],
  },

  uiux: {
    label: "UI / UX",
    number: "03",
    title: "The interface still matters.",
    description:
      "Good engineering can still feel bad to use. I enjoy refining hierarchy, interaction, usability, and the small details people actually notice.",
    items: ["Interaction", "User flows", "Interfaces", "Usability"],
  },

  design: {
    label: "DESIGN",
    number: "04",
    title: "Design supports the product.",
    description:
      "Visual design is another tool I use to make products clearer and more intentional — not the goal by itself.",
    items: ["Typography", "Layout", "Visual systems", "Motion"],
  },

  learning: {
    label: "LEARNING",
    number: "05",
    title: "Always learning something new.",
    description:
      "I like exploring new tools, frameworks, engineering ideas, and design systems instead of staying inside one fixed stack.",
    items: ["New frameworks", "System design", "Experiments", "Courses"],
  },

  sideQuests: {
    label: "SIDE QUESTS",
    number: "06",
    title: "Not everything has to be serious.",
    description:
      "I like making small experiments, playful interfaces, strange ideas, and things that help me learn by building.",
    items: [
      "Mini projects",
      "Creative coding",
      "UI experiments",
      "Random ideas",
    ],
  },
} as const;

type DetailKey = keyof typeof details;

const topics = Object.entries(details) as [
  DetailKey,
  (typeof details)[DetailKey],
][];

export default function AboutObject() {
  const [activeDetail, setActiveDetail] =
    useState<DetailKey>("engineering");

  const [hasInteracted, setHasInteracted] = useState(false);

  const current = details[activeDetail];

  function selectDetail(detail: DetailKey) {
    setActiveDetail(detail);
    setHasInteracted(true);
  }

  return (
    <div className="about-interaction">
      <div className="about-visual-area">
        <div className="about-visual">
          <div className="about-orbit about-orbit-one" />
          <div className="about-orbit about-orbit-two" />

          <div className="about-character-image">
            <Image
              src="/images/luffy.png"
              alt="Luffy smiling in a straw hat"
              width={500}
              height={500}
              sizes="(max-width: 700px) 68vw, 310px"
            />
          </div>
        </div>

        <div
          className="about-topics"
          aria-label="About topics"
        >
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
          className={`about-topic-hint ${
            hasInteracted ? "is-hidden" : ""
          }`}
          aria-hidden={hasInteracted}
        >
          Hover a tag to explore ↗
        </p>
      </div>

      <aside
        id="about-detail-panel"
        className="about-detail-panel"
        aria-live="polite"
        aria-atomic="true"
      >
        <div
          className="about-detail-content"
          key={activeDetail}
        >
          <div className="detail-heading">
            <span>{current.number}</span>
            <p>{current.label}</p>
          </div>

          <h3>{current.title}</h3>

          <p className="detail-description">
            {current.description}
          </p>

          <div className="detail-grid">
            {current.items.map((item) => (
              <div key={item}>
                <span>FOCUS</span>
                <strong>{item}</strong>
              </div>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
}
