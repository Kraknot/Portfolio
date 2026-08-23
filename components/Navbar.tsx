export default function Navbar() {
  return (
    <header className="navbar">
      <a className="navbar-logo" href="/">
        Kraknot
      </a>

      <nav className="navbar-links" aria-label="Main navigation">
        <a href="#work">Work</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}