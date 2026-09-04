const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/iamhsntariq05",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/hsn-tariq/",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Twitter",
    href: "https://twitter.com/iamhsntariq",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Stack Overflow",
    href: "https://stackoverflow.com/users/12553511/iamhsntariq",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M15 21h-10v-2h10v2zm6-11.665l-1.571-9.335-1.679.283.571 3.39-8.58-2.06-.394 1.64 8.578 2.058-1.034 4.3-8.44-3.046-.608 1.685 8.514 3.073-.708 2.948-7.817-2.95-.636 1.683 7.786 2.939-.27 1.123c-.557.228-1.152.345-1.758.345-1.321 0-2.474-.591-3.28-1.529l-1.54 1.282c1.188 1.43 2.96 2.247 4.82 2.247.952 0 1.882-.215 2.737-.625l-1.11 4.607 1.94.467 1.197-4.978 1.832.44.47-1.95-1.833-.44.737-3.066 1.797.686.638-1.676-1.797-.686.609-2.529 1.805.434.467-1.944-1.805-.434z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@hassantariq2459",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-28 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* CTA block */}
        <div className="relative bg-[#0f0f0f] border border-white/[0.06] rounded-3xl p-10 md:p-16 overflow-hidden mb-16">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#c5ff41]/[0.04] rounded-full blur-[80px] pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <p className="text-[#c5ff41] text-xs font-medium tracking-widest uppercase mb-3">
                — Get In Touch
              </p>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-4">
                Looking to join a
                <br />
                cross-functional team
                <br />
                <span className="text-[#c5ff41]">that ships great products.</span>
              </h2>
              <p className="text-[#555] text-base max-w-md leading-relaxed">
                Open to full-time roles, freelance projects, and interesting
                collaboration opportunities. Let&apos;s build something great
                together.
              </p>
            </div>

            <div className="flex-shrink-0">
              <a
                href="mailto:HassanTariq5544@gmail.com"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#c5ff41] text-[#080808] font-bold text-sm rounded-full hover:bg-[#d4ff6a] transition-all hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(197,255,65,0.3)] whitespace-nowrap"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Say Hello →
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-6 border-t border-white/[0.04]">
          <div className="flex items-center gap-1">
            <span className="text-white font-bold text-lg">HT</span>
            <span className="text-[#c5ff41] text-xl font-bold">.</span>
          </div>

          <a
            href="mailto:HassanTariq5544@gmail.com"
            className="text-[#555] text-sm hover:text-[#c5ff41] transition-colors"
          >
            HassanTariq5544@gmail.com
          </a>

          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-[#444] hover:text-white transition-colors"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-[#333] text-xs">
            © 2026 Hassan Tariq. Built with Next.js &amp; Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
}
