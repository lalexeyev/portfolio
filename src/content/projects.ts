export type Project = {
  slug: string;
  title: string;
  year?: string;
  stack: string[];
  links?: { label: string; href: string }[];
  description: string[];
};

export const projects: Project[] = [
  {
    slug: "smart-hangboard",
    title: "Smart Hangboard",
    year: "2025",
    stack: ["Arduino Mega", "Embedded C++"],
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
    year: "2024",
    stack: ["Python", "Jupyter Notebook", "Pandas"],
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
    year: "2025",
    stack: ["Python", "Jupyter Notebook", "Pandas"],
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
    year: "2025",
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
    year: "2025",
    stack: ["Teensy", "Embedded C++"],
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
    year: "2023",
    stack: ["Java"],
    links: [
      { label: "GitHub", href: "https://github.com/lalexeyev/2D-Dungeon-Crawler" },
    ],
    description: [
      "Automated tuning of LLM parameters for optimal performance",
      "Integrated with popular LLM frameworks and libraries",
    ],
  },
];
