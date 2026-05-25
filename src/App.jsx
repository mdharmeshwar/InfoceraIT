import { motion, useScroll, useTransform } from "framer-motion";
import {
  Activity,
  ArrowRight,
  ChevronRight,
  CircleDot,
  Cpu,
  Mail,
  Menu,
  Phone,
  Radio,
  Send,
  ServerCog,
  Share2,
  ShieldCheck,
  Sparkles,
  Workflow,
  Zap
} from "lucide-react";
import { Reveal } from "./components/Reveal";
import { Section } from "./components/Section";
import { Button } from "./components/ui/button";
import { Card } from "./components/ui/card";
import {
  features,
  floatingSignals,
  heroChips,
  industries,
  navItems,
  process,
  services,
  stats,
  contact,
  testimonials
} from "./data/site";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }
  })
};

function AmbientScene() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 140]);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <motion.div
        style={{ y: y1 }}
        className="absolute left-[-12rem] top-[-10rem] h-[34rem] w-[34rem] rounded-full bg-cyan/20 blur-[140px]"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute right-[-14rem] top-[18rem] h-[38rem] w-[38rem] rounded-full bg-violet/18 blur-[150px]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(circle_at_top,black,transparent_72%)]" />
      <motion.div
        animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
        transition={{ duration: 22, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
        className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(115deg,transparent_0%,rgba(34,211,238,.6)_18%,transparent_36%,transparent_64%,rgba(139,92,246,.55)_82%,transparent_100%)] [background-size:220%_220%]"
      />
    </div>
  );
}

function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4 sm:px-6">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between rounded-full border border-white/10 bg-ink/60 px-5 shadow-premium backdrop-blur-2xl sm:px-7">
        <a href="#" className="group leading-none" aria-label="Infocera home">
          <span className="block font-display text-2xl font-black uppercase tracking-[0.22em] text-violet sm:text-3xl">
            Infocera
          </span>
          <span className="mt-1 block text-[10px] font-bold uppercase tracking-[0.48em] text-white/85 sm:text-xs">
            Seamless Connections
          </span>
        </a>
        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replaceAll(" ", "-")}`}
              className="group relative text-sm font-medium text-slate-300 transition hover:text-white"
            >
              {item}
              <span className="absolute -bottom-2 left-0 h-px w-0 bg-cyan transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>
        <div className="hidden items-center gap-3 sm:flex">
          <Button variant="ghost">Client Portal</Button>
          <Button>
            Start a Project <ArrowRight size={16} />
          </Button>
        </div>
        <button className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white sm:hidden" aria-label="Open menu">
          <Menu size={20} />
        </button>
      </nav>
    </header>
  );
}

function OrbitSystem() {
  const nodes = [
    { icon: Cpu, label: "AI", className: "left-1/2 top-2 -translate-x-1/2" },
    { icon: ServerCog, label: "Cloud", className: "right-4 top-1/2 -translate-y-1/2" },
    { icon: ShieldCheck, label: "SecOps", className: "bottom-4 left-1/2 -translate-x-1/2" },
    { icon: Workflow, label: "Flow", className: "left-4 top-1/2 -translate-y-1/2" }
  ];

  return (
    <div className="relative mx-auto h-72 w-72 sm:h-80 sm:w-80">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 rounded-full border border-cyan/20"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
        className="absolute inset-8 rounded-full border border-violet/20"
      />
      <div className="absolute inset-16 rounded-full border border-white/10 bg-white/[0.04] shadow-glow backdrop-blur-xl" />
      <motion.div
        animate={{ scale: [1, 1.06, 1], opacity: [0.84, 1, 0.84] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-[5.4rem] grid place-items-center rounded-full bg-gradient-to-br from-cyan via-electric to-violet text-center shadow-violet"
      >
        <div>
          <Sparkles className="mx-auto mb-2" size={26} />
          <p className="font-display text-2xl font-bold">Infocera</p>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/75">Core</p>
        </div>
      </motion.div>
      {nodes.map((node, index) => {
        const Icon = node.icon;
        return (
          <motion.div
            key={node.label}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, delay: index * 0.35 }}
            className={`absolute ${node.className} grid h-16 w-16 place-items-center rounded-[8px] border border-white/15 bg-ink/80 text-cyan shadow-premium backdrop-blur-xl`}
          >
            <Icon size={22} />
            <span className="mt-1 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-300">{node.label}</span>
          </motion.div>
        );
      })}
    </div>
  );
}

function DataRail() {
  return (
    <div className="relative mt-5 overflow-hidden rounded-[8px] border border-white/10 bg-white/[0.035] p-4">
      <div className="mb-4 flex items-center justify-between text-xs">
        <span className="font-semibold uppercase tracking-[0.18em] text-slate-400">System Health</span>
        <span className="text-cyan">Optimized</span>
      </div>
      <div className="grid h-16 grid-cols-[repeat(36,minmax(0,1fr))] items-end gap-1">
        {Array.from({ length: 36 }).map((_, index) => (
          <motion.span
            key={index}
            animate={{
              height: [
                `${20 + ((index * 9) % 42)}%`,
                `${36 + ((index * 13) % 54)}%`,
                `${20 + ((index * 9) % 42)}%`
              ]
            }}
            transition={{ duration: 2.6, repeat: Infinity, delay: index * 0.035, ease: "easeInOut" }}
            className="min-h-3 rounded-t bg-gradient-to-t from-cyan/25 to-cyan"
          />
        ))}
      </div>
    </div>
  );
}

function HeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto mt-14 w-full max-w-2xl lg:mt-0"
    >
      <div className="absolute -inset-8 rounded-full bg-aurora blur-3xl" />
      <Card className="relative overflow-hidden p-2">
        <motion.div
          animate={{ x: ["-30%", "130%"] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 h-px w-1/2 bg-gradient-to-r from-transparent via-cyan to-transparent"
        />
        <div className="relative min-h-[520px] overflow-hidden rounded-[8px] border border-white/10 bg-midnight">
          <motion.div
            animate={{ scale: [1.02, 1.08, 1.02] }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85')"
            }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_62%_42%,rgba(255,255,255,.08),transparent_28%),linear-gradient(90deg,#05070f_0%,rgba(5,7,15,.68)_38%,rgba(5,7,15,.12)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink via-ink/45 to-transparent" />
          <motion.div
            animate={{ x: ["-30%", "120%"], opacity: [0, 0.8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 h-px w-2/3 bg-gradient-to-r from-transparent via-cyan to-transparent"
          />
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-6 left-6 right-6 rounded-[8px] border border-white/12 bg-ink/70 p-5 shadow-premium backdrop-blur-xl"
          >
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan">Enterprise delivery</p>
                <p className="mt-2 font-display text-2xl font-semibold text-white">Connected digital systems</p>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center">
                {["Web", "App", "Data"].map((item) => (
                  <span key={item} className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs font-semibold text-slate-200">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </Card>
    </motion.div>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden px-5 pb-20 pt-32 sm:px-8 lg:px-10 lg:pt-40">
      <div className="absolute inset-0 bg-aurora opacity-80" />
      <div className="absolute inset-0 bg-radial-grid bg-[size:26px_26px] opacity-[0.18]" />
      <motion.div
        animate={{ opacity: [0.15, 0.38, 0.15], scale: [1, 1.08, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-28 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full border border-cyan/20"
      />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-ink to-transparent" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.02fr_.98fr]">
        <div>
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan/25 bg-cyan/10 px-4 py-2 text-sm font-semibold text-cyan">
            <CircleDot size={15} /> IT services, software, data, and digital growth
          </motion.div>
          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="max-w-5xl font-display text-5xl font-semibold leading-[1.02] text-white sm:text-7xl lg:text-8xl"
          >
            Intelligent Technology Solutions for{" "}
            <span className="bg-gradient-to-r from-cyan via-white to-violet bg-clip-text text-transparent">
              Real Business Growth
            </span>
          </motion.h1>
          <motion.p custom={2} initial="hidden" animate="visible" variants={fadeUp} className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            Infocera is a New Delhi based IT services provider delivering web development, mobile applications, software, online marketing, data visualization, consulting, and testing for startups, SMBs, government agencies, and enterprises.
          </motion.p>
          <motion.div custom={3} initial="hidden" animate="visible" variants={fadeUp} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button size="lg">
              Request Consultation <ArrowRight size={18} />
            </Button>
            <Button size="lg" variant="glow">
              Explore Services <ChevronRight size={18} />
            </Button>
          </motion.div>
          <motion.div custom={4} initial="hidden" animate="visible" variants={fadeUp} className="mt-10 flex flex-wrap gap-3">
            {heroChips.map((chip) => {
              const Icon = chip.icon;
              return (
                <span key={chip.label} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.055] px-4 py-2 text-sm text-slate-200 backdrop-blur">
                  <Icon size={16} className="text-cyan" /> {chip.label}
                </span>
              );
            })}
          </motion.div>
        </div>
        <HeroVisual />
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="px-5 py-10 sm:px-8 lg:px-10">
      <div className="mx-auto mb-6 max-w-7xl">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan">Reference-based company scale</p>
      </div>
      <div className="mx-auto grid max-w-7xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item, index) => (
          <Reveal key={item.label} delay={index * 0.05}>
            <Card className="group relative h-full overflow-hidden p-6 transition duration-500 hover:-translate-y-1 hover:border-cyan/30">
              <motion.div
                initial={{ x: "-110%" }}
                whileInView={{ x: "110%" }}
                viewport={{ once: false }}
                transition={{ duration: 2.6, delay: index * 0.16, repeat: Infinity, repeatDelay: 4 }}
                className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent"
              />
              <p className="relative font-display text-4xl font-semibold text-white">{item.value}</p>
              <p className="relative mt-3 text-sm leading-6 text-slate-400">{item.label}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function ServiceGraphic({ index }) {
  const icons = [Activity, Zap, Cpu, ShieldCheck, Workflow];
  const Icon = icons[index % icons.length];

  return (
    <div className="h-32 overflow-hidden rounded-[8px] border border-white/10 bg-ink/55 p-4">
      <div className="relative h-full">
        <motion.div
          animate={{ opacity: [0.2, 0.55, 0.2], scale: [0.9, 1.08, 0.9] }}
          transition={{ duration: 5, repeat: Infinity, delay: index * 0.18 }}
          className="absolute -left-8 -top-8 h-28 w-28 rounded-full bg-cyan/20 blur-2xl"
        />
        <motion.div
          animate={{ x: ["-12%", "72%", "-12%"] }}
          transition={{ duration: 6 + index, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 h-px w-2/3 bg-gradient-to-r from-transparent via-cyan to-transparent"
        />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 14 + index * 2, repeat: Infinity, ease: "linear" }}
          className="absolute left-4 top-4 grid h-16 w-16 place-items-center rounded-full border border-cyan/20 bg-cyan/10 text-cyan"
        >
          <Icon size={24} />
        </motion.div>
        <div className="absolute right-0 top-2 grid w-32 gap-2">
          {[0, 1, 2].map((bar) => (
            <motion.span
              key={bar}
              animate={{ width: ["45%", "100%", "55%"] }}
              transition={{ duration: 2.4, repeat: Infinity, delay: bar * 0.25 }}
              className="h-2 rounded-full bg-gradient-to-r from-cyan/80 to-violet/70"
            />
          ))}
        </div>
        <motion.span
          animate={{ scale: [1, 1.3, 1], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: index * 0.2 }}
          className="absolute bottom-2 right-5 h-3 w-3 rounded-full bg-cyan shadow-glow"
        />
      </div>
    </div>
  );
}

function Services() {
  return (
    <Section
      id="services"
      eyebrow="Services"
      title="A connected delivery engine for modern business systems."
      copy="A focused suite of digital services for companies that need polished design, reliable engineering, and measurable growth."
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <Reveal key={service.title} delay={index * 0.05} className={service.className}>
              <Card className="group relative flex h-full min-h-[350px] flex-col overflow-hidden p-7 transition duration-500 hover:-translate-y-2 hover:border-cyan/35 hover:shadow-glow">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan/10 via-transparent to-violet/10 opacity-0 transition duration-500 group-hover:opacity-100" />
                <motion.div
                  animate={{ rotate: [0, 8, 0], scale: [1, 1.08, 1] }}
                  transition={{ duration: 8, repeat: Infinity, delay: index * 0.2 }}
                  className="absolute -right-16 -top-16 h-40 w-40 rounded-full border border-cyan/10"
                />
                <div className="relative flex h-full flex-col">
                  <span className="mb-7 grid h-12 w-12 place-items-center rounded-[8px] border border-cyan/25 bg-cyan/10 text-cyan">
                    <Icon size={23} />
                  </span>
                  <h3 className="min-h-[60px] font-display text-2xl font-semibold leading-tight text-white">{service.title}</h3>
                  <p className="mt-4 min-h-[84px] leading-7 text-slate-400">{service.text}</p>
                  <div className="mt-auto pt-8">
                    <ServiceGraphic index={index} />
                  </div>
                </div>
              </Card>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

function CapabilityShowcase() {
  const labels = ["Strategy", "Design", "Build", "Launch"];

  return (
    <section className="px-5 py-10 sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl items-center gap-5 lg:grid-cols-[.8fr_1.2fr]">
        <Reveal>
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-cyan">Delivery system</p>
            <h2 className="font-display text-4xl font-semibold text-white sm:text-5xl">
              Clean process. Premium execution. Visible progress.
            </h2>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <Card className="relative overflow-hidden p-6">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,.16),transparent_28%),radial-gradient(circle_at_80%_60%,rgba(139,92,246,.16),transparent_28%)]" />
            <div className="relative grid gap-4 sm:grid-cols-4">
              {labels.map((label, index) => (
                <motion.div
                  key={label}
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, delay: index * 0.18 }}
                  className="rounded-[8px] border border-white/10 bg-white/[0.045] p-5 text-center"
                >
                  <div className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-full bg-cyan/10 text-cyan">
                    <span className="text-sm font-bold">0{index + 1}</span>
                  </div>
                  <p className="font-display text-lg font-semibold text-white">{label}</p>
                </motion.div>
              ))}
            </div>
            <motion.div
              animate={{ x: ["-20%", "115%"] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative mt-6 h-1 rounded-full bg-gradient-to-r from-transparent via-cyan to-transparent"
            />
          </Card>
        </Reveal>
      </div>
    </section>
  );
}

function Industries() {
  return (
    <Section
      id="industries"
      eyebrow="Industries"
      title="Digital systems tailored to the markets Infocera serves."
      copy="Focused digital solutions for sectors where performance, credibility, and operational clarity matter."
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {industries.map((industry, index) => {
          const Icon = industry.icon;
          return (
            <Reveal key={industry.title} delay={index * 0.04}>
              <Card className="group relative h-full overflow-hidden p-6 transition duration-300 hover:-translate-y-2 hover:border-cyan/25">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan/8 to-transparent opacity-0 transition group-hover:opacity-100" />
                <div className="relative flex items-start gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-[8px] border border-cyan/20 bg-cyan/10 text-cyan">
                    <Icon size={22} />
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-white">{industry.title}</h3>
                    <p className="mt-3 leading-7 text-slate-400">{industry.text}</p>
                  </div>
                </div>
              </Card>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

function ProductsAndTech() {
  return (
    <Section
      id="products"
      eyebrow="Products & Technology"
      title="A realistic portfolio layer for services, accelerators, and platform thinking."
      copy="Infocera’s public content references productized offerings and technology capabilities. This section makes those assets feel structured, credible, and sales-ready."
    >
      <div className="grid gap-5 lg:grid-cols-[1.15fr_.85fr]">
        <Reveal>
          <Card className="relative overflow-hidden p-6 sm:p-8">
            <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(34,211,238,.12),transparent_42%,rgba(139,92,246,.14))]" />
            <div className="relative grid gap-4 sm:grid-cols-2">
              {products.map((product, index) => (
                <motion.div
                  key={product.title}
                  whileHover={{ y: -6 }}
                  className="rounded-[8px] border border-white/10 bg-ink/55 p-5"
                >
                  <div className="mb-5 flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan">0{index + 1}</span>
                    <span className="h-2 w-2 rounded-full bg-cyan shadow-glow" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-white">{product.title}</h3>
                  <p className="mt-3 leading-7 text-slate-400">{product.text}</p>
                </motion.div>
              ))}
            </div>
          </Card>
        </Reveal>
        <Reveal delay={0.08}>
          <Card className="h-full p-6 sm:p-8">
            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.22em] text-cyan">Technology Capabilities</p>
            <div className="grid gap-3">
              {technologies.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0.72 }}
                  whileHover={{ x: 8, opacity: 1 }}
                  className="flex items-center justify-between rounded-[8px] border border-white/10 bg-white/[0.04] px-4 py-3"
                >
                  <span className="text-sm font-medium text-slate-200">{item}</span>
                  <span className="text-xs text-slate-500">0{index + 1}</span>
                </motion.div>
              ))}
            </div>
          </Card>
        </Reveal>
      </div>
    </Section>
  );
}

function About() {
  return (
    <Section id="approach" className="pt-10">
      <div className="grid items-center gap-10 lg:grid-cols-[.9fr_1.1fr]">
        <Reveal>
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-cyan">About Infocera</p>
            <h2 className="font-display text-4xl font-semibold text-white sm:text-6xl">
              A practical technology partner for organizations that need useful, reliable systems.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Infocera's public story centers on intelligent technology solutions, collaboration, integrity, and long-term partnerships. This redesign presents that positioning through a clear premium interface and a stronger enterprise buying journey.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <Card className="relative overflow-hidden p-4">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(34,211,238,.12),transparent_34%,rgba(139,92,246,.12))]" />
            <div className="relative grid gap-4 sm:grid-cols-2">
              {["Mission", "Vision", "Operating Model", "Promise"].map((label, index) => (
                <motion.div
                  key={label}
                  whileHover={{ y: -6, scale: 1.01 }}
                  className="rounded-[8px] border border-white/10 bg-white/[0.04] p-6"
                >
                  <p className="text-sm font-semibold text-cyan">0{index + 1} / {label}</p>
                  <p className="mt-4 text-lg font-medium leading-7 text-white">
                    {[
                      "Make enterprise technology feel clear, useful, and measurable.",
                      "Help growing companies become more intelligent, automated, and resilient.",
                      "Blend consulting, design, development, QA, and digital growth into one transparent rhythm.",
                      "Deliver websites, apps, software, and dashboards that keep creating value after launch."
                    ][index]}
                  </p>
                </motion.div>
              ))}
            </div>
          </Card>
        </Reveal>
      </div>
    </Section>
  );
}

function WhyChoose() {
  return (
    <Section
      id="why-infocera"
      eyebrow="Why Infocera"
      title="Built for leaders who need certainty, speed, and polish."
      copy="The best technology partners make complex work feel controlled. Infocera pairs strategic thinking with reliable delivery habits."
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <Reveal key={feature.title} delay={index * 0.04}>
              <Card className="group relative h-full overflow-hidden p-6 transition duration-300 hover:-translate-y-2 hover:border-white/20">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/70 to-transparent opacity-0 transition group-hover:opacity-100" />
                <Icon className="text-cyan" size={26} />
                <h3 className="mt-6 font-display text-xl font-semibold text-white">{feature.title}</h3>
                <p className="mt-3 leading-7 text-slate-400">{feature.text}</p>
              </Card>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

function Process() {
  return (
    <Section id="process" eyebrow="Workflow" title="A calm, transparent path from problem to platform.">
      <div className="relative grid gap-4 lg:grid-cols-4">
        <div className="absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-cyan/50 to-transparent lg:block" />
        <motion.div
          animate={{ x: ["0%", "380%"] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[2.83rem] z-10 hidden h-3 w-3 rounded-full bg-cyan shadow-glow lg:block"
        />
        {process.map((item, index) => (
          <Reveal key={item.step} delay={index * 0.07}>
            <Card className="relative h-full p-6 transition duration-300 hover:-translate-y-2 hover:border-cyan/30">
              <span className="grid h-14 w-14 place-items-center rounded-full border border-cyan/35 bg-ink text-sm font-bold text-cyan shadow-glow">
                {item.step}
              </span>
              <h3 className="mt-8 font-display text-2xl font-semibold text-white">{item.title}</h3>
              <p className="mt-4 leading-7 text-slate-400">{item.text}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function Testimonials() {
  return (
    <Section id="clients" eyebrow="Client Signal" title="Designed for the teams who carry the business forward.">
      <div className="grid gap-4 lg:grid-cols-3">
        {testimonials.map((item, index) => (
          <Reveal key={item.name} delay={index * 0.08}>
            <Card className="h-full p-7 transition duration-300 hover:-translate-y-2 hover:border-cyan/25">
              <div className="mb-8 flex gap-1 text-cyan">
                {Array.from({ length: 5 }).map((_, star) => (
                  <span key={star}>*</span>
                ))}
              </div>
              <p className="text-xl leading-8 text-white">"{item.quote}"</p>
              <div className="mt-8 border-t border-white/10 pt-5">
                <p className="font-semibold text-white">{item.name}</p>
                <p className="mt-1 text-sm text-slate-400">{item.role}</p>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function CTA() {
  return (
    <section id="contact" className="px-5 py-20 sm:px-8 lg:px-10">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[8px] border border-white/10 bg-white/[0.06] p-8 shadow-premium backdrop-blur-xl sm:p-12 lg:p-16">
        <div className="absolute inset-0 bg-aurora opacity-70" />
        <div className="absolute inset-0 bg-radial-grid bg-[size:22px_22px] opacity-10" />
        <motion.div
          animate={{ x: ["-20%", "80%", "-20%"], y: ["0%", "12%", "0%"] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-24 h-56 w-56 rounded-full border border-cyan/20 bg-cyan/10 blur-sm"
        />
        <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-cyan">Start the next system</p>
            <h2 className="max-w-3xl font-display text-4xl font-semibold text-white sm:text-6xl">
              Turn your website, app, software, or data idea into a launch-ready system.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              Speak with Infocera about a practical roadmap, clear scope, and a delivery model built around your business goals.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Button size="lg">
              Schedule Consultation <ArrowRight size={18} />
            </Button>
            <Button size="lg" variant="ghost">
              View Capabilities
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const links = ["Online Marketing", "Web Design & Development", "Mobile Application", "Software", "Creative Design", "Consultant", "Data Science", "Testing"];
  return (
    <footer className="border-t border-white/10 px-5 py-12 sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_.8fr_.8fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-white text-sm font-black text-ink">I</span>
            <span className="font-display text-xl font-semibold text-white">Infocera</span>
          </div>
          <p className="mt-5 max-w-md leading-7 text-slate-400">
            Leading IT services provider delivering innovative technology solutions that support business growth and digital transformation.
          </p>
          <div className="mt-6 flex gap-3">
            {[Share2, Send, Radio].map((Icon, index) => (
              <button key={index} className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-slate-300 transition hover:-translate-y-1 hover:text-white" aria-label="Social link">
                <Icon size={18} />
              </button>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-white">Capabilities</h3>
          <div className="mt-5 grid gap-3">
            {links.map((link) => (
              <a key={link} href="#services" className="text-sm text-slate-400 transition hover:text-white">{link}</a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-white">Contact</h3>
          <div className="mt-5 grid gap-3 text-sm text-slate-400">
            <span className="inline-flex items-center gap-2"><Mail size={16} /> {contact.email}</span>
            <span className="inline-flex items-center gap-2"><Phone size={16} /> {contact.phone}</span>
            <span>{contact.address}</span>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>(c) 2026 Infocera. All rights reserved.</p>
        <p>Privacy - Terms - Security</p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-ink text-white">
      <AmbientScene />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Stats />
        <Services />
        <CapabilityShowcase />
        <Industries />
        <About />
        <WhyChoose />
        <Process />
        <Testimonials />
        <CTA />
        <Footer />
      </div>
    </main>
  );
}
