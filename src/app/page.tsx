
import Counter from "@/components/Counter";
import Link from "next/link";

type Experience = {
  period: string;
  title: string;
  role: string;
  summary: string;
  highlights: string[];
  tech: string[];
  wide?: boolean;
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
    wide: true,
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
    wide: true,
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
    wide: true,
  },
];

export default function Home() {
  return (
    <div className="p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-orbitron-sans)]">
      <main className="flex flex-col gap-8 items-start sm:items-start">
        <div className="grid grid-cols-6 grid-row-6 gap-5">
          <div className="row-span-2 row-end-3 lg:col-span-3 col-span-6 bg-black/50 backdrop-blur-sm text-white p-5 rounded-xl">
            <h1 className="lg:text-8xl text-6xl lg:mb-3 font-[900]">Naing Aung Linn</h1>
            <p className="text-xl">Senior Web Developer @ <Link href={'https://www.brycenmyanmar.com.mm/'} className="text-[#FF9F29] hover:text-amber-600" target="_blank">Brycen Myanmar</Link></p>
            <p className="text-3xl">Developer Out Of The Box</p>
          </div>
          <div className="row-span-1 lg:col-span-3 col-span-6 bg-black/50 backdrop-blur-sm text-white p-5 rounded-xl ">
            <p className="text-lg text-justify indent-8 font-mono">I&apos;m a senior web developer with over seven years of full-stack experience, specializing in PHP, JavaScript, Laravel, and React. I focus on building efficient, scalable web applications and writing maintainable code, and I enjoy learning new technologies as projects demand them. I work closely with cross-functional teams to deliver solutions that serve both business goals and the people who use them.</p>
          </div>
          <div className="row-span-1 lg:col-span-3 col-span-6 bg-black/50 backdrop-blur-sm text-white p-5 rounded-xl">
            <h1 className="text-4xl font-[900]">Career Experience <Counter to={experiences.length} duration={1} /></h1>
          </div>
          {experiences.map((exp) => (
            <div
              key={exp.period}
              className={`${exp.wide ? "lg:col-span-6" : "lg:col-span-3"} col-span-6 bg-black/50 backdrop-blur-sm text-white p-5 rounded-xl`}
            >
              <p className="font-mono text-sm text-[#FF9F29]">{exp.period}</p>
              <h2 className="font-mono text-2xl">{exp.title}</h2>
              <p className="font-mono text-sm text-white/60">{exp.role}</p>
              <p className="font-mono text-sm mt-3">{exp.summary}</p>
              {exp.highlights.length > 0 && (
                <ul className="list-disc list-start font-mono text-sm mt-3">
                  {exp.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              )}
              <p className="font-mono text-sm mt-3">
                <span className="text-white/60">Tech:</span> {exp.tech.join(" · ")}
              </p>
            </div>
          ))}
        </div>
      </main>
      <footer className="py-8 text-black row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p className="font-bold text-xs tracking-widest">© 2026 naingaunglinn. All rights reserved.</p>
      </footer>
    </div>
  );
}
