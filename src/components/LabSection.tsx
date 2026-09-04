const projects = [
  {
    id: 1,
    title: "Remmi",
    type: "Property Management",
    description:
      "Brisbane's trusted software for hassle-free property management. Handles rentals, tenants, and maintenance workflows.",
    tags: ["NestJS", "PostgreSQL", "TypeScript"],
    accent: "#c5ff41",
    icon: "🏘️",
    status: "Live",
    link: "https://portal-upgrade.remmi.com.au/",
  },
  {
    id: 2,
    title: "FlexiWork",
    type: "On-Demand Hiring",
    description:
      "Premier on-demand hiring platform connecting businesses with vetted physical workers. Available on the Apple App Store.",
    tags: ["Flutter", "Node.js", "PostgreSQL"],
    accent: "#00e5ff",
    icon: "💼",
    status: "Live on App Store",
    link: "https://apps.apple.com/pk/app/flexiwork/id6503910755",
  },
  {
    id: 3,
    title: "EDM",
    type: "Distribution System",
    description:
      "Advanced E-Distribution System that streamlines POS operations with seamless transactions and efficient inventory management.",
    tags: ["React", "Node.js", "MongoDB"],
    accent: "#f15bb5",
    icon: "🏪",
    status: "Deployed",
    link: null,
  },
  {
    id: 4,
    title: "Property Management Software",
    type: "SaaS",
    description:
      "A powerful property management software for seamless rental and tenant management built for the AU market.",
    tags: ["Next.js", "NestJS", "PostgreSQL"],
    accent: "#9b5de5",
    icon: "🏗️",
    status: "Staging",
    link: "https://staging-proporb.vercel.app/",
  },
  {
    id: 5,
    title: "Quffah",
    type: "POS System",
    description:
      "Smart POS system designed for modern business management — fast transactions, inventory tracking, and sales reports.",
    tags: ["React", "Node.js", "Express"],
    accent: "#fee440",
    icon: "🛒",
    status: "Deployed",
    link: null,
  },
  {
    id: 6,
    title: "DueL Bet",
    type: "Gaming Platform",
    description:
      "Discord-integrated gaming platform where players compete in exciting tournaments and win exclusive rewards.",
    tags: ["Node.js", "Discord API", "WebSockets"],
    accent: "#08bdbd",
    icon: "🎮",
    status: "Live",
    link: null,
  },
];

export default function LabSection() {
  return (
    <section id="lab" className="py-28 px-6 md:px-10 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
          <div>
            <p className="text-[#c5ff41] text-xs font-medium tracking-widest uppercase mb-3">
              — The Lab
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
              All Projects
            </h2>
          </div>
          <p className="text-[#555] text-sm max-w-xs leading-relaxed">
            Real-world products shipped for clients across Australia, Pakistan,
            and the US.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="card-hover group bg-[#0f0f0f] border border-white/[0.06] rounded-2xl p-5 flex flex-col"
            >
              <div className="flex items-start justify-between mb-5">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-xl border border-white/[0.06]"
                  style={{ backgroundColor: `${project.accent}12` }}
                >
                  {project.icon}
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: project.accent }} />
                  <span className="text-[#555] text-[11px]">{project.status}</span>
                </div>
              </div>

              <div className="flex-1">
                <p className="text-[#555] text-[11px] uppercase tracking-wider mb-1">{project.type}</p>
                <h3 className="text-white font-bold text-lg mb-2">{project.title}</h3>
                <p className="text-[#555] text-sm leading-relaxed mb-4">{project.description}</p>
              </div>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] text-[#555] bg-white/[0.04] border border-white/[0.04] rounded-full px-2.5 py-0.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="pt-3 border-t border-white/[0.04] flex items-center justify-between">
                <span
                  className="text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5"
                  style={{ color: project.accent }}
                >
                  View Details →
                </span>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#444] hover:text-[#c5ff41] transition-colors text-xs"
                  >
                    Live ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
