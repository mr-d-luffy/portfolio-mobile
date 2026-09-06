import { Icons } from "@/components/icons";
import { HomeIcon, icons, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";

export const DATA = {
  name: "Mohit Shivankar",
  initials: "MS",
  url: "https://mobile.mr-silicon.in",
  location: "Nagpur, Maharashtra IN",
  locationLink: "https://www.google.com/maps/place/nagpur",
  description:
    "Software Engineer turned Entrepreneur. I love building things and helping people. Very active on Instagram.",
  summary:
    "As a dedicated Full Stack Developer, I’ve been sharpening my skills through hands‑on projects and competitive programming. In March 2025, I won the Code Hack competition at TechTrix 2K25, a national‑level technical event, and I’m proud to have been ranked as a Top Campus Ambassador for IIT Bombay. Beyond that, I’ve actively participated in hackathons, contributed to open‑source projects, and built full‑stack applications to solve real‑world problems. I’m now eager to channel this experience into building impactful, scalable digital products.",
  avatarUrl: "/proImage.jpg",
  skills: [
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Typescript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "Python", icon: Python },
    // { name: "Go", icon: Golang },
    { name: "Postgres", icon: Postgresql },
    { name: "Docker", icon: Docker },
    { name: "Kubernetes", icon: Kubernetes },
    { name: "Java", icon: Java },
    { name: "C++", icon: Csharp },
    { name: "Flutter" },
    { name: "Dart" },
    { name: "FastAPI" },
    { name: "Django" },
    { name: "MySQL" },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "SiliconBrains@mr-silicon.in",
    tel: "+91 8788358100",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/mr-d-luffy",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/mohit-shivankar-a87964340/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/codexpr000",
        icon: Icons.x,

        navbar: true,
      },
      Instgram: {
        name: "Instagram",
        url: "https://www.instagram.com/code_x_pro1/",
        icon: Icons.globe,
        navbar: true,
      },
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
      company: "IIT Bombay Techfest",
      href: "https://ca.techfest.org/",
      badges: [],
      location: "Remote",
      title: "Collage Ambassador",
      logoUrl: "/IITB.png",
      start: "July 2026",
      end: "Dec 2026",
      description:
        "As a Campus Ambassador for IIT Bombay Techfest, I established a structured outreach and onboarding protocol across my campus network, creating standardized resources and communication frameworks to streamline participant engagement. I streamlined operational workflows by coordinating multiple volunteer teams simultaneously and standardizing reporting pipelines, ensuring seamless event execution across various departments. I also architected a comprehensive data tracking system to monitor engagement metrics, participant feedback, and historical event trends, leveraging these insights to refine outreach strategies and boost overall participation. Additionally, I orchestrated a high-impact digital engagement drive utilizing social media and community platforms, successfully onboarding 200+ participants and significantly expanding Techfest's campus footprint—earning me the distinction of a Top Ranker among all campus ambassadors nationwide.",
    },
  ],
  education: [
    {
      school: "Abhinandan Juniour Collage",
      href: "#",
      degree: "Major Science",
      logoUrl: "/abhi.png",
      start: "2022",
      end: "2024",
    },
    {
      school: "RTM Nagpur University",
      href: "https://nagpuruniversity.ac.in/",
      degree: "BS in Computer Science Major (Data Science)",
      logoUrl: "/rtmnu.png",
      start: "2024",
      end: "2027",
    },
  ],
  projects: [
    {
      title: "Hackethon Team Matcher",
      href: "https://hackethon-team-matcher.vercel.app/",
      dates: "Aug 2026",
      active: true,
      description:
        "Hackathon Team Matcher solves the universal hackathon struggle of finding the right teammates by connecting students based on technical skills, project interests, and collaboration styles. Built with SvelteKit and TypeScript, it features smart matching, hackathon discovery, a ranker leaderboard, and real-time team formation — enabling students to focus on building innovative solutions.",
      technologies: [
        "Svelte",
        "ExpressJS",
        "Typescript",
        "PostgreSQL",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://hackethon-team-matcher.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/htm.webp",
      video: "/htm.webp",
    },
    {
      title: "Urban Infrasctustrure Cascade Simulator",
      href: "https://urban-infrastructure-cascade-simula.vercel.app/",
      dates: "Aug 2026",
      active: true,
      description:
        "Urban Infrastructure Cascade Simulator is an interactive simulation tool I built to model how failures cascade across interconnected city systems—when one network fails, the entire city follows. The platform allows users to run simulations that track failure propagation, cascade depth, recovery time, and overall system impact in real-time.",
      technologies: [
        "Flutter/Dart",
        "ExpressJS",
        "Typescript",
        "PostgreSQL",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://urban-infrastructure-cascade-simula.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/htm.webp",
      video: "/htm.webp",
    },
  ],
  hackathons: [
    {
      title: "Code Forge",
      dates: "August 2026",
      location: "Nagpur, Maharastra",
      description: "At GH Raisoni Collage Of Engineering",
      image: "https://content.reskilll.com/IyHGjbTh.png",
      mlh: "https://content.reskilll.com/IyHGjbTh.png",
      links: [],
    },
    {
      title: "TechXPlore",
      dates: "August 2026",
      location: "Nagpur, Maharastra",
      description: "At Tulshiram Gaikwad Patil Collage Of Engineering",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRBYe8S2Mv3BWkCYRo2jxAJuM6UpeaBqB2d-j1AKKNKIMmb9iWBbvqWOA&s=10",
      mlh: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRBYe8S2Mv3BWkCYRo2jxAJuM6UpeaBqB2d-j1AKKNKIMmb9iWBbvqWOA&s=10",
      links: [],
    },
    {
      title: "TechTrix 2k25",
      dates: "March 2025",
      location: "Nagpur, Maharastra",
      description:
        "1st Rank In Coding & Cryptography Challenge at JL Priyadarshani Collage Of Engineering.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRmqrzyujn5lvKSXATQv0dOsUSavKYIaUqbGfSMzPg1Q&s",
      mlh: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRmqrzyujn5lvKSXATQv0dOsUSavKYIaUqbGfSMzPg1Q&s",
      links: [],
    },
    {
      title: "Campus Innovate Hackethon",
      dates: "March 2025",
      location: "Nagpur, Maharastra",
      description: "At GH Raisoni Collage Of Engineering",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjhYYrwE_n7LyuF_0qvWGybRSbStBgBT6PQK22knS-5A&s=10",
      mlh: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjhYYrwE_n7LyuF_0qvWGybRSbStBgBT6PQK22knS-5A&s=10",
      links: [],
    },
  ],
} as const;
