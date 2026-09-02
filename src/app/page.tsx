
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

const mmlExperiences: Experience[] = [
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

const brycenExperiences: Experience[] = [
  {
    period: "2024/11 – 2025/03",
    title: "Product Management System",
    role: "Backend Developer",
    summary:
      "A product management system whose main focus is processing product data through batch processing and scheduled jobs. My work centered on the data pipeline — developing the batch processes, optimizing the MySQL queries behind them, and validating and testing their output.",
    highlights: [
      "Developed batch processes for handling product data on Laravel 11, including scheduled batches that automate recurring data-processing tasks",
      "Wrote and optimized MySQL queries to retrieve product data efficiently",
      "Processed and validated the data produced by the batch runs",
      "Created Excel-based test cases from the processed data and performed testing against them",
    ],
    tech: ["Laravel 11", "PHP", "MySQL", "Redis", "MinIO", "MySQL Workbench", "Excel"],
  },
  {
    period: "2025/04 – 2025/06",
    title: "HR Management System",
    role: "Full-Stack Developer",
    summary:
      "A multi-tenant HR management system — a Laravel REST API backend serving a React admin frontend, covering employee, attendance, leave, allowance, and payroll workflows. I worked on both sides, from dashboard data aggregation and salary-calculation logic to the React screens that consume the API.",
    highlights: [
      "Developed pending-request dashboard cards end to end — repository queries aggregating pending allowance and exchange-date requests in Laravel, and the React card UI wired to them, including tenant-specific dashboard variants",
      "Fixed salary-calculation logic so allowances are included in salary reports and payslips, and salaries are not calculated for employees with no assigned shift",
      "Improved the performance of employee leave and late/early Excel exports by reworking the spreadsheet-generation loop and its per-row styling",
      "Reworked the employee allowance registration UI — moved the effective-date form into the registration form and fixed effective-date handling for one-time allowances",
      "Extended the plan-register screen to add multiple employees at once through an employee-list modal",
    ],
    tech: ["Laravel 7", "PHP", "MySQL", "React", "CoreUI", "Material-UI", "axios", "Laravel Excel", "PhpSpreadsheet"],
  },
  {
    period: "2025/06 – 2025/08",
    title: "Accounting Workflow System",
    role: "Full-Stack Developer",
    summary:
      "An accounting and budget-management system for a chemical-industry business, centered on multi-step approval workflows. My work focused on the workflow module — its screens, approval logic, and data tooling — along with permission handling and test design.",
    highlights: [
      "Developed core workflow features — workflow detail screens with edit and delete, approval and redirect logic, email notifications, file downloads, and search by user layer",
      "Implemented copy-and-paste features for labor-cost details and workflow files, including the copy form design and popup flow, and reduced loading times",
      "Built Excel-to-JSON data extraction and fixed permission and security issues, including role- and permission-based redirects across all pages",
      "Hardened the module through validation and bug fixing — required-field validation, duplicate name and email handling, and approver error handling — and designed Excel-based test cases for the workflow list and search",
    ],
    tech: ["MySQL", "Excel"],
  },
  {
    period: "2025/09 – Present",
    title: "Used-Vehicle Trading Platform",
    role: "Full-Stack Developer",
    summary:
      "A used-vehicle trading and recycling platform — a Ruby on Rails back office serving multiple Next.js frontends — covering auctions, inventory, parts, container exports, and insurance workflows. My work spans the Rails admin, the Next.js apps, and the platform's admin documentation.",
    highlights: [
      "Developed the admin insurance-case module as one of its two main developers — vehicle assessment and disposal requests tracked from request through assessment, pickup, and settlement — creating its initial data model, admin screens, and notification mailers",
      "Implemented WebAuthn biometric login and registration alongside password-reset flows for insurance users, spanning the Rails backend and two of the Next.js frontends",
      "Built monthly inventory-management features — CSV and Excel report builders delivered through an asynchronous download center, overseas inventory snapshots, shared-stock exclusion, and parts-division release holds",
      "Created the vehicle inventory photo management module and extended demolition-report, parts-info, and container-invoice screens with new filters, columns, and outputs",
      "Wrote a large set of the platform's admin user manuals — inventory, invoicing, transport, and parts workflows — served through authenticated routes",
      "Backed feature work with RSpec request and model specs",
    ],
    tech: ["Ruby on Rails 6", "Ruby", "PostgreSQL", "Slim", "RSpec", "WebAuthn", "AWS S3", "Docker", "Next.js 14", "React", "TypeScript"],
    featured: true,
  },
];

const experienceGroups: { company: string; span: string; entries: Experience[] }[] = [
  { company: "Brycen Myanmar", span: "2024 — Present", entries: [...brycenExperiences].reverse() },
  { company: "MML Web Development Company", span: "2018 — 2024", entries: [...mmlExperiences].reverse() },
];

const totalEngagements = experienceGroups.reduce((total, group) => total + group.entries.length, 0);

const certifications: { title: string; issuer: string; issued: string }[] = [
  { title: "Database Design and Basic SQL in PostgreSQL", issuer: "University of Michigan", issued: "Aug 2026" },
  { title: "Generative AI with Large Language Models", issuer: "DeepLearning.AI", issued: "Aug 2026" },
  { title: "Claude 101", issuer: "Anthropic", issued: "Mar 2026" },
  { title: "Claude Code in Action", issuer: "Anthropic", issued: "Mar 2026" },
  { title: "Learn Ruby on Rails Course", issuer: "Codecademy", issued: "Aug 2025" },
  { title: "Learn Ruby Course", issuer: "Codecademy", issued: "Aug 2025" },
  { title: "AWS Educate Introduction to Generative AI", issuer: "Amazon Web Services", issued: "Jul 2025" },
  { title: "JavaScript Algorithms and Data Structures", issuer: "freeCodeCamp", issued: "Dec 2023" },
  { title: "AI For Everyone", issuer: "DeepLearning.AI", issued: "May 2020" },
];

const connections: { label: string; value: string; href: string; note?: string }[] = [
  { label: "Website", value: "nightace-studio.dev", href: "https://nightace-studio.dev/" },
  { label: "Facebook", value: "@nightacewebstudio", href: "https://www.facebook.com/nightacewebstudio" },
  { label: "Instagram", value: "@nightacestudio", href: "https://www.instagram.com/nightacestudio/" },
  { label: "LinkedIn", value: "naing-aung-linn", href: "https://www.linkedin.com/in/naing-aung-linn/", note: "Certifications" },
];

function ArrowUpRight({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path d="M6 18 18 6M8.5 6H18v9.5" stroke="currentColor" strokeWidth="2.25" strokeLinecap="square" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="mx-auto max-w-[1520px] px-3 pb-8 font-sans sm:px-6">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-navy focus:px-4 focus:py-3 focus:text-[11px] focus:font-semibold focus:uppercase focus:tracking-[0.25em] focus:text-paper"
      >
        Skip to content
      </a>

      <header className="flex flex-wrap items-center justify-between gap-x-6 gap-y-1 px-2 py-5 text-[10px] font-semibold uppercase tracking-[0.3em] sm:px-4">
        <p>Naing Aung Linn</p>
        <p className="text-ink/60">Portfolio</p>
      </header>

      <main id="content" className="space-y-4 sm:space-y-6">
        <section className="bg-navy p-4 sm:p-8 lg:p-12">
          <div className="bg-paper px-5 py-12 sm:px-10 sm:py-16 lg:py-20">
            <div className="mx-auto max-w-5xl text-center">
              <p className="hero-line text-[10px] font-semibold uppercase tracking-[0.35em] text-navy sm:text-[11px]">
                Senior Web Developer
              </p>
              <h1 className="hero-line mt-6 font-display text-[clamp(3.5rem,11vw,10rem)] uppercase leading-[0.9] tracking-[0.02em] text-balance">
                Naing Aung Linn
              </h1>
              <p className="hero-line mt-6 text-[10px] font-semibold uppercase tracking-[0.3em] text-ink/70 sm:text-[11px]">
                @{" "}
                <Link
                  href={"https://www.brycenmyanmar.com.mm/"}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-baseline gap-1.5 text-navy underline decoration-2 underline-offset-4 transition-colors hover:text-ink"
                >
                  Brycen Myanmar
                  <ArrowUpRight className="h-2.5 w-2.5 self-center" />
                </Link>
              </p>
            </div>
            <div className="hero-line mx-auto mt-12 grid max-w-5xl gap-10 border-t-2 border-ink pt-10 sm:mt-16 sm:pt-12 lg:grid-cols-12 lg:gap-8">
              <h2 className="font-display text-[clamp(2.75rem,6.5vw,6rem)] uppercase leading-[0.88] lg:col-span-7">
                <span className="block">Developer</span>
                <span className="block">Out Of</span>
                <span className="block text-navy">The Box.</span>
              </h2>
              <div className="lg:col-span-5 lg:col-start-8 lg:pt-2">
                <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-navy">About</p>
                <p className="mt-5 max-w-[52ch] text-sm leading-[1.9] text-pretty sm:text-[15px]">
                  I&apos;m a senior web developer with over seven years of full-stack experience, specializing in PHP, JavaScript, Laravel, and React. I focus on building efficient, scalable web applications and writing maintainable code, and I enjoy learning new technologies as projects demand them. I work closely with cross-functional teams to deliver solutions that serve both business goals and the people who use them.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-2 border-ink bg-paper p-6 sm:p-10 lg:p-14">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
            <header className="lg:col-span-4">
              <div className="lg:sticky lg:top-8">
                <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-navy">2018 — Present</p>
                <h2 className="mt-4 font-display text-[clamp(3rem,6.5vw,6.5rem)] uppercase leading-[0.88]">
                  <span className="block">Career</span>
                  <span className="block">Experience</span>
                </h2>
                <p className="mt-8 font-display text-6xl leading-none text-navy tabular-nums sm:text-7xl">
                  <Counter to={totalEngagements} duration={1} />
                </p>
                <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-ink/60">Engagements</p>
                <ArrowUpRight className="mt-10 hidden h-16 w-16 text-navy lg:block" />
              </div>
            </header>
            <div className="space-y-14 lg:col-span-8 sm:space-y-16">
              {experienceGroups.map((group, groupIndex) => {
                const offset = experienceGroups
                  .slice(0, groupIndex)
                  .reduce((total, prev) => total + prev.entries.length, 0);
                return (
                  <div key={group.company}>
                    <div className="flex items-baseline gap-3 sm:gap-5">
                      <h3 className="min-w-0 bg-navy px-3 py-1.5 font-display text-2xl uppercase leading-none text-paper sm:text-3xl">
                        {group.company}
                      </h3>
                      <span aria-hidden className="hidden flex-1 border-b-2 border-ink sm:block" />
                      <p className="shrink-0 text-[10px] font-semibold uppercase tracking-[0.25em] text-navy">{group.span}</p>
                    </div>
                    <ol className="mt-10 space-y-12 sm:mt-12 sm:space-y-14">
                      {group.entries.map((exp, index) => (
                        <li key={exp.period}>
                          <div className="flex items-baseline gap-3 sm:gap-5">
                            <h4 className="min-w-0 font-display text-3xl uppercase leading-[0.95] sm:text-4xl">{exp.title}</h4>
                            <span aria-hidden className="hidden flex-1 border-b-2 border-ink sm:block" />
                            <span
                              className={`font-display text-3xl leading-none sm:text-4xl ${
                                exp.featured ? "bg-navy px-2 py-1 text-paper" : "text-navy"
                              }`}
                            >
                              {String(totalEngagements - (offset + index)).padStart(2, "0")}.
                            </span>
                          </div>
                          <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.25em]">
                            <span className="text-navy">{exp.period}</span>
                            <span className="text-ink/60"> · {exp.role}</span>
                          </p>
                          <p className="mt-4 max-w-[70ch] text-sm leading-[1.85] text-pretty sm:text-[15px]">{exp.summary}</p>
                          {exp.highlights.length > 0 && (
                            <ul className="mt-4 max-w-[70ch] space-y-2.5">
                              {exp.highlights.map((highlight) => (
                                <li key={highlight} className="flex gap-3 text-sm leading-[1.85] sm:text-[15px]">
                                  <span aria-hidden className="mt-[0.8em] h-0.5 w-4 shrink-0 bg-navy" />
                                  <span>{highlight}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                          <p className="mt-5 text-xs font-medium leading-relaxed tracking-wide text-ink/70">
                            <span className="font-semibold uppercase tracking-[0.25em] text-navy">Tech:</span>{" "}
                            {exp.tech.join(" · ")}
                          </p>
                        </li>
                      ))}
                    </ol>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="border-2 border-ink bg-paper p-6 sm:p-10 lg:p-14">
          <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-navy">Licenses &amp; Certifications</p>
          <h2 className="mt-4 font-display text-[clamp(3rem,7vw,7rem)] uppercase leading-[0.9]">Certifications</h2>
          <ul className="mt-10 border-t-2 border-ink sm:mt-12">
            {certifications.map((certification) => (
              <li
                key={certification.title}
                className="grid gap-x-6 gap-y-1.5 border-b-2 border-ink py-5 sm:grid-cols-12 sm:items-baseline sm:py-6"
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-navy sm:col-span-2">
                  {certification.issued}
                </p>
                <h3 className="font-display text-2xl uppercase leading-[0.95] sm:col-span-7 sm:text-3xl">
                  {certification.title}
                </h3>
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-ink/60 sm:col-span-3 sm:text-right">
                  {certification.issuer}
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-[10px] font-semibold uppercase tracking-[0.3em]">
            <Link
              href={"https://www.linkedin.com/in/naing-aung-linn/"}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-baseline gap-1.5 text-navy underline decoration-2 underline-offset-4 transition-colors hover:text-ink"
            >
              Full credentials on LinkedIn
              <ArrowUpRight className="h-2.5 w-2.5 self-center" />
            </Link>
          </p>
        </section>

        <section className="bg-navy p-6 text-paper sm:p-10 lg:p-14">
          <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-paper/70">Reach Out</p>
          <h2 className="mt-4 font-display text-[clamp(3.5rem,10vw,9rem)] uppercase leading-[0.9] text-balance">
            Get In Touch
          </h2>
          <ul className="mt-10 border-t-2 border-paper/25 sm:mt-14">
            {connections.map((connection) => (
              <li key={connection.href} className="border-b-2 border-paper/25">
                <Link
                  href={connection.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group -mx-2 flex items-center justify-between gap-4 px-2 py-5 transition-colors hover:bg-paper/10 focus-visible:outline-paper sm:py-6"
                >
                  <span className="w-24 shrink-0 text-[10px] font-semibold uppercase tracking-[0.3em] text-paper/70 sm:w-40">
                    {connection.label}
                  </span>
                  <span className="flex min-w-0 flex-1 flex-wrap items-center justify-end gap-x-3 gap-y-1 text-right">
                    {connection.note && (
                      <span className="border border-paper/40 px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.25em] text-paper/80">
                        {connection.note}
                      </span>
                    )}
                    <span className="break-words text-sm font-semibold uppercase tracking-[0.15em] sm:text-base">
                      {connection.value}
                    </span>
                  </span>
                  <ArrowUpRight className="h-5 w-5 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 sm:h-6 sm:w-6" />
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="flex flex-wrap items-center justify-between gap-x-6 gap-y-1 px-2 py-6 text-[10px] font-semibold uppercase tracking-[0.3em] text-ink/70 sm:px-4">
        <p>© 2026 naingaunglinn</p>
        <p>All rights reserved.</p>
      </footer>
    </div>
  );
}
