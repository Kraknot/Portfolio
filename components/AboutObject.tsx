"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const details = {
  craft: {
    label: "CRAFTING",
    number: "01",
    title: "I like building things people can actually use.",
    description:
      "Software development is my main focus. I enjoy turning ideas into useful software, whether it helps with everyday tasks, solves a problem or simply gives someone something fun to use.",
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
    title: "Good software is easier when communication is simple.",
    description:
      "I communicate clearly, adapt quickly to how a team works and I’m comfortable helping others when I can. I work best when the goal and expectations are clearly understood.",
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
    title: "Always curious about what's under the hood.",
    description:
      "Research and learning are a big part of how I work. When I run into something unfamiliar, I enjoy digging into docs, source code and examples until I thoroughly understand how it works.",
    cards: [
      {
        label: "RESEARCH",
        text: "I look into technologies, ideas and tools when something catches my interest.",
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
      "When I get stuck, I don’t like staring at the same problem forever. I step away, clear my head, come back, research what I’m missing and look at the problem again from a different angle.",
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
        text: "Research, test assumptions and check what I may have overlooked.",
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
    title: "Good software shouldn't feel boring to interact with.",
    description:
      "Engineering comes first, but I enjoy the creative side too. UI and UX are something I play with as a hobby because I like experimenting with how software looks, behaves and feels.",
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
        label: "USER MINDSET",
        text: "Building from the perspective of someone interacting with the tool for the first time.",
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
    title: "Fueling creativity through story and play.",
    description:
      "Not every problem needs to be solved with code. I spend my off-hours absorbing great storytelling, analyzing game design from a player's perspective and accumulating random internet trivia.",
    cards: [
      {
        label: "TECH",
        text: "Skimming emerging tech trends and open source developments just for fun.",
      },
      {
        label: "ANIME",
        text: "One of the ways I switch my brain off and just enjoy something.",
      },
      {
        label: "GAMES",
        text: "Playing, exploring and occasionally getting way too invested.",
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
  useState<DetailKey>("craft");

const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

const current = details[activeDetail];

function startAutoCycle() {
  if (timerRef.current) {
    clearInterval(timerRef.current);
  }

  timerRef.current = setInterval(() => {
    setActiveDetail((currentDetail) => {
      const currentIndex = topics.findIndex(
        ([key]) => key === currentDetail
      );

      const nextIndex = (currentIndex + 1) % topics.length;

      return topics[nextIndex][0];
    });
  }, 20000);
}

useEffect(() => {
  startAutoCycle();

  return () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };
}, []);

function selectDetail(detail: DetailKey) {
  setActiveDetail(detail);
  startAutoCycle();
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

        <p className= "about-topic-hint">
          Auto exploring · hover any node to take control
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
