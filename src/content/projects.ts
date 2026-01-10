export type Semester = "Spring" | "Fall";

export type Project = {
  slug: string;
  title: string;
  year: number;
  semester: Semester

  stack: string[];
  description: string;

  links?: {
    repo?: string;
    demo?: string;
    paper?: string;
  }

  mainImage?: string;

  sections: Array<
    | { type: "text"; heading: string; content: string }
    | { type: "bullets"; heading: string; items: string[]}
    | { type: "images"; images: string[]}
    >;
};

export const projects: Project[] = [
  // {
  //   slug: "smart-hangboard",
  //   title: "Smart Hangboard",
  //   year: 2025,
  //   semester: "Spring",

  //   stack: ["C++ / Arduino", "CAD", "CNC Wood Milling", "Laser Cutting", "Soldering"],
  //   description: [
  //     "Tracked hold engagement with capacitive sensors and enforced rest timing between sets",
  //     "Integrated 7-seg display output for per-hold feedback",
  //   ],

  //   links: {
  //     repo: "https://github.com/lalexeyev/hangboard",
  //   },



  // },
  {
    slug: "uber-fare-price-predictor",
    title: "Uber Fare Price Predictor",
    year: 2024,
    semester: "Fall",

    stack: ["Python", "Scikit-learn", "Pandas", "Matplotlib/Seaborn"],
    description: "Machine learning model to predict Uber ride fares based on factors based on location and temporal factors using historical trip data",

    links: {
      repo: "https://github.com/lalexeyev/Uber-Fare-Price-Predictor",
      paper: "https://lalexeyev.github.io/ML7641-Report/"
    },

    mainImage: "/projects/uber-fare-predictor/uber.jpeg",
    sections: [
      {
        type: "text",
        heading: "Problem",
        content:
          "Uber does not reveal trip cost until a user is ready to book, even though millions of people rely on ridesharing every month. This project builds a machine-learning system that predicts the price of a ride in advance using historical trip data, allowing riders to better estimate and plan transportation costs.",
      },

      {
        type: "text",
        heading: "Dataset & Features",
        content:
          "The model was trained on a large Kaggle dataset of Uber rides containing fare amount, pickup and drop-off GPS coordinates, timestamps, and passenger count. From this data, I engineered additional features such as day of week, hour of day, and trip distance computed from latitude and longitude.",
      },

      {
        type: "bullets",
        heading: "Preprocessing Pipeline",
        items: [
          "Removed incomplete and invalid trips",
          "Filtered outliers in fare, distance, and GPS coordinates",
          "Engineered temporal features (day of week, hour of day)",
          "Computed trip distance from pickup and drop-off coordinates",
          "Standardized numerical features to zero mean and unit variance",
        ],
      },

      {
        type: "text",
        heading: "Models",
        content:
          "I trained both supervised and unsupervised models to predict fares. Linear regression and random forest regressors were used as supervised baselines, while a Gaussian Mixture Model (GMM) was used to cluster trips into pricing regimes such as short city rides or longer rush-hour trips. New rides were assigned to a cluster and priced using that cluster’s average fare.",
      },

      {
        type: "bullets",
        heading: "Results",
        items: [
          "Gaussian Mixture Model: R² = 0.801, MAE = 1.266, RMSE = 1.660",
          "Random Forest: R² = 0.663, MAE = 1.547, RMSE = 2.209",
          "Linear Regression: R² = 0.651, MAE = 1.574, RMSE = 2.209",
          "GMM reduced error by over 40% compared to guessing the average fare",
        ],
      },

      {
        type: "text",
        heading: "Why It Works",
        content:
          "The unsupervised GMM captured natural groupings in trip behavior such as distance, passenger count, and time of day, which allowed it to model nonlinear pricing patterns more effectively than standard regression models.",
      },
    ]
  },
  // {
  //   slug: "auto-llm-tuner",
  //   title: "Auto LLM Tuner",
  //   year: 2025,
  //   semester: "Fall",
  //   stack: ["Python", "PyTorch","Hugging Face Transformers", "Matplotlib/Seaborn", "Slurm"],
  //   links: [
  //     { label: "GitHub", href: "https://github.com/JonathanHuangg/AutoLLMTuner" },
  //   ],
  //   description: [
  //     "Automated tuning of LLM parameters for optimal performance",
  //     "Integrated with popular LLM frameworks and libraries",
  //   ],
  // },
  // {
  //   slug: "liftr",
  //   title: "Liftr",
  //   year: 2025,
  //   semester: "Spring",
  //   stack: ["React Native", "Firebase"],
  //   links: [
  //     { label: "GitHub", href: "https://github.com/haroon-shaikh/workoutGramNative" },
  //     { label: "Demo", href: "" },
  //   ],
  //   description: [
  //     "Automated tuning of LLM parameters for optimal performance",
  //     "Integrated with popular LLM frameworks and libraries",
  //   ],
  // },
  // {
  //   slug: "chat-mask",
  //   title: "Chat Mask",
  //   year: 2025,
  //   semester: "Fall",
  //   stack: ["C++ / Arduino", "Teensy 4.0", "KiCAD", "Embedded Signal Processing"],
  //   links: [
  //     { label: "GitHub", href: "https://github.com/lalexeyev/chat-mask" },
  //   ],
  //   description: [
  //     "Automated tuning of LLM parameters for optimal performance",
  //     "Integrated with popular LLM frameworks and libraries",
  //   ],
  // },
  // {
  //   slug: "dungeon-crawler",
  //   title: "2D Dungeon Crawler",
  //   year: 2023,
  //   semester: "Fall",
  //   stack: ["Java", "Gradle", "2D Game Development"],
  //   links: [
  //     { label: "GitHub", href: "https://github.com/lalexeyev/2D-Dungeon-Crawler" },
  //   ],
  //   description: [
  //     "Automated tuning of LLM parameters for optimal performance",
  //     "Integrated with popular LLM frameworks and libraries",
  //   ],
  // },
  // {
  //   slug: "ems-scheduling",
  //   title: "EMS Scheduling Website",
  //   year: 2025,
  //   semester: "Spring",
  //   stack: ["React"],
  //   links: [
  //     { label: "GitHub", href: "https://github.com/lalexeyev/2D-Dungeon-Crawler" },
  //   ],
  //   description: [
  //     "Automated tuning of LLM parameters for optimal performance",
  //     "Integrated with popular LLM frameworks and libraries",
  //   ],
  // },
  // {
  //   slug: "portfolio-website",
  //   title: "Personal Portfolio Website",
  //   year: 2026,
  //   semester: "Spring",
  //   stack: ["Next.js", "TypeScript", "Tailwind CSS"],
  //   links: [
  //     { label: "GitHub", href: "https://github.com/lalexeyev/2D-Dungeon-Crawler" },
  //   ],
  //   description: [
  //     "Automated tuning of LLM parameters for optimal performance",
  //     "Integrated with popular LLM frameworks and libraries",
  //   ],
  // },
];
