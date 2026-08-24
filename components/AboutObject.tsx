"use client";

import Image from "next/image";
import { useState } from "react";

const details = {
  engineering: {
    label: "ENGINEERING",
    number: "01",
    title: "I like building things people can actually use.",
    description:
      "Software engineering is my main focus. I enjoy turning ideas into useful software — whether it helps with everyday tasks, solves a problem, or simply gives someone something fun to use.",
    cards: [
      {
        label: "HOW I WORK",
        text: "I like understanding the goal before I start building.",
      },
      {
        label: "STRENGTH",
        text: "I understand new ideas quickly and adapt to the environment around me.",
      },
      {
        label: "MINDSET",
        text: "Useful software matters more to me than building something just because I can.",
      },
      {
        label: "CREATIVE SIDE",
        text: "I enjoy adding thoughtful interface ideas when the product benefits from them.",
      },
    ],
  },

  teamwork: {
    label: "TEAMWORK",
    number: "02",
    title: "I work well with people.",
    description:
      "I communicate clearly, adapt quickly to how a team works, and I’m comfortable helping others when I can. I work best when the goal and expectations are clearly understood.",
    cards: [
      {
        label: "COMMUNICATION",
        text: "I try to keep things clear instead of making work more complicated than it needs to be.",
      },
      {
        label: "ADAPTABILITY",
        text: "I can understand a new environment quickly and adjust to how the team works.",
      },
      {
        label: "TEAM PLAYER",
        text: "If someone needs help and I can contribute, I’m happy to step in.",
      },
      {
        label: "WORK STYLE",
        text: "Give me a clear goal and I can focus on getting it done properly.",
      },
    ],
  },

  learning: {
    label: "LEARNING",
    number: "03",
    title: "I like figuring things out.",
    description:
      "Research and learning are a big part of how I work. If I don’t understand something yet, I’m comfortable digging into it until I do.",
    cards: [
      {
        label: "RESEARCH",
        text: "I look into technologies, ideas, and tools when something catches my interest.",
      },
      {
        label: "LEARNING",
        text: "I can pick up unfamiliar concepts quickly when a project requires them.",
      },
      {
        label: "ORGANIZATION",
        text: "I prefer breaking things into understandable pieces instead of attacking everything at once.",
      },
      {
        label: "CURIOSITY",
        text: "Sometimes I research something simply because I want to know how it works.",
      },
    ],
  },

  problemsolving: {
    label: "PROBLEM SOLVING",
    number: "04",
    title: "Sometimes the best debugging tool is a break.",
    description:
      "When I get stuck, I don’t like staring at the same problem forever. I step away, clear my head, come back, research what I’m missing, and look at the problem again from a different angle.",
    cards: [
      {
        label: "WHEN STUCK",
        text: "Step away for a while instead of forcing the same approach.",
      },
      {
        label: "RESET",
        text: "Come back with a clearer head and re-read the actual problem.",
      },
      {
        label: "INVESTIGATE",
        text: "Research, test assumptions, and check what I may have overlooked.",
      },
      {
        label: "TRY AGAIN",
        text: "Break the problem down and approach it from another direction.",
      },
    ],
  },

  creativity: {
    label: "CREATIVITY",
    number: "05",
    title: "I like making software feel interesting.",
    description:
      "Engineering comes first, but I enjoy the creative side too. UI and UX are something I play with as a hobby because I like experimenting with how software looks, behaves, and feels.",
    cards: [
      {
        label: "INTERFACES",
        text: "I enjoy experimenting with layouts and interaction ideas.",
      },
      {
        label: "CREATIVITY",
        text: "I like when software has some personality instead of feeling completely generic.",
      },
      {
        label: "UI / UX",
        text: "A hobby and creative interest — not my main professional focus.",
      },
      {
        label: "EXPERIMENTS",
        text: "Sometimes I build things just to try an idea and see whether it works.",
      },
    ],
  },

  side_quest: {
    label: "Side Quests",
    number: "06",
    title: "I’m curious even when I’m not coding.",
    description:
      "Outside development, I spend time researching technology and whatever else catches my attention. And when I’m not doing that, there’s a good chance I’m watching anime or playing games.",
    cards: [
      {
        label: "TECH",
        text: "Researching technology, tools, and interesting ideas.",
      },
      {
        label: "ANIME",
        text: "One of the ways I switch my brain off and just enjoy something.",
      },
      {
        label: "GAMES",
        text: "Playing, exploring, and occasionally getting way too invested.",
      },
      {
        label: "RABBIT HOLES",
        text: "Random topics that somehow turn into an hour of research.",
      },
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
          {current.cards.map((card) => (
          <div key={card.label}>
          <span>{card.label}</span>
          <strong>{card.text}</strong>
          </div>
          ))}
          </div>
        </div>
      </aside>
    </div>
  );
}
