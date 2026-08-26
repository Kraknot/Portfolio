"use client";

import { useEffect, useState } from "react";

export default function IntroLoader() {
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
    document.body.style.overflow = "hidden";

    const timer = window.setTimeout(() => {
      document.body.style.overflow = "";
      setFinished(true);
    }, 2300);

    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  if (finished) return null;

  return (
    <div className="intro-loader">
      <div className="intro-loader-content">
        <h1 className="intro-loader-name">
          KRAKNOT
        </h1>
      </div>
    </div>
  );
}