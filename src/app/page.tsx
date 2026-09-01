
import Counter from "@/components/Counter";
import Link from "next/link";

type Experience = {
  period: string;
  title: string;
  role: string;
  summary: string;
  highlights: string[];
  tech: string[];
  featured?: boolean;
};

const experiences: Experience[] = [
  {
    period: "2018/05 – 2018/09",
    title: "Sports Journal Websites",
    role: "WordPress Developer",
    summary:
      "Two WordPress websites built for a sports journal, with custom themes developed from scratch rather than adapted from off-the-shelf templates.",
    highlights: [
      "Developed and customized both WordPress themes from scratch",
      "Implemented required plugin functionality",
      "Built contact form functionality",
      "Set up Facebook Instant Articles integration",
    ],
    tech: ["PHP", "WordPress", "HTML", "CSS", "JavaScript"],
  },
  {
    period: "2018/10 – 2020/02",
    title: "E-commerce Site Administration Platform",
    role: "Support Team Member",
    summary:
      "Support-team work on an e-commerce site-administration platform — a service where merchants run their own online stores, similar in concept to Amazon or Shopify.",
    highlights: [
      "Set up and configured new online stores on the platform",
      "Built and configured landing pages with HTML, CSS, and JavaScript",
      "Implemented Japanese address and postal-code data fetching using jQuery and AJAX",
      "Developed e-commerce pages with Symfony (PHP) and Twig templates",
      "Handled page-specific data fetching and optimized e-commerce pages",
    ],
    tech: ["PHP", "Symfony", "Twig", "jQuery", "AJAX", "HTML", "CSS", "JavaScript"],
  },
  {
    period: "2020/03 – 2020/05",
    title: "WordPress Website Customization",
    role: "WordPress Developer",
    summary:
      "A WordPress website delivered end to end — from the first wireframes and frontend design system through to the finished theme.",
    highlights: [
      "Designed the website wireframes and frontend design system from scratch",
      "Built and customized a fully custom WordPress theme",
      "Implemented required plugin functionality",
      "Set up Facebook Instant Articles integration",
    ],
    tech: ["PHP", "WordPress", "HTML", "CSS", "JavaScript"],
  },
  {
    period: "2020/06 – 2021/04",
    title: "E-commerce Site Administration Platform",
    role: "Support Team Member",
    summary:
      "A second period of support-team work on an e-commerce site-administration platform, covering the same scope as the earlier role.",
    highlights: [
      "Set up online stores and built landing pages with HTML, CSS, and JavaScript",
      "Implemented Japanese address and postal-code data fetching using jQuery and AJAX",
      "Developed and optimized e-commerce pages with Symfony (PHP) and Twig templates",
    ],
    tech: ["PHP", "Symfony", "Twig", "jQuery", "AJAX", "HTML", "CSS", "JavaScript"],
  },
  {
    period: "2021/05 – 2022/12",
    title: "Car Rental Service",
    role: "Full-Stack Developer",
    summary:
      "A vehicle rental and rent-to-own management system covering the full contract lifecycle — users take out contracts on different vehicle types, with deposits, down payments, and monthly repayment schedules. I started the project from scratch as one of its two main developers and was its largest contributor.",
    highlights: [
      "Set up the initial codebase and built the authentication system (registration, login, and password reset)",
      "Developed the contract-quotation and contract-management workflow as its primary author — quotations, credit screening, guarantors, repayment schedules, and rent-to-own signing",
      "Implemented Excel-based vehicle-data import and contributed across the vehicle, inspection, inventory, stock-taking, invoicing, delivery, and insurance modules",
      "Maintained the application's central routing and admin panel layout",
    ],
    tech: ["Laravel 8", "PHP", "MySQL", "Blade", "JavaScript", "dompdf", "Laravel Excel", "Azure Blob Storage", "Zoho CRM"],
    featured: true,
  },
  {
    period: "2023/01 – 2023/04",
    title: "WordPress Website",
    role: "WordPress Developer",
    summary:
      "Developed a WordPress website following the same approach as my earlier WordPress work — a custom theme built from scratch with the plugin functionality the site required.",
    highlights: [],
    tech: ["PHP", "WordPress", "HTML", "CSS", "JavaScript"],
  },
  {
    period: "2023/04 – 2023/10",
    title: "Car Rental Service (continued)",
    role: "Full-Stack Developer",
    summary:
      "A second development phase of the Car Rental Service, continuing work on the platform built from scratch in 2021–2022.",
    highlights: [
      "Extended the contract workflow with repayment-debt tracking and rent-to-own contract improvements",
      "Maintained and improved modules across the admin system",
    ],
    tech: ["Laravel 8", "PHP", "MySQL", "Blade", "JavaScript"],
  },
  {
    period: "2023/11 – 2024/02",
    title: "Horse Management System",
    role: "Full-Stack Developer",
    summary:
      "A Japanese racehorse-support platform built by a small team — fans subscribe to support (“push”) their favorite racehorses and earn points, while an owners-club side offers fractional horse ownership with race and expense reporting. My work centered on payments and the public-facing frontend.",
    highlights: [
      "Developed the fan service's Stripe payment layer on Laravel Cashier as its primary author — card registration, SetupIntents and PaymentIntents, monthly support subscriptions, webhook handling, and referral point rewards",
      "Built the subscription UI with Stripe Elements — the horse-push modal, card management, and payment-confirmation flows",
      "Built much of the owners-club side's web frontend as its second-largest contributor — home, about, owner, and fan pages; horse listing and detail; fractional horse-share pages; race results and reports; SSR and SEO for guest pages",
      "Implemented horse-report and horse-share API endpoints and resources in its Laravel backend",
    ],
    tech: ["Laravel 10", "PHP", "Laravel Cashier (Stripe)", "Filament", "PostgreSQL", "AWS S3", "Docker", "Next.js 13", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    featured: true,
  },
  {
    period: "2024/03 – 2024/10",
    title: "School Management System",
    role: "Full-Stack Developer",
    summary:
      "A management system for an education center — a Laravel back office (Jetstream + Livewire) for running the center, alongside a Next.js public site for courses and enrollment. I was a founding backend developer on the system.",
    highlights: [
      "Set up the Laravel project and implemented authentication, role- and permission-based access control (Spatie Permissions), and user administration",
      "Built the identity-card generation module — bilingual Myanmar–Japanese student ID cards rendered to PDF — along with graduation-certificate generation",
      "Implemented Myanmar-specific reference data — NRC list handling, Myanmar-calendar age conversion, and master-data modules later migrated from controllers to Livewire",
      "Implemented Word and PDF document export features",
      "Automated deployment with a GitHub Actions CI/CD pipeline targeting the production Ubuntu server",
      "Integrated and refactored the team's feature work on the Next.js frontend (navigation, course, and enrollment flows)",
    ],
    tech: ["Laravel", "Livewire", "Jetstream", "PHP", "MySQL", "Spatie Permissions", "GitHub Actions", "Ubuntu", "Next.js 13", "React", "TypeScript", "Tailwind CSS"],
    featured: true,
  },
];

const connections: { label: string; href: string; note?: string }[] = [
  { label: "Nightace Studio", href: "https://nightace-studio.dev/" },
  { label: "Facebook", href: "https://www.facebook.com/nightacewebstudio" },
  { label: "Instagram", href: "https://www.instagram.com/nightacestudio/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/naing-aung-linn/", note: "[ Certifications ]" },
];

export default function Home() {
  return (
    <div className="bg-paper font-sans text-ink">
      <header className="border-b-2 border-ink">
        <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-x-6 gap-y-1 px-5 py-4 font-mono text-[11px] uppercase tracking-[0.2em] sm:px-10">
          <p className="font-bold">Naing Aung Linn</p>
          <p className="hidden text-navy sm:block">[ Portfolio ]</p>
          <p className="text-ink/60">7+ Years Experience</p>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-[1440px] px-5 pb-16 pt-14 sm:px-10 sm:pb-24 sm:pt-20">
          <h1 className="font-display text-[clamp(3.25rem,12.5vw,11rem)] uppercase leading-[0.92] lg:pl-[22%]">
            <span className="hero-line block">Naing</span>
            <span className="hero-line block">Aung Linn</span>
            <span className="hero-line block text-navy">Senior Web</span>
            <span className="hero-line block text-navy">Developer</span>
          </h1>
          <div className="mt-16 grid gap-6 sm:mt-24 lg:grid-cols-12">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-navy lg:col-span-3">[ About ]</p>
            <p className="max-w-[62ch] text-[15px] leading-relaxed sm:text-base lg:col-span-7 lg:col-start-5">
              I&apos;m a senior web developer with over seven years of full-stack experience, specializing in PHP, JavaScript, Laravel, and React. I focus on building efficient, scalable web applications and writing maintainable code, and I enjoy learning new technologies as projects demand them. I work closely with cross-functional teams to deliver solutions that serve both business goals and the people who use them.
            </p>
          </div>
        </section>

        <section className="border-y-2 border-ink bg-navy text-paper">
          <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-10 sm:py-20">
            <p className="font-display text-[clamp(2.25rem,6.5vw,6rem)] uppercase leading-[0.95]">
              Developer Out Of The Box.
            </p>
            <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.2em] sm:text-xs">
              Senior Web Developer @{" "}
              <Link
                href={"https://www.brycenmyanmar.com.mm/"}
                target="_blank"
                rel="noreferrer"
                className="underline decoration-2 underline-offset-4 transition-opacity hover:opacity-60 focus-visible:outline-paper"
              >
                Brycen Myanmar ↗
              </Link>
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-[1440px] px-5 pb-24 pt-14 sm:px-10 sm:pt-20">
          <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.2em]">
            <p className="text-navy">[ Career Experience ]</p>
            <p className="text-ink/60">2018 — 2024</p>
          </div>
          <div className="mt-6 flex flex-wrap items-end justify-between gap-x-10 gap-y-4">
            <h2 className="font-display text-[clamp(2.75rem,8vw,7rem)] uppercase leading-[0.92]">
              <span className="block">Career</span>
              <span className="block">Experience</span>
            </h2>
            <p className="font-display text-[clamp(2.75rem,8vw,7rem)] leading-[0.92] text-navy">
              <Counter to={experiences.length} duration={1} />
            </p>
          </div>

          <ol className="mt-12 sm:mt-16">
            {experiences.map((exp, index) => (
              <li
                key={exp.period}
                className="group grid gap-x-8 gap-y-5 border-t-2 border-ink py-10 sm:py-12 lg:grid-cols-12"
              >
                <div className="flex flex-row-reverse items-baseline justify-between gap-4 lg:col-span-3 lg:block">
                  <p
                    className={`-ml-2 inline-block px-2 py-1 font-display text-4xl leading-none sm:text-5xl ${
                      exp.featured
                        ? "bg-navy text-paper"
                        : "text-navy transition-colors group-hover:bg-navy group-hover:text-paper"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}.
                  </p>
                  <p className="font-mono text-xs text-navy lg:mt-5">{exp.period}</p>
                </div>
                <div className="lg:col-span-9 xl:col-span-8">
                  <h3 className="font-display text-2xl uppercase leading-tight sm:text-4xl">{exp.title}</h3>
                  <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.2em] text-ink/60">{exp.role}</p>
                  <p className="mt-5 max-w-[68ch] text-[15px] leading-relaxed sm:text-base">{exp.summary}</p>
                  {exp.highlights.length > 0 && (
                    <ul className="mt-5 max-w-[68ch] space-y-2.5">
                      {exp.highlights.map((highlight) => (
                        <li key={highlight} className="flex gap-3 text-[15px] leading-relaxed sm:text-base">
                          <span aria-hidden className="font-mono text-navy">–</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  <p className="mt-6 font-mono text-xs leading-relaxed">
                    <span className="font-bold text-navy">Tech:</span> {exp.tech.join(" · ")}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="border-t-2 border-ink">
          <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-10 sm:py-24">
            <div className="grid gap-8 lg:grid-cols-12">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-navy lg:col-span-3">[ Reach Out ]</p>
              <ul className="space-y-2 lg:col-span-9 lg:col-start-5">
                {connections.map((connection) => (
                  <li key={connection.href}>
                    <Link
                      href={connection.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex flex-wrap items-baseline gap-x-4 font-display text-[clamp(2.5rem,8vw,7rem)] uppercase leading-[0.95] transition-colors hover:text-navy"
                    >
                      {connection.label}
                      {connection.note && (
                        <span className="font-mono text-[11px] tracking-[0.2em] text-navy">{connection.note}</span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t-2 border-ink">
        <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-x-6 gap-y-1 px-5 py-5 font-mono text-[11px] uppercase tracking-[0.2em] sm:px-10">
          <p>© 2026 naingaunglinn</p>
          <p>All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
