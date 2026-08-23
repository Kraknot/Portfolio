import AboutObject from "@/components/AboutObject";
import ScrollReveal from "@/components/ScrollReveal";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-inner">
        <ScrollReveal>
          <div className="about-header">
            <span>02</span>
            <p>ABOUT</p>
          </div>
        </ScrollReveal>

        <div className="about-layout">
          <div className="about-left">
            <ScrollReveal delay={100}>
              <h2 className="about-title">
                Somewhere between
                <br />
                <span>engineering</span>
                <br />
                and design.
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <AboutObject />
            </ScrollReveal>
          </div>

          <div className="about-right">
            <ScrollReveal delay={220}>
              <p className="about-kicker">
                BUILDING WITH BOTH SIDES OF THE BRAIN
              </p>

              <p className="about-intro">
                I enjoy working where software engineering and design overlap —
                building things that work well and feel good to use.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}