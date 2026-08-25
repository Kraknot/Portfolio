"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [onLightSection, setOnLightSection] = useState(false);
  
  useEffect(() => { const about = document.getElementById("about");
    if (!about) return;
    const updateNavbarTheme = () => { const rect = about.getBoundingClientRect();
    const triggerPoint = 90;
    const insideAbout = rect.top <= triggerPoint && rect.bottom > triggerPoint;
    setOnLightSection(insideAbout);
  };
  
  updateNavbarTheme();
  window.addEventListener("scroll", updateNavbarTheme, { passive: true,});
  window.addEventListener("resize", updateNavbarTheme);
  return () => {
    window.removeEventListener("scroll", updateNavbarTheme);
    window.removeEventListener("resize", updateNavbarTheme); };
  }, []);

  function scrollToSection(id: string) {
  const section = document.getElementById(id);
  if (!section) return;
  section.scrollIntoView({
  behavior: "smooth",
  block: "start", });
  }

  return (
    <header className={`navbar-shell ${ onLightSection ? "navbar-light" : "" }`}>
      <nav className="navbar">
        <Link href="#home" className="navbar-brand">
          <Image
            src="/images/logo.png"
            alt="Kraknot logo"
            width={28}
            height={28}
          />

          <span>Kraknot</span>
        </Link>

        <div className="navbar-links">
          <Link href="#home" onClick={(e) => { e.preventDefault(); window.scrollTo({top: 0, behavior: "smooth",});}}> Home </Link>
          <Link href="#about" onClick={(e) => {e.preventDefault(); scrollToSection("about");}}> About </Link>
          <Link href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection("skills");}}> Skills </Link>
          <Link href="#work" onClick={(e) => { e.preventDefault(); scrollToSection ("work"); }}> Work </Link>
          <Link href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection("contact"); }}>  Contact </Link>
        </div>

        <Link href="#contact" className="navbar-contact"> Let&apos;s Talk </Link>
      </nav>
    </header>
  );
}