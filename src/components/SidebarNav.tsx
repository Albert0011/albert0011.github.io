import React, { useEffect, useState } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
];

function getSectionTops() {
  return navLinks.map(link => {
    const section = document.querySelector(link.href);
    return section ? section.getBoundingClientRect().top + window.scrollY : Infinity;
  });
}

export default function SidebarNav() {
  const [active, setActive] = useState(navLinks[0].href);

  useEffect(() => {
    function handleScroll() {
      const scroll = window.scrollY + 150;
      const sectionTops = getSectionTops();
      let current = navLinks[0].href;
      for (let i = 0; i < sectionTops.length; i++) {
        if (scroll >= sectionTops[i]) {
          current = navLinks[i].href;
        }
      }
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 5) {
        current = navLinks[navLinks.length - 1].href;
      }
      setActive(current);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    function handleClick(e: Event) {
      const target = e.target as HTMLElement;
      if (target.tagName === "A" && target.getAttribute("href")?.startsWith("#")) {
        const id = target.getAttribute("href")!;
        const section = document.querySelector(id);
        if (section) {
          e.preventDefault();
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    }
    document.querySelectorAll('nav a[href^="#"]').forEach(link => {
      link.addEventListener("click", handleClick);
    });
    return () => {
      document.querySelectorAll('nav a[href^="#"]').forEach(link => {
        link.removeEventListener("click", handleClick);
      });
    };
  }, []);

  return (
    <nav className="nav hidden lg:block" aria-label="In-page jump links">
      <ul className="mt-2 w-max">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              className={`group flex items-center py-3 nav-link`}
              href={link.href}
            >
              <span
                className={`nav-indicator mr-4 h-px transition-all 
                  group-hover:w-16 group-hover:bg-gray-200 group-focus-visible:w-16 group-focus-visible:bg-gray-200 motion-reduce:transition-none
                  ${active === link.href ? "w-16 bg-gray-200" : "w-8 bg-gray-600"}
                `}
              ></span>
              <span
                className={`nav-text text-xs font-bold uppercase tracking-widest transition-colors
                  group-hover:text-gray-200 group-focus-visible:text-gray-200
                  ${active === link.href ? "text-gray-200" : "text-gray-500"}
                `}
              >
                {link.label}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
