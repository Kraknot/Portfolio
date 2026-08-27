"use client";

import {
  useEffect,
  useRef,
} from "react";

const journeyPath =
  "M 180 180 C 500 180, 300 520, 680 500 S 1180 380, 1280 720 S 920 1040, 620 980 S 250 1180, 480 1420 S 1050 1320, 1120 1660 S 850 2020, 1380 2040";

const education = [
  {
    id: "school",
    number: "01",
    period: "EARLIER",
    title: "High School",
    institution: "SMV High School",
    location: "Thiruvananthapuram",
  },

  {
    id: "bsc",
    number: "02",
    period: "2022 — 2024",
    title: "BSc Computer Science",
    institution: "Emmanuel College, Vazhichal",
    description:
      "Built my foundation in computer science, programming, and web development.",
  },

  {
    id: "mca",
    number: "03",
    period: "2026 — 2028",
    title: "Master of Computer Applications",
    institution:
      "Lourdes Matha College of Science and Technology",
    location: "Thiruvananthapuram",
    description:
      "Currently expanding my knowledge of software development and modern computing.",
    current: true,
  },
];

const knowledge = [
  {
    id: "development",
    number: "04",
    label: "DEVELOPMENT",
    title: "What I build with.",
    skills: [
      "Python",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "HTML",
      "CSS",
    ],
  },

  {
    id: "tools",
    number: "05",
    label: "TOOLS & WORKFLOW",
    title: "How I build and ship.",
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "Tailwind CSS",
      "Vercel",
      "REST APIs",
    ],
  },

  {
    id: "exploring",
    number: "06",
    label: "CURRENTLY EXPLORING",
    title: "What I'm learning next.",
    skills: [
      "AWS",
      "Azure",
      "Cloud Computing",
      "Scalable Systems",
    ],
  },
];

export default function Skills() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  const progressPathRef = useRef<SVGPathElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const scroll = scrollRef.current;
    const journeyCanvas = canvasRef.current;
    const path = progressPathRef.current;
    const counter = counterRef.current;

    if ( !scroll || !journeyCanvas || !path ||  !counter ) 
    {
      return;
    }

    const cards = Array.from(
      scroll.querySelectorAll<HTMLElement>(
        ".journey-card"
      )
    );

    let rafId = 0;
    let targetProgress = 0;
    let currentProgress = 0;

    const pathLength = path.getTotalLength(); 
    path.style.strokeDasharray = `${pathLength}`;
    path.style.strokeDashoffset = `${pathLength}`;


    /* Read scroll */
    const updateTarget = () => {
      const rect =
        scroll.getBoundingClientRect();

      const distance =
        scroll.offsetHeight -
        window.innerHeight;

      if (distance <= 0) return;

      targetProgress = Math.min(
        Math.max(
          -rect.top / distance,
          0
        ),
        1
      );

      if (!rafId) {
        rafId =
          requestAnimationFrame(
            animate
          );
      }
    };

    /* Animate */
    const animate = () => { currentProgress += ( targetProgress - currentProgress ) * 0.085;
      if (
        Math.abs( targetProgress - currentProgress) < 0.0004) { currentProgress = targetProgress;}

      const travel = journeyCanvas.offsetHeight - window.innerHeight;
      const y = -travel * currentProgress;
      const x = Math.sin(  currentProgress * Math.PI * 3 ) * 30;

      journeyCanvas.style.transform = `translate3d(  calc(-50% + ${x}px), ${y}px, 0 )`;

      /* Path */
      path.style.strokeDashoffset = `${ pathLength * (1 - currentProgress) }`;

      /* Card focus */
      const focusY =
        window.innerHeight * 0.5;

      cards.forEach((card) => {
        const rect =
          card.getBoundingClientRect();

        const center = rect.top + rect.height / 2;
        const distance = Math.abs( center - focusY  );
        const strength = Math.max( 0, 1 - distance / ( window.innerHeight * 0.6 ) );
        const opacity = 0.62 + strength * 0.38; 
        card.style.opacity = opacity.toString();
      });

      /* Counter */
      const currentCard = Math.min( Math.floor( currentProgress * 6 ) + 1, 6);
      counter.textContent = String( currentCard ).padStart(2, "0");
      if (currentProgress !==  targetProgress) 
      {
        rafId =  requestAnimationFrame( animate );
      } 
      else 
      {
        rafId = 0;
      }
    };

    updateTarget();
    window.addEventListener( "scroll", updateTarget, { passive: true,});
    window.addEventListener( "resize", updateTarget );
    return () => {
      window.removeEventListener( "scroll", updateTarget);


      window.removeEventListener(
        "resize",
        updateTarget
      );

      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return (
    <section
      id="skills"
      className="skills-journey"
    >
      {/* Intro */}
      <header className="journey-intro">
        <div className="journey-label">
          <span>03</span>
          <p>SKILLS + EDUCATION</p>
        </div>

        <h2>
          Knowledge that
          <br />

          <span>
            keeps evolving.
          </span>
        </h2>

        <p className="journey-intro-text">
          A growing foundation built
          through education, projects,
          experimentation, and continuous
          learning.
        </p>
      </header>

      {/* Journey */}
      <div ref={scrollRef} className="journey-scroll">
        <div className="journey-stage">
          <div className="journey-video-wrap" aria-hidden="true">
          <video className="journey-video" autoPlay muted loop playsInline preload="metadata" >
          <source src="/videos/cozy-bedroom.mp4" type="video/mp4" />
          </video>
          </div>
          <div ref={canvasRef} className="journey-canvas" >
            <svg className="journey-path" viewBox="0 0 1600 2200" preserveAspectRatio="none" aria-hidden="true">
              <defs>
                <linearGradient  id="journey-gradient" x1="0" y1="0" x2="1" y2="1" >
                  <stop offset="0%" stopColor="#6047c7" />
                  <stop offset="100%" stopColor="#176f7c" />
                </linearGradient>
              </defs>

              <path className="journey-path-base" d={journeyPath} />

              <path
                ref={progressPathRef}
                className="journey-path-progress"
                d={journeyPath}
              />
            </svg>

            {/* Start */}
            <div
              className="journey-start-node"
              aria-hidden="true"
            >
              <span />
              <p>START</p>
            </div>

            {/* Education */}
            {education.map((item) => (
              <article
                key={item.id}
                className={`journey-card journey-${item.id} ${
                  item.current
                    ? "is-current"
                    : ""
                }`}
              >
                <div className="journey-card-top">
                  <span>
                    {item.number}
                  </span>

                  <p>{item.period}</p>

                  {item.current && (
                    <strong>
                      CURRENT
                    </strong>
                  )}
                </div>

                <h3>{item.title}</h3>

                <p className="journey-institution">
                  {item.institution}
                </p>

                {item.location && (
                  <p className="journey-location">
                    {item.location}
                  </p>
                )}

                {item.description && (
                  <p className="journey-description">
                    {item.description}
                  </p>
                )}
              </article>
            ))}

            {/* Knowledge */}
            {knowledge.map((item) => (
              <article
                key={item.id}
                className={`journey-card journey-${item.id}`}
              >
                <div className="journey-card-top">
                  <span>
                    {item.number}
                  </span>

                  <p>{item.label}</p>
                </div>

                <h3>{item.title}</h3>

                <div className="journey-skills">
                  {item.skills.map(
                    (skill) => (
                      <span key={skill}>
                        {skill}
                      </span>
                    )
                  )}
                </div>
              </article>
            ))}

            {/* End */}
            <div
              className="journey-marker journey-marker-end"
              aria-hidden="true"
            >
              <span />
              <p>KEEP LEARNING</p>
            </div>
          </div>

          {/* Counter */}
          <div
            className="journey-counter"
            aria-hidden="true"
          >
            <span
              ref={counterRef}
              className="journey-counter-current"
            >
              01
            </span>

            <div />

            <span>06</span>
          </div>
        </div>
      </div>
    </section>
  );
}