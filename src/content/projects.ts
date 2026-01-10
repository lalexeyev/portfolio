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
    report?: string;
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
      report: "https://lalexeyev.github.io/ML7641-Report/"
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
  {
    slug: "auto-llm-tuner",
    title: "Auto LLM Tuner",
    year: 2025,
    semester: "Fall",

    stack: ["Python", "PyTorch","Hugging Face Transformers", "bitsandbytes", "Matplotlib/Seaborn", "Slurm"],
    description:"Evolutionary search framework that automatically discovers Pareto-optimal per-layer quantization schemes for LLMs under memory/latency constraints.",

    links: {
      repo: "https://github.com/JonathanHuangg/AutoLLMTuner",
      report: "/projects/llm-quant/Report.pdf"
    },

    sections: [
      {
        type: "text",
        heading: "Problem",
        content:
          "LLMs are expensive to run due to high inference latency and memory cost. Standard quantization applies one precision across the whole model, but different layers have different sensitivity. This project builds a system that automatically selects per-layer bit-widths to balance efficiency and output quality, despite an exponential search space.",
      },

      {
        type: "text",
        heading: "Approach",
        content:
          "We represent a model configuration as a per-layer precision vector (e.g., [8, 4, 4, 16, 8, ...]). An evolutionary algorithm generates candidate vectors, applies layer-wise quantization, runs evaluation, combines metrics into a fitness score, and iterates toward high-quality tradeoffs on the Pareto frontier.",
      },

      {
        type: "bullets",
        heading: "System Architecture",
        items: [
          "Model management layer: load base model, apply per-layer bit-widths, run inference, collect metrics",
          "Precision vector system: create/manage per-layer precision vectors",
          "Evaluation pipeline: compute accuracy, latency, and memory footprint",
          "Fitness module: aggregate metrics into a single optimization score",
          "Evolutionary search engine: selection + mutation/crossover to find Pareto-optimal configs",
          "Visualization: Pareto frontier plots + fitness progression + bit-width heatmaps",
        ],
      },

      {
        type: "bullets",
        heading: "Dataset & Setup",
        items: [
          "Evaluated on MATH-500 (and a faster MATH-50 subset) for math reasoning benchmarking",
          "Quantization levels explored: 4-bit / 8-bit / 16-bit",
          "Models tested included Qwen2.5-7B-Instruct, Trinity-Mini, and Mistral-7B",
          "Multi-GPU evaluation using Python multiprocessing; experiments run on 8× H200 GPUs (Vast.ai) and additional runs on Pace/ICE",
        ],
      },

      {
        type: "text",
        heading: "Findings",
        content:
          "Across tested models, the best configurations tended to lie in a low-latency, low-memory region, and strong configurations often used non-uniform precision vectors (different bit-widths per layer) rather than uniform quantization.",
      },
    ],
  },
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
  {
    slug: "chat-mask",
    title: "Chat Mask",
    year: 2025,
    semester: "Fall",

    stack: ["C++ / Arduino", "Teensy 4.0", "KiCAD", "Embedded Signal Processing"],
    description:"An underwater, head-worn augmented-reality display that visualizes real-time dolphin vocalizations as spectrograms to support human-guided communication with wild dolphins.",

    links: {
      repo: "https://github.com/lalexeyev/chat-mask",
      report: "/projects/chat-mask/Report.pdf",
    },

    mainImage: "/projects/chat-mask/mask.jpg",

    sections: [
      {
        type: "text",
        heading: "Problem",
        content:
          "The Wild Dolphin Project uses a wearable computer (CHAT) to emit and detect computer-generated sounds meant to mimic dolphin whistles. In practice, dolphins respond with transposed, distorted, or click-based imitations that automated systems fail to recognize. Researchers must manually review spectrograms after a dive, making real-time interaction impossible. CHAT Mask solves this by giving divers a live spectrogram directly inside their dive mask.",
      },

      {
        type: "text",
        heading: "System Overview",
        content:
          "CHAT Mask is a head-mounted underwater display integrated into a SCUBAPRO Galileo HUD. It records underwater audio, processes it on-device, and displays a scrolling waterfall spectrogram in near-real time so researchers can visually identify dolphin vocalizations while swimming.",
      },

      {
        type: "bullets",
        heading: "Hardware Architecture",
        items: [
          "Analog NEMS microphone mounted inside the Galileo housing for waterproof audio capture",
          "Teensy 4.0 microcontroller for high-speed DSP and FFT computation",
          "TinyScreen 96×64 RGB OLED display driven over high-speed SPI",
          "Internal Li-ion battery with charging via Galileo’s USB interface",
          "Rotary knob and button from Galileo reverse-engineered for user input",
        ],
      },

      {
        type: "text",
        heading: "Signal Processing Pipeline",
        content:
          "Audio is captured, normalized, and passed through a high-pass filter to remove ocean noise. The cleaned signal is transformed using a 256-point FFT to maintain real-time performance, log-scaled for contrast, and downsampled to match the low-resolution OLED display.",
      },

      {
        type: "bullets",
        heading: "Real-Time Rendering",
        items: [
          "FFT bins mapped to colors and displayed as a scrolling waterfall spectrogram",
          "Ring buffer shifts previous columns instead of recomputing FFTs to improve performance",
          "Log-scaled intensity improves visibility of faint dolphin whistles",
          "Display shows ~1.75 seconds of audio at a time at 96×64 resolution",
        ],
      },

      {
        type: "text",
        heading: "Why 256-Point FFT",
        content:
          "Although 1024-point FFTs provide higher frequency resolution, FFT runtime scales as O(N log N). A 256-point FFT was chosen because it runs about five times faster, enabling smooth real-time visualization without dropped frames on the embedded processor.",
      },

      {
        type: "bullets",
        heading: "Engineering Achievements",
        items: [
          "Live spectrogram running on embedded hardware with no dropped frames",
          "Fully soldered prototype with microphone, display, and Teensy integrated",
          "CAD models created for the Galileo interior to enable future waterproof assembly",
          "Reverse-engineered Galileo pinouts for display and knob input",
        ],
      },

      {
        type: "images",
        images: ["/projects/chat-mask/device_display.png", "/projects/chat-mask/dolphin-call.png", "/projects/chat-mask/schematic.png"],
      }
    ],
  },
  {
    slug: "dungeon-crawler",
    title: "2D Dungeon Crawler",
    year: 2023,
    semester: "Fall",

    stack: ["Java", "Android", "Android Studio", "Gradle", "XML Layouts"],
    description:
      "Android-based 2D dungeon crawler, focusing on clean architecture, Activities/UI flow, and modular gameplay systems.",

    links: {
      repo: "https://github.com/lalexeyev/2D-Dungeon-Crawler",
      demo: "/projects/dungeon-crawler/demo.mp4",
    },

    mainImage: "/projects/dungeon-crawler/image.JPG",
    sections: [
      {
        type: "text",
        heading: "Overview",
        content:
          "A 2D dungeon crawler implemented as an Android app. The project emphasized object-oriented design and building a maintainable codebase while delivering a complete interactive game experience.",
      },
      {
        type: "bullets",
        heading: "Android Implementation",
        items: [
          "Built UI screens and navigation using Activities and XML layouts",
          "Managed app lifecycle behavior and state transitions during gameplay",
          "Organized assets and resources using Android’s resource system (res/)",
          "Used Gradle tooling for builds and dependency management",
        ],
      },
      {
        type: "bullets",
        heading: "Gameplay & Architecture",
        items: [
          "Implemented core gameplay loop and state management (start → play → end)",
          "Designed modular game components to keep logic separated from UI",
          "Collaborated in a team setting with Git-based integration and iterative development",
        ],
      },
    ],
  },
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
  {
    slug: "portfolio-website",
    title: "Personal Portfolio Website",
    year: 2026,
    semester: "Spring",

    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    description: "A simple website portfolio with a fixed sidebar and scrollable content area, dynamic project pages, and a data-driven content model for easy updates.",
    
    links: {
      repo: "https://github.com/lalexeyev/portfolio",
    },

    sections: [
      {
        type: "bullets",
        heading: "Key Features",
        items: [
          "Fixed sidebar + independently scrollable main content layout",
          "Section navigation using hash links (e.g., /#about, /#projects) for single-page UX",
          "Dynamic project pages via /projects/[slug] routed from a typed content model",
          "Reusable ProjectCard component for consistent project previews",
        ],
      },
      {
        type: "bullets",
        heading: "Engineering Choices",
        items: [
          "Data-driven content design (projects stored as typed objects with optional fields)",
          "Conditional rendering for per-project differences (videos, images, links, sections)",
          "Componentized layout (Sidebar, cards, sections) for maintainability",
        ],
      },
    ],
  },
];
