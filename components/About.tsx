import AboutObject from "@/components/AboutObject";
import ScrollReveal from "@/components/ScrollReveal";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-ambient" aria-hidden="true">
        <span className="about-ambient-one" />
        <span className="about-ambient-two" />
      </div>

      <div className="about-inner">
        <ScrollReveal>
          <div className="about-header">
            <span>02</span>
            <p>ABOUT</p>
          </div>
        </ScrollReveal>

        <div className="about-heading-row">
          <ScrollReveal delay={80}>
            <p className="about-role">SOFTWARE ENGINEER · PRODUCT MINDED</p>

            <h2 className="about-title">
              I build products
              <br />
              that <strong>work.</strong>
              <br />
              <span>And care how they feel.</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={160}>
            <p className="about-summary">
              I like understanding the whole product — from the systems
              underneath it to the interface someone actually interacts with.
            </p>
          </ScrollReveal>
        </div>

        <AboutObject />
      </div>
    </section>
  );
}