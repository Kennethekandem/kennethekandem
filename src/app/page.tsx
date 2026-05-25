"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

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
    <div className="min-h-screen bg-[#ffffff] text-[#111110] font-mono">
      <nav className="fixed top-0 left-0 right-0 bg-[#ffffff] border-b border-[#e8e5e0] z-50">
        <div className="max-w-[80ch] mx-auto px-8 h-14 flex items-center justify-between">
          <a href="#" className="text-lg font-medium">ke.</a>
          <div className="flex gap-6 text-sm nav-links-desktop">
            {sections.map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className={`transition-colors h-11 flex items-center ${activeSection === section ? "text-[#1a6b3c]" : ""}`}
              >
                {section}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <nav className="fixed bottom-0 left-0 right-0 bg-[#ffffff] border-t border-[#e8e5e0] z-50 mobile-nav">
        <div className="flex justify-around items-center h-16">
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className={`flex flex-col items-center justify-center flex-1 h-full min-w-[60px] min-h-[60px] transition-colors text-xs ${activeSection === section ? "text-[#1a6b3c]" : "text-[#888580]"}`}
            >
              <span>{section}</span>
            </a>
          ))}
        </div>
      </nav>

      <main className="max-w-[80ch] mx-auto px-8 pt-20 pb-20 main-mobile-pb">
        <header className="pb-8 border-b border-[#e8e5e0] mb-8">
          <div className="flex items-start gap-8 header-flex">
            <div className="flex-1">
              <h1 className="text-5xl font-medium leading-tight mb-2">
                Kenneth
                <br />
                <em className="text-[#1a6b3c] font-normal">Ekandem.</em>
              </h1>
              <p className="text-sm text-[#888580] mb-6">
                Software Engineer · Lagos, Nigeria
              </p>
              <p className="max-w-[520px] leading-relaxed">
                Building reliable systems for the web. Currently founding Rivet — trust infrastructure for Nigeria's service economy. Previously scaled a $35M platform at SMCDAO.
              </p>
            </div>
            <div className="flex-shrink-0 w-32 h-32 rounded-full overflow-hidden border-2 border-[#e8e5e0]">
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
            <span className="text-[11px] uppercase tracking-widest text-[#888580]">
              Work
            </span>
            <div className="flex-1 h-px bg-[#e8e5e0]" />
          </div>

          <div className="space-y-8">
            <div>
              <div className="flex justify-between items-start mb-1">
                <a
                  href="https://userivet.ng"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium hover:text-[#1a6b3c]"
                >
                  Rivet ↗
                </a>
                <span className="text-sm text-[#888580]">2024 — present</span>
              </div>
              <p className="text-sm text-[#888580] mb-3">Founder & Engineer</p>
              <ul className="space-y-2 text-[#555]">
                <li className="pl-4 border-l border-[#e8e5e0]">Building trust infrastructure for Nigeria&apos;s service economy — a marketplace connecting verified service providers with customers across Nigeria</li>
                <li className="pl-4 border-l border-[#e8e5e0]">Designed and own the full stack: Elixir/OTP backend (order lifecycle, push notifications), NextJS API, React Native mobile app</li>
                <li className="pl-4 border-l border-[#e8e5e0]">Integrated Paystack for SP wallet top-ups and commission splits, NIN verification, etc.</li>
                <li className="pl-4 border-l border-[#e8e5e0]">Self-hosted production infrastructure on Hetzner with Coolify; CI/CD via GitHub App integration across a Turborepo monorepo</li>
                <li className="pl-4 border-l border-[#e8e5e0]">Six launch service categories: cleaning, electrical, plumbing, dispatch, maintenance, waste disposal</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start mb-1">
                <a
                  href="https://smcdao.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium hover:text-[#1a6b3c]"
                >
                  SMCDAO ↗
                </a>
                <span className="text-sm text-[#888580]">2023 — 2025</span>
              </div>
              <p className="text-sm text-[#888580] mb-3">Software Engineer</p>
              <ul className="space-y-2 text-[#555]">
                <li className="pl-4 border-l border-[#e8e5e0]">Joined as a senior engineer and owned the entire backend and community infrastructure</li>
                <li className="pl-4 border-l border-[#e8e5e0]">Built and launched v1 of the mobile app — the primary interface for 40,000+ users and 5,000+ DAU</li>
                <li className="pl-4 border-l border-[#e8e5e0]">Designed and shipped a real-time chat service powering community communications, built on Phoenix Channels and OTP</li>
                <li className="pl-4 border-l border-[#e8e5e0]">Built an internal payroll system for the team</li>
                <li className="pl-4 border-l border-[#e8e5e0]">Architected the distributed backend: Auth, API, Socket, and Indexer microservices on Docker with auto-scaling</li>
                <li className="pl-4 border-l border-[#e8e5e0]">The platform raised $35M in funds on the strength of the infrastructure and product</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start mb-1">
                <span className="font-medium">Afara Partners</span>
                <span className="text-sm text-[#888580]">2022 — 2023</span>
              </div>
              <p className="text-sm text-[#888580] mb-3">Backend Engineer</p>
              <ul className="space-y-2 text-[#555]">
                <li className="pl-4 border-l border-[#e8e5e0]">First experience in a structured corporate engineering environment — production finance systems, real compliance constraints, team workflows</li>
                <li className="pl-4 border-l border-[#e8e5e0]">Contributed features across live financial products serving real customers, building fluency in code review culture and production discipline</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start mb-1">
                <span className="font-medium">Codekago Interactive</span>
                <span className="text-sm text-[#888580]">2019 — 2022</span>
              </div>
              <p className="text-sm text-[#888580] mb-3">Intern → Lead Engineer</p>
              <ul className="space-y-2 text-[#555]">
                <li className="pl-4 border-l border-[#e8e5e0]">Started with no formal background — self-taught PHP and web fundamentals on the job as an intern at a digital agency in southern Nigeria</li>
                <li className="pl-4 border-l border-[#e8e5e0]">Kept building until proficiency earned real production responsibility — eventually owning delivery across web, mobile, and enterprise client projects</li>
                <li className="pl-4 border-l border-[#e8e5e0]">Built ManageAm — a medical platform for diabetic patients covering meal intake tracking, health tips, and care guidance — live on iOS and Android</li>
                <li className="pl-4 border-l border-[#e8e5e0]">Took on lead engineer responsibilities in year two, shipping products across multiple industries before leaving to go independent</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="projects" className="mb-10 scroll-mt-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[11px] uppercase tracking-widest text-[#888580]">
              Projects
            </span>
            <div className="flex-1 h-px bg-[#e8e5e0]" />
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-start project-row">
              <a
                href="https://userivet.ng"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#1a6b3c]"
              >
                Rivet ↗
              </a>
              <span className="text-sm text-[#555] text-right max-w-[280px] project-desc">Service provision marketplace</span>
            </div>
            <div className="flex justify-between items-start project-row">
              <a
                href="https://smcdao.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#1a6b3c]"
              >
                SMCDAO ↗
              </a>
              <span className="text-sm text-[#555] text-right max-w-[280px] project-desc">Decentralized community platform · 40,000+ users</span>
            </div>
            <div className="flex justify-between items-start project-row">
              <a
                href="https://manageam.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#1a6b3c]"
              >
                ManageAm ↗
              </a>
              <span className="text-sm text-[#555] text-right max-w-[280px] project-desc">Diabetes self-management on iOS & Android</span>
            </div>
          </div>
        </section>

        <section id="writing" className="mb-10 scroll-mt-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[11px] uppercase tracking-widest text-[#888580]">
              Writing
            </span>
            <div className="flex-1 h-px bg-[#e8e5e0]" />
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-start writing-row">
              <a
                href="https://www.twilio.com/en-us/blog/developers/community/intervention-image-in-depth-guide"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#1a6b3c]"
              >
                Intervention Image: An In-depth Guide ↗
              </a>
              <span className="text-sm text-[#888580]">Twilio</span>
            </div>
            <div className="flex justify-between items-start writing-row">
              <a
                href="https://www.twilio.com/en-us/blog/developers/community/image-compression-in-laravel"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#1a6b3c]"
              >
                Image Compression in Laravel ↗
              </a>
              <span className="text-sm text-[#888580]">Twilio</span>
            </div>
            <div className="flex justify-between items-start writing-row">
              <a
                href="https://blog.logrocket.com/angular-datatables-feature-rich-tables/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#1a6b3c]"
              >
                Using Angular DataTables to Build Feature-rich Tables ↗
              </a>
              <span className="text-sm text-[#888580]">LogRocket</span>
            </div>
            <div className="flex justify-between items-start writing-row">
              <a
                href="https://blog.logrocket.com/redis-adonisjs-data-caching/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#1a6b3c]"
              >
                Using Redis in AdonisJs for Data Caching ↗
              </a>
              <span className="text-sm text-[#888580]">LogRocket</span>
            </div>
            <div className="flex justify-between items-start writing-row">
              <a
                href="https://blog.logrocket.com/crafting-authentication-schemes-with-prisma-in-express/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#1a6b3c]"
              >
                Crafting Authentication Schemes with Prisma in Express ↗
              </a>
              <span className="text-sm text-[#888580]">LogRocket</span>
            </div>
          </div>
        </section>

        <section id="contact" className="mb-10 scroll-mt-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[11px] uppercase tracking-widest text-[#888580]">
              Contact
            </span>
            <div className="flex-1 h-px bg-[#e8e5e0]" />
          </div>

          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-sm text-[#888580]">email</span>
              <a
                href="mailto:k.ekandem@gmail.com"
                className="hover:text-[#1a6b3c]"
              >
                k.ekandem@gmail.com
              </a>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-[#888580]">github</span>
              <a
                href="https://github.com/Kennethekandem"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#1a6b3c]"
              >
                Kennethekandem
              </a>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-[#888580]">linkedin</span>
              <a
                href="https://www.linkedin.com/in/kenneth-ekandem-66a73a116/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#1a6b3c]"
              >
                kenneth-ekandem
              </a>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-[#888580]">twitter</span>
              <a
                href="https://twitter.com/Kenneth_Ekandem"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#1a6b3c]"
              >
                Kenneth_Ekandem
              </a>
            </div>
          </div>
        </section>

        <footer className="pt-8 border-t border-[#e8e5e0] text-sm text-[#888580]">
          © {new Date().getFullYear()} Kenneth Ekandem
        </footer>
      </main>
    </div>
  );
}