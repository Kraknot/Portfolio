import AboutObject from "@/components/AboutObject";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-ambient" aria-hidden="true">
        <span className="about-ambient-one" />
        <span className="about-ambient-two" />
      </div>

      <div className="about-inner">
        <div className="about-header">
          <span>02</span>
          <p>ABOUT</p>
        </div>

        <div className="about-heading-row">
          <p className="about-role">SOFTWARE DEVELOPER · ALWAYS LEARNING</p>

          <h2 className="about-title">
            Focused on craft, <br />
            <span>Driven by outcome.</span>
          </h2>
        </div>

        <AboutObject />
      </div>
    </section>
  );
}
