"use client";

import { useState } from "react";

type Tab = "developer" | "skills" | "terminal";

const code = {
  developer: (
    <>
      <div>
        <span className="code-purple">const</span>{" "}
        <span className="code-cyan">developer</span>{" "}
        <span className="code-white">= {"{"}</span>
      </div>

      <div>
        &nbsp;&nbsp;
        <span className="code-purple">name:</span>{" "}
        <span className="code-gold">
          &quot;Muhammed Shihan S&quot;
        </span>,
      </div>

      <div>
        &nbsp;&nbsp;
        <span className="code-purple">alias:</span>{" "}
        <span className="code-gold">
          &quot;Kraknot&quot;
        </span>,
      </div>

      <div>
        &nbsp;&nbsp;
        <span className="code-purple">role:</span>{" "}
        <span className="code-gold">
          &quot;Software Developer&quot;
        </span>,
      </div>

      <div>
        &nbsp;&nbsp;
        <span className="code-purple">focus:</span>{" "}
        <span className="code-gold">
          &quot;Useful software&quot;
        </span>,
      </div>

      <div>
        &nbsp;&nbsp;
        <span className="code-purple">learning:</span>{" "}
        <span className="code-cyan">true</span>,
      </div>

      <div className="code-white">
        {"}"};
      </div>
    </>
  ),

  skills: (
    <>
      <div className="code-white">{"{"}</div>

      <div>
        &nbsp;&nbsp;
        <span className="code-gold">
          &quot;engineering&quot;
        </span>
        : [
      </div>

      <div>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <span className="code-gold">
          &quot;Full-stack&quot;
        </span>,
      </div>

      <div>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <span className="code-gold">
          &quot;Problem solving&quot;
        </span>,
      </div>

      <div>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <span className="code-gold">
          &quot;Research&quot;
        </span>
      </div>

      <div>&nbsp;&nbsp;],</div>

      <div>
        &nbsp;&nbsp;
        <span className="code-gold">
          &quot;creative&quot;
        </span>
        :{" "}
        <span className="code-gold">
          &quot;UI / UX&quot;
        </span>
      </div>

      <div className="code-white">{"}"}</div>
    </>
  ),

  terminal: (
    <>
      <div>
        <span className="terminal-prompt">kraknot@portfolio</span>
        <span className="code-white">:~$ whoami</span>
      </div>

      <div className="terminal-output">
        software developer
      </div>

      <br />

      <div>
        <span className="terminal-prompt">kraknot@portfolio</span>
        <span className="code-white">
          :~$ current-focus
        </span>
      </div>

      <div className="terminal-output">
        building useful things.
      </div>

      <br />

      <div>
        <span className="terminal-prompt">kraknot@portfolio</span>
        <span className="code-white">:~$ status</span>
      </div>

      <div className="terminal-output">
        always learning █
      </div>
    </>
  ),
};

export default function FloatingCode() {
  const [activeTab, setActiveTab] =
    useState<Tab>("developer");

  const [copied, setCopied] = useState(false);

  async function copyCode() {
    const text =
      activeTab === "developer"
        ? "Muhammed Shihan S — Software Developer"
        : activeTab === "skills"
        ? "Engineering, Full-stack, Problem solving, Research, UI/UX"
        : "kraknot@portfolio:~$ always learning";

    await navigator.clipboard.writeText(text);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1500);
  }

  return (
    <div className="floating-editor">
      <div className="editor-toolbar">
        <div className="editor-dots">
          <span />
          <span />
          <span />
        </div>

        <div
          className="editor-floating-label"
          aria-hidden="true"
        >
         <span>01</span>
           BUILD / LEARN / SHIP
         </div>

        <div className="editor-tabs">
          <button
            className={
              activeTab === "developer"
                ? "is-active"
                : ""
            }
            onClick={() => setActiveTab("developer")}
          >
            TS Developer.ts
          </button>

          <button
            className={
              activeTab === "skills"
                ? "is-active"
                : ""
            }
            onClick={() => setActiveTab("skills")}
          >
            JSON Skills.json
          </button>

          <button
            className={
              activeTab === "terminal"
                ? "is-active"
                : ""
            }
            onClick={() => setActiveTab("terminal")}
          >
            $ terminal.sh
          </button>
        </div>

        <button
          className="editor-copy"
          onClick={copyCode}
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>

      <div className="editor-code">
        <div
          className="editor-content"
          key={activeTab}
        >
          {code[activeTab]}
        </div>
      </div>

      <div className="editor-status">
        <span>
          <span className="status-dot" />
          Next.js · TypeScript
        </span>

        <span>Read-only preview</span>
      </div>
      <div
        className="editor-floating-ui"
        aria-hidden="true"
      >
        &lt;UI/&gt;
      </div>
    </div>
  );
}
