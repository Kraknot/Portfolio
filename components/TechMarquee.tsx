const tech = [
  "Python",
  "TypeScript",
  "React",
  "Next.js",
  "JavaScript",
  "Node.js",
  "AWS",
  "APIs",
  "Git & GitHub",
  "Tailwind CSS",
  "Vercel",
];

export default function TechMarquee() {
  const repeated = [...tech, ...tech];

  return (
    <div className="hero-tech-marquee" aria-hidden="true">
      <div className="hero-tech-track">
        {repeated.map((item, index) => (
          <div
            className="hero-tech-item"
            key={`${item}-${index}`}
          >
            <span className="hero-tech-symbol">◆</span>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}