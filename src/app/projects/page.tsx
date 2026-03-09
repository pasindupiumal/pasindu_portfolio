"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { DATA } from "@/data/resume";
import { useState } from "react";
import { Icons } from "@/components/icons";

const BLUR_FADE_DELAY = 0.04;

type TabType = "websites" | "extensions" | "google apps script";

// Add new projects here that will only show on this page
const ADDITIONAL_PROJECTS = [
  {
    title: "Walmart Product Scraper",
    href: "https://github.com/pasindupiumal03/Walmart-Product-Scrapes-Extension",
    dates: "Jan 2026 - Feb 2026",
    active: true,
    description:
      "A powerful hybrid tool that automates the creation of optimized Walmart product listings. It leverages a Chrome Extension for robust client-side scraping (bypassing server-side bot detection) and a Google Apps Script backend for secure AI processing using OpenAI's GPT-4o Vision. Features include client-side scraping to bypass CAPTCHAs, rich data extraction from internal JSON, multi-input support for URLs and Product IDs, resume & retry capability, robust keep-alive system using Chrome Offscreen API, smart validation for Walmart's requirements, and cost-efficient AI processing with GPT-4o-mini.",
    technologies: [
      "Google Apps Script",
      "Chrome Extension API",
      "OpenAI GPT-4o Vision",
      "GPT-4o-mini",
      "Chrome Offscreen API",
      "Web Scraping",
      "Google Sheets API",
      "JavaScript",
      "Manifest V3",
    ],
    links: [
      {
        type: "Source",
        href: "https://github.com/pasindupiumal03/Walmart-Product-Scrapes-Extension",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "",
    video: "walmart.mp4",
    category: "google apps script" as TabType,
  },
  {
    title: "Freelancer Workspace – Google Sheets SPA",
    href: "",
    dates: "Dec 2025 – Dec 2025",
    active: true,
    description:
      "Freelancer Workspace is a lightweight business management web app built by transforming Google Sheets into a full Single Page Application (SPA). The project uses Google Apps Script to treat the spreadsheet as a backend database while delivering a modern frontend experience that removes the traditional “spreadsheet feel.” The system allows freelancers to track work sessions with a live timer, generate automated invoices, and monitor financial performance through a dynamic analytics dashboard. With an optimistic UI approach and custom frontend layer, the application provides fast, seamless interactions while keeping all data securely stored in Google Drive.",
    technologies: [
      "Google Apps Script",
      "Javascript",
      "Google Sheets API",
      "HTML / CSS",
      "Charts",
      "PDF Generation APIs",
    ],
    image: "",
    video: "script2.mp4",
    category: "google apps script" as TabType,
  },

  {
    title: "OneLearning",
    href: undefined,
    dates: "Sep 2025 - Oct 2025",
    active: true,
    description:
      "OneLearning is a powerful Chrome extension that helps you effortlessly import your saved LinkedIn posts and organize them with custom tags and notes. It transforms your LinkedIn saved content into a searchable, well-organized knowledge base, making it easy to revisit and reference valuable insights whenever you need them.",
    technologies: [
      "React.js",
      "Chrome Extension API",
      "IndexedDB",
      "Chrome Storage",
      "TailwindCSS",
      "Manifest V3",
    ],
    image: "Linkedin_Scraper.png",
    category: "extensions" as TabType,
  },
  {
    title: "Censor AI",
    href: "https://chromewebstore.google.com/detail/censor/elgfhammpjfmmgiflpjbohhbimlfdimm",
    dates: "Jul 2025 - Aug 2025",
    active: true,
    description:
      "Censor AI is a smart Chrome extension that revolutionizes email writing on Gmail. Simply type your message, and Censor AI suggests a professionally rewritten version using OpenAI's powerful API. You can send the AI-enhanced email instantly or fine-tune it before sending. Perfect for crafting professional, clear, or friendly emails with ease—making email communication smarter and more efficient.",
    technologies: [
      "Chrome Extension API",
      "OpenAI API",
      "Gmail Integration",
      "JavaScript",
      "TailwindCSS",
      "Manifest V3",
    ],
    links: [
      {
        type: "Store",
        href: "https://chromewebstore.google.com/detail/censor/elgfhammpjfmmgiflpjbohhbimlfdimm",
        icon: <Icons.store className="size-3" />,
      },
    ],
    image: "censor-ai.png",
    category: "extensions" as TabType,
  },
  {
    title: "Positional AI",
    href: undefined,
    dates: "Jun 2025 - Jul 2025",
    active: true,
    description:
      "Positional AI is an intelligent Chrome extension that detects whether content is AI-generated or human-written. It analyzes text in real-time and provides a detailed AI plagiarism percentage score, helping users verify content authenticity. Perfect for educators, content creators, and businesses who need to ensure originality and distinguish between human and AI-generated content.",
    technologies: [
      "Chrome Extension API",
      "AI Detection API",
      "Machine Learning",
      "Content Scripts",
      "JavaScript",
      "TailwindCSS",
      "Manifest V3",
    ],
    image: "positional.png",
    category: "extensions" as TabType,
  },
  {
    title: "WebMind",
    href: undefined,
    dates: "Apr 2025 - May 2025",
    active: true,
    description:
      "WebMind is a powerful browser extension that transforms your web history into a private, searchable knowledge base. It automatically records visited websites with URLs, content, and timestamps, encrypting data for security. Using AI-powered vector embeddings and natural language search, you can ask questions like 'What article did I read about Solana NFTs?' and get instant answers. Perfect for researchers, developers, and traders who need intelligent recall without disrupting workflow.",
    technologies: [
      "Chrome Extension API",
      "Node.js",
      "OpenAI API",
      "Vector Embeddings",
      "Encryption",
      "IndexedDB",
      "JavaScript",
      "Manifest V3",
    ],
    image: "WebMind.png",
    category: "extensions" as TabType,
  },
  {
    title: "Link Shortener",
    href: undefined,
    dates: "Mar 2025 - Apr 2025",
    active: true,
    description:
      "Link Shortener is a sleek Chrome extension that instantly shrinks the URL you're currently visiting with a stunning modern UI. It offers comprehensive URL management with features including history tracking, social sharing, QR code generation, favorites list, and custom URL shortening. Perfect for content creators, marketers, and anyone who needs quick, organized access to shortened links with a beautiful, intuitive interface.",
    technologies: [
      "Chrome Extension API",
      "URL Shortening API",
      "QR Code Generation",
      "Chrome Storage",
      "JavaScript",
      "TailwindCSS",
      "Manifest V3",
    ],
    image: "shortner.webp",
    category: "extensions" as TabType,
  },
  {
    title: "Amazon Schedule Monitor",
    href: "https://github.com/pasindupiumal03/Amazon-Schedule-Monitor-Extension",
    dates: "Feb 2025 - Mar 2025",
    active: true,
    description:
      "Amazon Schedule Monitor is a specialized Chrome extension designed to automate the monitoring of Amazon hiring pages for available shift schedules. It automatically checks for schedule updates in the background, sends instant notifications when new shifts become available, and helps users quickly secure their preferred work schedules. Perfect for Amazon flex workers and gig economy professionals who need to stay ahead of schedule releases.",
    technologies: [
      "Chrome Extension API",
      "Background Scripts",
      "DOM Manipulation",
      "Web Scraping",
      "Chrome Notifications",
      "Chrome Storage",
      "JavaScript",
      "Manifest V3",
    ],
    links: [
      {
        type: "Source",
        href: "https://github.com/pasindupiumal03/Amazon-Schedule-Monitor-Extension",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "amazon-schedule-monitor.png",
    category: "extensions" as TabType,
  },
  {
    title: "Luneshark",
    href: "https://luneshark.com",
    dates: "May 2025 - Jun 2025",
    active: true,
    description:
      "Luneshark is an AI-powered Web3 platform that combines Solana blockchain analytics, AI-driven chat and image generation, and real-time cryptocurrency insights. Built with Next.js 14, it delivers token analytics, trending assets, wallet integration, and intelligent media tools through a modern, scalable, and responsive interface.",
    technologies: [
      "Next.js",
      "Typescript",
      "shadcn/ui",
      "Solana Web3.js",
      "APIs",
      "TailwindCSS",
    ],
    links: [
      {
        type: "Website",
        href: "https://luneshark.com",
        icon: <Icons.globe className="size-3" />,
      },
      {
        type: "source",
        href: "https://github.com/pasindupiumal03/Luneshark_New",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "",
    video: "luneshark.mp4",
    category: "websites" as TabType,
  },
  {
    title: "Solana Tracker",
    href: "https://solan-nine.vercel.app/",
    dates: "Aug 2025 - Sep 2025",
    active: true,
    description:
      "Solana Tracker is a modern Web3 portfolio dashboard for tracking Solana wallets in real time. It features Phantom wallet integration, live token balances, trending assets, and detailed wallet analytics, all wrapped in a sleek glassmorphic UI with dark/light theme support and responsive design.",
    technologies: [
      "Next.js",
      "Typescript",
      "shadcn/ui",
      "Solana Web3.js",
      "Solana RPC",
      "APIs",
      "TailwindCSS",
    ],
    links: [
      {
        type: "Website",
        href: "https://solan-nine.vercel.app/",
        icon: <Icons.globe className="size-3" />,
      },
      {
        type: "source",
        href: "https://github.com/pasindupiumal03/Solana_User_Dashboard",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "",
    video: "solanatracker.mp4",
    category: "websites" as TabType,
  },
  {
    title: "Flowkey",
    href: "https://flowkey-two.vercel.app/",
    dates: "Sep 2025 - Oct 2025",
    active: true,
    description:
      "FlowKey is a modern browser extension and web platform for stylish bookmark and workspace management. It features Phantom wallet authentication, custom layouts, privacy-first local storage, and a glassmorphic UI with interactive animations, delivering a seamless Web3-enhanced browsing experience.",
    technologies: ["React.js", "Javascript", "Lucide React", "TailwindCSS"],
    links: [
      {
        type: "Website",
        href: "https://flowkey-two.vercel.app/",
        icon: <Icons.globe className="size-3" />,
      },
      {
        type: "source",
        href: "https://github.com/pasindupiumal03/Flowkey_Homepage",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "",
    video: "flowkeyhomepage.mp4",
    category: "websites" as TabType,
  },
  {
    title: "Polybiuos",
    href: "https://eigencode.vercel.app/",
    dates: "Jun 2025 - Jul 2025",
    active: true,
    description:
      "POLYBIUOS is an AI-powered developer platform for intelligent code generation, analysis, and media transformation. Featuring a cyberpunk, terminal-inspired UI, it leverages modern web technologies and OpenAI integration to automate workflows and enhance developer productivity across devices.",
    technologies: [
      "Next.js",
      "Typescript",
      "Radix UI",
      "TailwindCSS",
      "Framer Motion",
    ],
    links: [
      {
        type: "Website",
        href: "https://eigencode.vercel.app/",
        icon: <Icons.globe className="size-3" />,
      },
      {
        type: "source",
        href: "https://github.com/pasindupiumal03/Polybiuos_Project",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "",
    video: "polybiuos.mp4",
    category: "websites" as TabType,
  },
  {
    title: "Alphyre",
    href: "https://aphyre.vercel.app/",
    dates: "Nov 2025 - Dec 2025",
    active: true,
    description:
      "Alphyre is an advanced crypto trading intelligence platform that delivers real-time market analytics, multi-chain token tracking, AI-powered insights, and wallet analytics. Built with modern Web3 infrastructure, it features Solana-based USDC micro-payments via the X402 protocol, Phantom wallet integration, and a high-performance dashboard designed for serious crypto traders and researchers.",
    technologies: [
      "Next.js",
      "Typescript",
      "shadcn/ui",
      "TailwindCSS",
      "Charts",
      "Solana Web3.js",
      "APIs",
      "x402 Protocol",
      "USDC Payments",
    ],
    links: [
      {
        type: "Website",
        href: "https://aphyre.vercel.app/",
        icon: <Icons.globe className="size-3" />,
      },
      {
        type: "source",
        href: "https://github.com/pasindupiumal03/Alphyre_Dashboard",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "",
    video: "Alphyre-2.mp4",
    category: "websites" as TabType,
  },
  {
    title: "Bonk Terminal",
    href: "https://bonk-terminal.vercel.app",
    dates: "Jul 2025 - Aug 2025",
    active: true,
    description:
      "A full-stack Solana token exploration platform with terminal-style interface for live trading data, candlestick charts, and AI-powered price predictions. Features real-time token information, market analytics, and seamless clipboard integration using BLYV and Solana Tracker APIs.",
    technologies: [
      "React.js",
      "Javascript",
      "TailwindCSS",
      "Node.js",
      "Express.js",
      "Solana Web3.js",
    ],
    links: [
      {
        type: "Website",
        href: "https://bonk-terminal.vercel.app",
        icon: <Icons.globe className="size-3" />,
      },
      {
        type: "Source",
        href: "https://github.com/pasindupiumal03/BONK_Terminal_SOL_Token_Analyzer",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "",
    video: "/bonk-terminal.mp4",
    category: "websites" as TabType,
  },
  {
    title: "Fraktom",
    href: "https://fraktom.vercel.app/",
    dates: "May 2025 - Jul 2025",
    active: true,
    description:
      "A modern, educational trading simulation platform inspired by pump.fun. Fraktom lets users practice trading without risking real money, climb leaderboards, and learn trading concepts interactively.",
    technologies: ["Next.js", "Typescript", "TailwindCSS", "Shadcn UI"],
    links: [
      {
        type: "Website",
        href: "https://fraktom.vercel.app/",
        icon: <Icons.globe className="size-3" />,
      },
      {
        type: "Source",
        href: "https://github.com/pasindupiumal03/Fraktom_Homepage",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "",
    video: "/fraktom.mp4",
    category: "websites" as TabType,
  },
];

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState<TabType>("extensions");

  // Combine DATA.projects with additional projects and sort by date (latest first)
  const allProjects = [
    ...DATA.projects.map((p) => ({
      ...p,
      category: getProjectCategory(p.title),
    })),
    ...ADDITIONAL_PROJECTS,
  ].sort((a, b) => {
    const dateA = parseProjectDate(a.dates);
    const dateB = parseProjectDate(b.dates);
    return dateB.getTime() - dateA.getTime();
  });

  const filteredProjects = allProjects.filter((project) => {
    return project.category === activeTab;
  });

  return (
    <section id="projects">
      <div className="flex min-h-0 flex-col gap-y-8">
        <div className="flex flex-col gap-y-4 items-center justify-center">
          <div className="flex items-center w-full">
            <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
            <div className="border bg-primary z-10 rounded-xl px-4 py-1">
              <span className="text-background text-sm font-medium">
                My Projects
              </span>
            </div>
            <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
          </div>
          <div className="flex flex-col gap-y-3 items-center justify-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Check out my latest work
            </h2>
            <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center">
              I&apos;ve worked on a variety of projects, from simple websites to
              complex web applications. Here are a few of my favorites.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 border border-border rounded-lg p-1 bg-muted/50">
            <button
              onClick={() => setActiveTab("extensions")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                activeTab === "extensions"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Extensions
            </button>
            <button
              onClick={() => setActiveTab("google apps script")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                activeTab === "google apps script"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Google Apps Script
            </button>
            <button
              onClick={() => setActiveTab("websites")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                activeTab === "websites"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Websites
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto w-full">
          {filteredProjects.map((project, id) => (
            <BlurFade
              key={project.title}
              delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              className="h-full"
            >
              <ProjectCard
                href={project.href}
                key={project.title}
                title={project.title}
                description={project.description}
                dates={project.dates}
                tags={project.technologies}
                image={project.image}
                video={project.video}
                links={project.links}
              />
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}

// Helper function to categorize existing projects
function getProjectCategory(title: string): TabType {
  if (title === "Bonk Terminal" || title === "Fraktom") {
    return "websites";
  } else if (
    title === "FlowKey - Bookmark & Layout Manager" ||
    title === "FullGrab - Screenshot & Full Page Capture"
  ) {
    return "extensions";
  }
  return "google apps script";
}

// Helper function to parse project date strings for sorting
function parseProjectDate(dateString: string): Date {
  if (!dateString) return new Date(0);
  
  // Handle "Present"
  if (dateString.toLowerCase().includes("present")) {
    return new Date();
  }

  // Split by common separators: "-", "–" (en dash), "—" (em dash)
  const parts = dateString.split(/[-–—]/);
  
  // Take the end date if it's a range, otherwise take the whole string
  const lastPart = (parts.length > 1 ? parts[parts.length - 1] : parts[0]).trim();
  
  const date = new Date(lastPart);
  
  if (isNaN(date.getTime())) {
    // Fallback for year-only formats like "2024"
    const yearMatch = lastPart.match(/\d{4}/);
    if (yearMatch) {
      return new Date(parseInt(yearMatch[0]), 0, 1);
    }
    return new Date(0);
  }
  
  return date;
}
