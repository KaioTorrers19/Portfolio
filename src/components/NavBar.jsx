import { useState, useEffect } from "react";
import { navLinks } from "../constants";
import { useLanguage } from "../context/LanguageContext";

const NavBar = () => {
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
        <a href="#hero" className="logo">
          Kaio Torres
        </a>

        <nav className="desktop">
          <ul>
            {navLinks.map(({ link, name }, index) => (
              <li key={link} className="group">
                <a href={link}>
                  <span>{t.nav[index]?.name || name}</span>
                  <span className="underline" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 rounded-lg border border-white/15 bg-white/5 p-1 text-xs font-semibold">
            <button
              type="button"
              onClick={() => setLang("pt")}
              className={`px-2.5 py-1 rounded-md transition cursor-pointer ${
                lang === "pt"
                  ? "bg-white text-black"
                  : "text-white/70 hover:text-white"
              }`}
            >
              PT
            </button>
            <button
              type="button"
              onClick={() => setLang("es")}
              className={`px-2.5 py-1 rounded-md transition cursor-pointer ${
                lang === "es"
                  ? "bg-white text-black"
                  : "text-white/70 hover:text-white"
              }`}
            >
              ES
            </button>
          </div>

          <a href="#contact" className="contact-btn group">
            <div className="inner">
              <span>{t.contact.title}</span>
            </div>
          </a>
        </div>
      </div>
    </header>
  );
};

export default NavBar;