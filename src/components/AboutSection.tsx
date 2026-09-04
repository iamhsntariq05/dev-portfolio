const skills = [
  { name: "Full-Stack Development", value: 90 },
  { name: "Node.js / Backend Systems", value: 90 },
  { name: "API Design & Integration", value: 85 },
  { name: "MERN Stack", value: 85 },
  { name: "Next.js", value: 80 },
  { name: "Data Modeling & Databases", value: 80 },
];

const education = [
  {
    title: "Bachelor of Computer Science",
    place: "COMSATS University, Pakistan",
    date: "Feb 2018 – Feb 2022",
  },
];

const services = [
  {
    icon: "🌐",
    title: "Full-Stack Development",
    description:
      "Builds web applications end-to-end, turning business requirements into practical, reliable software across the stack.",
  },
  {
    icon: "🛠️",
    title: "Backend Systems & APIs",
    description:
      "Designs and integrates robust backend services and APIs to power business workflows and third-party integrations.",
  },
  {
    icon: "🗄️",
    title: "Data Modeling & Databases",
    description:
      "Structures and manages data models and databases that scale with real-world product and business requirements.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-28 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-[#c5ff41] text-xs font-medium tracking-widest uppercase mb-3">
            — About Me
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            A bit about
            <br />
            who I am
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Bio + Education */}
          <div>
            <div className="space-y-4 text-[#666] leading-relaxed mb-12">
              <p>
                I&apos;m{" "}
                <span className="text-white font-medium">Hassan Tariq</span>, a
                Full Stack Developer currently working as an{" "}
                <span className="text-[#c5ff41]">Associate Software Engineer</span>{" "}
                at Exact Solutions Poland LTD in Poland. I&apos;m comfortable
                working across the stack, turning business requirements into
                practical software, and building reliable features for
                real-world products.
              </p>
              <p>
                With 4+ years of hands-on experience across the MERN stack,
                NestJS, and Next.js, I&apos;ve worked with companies in
                Pakistan and Australia — delivering everything from
                e-commerce operations platforms to property management
                systems and on-demand hiring platforms.
              </p>
              <p>
                I graduated from COMSATS University, Pakistan with a Bachelor
                of Computer Science.
              </p>
            </div>

            {/* Education */}
            <div className="mb-10">
              <p className="text-[#444] text-xs font-medium tracking-widest uppercase mb-4">
                Education
              </p>
              <div className="space-y-1">
                {education.map((item, i) => (
                  <div key={i} className="relative flex gap-4 pb-6 last:pb-0">
                    {i < education.length - 1 && (
                      <div className="absolute left-[5px] top-2 w-px h-full bg-white/[0.06]" />
                    )}
                    <div className="w-[11px] h-[11px] rounded-full border-2 border-[#c5ff41] bg-[#080808] flex-shrink-0 mt-1" />
                    <div>
                      <div className="text-white font-semibold text-sm mb-0.5">{item.title}</div>
                      <div className="text-[#c5ff41] text-xs mb-1">{item.place}</div>
                      <div className="text-[#444] text-xs">{item.date}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <p className="text-[#444] text-xs font-medium tracking-widest uppercase mb-4">
                Services
              </p>
              <div className="space-y-3">
                {services.map((s) => (
                  <div
                    key={s.title}
                    className="flex gap-4 p-4 bg-[#0f0f0f] border border-white/[0.05] rounded-xl hover:border-white/[0.1] transition-colors"
                  >
                    <span className="text-xl flex-shrink-0">{s.icon}</span>
                    <div>
                      <p className="text-white text-sm font-semibold mb-1">{s.title}</p>
                      <p className="text-[#555] text-xs leading-relaxed">{s.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Skills */}
          <div>
            <p className="text-[#444] text-xs font-medium tracking-widest uppercase mb-6">
              Technical Skills
            </p>

            <div className="space-y-4 mb-10">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1.5">
                    <span className="text-[#888] text-sm">{skill.name}</span>
                    <span className="text-[#c5ff41] text-xs font-medium">{skill.value}%</span>
                  </div>
                  <div className="h-1.5 bg-white/[0.05] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#c5ff41] to-[#80ffdb] rounded-full"
                      style={{ width: `${skill.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Phone */}
            <div className="p-5 bg-[#0f0f0f] border border-white/[0.06] rounded-2xl">
              <p className="text-[#c5ff41] text-xs font-medium tracking-wider uppercase mb-4">
                Get in touch
              </p>
              <div className="space-y-3">
                <a
                  href="mailto:hassantariq5544@gmail.com"
                  className="flex items-center gap-3 text-[#666] text-sm hover:text-white transition-colors"
                >
                  <span className="text-base">✉️</span>
                  hassantariq5544@gmail.com
                </a>
                <a
                  href="tel:+923177892469"
                  className="flex items-center gap-3 text-[#666] text-sm hover:text-white transition-colors"
                >
                  <span className="text-base">📞</span>
                  +92317-7892469
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
