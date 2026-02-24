import { useState } from "react";

interface MembershipToggleProps {
  highlight: string;
  label: string;
  description: string;
  onSignUp: (membershipName: string) => void;
}

export default function MembershipToggle({ highlight, label, description, onSignUp }: MembershipToggleProps) {
  const [open, setOpen] = useState<boolean>(false);
  const fullName = `${highlight} ${label}`;

  return (
    <div className="rounded-xl overflow-hidden border" style={{ borderColor: "#e7e5e4" }}>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="w-full flex items-center justify-between px-4 py-3 sm:py-4 text-left focus:outline-none"
        style={{ background: "#44403c" }}
        aria-expanded={open}
      >
        <span className="text-sm sm:text-base font-bold tracking-widest">
          <span style={{ color: "#fbbf24" }}>{highlight}</span>
          <span className="text-white font-normal"> {label}</span>
        </span>
        <svg
          className="w-4 h-4 flex-shrink-0 transition-transform duration-200"
          style={{
            color: "#fbbf24",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
          }}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: open ? "200px" : "0px" }}
      >
        <div className="px-4 py-3 space-y-3">
          <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "#57534e" }}>
            {description}
          </p>
          <button
            onClick={() => onSignUp(fullName)}
            className="text-xs sm:text-sm font-semibold text-white px-4 py-1.5 rounded-full transition-opacity hover:opacity-90"
            style={{ background: "#d97706" }}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}