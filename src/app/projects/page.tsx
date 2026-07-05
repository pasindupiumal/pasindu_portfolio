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
    title: "Business OS – Google Sheets Web App",
    href: "",
    dates: "Nov 2025 - Dec 2025",
    active: true,
    description:
      "Small Business OS is a modern web application built on top of Google Sheets using Google Apps Script. The project transforms a traditional spreadsheet into a fully interactive business management system with a clean web-app interface, removing the need to work directly with cells or formulas. The application provides a professional dashboard with interactive controls, pop-up interfaces, and automated workflows for managing business operations. By using Google Sheets as the backend database and a custom frontend layer, the system delivers a smooth app-like experience while keeping data securely stored within Google Drive.",
    technologies: [
      "Google Apps Script",
      "Javascript",
      "Google Sheets API",
      "HTML / CSS",
      "Web App Deployment",
      "Google Drive Integration",
    ],
    image: "",
    video: "script3.mp4",
    category: "google apps script" as TabType,
  },
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
    title: "FlowKey - Bookmark & Layout Manager",
    href: "https://chromewebstore.google.com/detail/flowkey-bookmark-layout-m/lpgjlhajnhhdbaleigdkeloeeniedpnj",
    dates: "Aug 2025 - Sep 2025",
    active: true,
    description:
      "FlowKey is a powerful Chrome extension that streamlines bookmark organization with customizable layouts and seamless Phantom wallet connectivity. Designed with a modern purple-gradient UI and built using React 18 and Webpack 5 for high performance and maintainability.",
    technologies: [
      "React.js",
      "Javascript",
      "Chrome Extension (Manifest V3)",
      "Webpack 5",
      "Node.js",
      "Phantom Wallet SDK",
      "TailwindCSS",
    ],
    links: [
      {
        type: "Store",
        href: "https://chromewebstore.google.com/detail/flowkey-bookmark-layout-m/lpgjlhajnhhdbaleigdkeloeeniedpnj",
        icon: <Icons.store className="size-3" />,
      },
      {
        type: "Source",
        href: "https://github.com/pasindupiumal03/FlowKey-Chrome-Extension",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "",
    video: "/flowkey.mp4",
    category: "extensions" as TabType,
  },
  {
    title: "FullGrab - Screenshot & Full Page Capture",
    href: "https://chromewebstore.google.com/detail/fullgrab-screenshot-full/jfpjeaefbhfogcponhjgpghahalcbplf",
    dates: "Dec 2025 - Jan 2026",
    active: true,
    description:
      "FullGrab is a modern browser extension that performs full-page and viewport screenshot captures using intelligent auto-scrolling and stitching. All processing is done locally, with optional cloud sharing via secure, one-click generated links.",
    technologies: [
      "React.js",
      "Javascript",
      "DOM Manipulation",
      "Canvas API",       
      "Chrome Extension (Manifest V3)",
      "Auto-Scrolling & Image Stitching",
    ],
    links: [
      {
        type: "Store",
        href: "https://chromewebstore.google.com/detail/fullgrab-screenshot-full/jfpjeaefbhfogcponhjgpghahalcbplf",
        icon: <Icons.store className="size-3" />,
      },
      {
        type: "Source",
        href: "https://github.com/pasindupiumal03/FullGrab-Extension",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "",
    video: "/fullgrab.mp4",
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
    title: "Office OS – Google Workspace Productivity System",
    href: "",
    dates: "Jan 2026 – Feb 2026",
    active: true,
    description:
      "Office OS is a powerful productivity workspace built inside Google Sheets and powered by Google Apps Script. It transforms a traditional spreadsheet into a modern web-app experience for managing tasks, workflows, and client information. The system features a visual Kanban board for task management, customizable aesthetic themes, built-in focus tools such as a Pomodoro timer, and lightweight CRM functionality. Designed with performance optimizations and an optimistic UI approach, the app delivers a smooth, fast experience directly within the Google Workspace ecosystem while keeping all data stored securely in the user's Google Drive.",
    technologies: [
      "Google Apps Script",
      "Javascript",
      "Google Sheets API",
      "HTML / CSS",
      "Workspace Add-on Architecture",
      "UI Service",
      "Google Drive Storage",
    ],
    links: [],
    image: "",
    video: "/script1.mp4",
    category: "google apps script" as TabType,
  },
  {
    title: "Amazon Product Scraper",
    href: "https://github.com/pasindupiumal03/Amazon-Product-Scrapes-Extension",
    dates: "Oct 2025 - Nov 2025",
    active: true,
    description:
      "A comprehensive automation tool that streamlines Amazon product data extraction and processing. Users input Amazon product links or ASINs, and the system automatically fetches all product images and details. It then processes these through OCR technology to extract text from images and automatically populates Google Sheets with structured data including Title, Bullets, Description, Brand, Manufacturer information, and OCR-extracted text from main product images. Perfect for sellers, researchers, and businesses managing large Amazon product catalogs.",
    technologies: [
      "Google Apps Script",
      "Chrome Extension API",
      "OCR API",
      "Web Scraping",
      "Google Sheets API",
      "Amazon Product API",
      "JavaScript",
      "Image Processing",
      "Manifest V3",
    ],
    links: [
      {
        type: "Source",
        href: "https://github.com/pasindupiumal03/Amazon-Product-Scrapes-Extension",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "",
    video: "/amazon-product-scraper.mp4",
    category: "google apps script" as TabType,
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
      video: (p as any).video || "",
      links: (p as any).links || [],
    })),
    ...ADDITIONAL_PROJECTS.map((p) => ({
      ...p,
      video: p.video || "",
      links: p.links || [],
    })),
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
      <div className="max-w-2xl mx-auto py-12 pb-24 sm:py-24 px-6">
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

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto w-full text-left">
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
      </div>
    </section>
  );
}

// Helper function to categorize existing projects
function getProjectCategory(title: string): TabType {
  const extensions = [
    "OneLearning",
    "Censor AI",
    "WebMind",
    "Amazon Schedule Monitor",
    "FlowKey - Bookmark & Layout Manager",
    "FullGrab - Screenshot & Full Page Capture"
  ];

  if (title === "Fraktom") {
    return "websites";
  } else if (extensions.includes(title)) {
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
