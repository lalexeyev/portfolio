export type Semester = "Spring" | "Fall";

export type Project = {
  slug: string;
  title: string;
  year: number;
  semester: Semester
  stack: string[];
  links: { label: string; href : string }[];
  description: string[];
};

export const projects: Project[] = [
  {
    slug: "smart-hangboard",
    title: "Smart Hangboard",
    year: 2025,
    semester: "Spring",
    stack: ["C++ / Arduino", "CAD", "CNC Wood Milling", "Laser Cutting", "Soldering"],
    links: [
      { label: "GitHub", href: "https://github.com/lalexeyev/hangboard" },
    ],
    description: [
      "Tracked hold engagement with capacitive sensors and enforced rest timing between sets",
      "Integrated 7-seg display output for per-hold feedback",
    ],
  },
  {
    slug: "uber-fare-price-predictor",
    title: "Uber Fare Price Predictor",
    year: 2024,
    semester: "Fall",
    stack: ["Python", "Scikit-learn", "Pandas", "Matplotlib/Seaborn"],
    links: [
      { label: "Report", href: "https://github.gatech.edu/pages/lalexeyev3/Group11_CSML7646/" },
      { label: "GitHub", href: "https://github.com/lalexeyev/Uber-Fare-Price-Predictor" },
    ],
    description: [
      "Tracked hold engagement with capacitive sensors and enforced rest timing between sets",
      "Integrated 7-seg display output for per-hold feedback",
    ],
  },
  {
    slug: "auto-llm-tuner",
    title: "Auto LLM Tuner",
    year: 2025,
    semester: "Fall",
    stack: ["Python", "PyTorch","Hugging Face Transformers", "Matplotlib/Seaborn", "Slurm"],
    links: [
      { label: "GitHub", href: "https://github.com/JonathanHuangg/AutoLLMTuner" },
    ],
    description: [
      "Automated tuning of LLM parameters for optimal performance",
      "Integrated with popular LLM frameworks and libraries",
    ],
  },
  {
    slug: "liftr",
    title: "Liftr",
    year: 2025,
    semester: "Spring",
    stack: ["React Native", "Firebase"],
    links: [
      { label: "GitHub", href: "https://github.com/haroon-shaikh/workoutGramNative" },
      { label: "Demo", href: "" },
    ],
    description: [
      "Automated tuning of LLM parameters for optimal performance",
      "Integrated with popular LLM frameworks and libraries",
    ],
  },
  {
    slug: "chat-mask",
    title: "Chat Mask",
    year: 2025,
    semester: "Fall",
    stack: ["C++ / Arduino", "Teensy 4.0", "KiCAD", "Embedded Signal Processing"],
    links: [
      { label: "GitHub", href: "https://github.com/lalexeyev/chat-mask" },
    ],
    description: [
      "Automated tuning of LLM parameters for optimal performance",
      "Integrated with popular LLM frameworks and libraries",
    ],
  },
  {
    slug: "dungeon-crawler",
    title: "2D Dungeon Crawler",
    year: 2023,
    semester: "Fall",
    stack: ["Java", "Gradle", "2D Game Development"],
    links: [
      { label: "GitHub", href: "https://github.com/lalexeyev/2D-Dungeon-Crawler" },
    ],
    description: [
      "Automated tuning of LLM parameters for optimal performance",
      "Integrated with popular LLM frameworks and libraries",
    ],
  },
  {
    slug: "ems-scheduling",
    title: "EMS Scheduling Website",
    year: 2025,
    semester: "Spring",
    stack: ["React"],
    links: [
      { label: "GitHub", href: "https://github.com/lalexeyev/2D-Dungeon-Crawler" },
    ],
    description: [
      "Automated tuning of LLM parameters for optimal performance",
      "Integrated with popular LLM frameworks and libraries",
    ],
  },
  {
    slug: "portfolio-website",
    title: "Personal Portfolio Website",
    year: 2026,
    semester: "Spring",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    links: [
      { label: "GitHub", href: "https://github.com/lalexeyev/2D-Dungeon-Crawler" },
    ],
    description: [
      "Automated tuning of LLM parameters for optimal performance",
      "Integrated with popular LLM frameworks and libraries",
    ],
  },
];
