import { useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Members", href: "#members" },
  { label: "Memberships", href: "#memberships" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <nav className="w-full sticky top-0 z-50" style={{ background: "#292524" }}>
      <div className="flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-20 py-3 sm:py-4">
        {/* Logo */}
        <span className="text-base sm:text-lg font-bold tracking-widest" style={{ color: "#fbbf24" }}>
          FOURFRONT
        </span>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm font-medium transition-colors hover:text-amber-400"
                style={{ color: "#d6d3d1" }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger button — mobile only */}
        <button
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 focus:outline-none"
        >
          <span
            className="block h-0.5 w-6 rounded transition-all duration-300"
            style={{
              background: "#fbbf24",
              transform: open ? "rotate(45deg) translateY(8px)" : "none",
            }}
          />
          <span
            className="block h-0.5 w-6 rounded transition-all duration-300"
            style={{
              background: "#fbbf24",
              opacity: open ? 0 : 1,
            }}
          />
          <span
            className="block h-0.5 w-6 rounded transition-all duration-300"
            style={{
              background: "#fbbf24",
              transform: open ? "rotate(-45deg) translateY(-8px)" : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{ maxHeight: open ? "300px" : "0px" }}
      >
        <ul className="flex flex-col px-4 pb-4 gap-1" style={{ background: "#292524" }}>
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-2 px-3 rounded-lg text-sm font-medium transition-colors hover:bg-stone-700"
                style={{ color: "#d6d3d1" }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}