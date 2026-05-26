"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ThemeToggle } from "@/components/ThemeToggle";

const sections = ["work", "projects", "writing", "contact"];

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -55% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen font-mono" style={{ backgroundColor: "var(--background)", color: "var(--text)" }}>
      <nav className="fixed top-0 left-0 right-0 border-b z-50" style={{ backgroundColor: "var(--nav-bg)", borderColor: "var(--border)" }}>
        <div className="max-w-[80ch] mx-auto px-8 h-14 flex items-center justify-between">
          <a href="#" className="text-lg font-medium">ke.</a>
          <div className="flex gap-6 text-sm nav-links-desktop">
            {sections.map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className="transition-colors h-11 flex items-center"
                style={{ color: activeSection === section ? "var(--accent)" : "inherit" }}
              >
                {section}
              </a>
            ))}
          </div>
          <ThemeToggle />
        </div>
      </nav>

      <nav className="fixed bottom-0 left-0 right-0 border-t z-50 mobile-nav" style={{ backgroundColor: "var(--nav-bg)", borderColor: "var(--border)" }}>
        <div className="flex justify-around items-center h-16">
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className="flex flex-col items-center justify-center flex-1 h-full min-w-[60px] min-h-[60px] transition-colors text-xs"
              style={{ color: activeSection === section ? "var(--accent)" : "var(--muted)" }}
            >
              <span>{section}</span>
            </a>
          ))}
        </div>
      </nav>

      <main className="max-w-[80ch] mx-auto px-8 pt-20 pb-20 main-mobile-pb">
        <header className="pb-8 mb-8" style={{ borderBottom: "1px solid var(--border)" }}>
          <div className="flex items-start gap-8 header-flex">
            <div className="flex-1">
              <h1 className="text-5xl font-medium leading-tight mb-2">
                Kenneth
                <br />
                <em className="font-normal" style={{ color: "var(--accent)" }}>Ekandem.</em>
              </h1>
              <p className="text-sm mb-6" style={{ color: "var(--muted)" }}>
                Software Engineer · Lagos, Nigeria
              </p>
              <p className="max-w-[520px] leading-relaxed">
                Building reliable systems for the web. Currently founding Rivet — trust infrastructure for Nigeria&apos;s service economy. Previously scaled a $35M platform at SMCDAO.
              </p>
            </div>
            <div className="flex-shrink-0 w-32 h-32 rounded-full overflow-hidden" style={{ border: "2px solid var(--border)" }}>
              <Image
                src="https://pub-f036ac7395dc44b3a3817480654264f1.r2.dev/kenneth/Screenshot%202026-05-25%20at%2018.27.36.png"
                alt="Kenneth Ekandem"
                width={128}
                height={128}
                className="w-full h-full object-cover object-top"
                priority
              />
            </div>
          </div>
        </header>

        <section id="work" className="mb-10 scroll-mt-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[11px] uppercase tracking-widest" style={{ color: "var(--muted)" }}>
              Work
            </span>
            <div className="flex-1 h-px" style={{ backgroundColor: "var(--border)" }} />
          </div>

          <div className="space-y-8">
            <div>
              <div className="flex justify-between items-start mb-1">
                <a
                  href="https://userivet.ng"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium hover:underline"
                  style={{ color: "var(--accent)" }}
                >
                  Rivet ↗
                </a>
                <span className="text-sm" style={{ color: "var(--muted)" }}>2024 — present</span>
              </div>
              <p className="text-sm mb-3" style={{ color: "var(--muted)" }}>Founder & Engineer</p>
              <ul className="space-y-2" style={{ color: "#555" }}>
                <li className="pl-4" style={{ borderLeft: "1px solid var(--border)" }}>Building trust infrastructure for Nigeria&apos;s service economy — a marketplace connecting verified service providers with customers across Nigeria</li>
                <li className="pl-4" style={{ borderLeft: "1px solid var(--border)" }}>Designed and own the full stack: Elixir/OTP backend (order lifecycle, push notifications), NextJS API, React Native mobile app</li>
                <li className="pl-4" style={{ borderLeft: "1px solid var(--border)" }}>Integrated Paystack for SP wallet top-ups and commission splits, NIN verification, etc.</li>
                <li className="pl-4" style={{ borderLeft: "1px solid var(--border)" }}>Self-hosted production infrastructure on Hetzner with Coolify; CI/CD via GitHub App integration across a Turborepo monorepo</li>
                <li className="pl-4" style={{ borderLeft: "1px solid var(--border)" }}>Six launch service categories: cleaning, electrical, plumbing, dispatch, maintenance, waste disposal</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start mb-1">
                <a
                  href="https://smcdao.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium hover:underline"
                  style={{ color: "var(--accent)" }}
                >
                  SMCDAO ↗
                </a>
                <span className="text-sm" style={{ color: "var(--muted)" }}>2023 — 2025</span>
              </div>
              <p className="text-sm mb-3" style={{ color: "var(--muted)" }}>Software Engineer</p>
              <ul className="space-y-2" style={{ color: "#555" }}>
                <li className="pl-4" style={{ borderLeft: "1px solid var(--border)" }}>Joined as a senior engineer and owned the entire backend and community infrastructure</li>
                <li className="pl-4" style={{ borderLeft: "1px solid var(--border)" }}>Built and launched v1 of the mobile app — the primary interface for 40,000+ users and 5,000+ DAU</li>
                <li className="pl-4" style={{ borderLeft: "1px solid var(--border)" }}>Designed and shipped a real-time chat service powering community communications, built on Phoenix Channels and OTP</li>
                <li className="pl-4" style={{ borderLeft: "1px solid var(--border)" }}>Built an internal payroll system for the team</li>
                <li className="pl-4" style={{ borderLeft: "1px solid var(--border)" }}>Architected the distributed backend: Auth, API, Socket, and Indexer microservices on Docker with auto-scaling</li>
                <li className="pl-4" style={{ borderLeft: "1px solid var(--border)" }}>The platform raised $35M in funds on the strength of the infrastructure and product</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start mb-1">
                <span className="font-medium">Afara Partners</span>
                <span className="text-sm" style={{ color: "var(--muted)" }}>2022 — 2023</span>
              </div>
              <p className="text-sm mb-3" style={{ color: "var(--muted)" }}>Backend Engineer</p>
              <ul className="space-y-2" style={{ color: "#555" }}>
                <li className="pl-4" style={{ borderLeft: "1px solid var(--border)" }}>First experience in a structured corporate engineering environment — production finance systems, real compliance constraints, team workflows</li>
                <li className="pl-4" style={{ borderLeft: "1px solid var(--border)" }}>Contributed features across live financial products serving real customers, building fluency in code review culture and production discipline</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start mb-1">
                <span className="font-medium">Codekago Interactive</span>
                <span className="text-sm" style={{ color: "var(--muted)" }}>2019 — 2022</span>
              </div>
              <p className="text-sm mb-3" style={{ color: "var(--muted)" }}>Intern → Lead Engineer</p>
              <ul className="space-y-2" style={{ color: "#555" }}>
                <li className="pl-4" style={{ borderLeft: "1px solid var(--border)" }}>Started with no formal background — self-taught PHP and web fundamentals on the job as an intern at a digital agency in southern Nigeria</li>
                <li className="pl-4" style={{ borderLeft: "1px solid var(--border)" }}>Kept building until proficiency earned real production responsibility — eventually owning delivery across web, mobile, and enterprise client projects</li>
                <li className="pl-4" style={{ borderLeft: "1px solid var(--border)" }}>Built ManageAm — a medical platform for diabetic patients covering meal intake tracking, health tips, and care guidance — live on iOS and Android</li>
                <li className="pl-4" style={{ borderLeft: "1px solid var(--border)" }}>Took on lead engineer responsibilities in year two, shipping products across multiple industries before leaving to go independent</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="projects" className="mb-10 scroll-mt-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[11px] uppercase tracking-widest" style={{ color: "var(--muted)" }}>
              Projects
            </span>
            <div className="flex-1 h-px" style={{ backgroundColor: "var(--border)" }} />
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-start project-row">
              <a
                href="https://userivet.ng"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
                style={{ color: "var(--accent)" }}
              >
                Rivet ↗
              </a>
              <span className="text-sm text-right max-w-[280px] project-desc" style={{ color: "#555" }}>Service provision marketplace</span>
            </div>
            <div className="flex justify-between items-start project-row">
              <a
                href="https://smcdao.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
                style={{ color: "var(--accent)" }}
              >
                SMCDAO ↗
              </a>
              <span className="text-sm text-right max-w-[280px] project-desc" style={{ color: "#555" }}>Decentralized community platform · 40,000+ users</span>
            </div>
            <div className="flex justify-between items-start project-row">
              <a
                href="https://manageam.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
                style={{ color: "var(--accent)" }}
              >
                ManageAm ↗
              </a>
              <span className="text-sm text-right max-w-[280px] project-desc" style={{ color: "#555" }}>Diabetes self-management on iOS & Android</span>
            </div>
          </div>
        </section>

        <section id="writing" className="mb-10 scroll-mt-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[11px] uppercase tracking-widest" style={{ color: "var(--muted)" }}>
              Writing
            </span>
            <div className="flex-1 h-px" style={{ backgroundColor: "var(--border)" }} />
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-start writing-row">
              <a
                href="https://www.twilio.com/en-us/blog/developers/community/intervention-image-in-depth-guide"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
                style={{ color: "var(--accent)" }}
              >
                Intervention Image: An In-depth Guide ↗
              </a>
              <span className="text-sm" style={{ color: "var(--muted)" }}>Twilio</span>
            </div>
            <div className="flex justify-between items-start writing-row">
              <a
                href="https://www.twilio.com/en-us/blog/developers/community/image-compression-in-laravel"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
                style={{ color: "var(--accent)" }}
              >
                Image Compression in Laravel ↗
              </a>
              <span className="text-sm" style={{ color: "var(--muted)" }}>Twilio</span>
            </div>
            <div className="flex justify-between items-start writing-row">
              <a
                href="https://blog.logrocket.com/angular-datatables-feature-rich-tables/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
                style={{ color: "var(--accent)" }}
              >
                Using Angular DataTables to Build Feature-rich Tables ↗
              </a>
              <span className="text-sm" style={{ color: "var(--muted)" }}>LogRocket</span>
            </div>
            <div className="flex justify-between items-start writing-row">
              <a
                href="https://blog.logrocket.com/redis-adonisjs-data-caching/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
                style={{ color: "var(--accent)" }}
              >
                Using Redis in AdonisJs for Data Caching ↗
              </a>
              <span className="text-sm" style={{ color: "var(--muted)" }}>LogRocket</span>
            </div>
            <div className="flex justify-between items-start writing-row">
              <a
                href="https://blog.logrocket.com/crafting-authentication-schemes-with-prisma-in-express/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
                style={{ color: "var(--accent)" }}
              >
                Crafting Authentication Schemes with Prisma in Express ↗
              </a>
              <span className="text-sm" style={{ color: "var(--muted)" }}>LogRocket</span>
            </div>
          </div>
        </section>

        <section id="contact" className="mb-10 scroll-mt-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[11px] uppercase tracking-widest" style={{ color: "var(--muted)" }}>
              Contact
            </span>
            <div className="flex-1 h-px" style={{ backgroundColor: "var(--border)" }} />
          </div>

          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-sm" style={{ color: "var(--muted)" }}>email</span>
              <a
                href="mailto:k.ekandem@gmail.com"
                className="hover:underline"
                style={{ color: "var(--accent)" }}
              >
                k.ekandem@gmail.com
              </a>
            </div>
            <div className="flex justify-between">
              <span className="text-sm" style={{ color: "var(--muted)" }}>github</span>
              <a
                href="https://github.com/Kennethekandem"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
                style={{ color: "var(--accent)" }}
              >
                Kennethekandem
              </a>
            </div>
            <div className="flex justify-between">
              <span className="text-sm" style={{ color: "var(--muted)" }}>linkedin</span>
              <a
                href="https://www.linkedin.com/in/kenneth-ekandem-66a73a116/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
                style={{ color: "var(--accent)" }}
              >
                kenneth-ekandem
              </a>
            </div>
            <div className="flex justify-between">
              <span className="text-sm" style={{ color: "var(--muted)" }}>twitter</span>
              <a
                href="https://twitter.com/Kenneth_Ekandem"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
                style={{ color: "var(--accent)" }}
              >
                Kenneth_Ekandem
              </a>
            </div>
          </div>
        </section>

        <footer className="pt-8 text-sm" style={{ borderTop: "1px solid var(--border)", color: "var(--muted)" }}>
          © {new Date().getFullYear()} Kenneth Ekandem
        </footer>
      </main>
    </div>
  );
}