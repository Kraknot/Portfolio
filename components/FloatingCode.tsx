export default function FloatingCode() {
  return (
    <div className="floating-code" aria-hidden="true">
      <div className="code-card code-card-main">
        <span className="code-purple">const</span>{" "}
        <span className="code-white">developer</span>{" "}
        <span className="code-cyan">=</span>{" "}
        <span className="code-purple">{"{"}</span>

        <br />

        <span className="code-white">&nbsp;&nbsp;name:</span>{" "}
        <span className="code-gold">"Shihan"</span>
        <span className="code-white">,</span>

        <br />

        <span className="code-white">&nbsp;&nbsp;design:</span>{" "}
        <span className="code-gold">true</span>
        <span className="code-white">,</span>

        <br />

        <span className="code-white">&nbsp;&nbsp;coffee:</span>{" "}
        <span className="code-gold">"yes"</span>

        <br />

        <span className="code-purple">{"}"}</span>
      </div>

      <div className="code-card code-card-small">
        <span className="code-cyan">&lt;</span>
        <span className="code-white">UI</span>
        <span className="code-cyan">/&gt;</span>
      </div>

      <div className=" code-card-label">
       <span className="code-purple">Top</span>
       <span>BUILD & DESIGN</span>
      </div>

      <div className="floating-dot dot-one" />
      <div className="floating-dot dot-two" />
      <div className="floating-dot dot-three" />
    </div>
  );
}