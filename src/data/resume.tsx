import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import {
  SiJavascript,
  SiPython,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiGit,
} from "react-icons/si";

export const DATA = {
  name: "Pasindu Piumal",
  initials: "PW",
  url: "https://pasindupiumal.com",
  location: "Kegalle, Sri Lanka",
  locationLink: "https://www.google.com/maps/place/kegalle",
  description:
    "Expert Freelance Chrome Extension Developer specializing in Manifest V3, automation, and custom browser tools.",
  seoDescription:
    "Hire Pasindu Piumal, an expert freelance Chrome Extension developer specializing in Manifest V3, automation, and web development. View my portfolio and projects.",
  summary:
    "Since 2024, [I have been pursuing a BSc (Hons) in Software Engineering at the University of Westminster](/#education). In 2025, [I joined Bytesquadlabs as a Software Engineer](/#work). Where I work on full-stack web development and chrome extension projects. I enjoy building scalable applications using modern web technologies and creating browser extensions that enhance productivity and user experience. I’m driven by hands-on development and a strong interest in building practical, impactful software.",
  avatarUrl: "/me.png",
  skills: [
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "Typescript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "Express.js", icon: SiExpress, color: "#000000" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Python", icon: SiPython, color: "#3776AB" },
    { name: "GIT", icon: SiGit, color: "#F05032" },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/projects", icon: NotebookIcon, label: "Projects" },
  ],
  contact: {
    email: "pasindupiumal0123@gmail.com",
    tel: "+94717123826",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/pasindupiumal",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/pasindupiumal/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/pasindupiumal03",
        icon: Icons.x,
        navbar: true,
      },
      Upwork: {
        name: "Upwork",
        url: "https://www.upwork.com/freelancers/pasindupiumal",
        icon: Icons.upwork,
        navbar: true,
      },
      Fiverr: {
        name: "Fiverr",
        url: "https://www.fiverr.com/pasinduxyz",
        icon: Icons.fiverr,
        navbar: true,
      },
      Gmail: {
        name: "Gmail",
        url: "/contact",
        icon: Icons.email,

        navbar: true,
      },
      // Youtube: {
      //   name: "Youtube",
      //   url: "https://dub.sh/dillion-youtube",
      //   icon: Icons.youtube,
      //   navbar: true,
      // },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "ByteSquadLabs",
      href: "https://bytesquadlabs.com",
      badges: [],
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/bytesquadlabs.jpg",
      start: "2025",
      end: "Present",
      description:
        "I'm creating fullstack websites and developing chrome extensions. Working with modern web technologies to build scalable applications and browser extensions that enhance user productivity and experience.",
    },
    {
      company: "Upwork",
      href: "https://www.upwork.com/freelancers/pasindupiumal",
      badges: [],
      location: "Remote",
      title: "Freelance Chrome Extension Developer",
      logoUrl: "/upwork.png",
      start: "2025",
      end: "Present",
      description:
        "Developing custom fullstack applications, API integrations, and automation scripts for clients worldwide. Collaborating closely with international clients to deliver clean, scalable, and well-documented solutions.",
    },
    {
      company: "Fiverr",
      href: "https://www.fiverr.com/pasinduxyz",
      badges: [],
      location: "Remote",
      title: "Freelance Browser Automation Developer",
      logoUrl: "/Fiverr.png",
      start: "2025",
      end: "Present",
      description:
        "Building customized web solutions, browser extensions, and scripting tools tailored to client specifications. Consistently delivering high-quality code and maintaining excellent client satisfaction.",
    },
  ],
  education: [
    {
      school: "University of Westminster",
      href: "https://westminster.ac.uk",
      degree: "BSc (Hons) in Software Engineering",
      logoUrl: "/westminster.jpg",
      start: "2024",
      end: "Present",
    },
    {
      school: "Informatics Institute of Technology",
      href: "https://iit.ac.lk",
      degree: "Foundation Programme in Software Engineering",
      logoUrl: "/iit.jpg",
      start: "2023",
      end: "2024",
    },
    {
      school: "Pinnawala Central College",
      href: "https://pinnawalacentral.lk/",
      degree: "High School Diploma",
      logoUrl: "https://pinnawalacentral.lk/wp-content/uploads/2024/10/PINNAWALA-SCHOOL-LOGO-1.png",
      start: "2013",
      end: "2022",
    },
  ],
  projects: [
    {
      title: "Amazon Shift Sniper: High-Frequency Automation Chrome Extension",
      href: "",
      dates: "Aug 2026 - Aug 2026",
      active: true,
      description:
        "Dominate high-frequency booking workflows with zero downtime. I engineered \"Amazon Shift Sniper,\" a resilient, high-performance Manifest V3 browser extension built for real-time monitoring and automated slot booking.\n\nTo bypass rigid security headers and CSRF requirements, the engine uses a dual-layer strategy interacting across both Isolated and Main script worlds. It features a robust session interception system that discovers and inherits valid tokens dynamically. It includes a sophisticated 403 error auto-cooldown bridge and direct DOM configuration injection.",
      technologies: [
        "React.js",
        "TailwindCSS",
        "Manifest V3",
        "Chrome Extension API",
        "Session Interception",
        "CSRF Security",
        "DOM Injection",
      ],
      links: [],
      image: "Amazon Redirect Amazon Portal Session Recovery URL Auto-Repair Chrome Extension (2).png",
      video: "",
    },
    {
      title: "Full SaaS Build | SuperDev Pro Chrome Extension Platform",
      href: "https://chromewebstore.google.com/detail/superdev-pro/jlkikimlceonbmfjieipbonnglnlchhl",
      dates: "Mar 2025 - May 2025",
      active: true,
      description:
        "Built and contributed to SuperDev Pro, a full-stack SaaS product and Chrome extension platform for developers and designers. Worked across extension development, frontend product features, SaaS workflows, commercial feature packaging, and product functionality including CSS editing, font detection, screenshots, image extraction, measurements, and export tools. The platform serves 6,000+ professionals and operates as a monetized software product with licensing, paid plans, and ongoing updates.",
      technologies: [
        "React.js",
        "TailwindCSS",
        "Manifest V3",
        "Chrome Extension API",
        "Node.js",
        "SaaS Licensing",
        "Product Features",
        "CSS Editing",
      ],
      links: [
        {
          type: "Store",
          href: "https://chromewebstore.google.com/detail/superdev-pro/jlkikimlceonbmfjieipbonnglnlchhl",
          icon: <Icons.store className="size-3" />,
        },
      ],
      image: "image_original (2)",
      video: "nrdh9axazvutuobd0ezc.mp4",
    },
    {
      title: "SuperX - Chrome Extension and Full-Stack SaaS Platform",
      href: "https://chromewebstore.google.com/detail/superx-twitter-analytics/bjobgelaoehgbnklgcaaehdpckmhkplk",
      dates: "Jan 2025 - Mar 2025",
      active: true,
      description:
        "Built a full-stack SaaS platform with a Chrome extension frontend and backend services for authentication, data storage, automation, and analytics. Developed core product features including user dashboards, API integration, and payment-ready architecture. The system was designed to support scalable workflows, secure data handling, and a smooth user experience across web and browser extension interfaces.",
      technologies: [
        "React.js",
        "TailwindCSS",
        "Manifest V3",
        "Chrome Extension API",
        "Node.js",
        "Express.js",
        "SaaS Architecture",
        "Analytics API",
      ],
      links: [
        {
          type: "Store",
          href: "https://chromewebstore.google.com/detail/superx-twitter-analytics/bjobgelaoehgbnklgcaaehdpckmhkplk",
          icon: <Icons.store className="size-3" />,
        },
      ],
      image: "image_original",
      video: "e0causakquxoglv8dn8i.mp4",
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
    },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Hack The North",
      dates: "September 14th - 16th, 2018",
      location: "Waterloo, Ontario",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "FirstNet Public Safety Hackathon",
      dates: "March 23rd - 24th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
    {
      title: "DeveloperWeek Hackathon",
      dates: "February 3rd - 4th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
    {
      title: "HackDavis",
      dates: "January 20th - 21st, 2018",
      location: "Davis, California",
      description:
        "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        },
        {
          title: "ML",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/my6footprint-machine-learning",
        },
        {
          title: "iOS",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/CarbonWallet",
        },
        {
          title: "Server",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/wallet6-server",
        },
      ],
    },
    {
      title: "ETH Waterloo",
      dates: "October 13th - 15th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
      links: [
        {
          title: "Organization",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ethdocnet",
        },
      ],
    },
    {
      title: "Hack The North",
      dates: "September 15th - 17th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a virtual reality application allowing users to see themselves in third person.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Streamer Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/htn2017",
        },
        {
          title: "Client Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/RTSPClient",
        },
      ],
    },
    {
      title: "Hack The 6ix",
      dates: "August 26th - 27th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ShareShip/ShareShip",
        },
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://share-ship.herokuapp.com/",
        },
      ],
    },
    {
      title: "Stupid Hack Toronto",
      dates: "July 23rd, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/nsagirlfriend/nsagirlfriend",
        },
      ],
    },
    {
      title: "Global AI Hackathon - Toronto",
      dates: "June 23rd - 25th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/TinySamosas/",
        },
      ],
    },
    {
      title: "McGill AI for Social Innovation Hackathon",
      dates: "June 17th - 18th, 2017",
      location: "Montreal, Quebec",
      description:
        "Developed realtime facial microexpression analyzer using AI",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
      links: [],
    },
    {
      title: "Open Source Circular Economy Days Hackathon",
      dates: "June 10th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/genecis",
        },
      ],
    },
    {
      title: "Make School's Student App Competition 2017",
      dates: "May 19th - 21st, 2017",
      location: "International",
      description: "Improved PocketDoc and submitted to online competition",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
      win: "Top 10 Finalist | Honourable Mention",
      links: [
        {
          title: "Medium Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
        },
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "HackMining",
      dates: "May 12th - 14th, 2017",
      location: "Toronto, Ontario",
      description: "Developed neural network to optimize a mining process",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
      links: [],
    },
    {
      title: "Waterloo Equithon",
      dates: "May 5th - 7th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "SpaceApps Waterloo",
      dates: "April 28th - 30th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/earthwatch",
        },
      ],
    },
    {
      title: "MHacks 9",
      dates: "March 24th - 26th, 2017",
      location: "Ann Arbor, Michigan",
      description:
        "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/threejs-planes",
        },
      ],
    },
    {
      title: "StartHacks I",
      dates: "March 4th - 5th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
      win: "1st Place Winner",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-ionic",
        },
        {
          title: "Source (Server)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-rails",
        },
      ],
    },
    {
      title: "QHacks II",
      dates: "February 3rd - 5th, 2017",
      location: "Kingston, Ontario",
      description:
        "Developed a mobile game which enables city-wide manhunt with random lobbies",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/human-huntr-react-native",
        },
        {
          title: "Source (API)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/human-huntr-rails",
        },
      ],
    },
    {
      title: "Terrible Hacks V",
      dates: "November 26th, 2016",
      location: "Waterloo, Ontario",
      description:
        "Developed a mock of Windows 11 with interesting notifications and functionality",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
        },
      ],
    },
    {
      title: "Portal Hackathon",
      dates: "October 29, 2016",
      location: "Kingston, Ontario",
      description:
        "Developed an internal widget for uploading assignments using Waterloo's portal app",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/UWPortalSDK/crowmark",
        },
      ],
    },
  ],
} as const;
