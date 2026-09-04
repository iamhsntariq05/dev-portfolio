const featured = [
  {
    id: 1,
    title: "ExactFlow — E-commerce Operations",
    subtitle: "Node.js · TypeScript · PostgreSQL",
    description:
      "E-commerce operations platform integrating 150+ commerce channels into one system for managing orders, products and related workflows, with modules for stocktaking, warehouse operations, attendance and operational management.",
    link: null,
    gradient: "from-[#c5ff41]/8 via-transparent to-transparent",
    accentColor: "#c5ff41",
    mockupColor: "bg-gradient-to-br from-[#1a1f0d] to-[#0d1108]",
    liveUrl: false,
  },
  {
    id: 2,
    title: "Remmi — Property Management",
    subtitle: "NestJS · PostgreSQL · TypeScript",
    description:
      "Property and rental platform where users can browse, rent and purchase properties while developers can publish listings, new projects and investment opportunities.",
    link: "https://portal-upgrade.remmi.com.au/",
    gradient: "from-[#00e5ff]/8 via-transparent to-transparent",
    accentColor: "#00e5ff",
    mockupColor: "bg-gradient-to-br from-[#0d1a1f] to-[#080f12]",
    liveUrl: true,
  },
  {
    id: 3,
    title: "Flexiwork — On-Demand Hiring",
    subtitle: "Flutter · Node.js · PostgreSQL",
    description:
      "Freelance marketplace connecting businesses with workers for specific shifts or short-term jobs, including job posting, applications and hiring workflows. Live on the Apple App Store.",
    link: "https://apps.apple.com/pk/app/flexiwork/id6503910755",
    gradient: "from-[#9b5de5]/8 via-transparent to-transparent",
    accentColor: "#9b5de5",
    mockupColor: "bg-gradient-to-br from-[#160d1f] to-[#0c0812]",
    liveUrl: true,
  },
  {
    id: 4,
    title: "TechBar — Business Management",
    subtitle: "React · Node.js · MongoDB",
    description:
      "Business management platform for a mobile manufacturing company, covering inventory, repairs and day-to-day operational workflows.",
    link: null,
    gradient: "from-[#fee440]/8 via-transparent to-transparent",
    accentColor: "#fee440",
    mockupColor: "bg-gradient-to-br from-[#1f1a0d] to-[#120f08]",
    liveUrl: false,
  },
  {
    id: 5,
    title: "TimeClick — Work Management",
    subtitle: "Product Development",
    description:
      "Work management platform combining time tracking, screen capture, performance monitoring, task management and sprint-based project workflows.",
    link: null,
    gradient: "from-[#f15bb5]/8 via-transparent to-transparent",
    accentColor: "#f15bb5",
    mockupColor: "bg-gradient-to-br from-[#1f0d19] to-[#12080e]",
    liveUrl: false,
  },
];
 
export default function FeaturedSection() {
  return (
    <section id="featured" className="py-28 px-6 md:px-10 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14">
          <p className="text-[#c5ff41] text-xs font-medium tracking-widest uppercase mb-3">
            — Featured Projects
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Selected Work
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {featured.map((item) => {
            const Wrapper = item.link ? "a" : "div";
            return (
            <Wrapper
              key={item.id}
              {...(item.link
                ? { href: item.link, target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="group relative bg-[#0f0f0f] border border-white/[0.06] rounded-2xl overflow-hidden hover:border-white/[0.12] transition-all duration-300"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-60 group-hover:opacity-100 transition-opacity duration-300`}
              />

              {/* Mockup preview */}
              <div className={`relative ${item.mockupColor} mx-6 mt-6 rounded-xl h-48 overflow-hidden border border-white/[0.06] flex items-center justify-center`}>
                <div className="absolute top-0 left-0 right-0 h-8 bg-[#0a0a0a]/80 border-b border-white/[0.05] flex items-center px-3 gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#ff5f5f]/60" />
                  <span className="w-2 h-2 rounded-full bg-[#ffbc42]/60" />
                  <span className="w-2 h-2 rounded-full bg-[#4cff82]/60" />
                  <div className="ml-3 flex-1 bg-white/[0.04] rounded h-4" />
                </div>
                <div className="pt-8 w-full px-4">
                  <div className="flex gap-3">
                    <div className="flex-1 space-y-2">
                      <div className="h-2.5 bg-white/[0.06] rounded-full w-3/4" />
                      <div className="h-2.5 bg-white/[0.04] rounded-full w-1/2" />
                      <div className="h-2.5 bg-white/[0.03] rounded-full w-2/3" />
                    </div>
                    <div
                      className="w-16 h-16 rounded-xl border border-white/[0.08] flex items-center justify-center"
                      style={{ boxShadow: `0 0 20px ${item.accentColor}20` }}
                    >
                      <div className="w-6 h-6 rounded-lg" style={{ backgroundColor: `${item.accentColor}30` }} />
                    </div>
                  </div>
                  <div className="mt-4 flex items-end gap-1 h-10">
                    {[40, 65, 45, 80, 60, 90, 70, 85, 55, 75, 95, 65].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t opacity-40 group-hover:opacity-60 transition-opacity"
                        style={{ height: `${h}%`, backgroundColor: item.accentColor }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative z-10 p-6">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3 className="text-white font-bold text-xl">{item.title}</h3>
                  {item.liveUrl && (
                    <span className="flex-shrink-0 flex items-center gap-1 text-[10px] text-[#555] border border-white/[0.06] rounded-full px-2 py-0.5 mt-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#4cff82]" />
                      Live
                    </span>
                  )}
                </div>
                <p className="text-xs font-medium mb-3" style={{ color: item.accentColor }}>
                  {item.subtitle}
                </p>
                <p className="text-[#555] text-sm leading-relaxed mb-4">{item.description}</p>
                {item.link && (
                  <span
                    className="inline-flex items-center gap-2 text-xs font-medium group-hover:gap-3 transition-all"
                    style={{ color: item.accentColor }}
                  >
                    VIEW PROJECT →
                  </span>
                )}
              </div>
            </Wrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
