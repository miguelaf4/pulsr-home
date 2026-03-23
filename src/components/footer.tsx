export default function Footer() {
  return (
    <footer className="border-t border-border bg-dark px-6 py-14 lg:px-20">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-8 md:flex-row md:justify-between">
        {/* Logo + tagline */}
        <div className="flex flex-col items-center gap-2 md:items-start">
          <svg viewBox="0 0 220 36" fill="none" className="h-7 w-auto">
            <path
              d="M0 18 Q5 18 7 9 Q9 0 12 18 Q14 36 17 18 Q19 5 21 18 Q23 28 26 18 L28 18"
              stroke="#FF2D6B"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
            <text
              x="38"
              y="26"
              fontFamily="var(--font-syne), Syne, sans-serif"
              fontWeight="800"
              fontSize="28"
              fill="#F5F5FA"
              letterSpacing="3"
            >
              PULSR
            </text>
          </svg>
          <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-muted">
            Live Commerce Studio · CDMX
          </span>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6">
          <a
            href="#servicios"
            className="font-[family-name:var(--font-outfit)] text-sm text-muted transition-colors hover:text-white"
          >
            Servicios
          </a>
          <a
            href="#talento"
            className="font-[family-name:var(--font-outfit)] text-sm text-muted transition-colors hover:text-white"
          >
            Talento
          </a>
          <a
            href="#contacto"
            className="font-[family-name:var(--font-outfit)] text-sm text-muted transition-colors hover:text-white"
          >
            Contacto
          </a>
        </div>

        {/* Social icons */}
        <div className="flex items-center gap-4">
          {/* Instagram */}
          <a
            href="#"
            aria-label="Instagram"
            className="text-muted transition-colors hover:text-white"
          >
            <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5">
              <rect
                x="2"
                y="2"
                width="16"
                height="16"
                rx="5"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <circle cx="10" cy="10" r="4" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="14.5" cy="5.5" r="1" fill="currentColor" />
            </svg>
          </a>
          {/* TikTok */}
          <a
            href="#"
            aria-label="TikTok"
            className="text-muted transition-colors hover:text-white"
          >
            <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5">
              <path
                d="M14 2v8a4 4 0 11-3-3.87V2h3zm0 0c1.5.5 2.5 1.5 3 3"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          {/* LinkedIn */}
          <a
            href="#"
            aria-label="LinkedIn"
            className="text-muted transition-colors hover:text-white"
          >
            <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5">
              <rect
                x="2"
                y="2"
                width="16"
                height="16"
                rx="3"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M6 9v5M6 6v.01M10 14v-3.5a1.5 1.5 0 113 0V14M10 9v5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="mx-auto mt-8 max-w-[1200px] border-t border-border pt-6 text-center">
        <p className="font-mono text-[11px] tracking-[0.1em] text-border">
          © 2026 PULSR
        </p>
      </div>
    </footer>
  );
}
