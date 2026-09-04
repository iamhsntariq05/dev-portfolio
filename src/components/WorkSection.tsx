const works = [
  {
    id: 1,
    company: "Exact Solutions Poland LTD",
    location: "Pruszków, Poland",
    role: "Associate Software Engineer",
    period: "2025 – Present",
    description:
      "Contributing to a large-scale e-commerce and operations platform, working on backend services, integrations and business workflows across inventory, stocktaking, attendance and order-management.",
    tags: ["Node.js", "TypeScript", "PostgreSQL", "REST API", "Next.js"],
    gradient: "from-[#c5ff41]/10 to-[#00e5ff]/5",
    icon: "🏢",
  },
  {
    id: 2,
    company: "Xenex Media",
    location: "Brisbane, Australia",
    role: "Senior Backend Developer",
    period: "2023 – 2025",
    description:
      "Worked on web and mobile products involving backend development, cloud-based solutions and AI-driven technologies. Contributed to Remmi, a property platform covering listings, rentals, purchases and investments.",
    tags: ["NestJS", "Node.js", "PostgreSQL", "TypeScript", "AWS"],
    gradient: "from-[#9b5de5]/10 to-[#f15bb5]/5",
    icon: "💻",
  },
  {
    id: 3,
    company: "Synapse Solutions",
    location: "Islamabad, Pakistan",
    role: "Operation Team Lead",
    period: "2023 – 2024",
    description:
      "Worked with the team on agile IT solutions and software projects supporting business growth and digital transformation. Contributed to Flexiwork, a marketplace connecting businesses with workers.",
    tags: ["Agile", "Team Leadership", "Node.js", "Flutter"],
    gradient: "from-[#00bbf9]/10 to-[#fee440]/5",
    icon: "🚀",
  },
  {
    id: 4,
    company: "Ideal Innovative Solution",
    location: "Islamabad, Pakistan",
    role: "MERN Stack Developer",
    period: "Jan 2022 – Jun 2023",
    description:
      "Built and maintained web applications using the MERN stack. Worked on TechBar, a platform for a mobile manufacturing business covering inventory, repairs and operational workflows.",
    tags: ["React", "Node.js", "MongoDB", "Express", "Redux"],
    gradient: "from-[#00e5ff]/10 to-[#c5ff41]/5",
    icon: "⚡",
  },
];

export default function WorkSection() {
  return (
    <section id="work" className="py-28 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
          <div>
            <p className="text-[#c5ff41] text-xs font-medium tracking-widest uppercase mb-3">
              — Work Experience
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
              Where I&apos;ve
              <br />
              Been Working
            </h2>
          </div>
          <p className="text-[#555] text-sm max-w-xs leading-relaxed">
            4+ years of professional experience across Pakistan and
            Australia.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {works.map((work) => (
            <div
              key={work.id}
              className="card-hover group relative bg-[#0f0f0f] border border-white/[0.06] rounded-2xl p-6 overflow-hidden cursor-pointer"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${work.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.06] flex items-center justify-center text-lg">
                      {work.icon}
                    </div>
                    <div>
                      <p className="text-[#555] text-[11px] uppercase tracking-wider">
                        {work.location}
                      </p>
                      <p className="text-white text-sm font-medium">{work.company}</p>
                    </div>
                  </div>
                  <span className="text-[#444] text-[11px] whitespace-nowrap">{work.period}</span>
                </div>

                <h3 className="text-white font-bold text-lg mb-3 leading-snug">
                  {work.role}
                </h3>

                <p className="text-[#555] text-sm leading-relaxed mb-5">
                  {work.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {work.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] text-[#666] bg-white/[0.04] border border-white/[0.05] rounded-full px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
