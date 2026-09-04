"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const roles = ["Full Stack Developer", "Backend Systems Engineer", "API Architect"];

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => setCharIndex((i) => i + 1), 60);
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex((i) => i - 1), 30);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }

    setDisplayed(current.slice(0, charIndex));
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Ambient glow blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] right-[15%] w-[600px] h-[600px] bg-[#c5ff41]/[0.04] rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute top-[40%] right-[30%] w-[400px] h-[400px] bg-[#00e5ff]/[0.03] rounded-full blur-[100px]" />
        <div className="absolute bottom-[10%] left-[5%] w-[300px] h-[300px] bg-[#c5ff41]/[0.03] rounded-full blur-[80px]" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.015]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text content */}
          <div className="order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#c5ff41]/10 border border-[#c5ff41]/20 rounded-full px-4 py-1.5 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c5ff41]" />
              <span className="text-[#c5ff41] text-xs font-medium tracking-wide uppercase">
                Available for new opportunities
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-[clamp(2.8rem,6vw,5.5rem)] font-extrabold leading-[1.05] tracking-tight text-white mb-4">
              Hello! I Am
              <br />
              <span className="text-[#c5ff41]">Hassan</span>
              <br />
              Tariq
            </h1>

            {/* Typewriter role */}
            <div className="mb-4 h-8 flex items-center">
              <span className="text-[#888] text-lg font-medium">
                {displayed}
                <span className="inline-block w-0.5 h-5 bg-[#c5ff41] ml-0.5 animate-pulse align-middle" />
              </span>
            </div>

            {/* Tagline */}
            <p className="text-[#555] text-sm max-w-sm mb-10 leading-relaxed italic">
              Full Stack Developer building reliable web applications, APIs,
              and business workflows for real-world products.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 mb-14">
              <a
                href="#lab"
                className="px-7 py-3 bg-[#c5ff41] text-[#080808] font-semibold text-sm rounded-full hover:bg-[#d4ff6a] transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(197,255,65,0.25)]"
              >
                My Portfolio →
              </a>
              <a
                href="#contact"
                className="px-7 py-3 border border-white/10 text-[#999] text-sm rounded-full hover:border-white/20 hover:text-white hover:bg-white/[0.04] transition-all"
              >
                Contact Me
              </a>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8">
              {[
                { value: "4+", label: "Years Exp." },
                { value: "5+", label: "Projects" },
                { value: "4", label: "Companies" },
              ].map((stat, i) => (
                <div key={i} className="flex items-center gap-6">
                  {i > 0 && <div className="w-px h-8 bg-white/[0.08]" />}
                  <div>
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-[#555] text-xs mt-0.5">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Profile visual */}
          <div className="order-1 lg:order-2 relative flex justify-center items-center min-h-[380px] sm:min-h-[480px] px-4">
            {/* Outer rotating ring */}
            <div className="absolute w-[280px] h-[280px] sm:w-[420px] sm:h-[420px] rounded-full border border-dashed border-[#c5ff41]/10 animate-spin-slow" />

            {/* Glow layers */}
            <div className="absolute w-[240px] h-[240px] sm:w-[360px] sm:h-[360px] rounded-full bg-[#c5ff41]/[0.07] blur-[60px] animate-pulse-glow" />
            <div className="absolute w-[180px] h-[180px] sm:w-[280px] sm:h-[280px] rounded-full bg-[#00e5ff]/[0.05] blur-[50px]" />

            {/* Profile card */}
            <div className="relative z-10 w-full max-w-[500px] h-auto py-8 sm:h-[400px] sm:py-0 rounded-[24px] overflow-hidden border border-white/[0.08] bg-gradient-to-br from-[#141414] to-[#0a0a0a] flex flex-col items-center justify-center animate-float shadow-[0_32px_64px_rgba(0,0,0,0.5)]">
              <div className="w-43 h-42 rounded-full overflow-hidden border-2 border-[#c5ff41]/30 mb-5 shadow-[0_0_30px_rgba(197,255,65,0.15)]">
                <Image
                  src="/hassan-tariq.png"
                  alt="Hassan Tariq"
                  width={132}
                  height={132}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <h2 className="text-white font-bold text-lg mb-1">Hassan Tariq</h2>
              <p className="text-[#666] text-sm mb-6">Full Stack Developer</p>
              <div className="flex flex-wrap gap-2 justify-center px-6">
                {["Node.js", "Next.js", "TypeScript", "APIs"].map((t) => (
                  <span
                    key={t}
                    className="text-[10px] text-[#888] bg-white/[0.05] border border-white/[0.06] rounded-full px-2.5 py-1"
                  >
                    {t}
                  </span>
                ))}
              </div>
               <div className="absolute z-20 bottom-5 right-6 bg-[#0f0f0f] border border-white/[0.08] rounded-xl px-3 py-1 text-xs">
              <div className="text-[#c5ff41] font-semibold">🇵🇰 Pakistan</div>
            </div>
            </div>

            {/* Floating badges */}
            {/* <div className="absolute z-20 top-8 left-8 bg-[#0f0f0f] border border-white/[0.08] rounded-xl px-3 py-2 text-xs">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c5ff41]" />
                <span className="text-[#888]">Exact Solutions, Islamabad</span>
              </div>
            </div> */}
            {/* <div className="absolute z-20 bottom-12 right-6 bg-[#0f0f0f] border border-white/[0.08] rounded-xl px-3 py-1 text-xs">
              <div className="text-[#c5ff41] font-semibold">🇵🇰 Pakistan</div>
            </div> */}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#444]">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-[#444] to-transparent" />
      </div>
    </section>
  );
}
