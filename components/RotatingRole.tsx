"use client";

import { useEffect, useState } from "react";

const roles = [
  "Software Developer",
  "Full-stack Developer",
  "UI/UX enjoyer",
  "Creative coder",
  "Interface enthusiast",
];

export default function RotatingRole() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((currentIndex) => {
        return (currentIndex + 1) % roles.length;
      });
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <span
      key={currentIndex}
      className="rotating-role"
    >
      {roles[currentIndex]}
    </span>
  );
}