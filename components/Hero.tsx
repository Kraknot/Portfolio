import RotatingRole from "@/components/RotatingRole";
import FloatingCode from "@/components/FloatingCode";

export default function Hero() {
  return (
    <main className="hero">
      <div className="hero-content">
        <p className="hero-eyebrow">
          SOFTWARE DEVELOPER
        </p>

        <h1 className="hero-title">
          Muhammed
          <br />
          Shihan S
        </h1>

        <div className="hero-role">
          <span className="role-dot" />
          <RotatingRole />
        </div>

        <p className="hero-description">
          I build software and digital experiences
          with a love for thoughtful interfaces.
        </p>
      </div>

      <FloatingCode />

      <div className="hero-scroll">
        <span>Scroll to explore</span>
        <span>↓</span>
      </div>

    <div className="mobile-decor" aria-hidden="true">
     <span className="mobile-ui-tag">&lt;UI/&gt;</span>
     <div className="mobile-code-card">
     <span className="code-purple">const</span>{" "}
      <span className="code-white">me</span>{" "}
      <span className="code-cyan">=</span>{" "}
      <span className="code-purple">{"{"}</span>
      <br />
      <span className="code-white">&nbsp;&nbsp;design:</span>{" "}
      <span className="code-gold">true</span>
      <br />
      <span className="code-purple">{"}"}</span>
     </div>
     <div className="mobile-code-label">
       <span className="code-purple">Top</span>
       <span>BUILD &amp; DESIGN</span>
     </div>
    </div>
    </main>
  );
}
