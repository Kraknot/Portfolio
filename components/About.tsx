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
          <div className="about-object-wrapper">
            <AboutObject />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="about-bottom">
            <div className="about-tags">
              <span>DEVELOPMENT</span>
              <span>UI / UX</span>
              <span>FULL-STACK</span>
              <span>DESIGN</span>
            </div>

            <div className="about-copy">
              <p>
                I&apos;m Muhammed Shihan S, a software developer who enjoys
                turning ideas into useful digital experiences.
              </p>

              <p>
                I like working across both development and design, especially
                where engineering, interfaces, and user experience meet.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}