export type ProjectDetailSection = {
  heading: string;
  body: string;
  bullets?: string[];
};

export type Project = {
  slug: string;
  name: string;
  shortSummary: string;
  longSummary: string;
  role: string;
  techStack: string[];
  category: "Full-Stack" | "Data/ML" | "Tooling" | "Other";
  githubUrl: string;
  liveUrl?: string;
  favorite: boolean;
  featured: boolean;
  tags: string[];
  highlights: string[];
  detailSections: ProjectDetailSection[];
};

export const projects: Project[] = [
  {
    slug: "sportsbook-analysis",
    name: "Algorithmic Trading Model for Sports Betting",
    shortSummary:
      "Algorithmic trading model for sports betting that scans odds to find arbitrage and middling opportunities in real time.",
    longSummary:
      "Algorithmic trading model for sports betting that consumes real-time odds from multiple sportsbooks, normalizes and compares lines, and surfaces profitable arbitrage and middling opportunities. It combines data ingestion, pricing logic, and alerting so value bets can be identified quickly and consistently.",
    role: "Solo",
    techStack: ["Python", "APIs", "Pandas", "NumPy"],
    category: "Full-Stack",
    githubUrl: "https://github.com/Yuvraj2006py/Sportsbook-Analysis",
    favorite: true,
    featured: true,
    tags: ["Sports Analytics", "Arbitrage", "Automation"],
    highlights: [
      "Normalizes and compares odds from multiple sportsbooks.",
      "Detects both arbitrage and middling opportunities across markets.",
      "Implements repeatable pricing logic rather than ad-hoc calculations."
    ],
    detailSections: [
      {
        heading: "Problem",
        body:
          "Manually scanning odds across sportsbooks to find pricing inefficiencies is time-consuming and error-prone. The goal was to automate this search and surface clear, actionable opportunities so value bets are not missed."
      },
      {
        heading: "Data & Inputs",
        body:
          "The model works with live odds data from one or more sportsbooks. Each market is normalized into a consistent internal representation so that prices from different books can be compared safely.",
        bullets: [
          "Ingests real-time odds from sportsbook APIs (for example, prices and outcomes for specific games and markets).",
          "Normalizes markets so the same event and outcome are comparable between different sportsbooks.",
          "Converts raw prices into implied probabilities, which makes it easier to reason about edge."
        ]
      },
      {
        heading: "Approach & Architecture",
        body:
          "The system ingests odds, standardizes them, computes implied probabilities, and then searches for combinations where the implied edge is positive. The focus is on clear, repeatable pricing logic rather than ad-hoc line shopping.",
        bullets: [
          "Fetches odds programmatically from sportsbook APIs on a schedule or in response to user actions.",
          "Uses a normalization layer so markets, outcomes, and prices from different books all map into a single comparison model.",
          "Computes implied probabilities and checks for arbitrage and middling opportunities based on how prices line up between books."
        ]
      },
      {
        heading: "What I Implemented",
        body:
          "I designed and built the ingestion, transformation, and opportunity-detection logic end-to-end, from talking to APIs to flagging candidate trades.",
        bullets: [
          "Set up API integrations and the data cleaning / normalization path for odds data.",
          "Implemented pricing and edge-calculation utilities that turn bookmaker prices into implied probabilities and edge estimates.",
          "Added filtering logic so only meaningful arbitrage and middling opportunities are surfaced."
        ]
      },
      {
        heading: "Key Learnings",
        body:
          "This project reinforced the importance of clean data modeling for odds and of validating pricing logic carefully before treating suggested opportunities as signal."
      }
    ]
  },
  {
    slug: "echo",
    name: "Echo",
    shortSummary:
      "Intelligent journaling experience combining AI-powered emotional insights, mobile journaling, and web analytics.",
    longSummary:
      "Echo is an intelligent, cross-platform journaling experience that combines AI-powered emotional insights, mobile journaling, and web-based analytics. It is built as a full-stack monorepo that aims to make reflection and emotional tracking easier and more insightful.",
    role: "Team / Solo contributions",
    techStack: ["TypeScript", "React", "Next.js", "Node.js"],
    category: "Full-Stack",
    githubUrl: "https://github.com/Yuvraj2006py/Echo",
    favorite: true,
    featured: true,
    tags: ["Journaling", "AI", "Full-Stack"],
    highlights: [
      "Cross-platform journaling with both input and analytics surfaces.",
      "AI-powered emotional insights layered on top of raw entries.",
      "Monorepo structure for coordinating mobile and web experiences."
    ],
    detailSections: [
      {
        heading: "Problem",
        body:
          "Tracking emotions and reflections consistently across devices is difficult. Even when people do write regularly, the raw text is hard to interpret over time. There is no easy way to see patterns, trends, or how you were feeling across weeks and months."
      },
      {
        heading: "Data & Model",
        body:
          "Echo treats journal entries as structured data first and text second. That makes it possible to layer emotional signals, tags, and analytics on top of what would otherwise just be a wall of text.",
        bullets: [
          "Defines a data model for entries with metadata like timestamps, tags, and high-level sentiment.",
          "Allows additional emotional signals or AI-generated tags to be attached to each entry.",
          "Keeps the core schema simple enough that it can work across both mobile and web clients."
        ]
      },
      {
        heading: "Approach & Architecture",
        body:
          "Echo uses a full-stack TypeScript stack and a monorepo to coordinate a journaling input experience with analytics and AI-driven insights. The same core logic and data model back both input and analysis surfaces.",
        bullets: [
          "Structured data model for journal entries and derived emotional signals.",
          "APIs for creating, updating, and retrieving entries across platforms.",
          "Analytics views for visualizing patterns over time, such as changes in sentiment or activity."
        ]
      },
      {
        heading: "What I Implemented",
        body:
          "I contributed to the journaling workflows and analytics surfaces, focusing on turning raw entries into something that can be analyzed and reflected on in a structured way.",
        bullets: [
          "Helped design the data model for entries and emotional tags.",
          "Worked on components for input flows and analytics dashboards.",
          "Laid the groundwork for AI-powered insights (for example, emotional summaries and highlights) that can be tied into model APIs."
        ]
      },
      {
        heading: "Key Learnings",
        body:
          "Echo emphasized designing for both user experience and long-term data usability when building personal tools. Entries should feel easy to write, but still be structured enough to analyze later."
      }
    ]
  },
  {
    slug: "refine-extension",
    name: "Refine",
    shortSummary:
      "Chrome extension that turns vague, low-quality prompts into clear, structured, output-oriented instructions for browser-based LLMs.",
    longSummary:
      "Refine is a Chrome extension for prompt optimization that acts like a \"Grammarly for prompts\" for large language models. It intercepts prompts before they are sent to browser-based LLMs (ChatGPT, Claude, Cursor, and others) and rewrites them to be clearer, more structured, and aligned with the user’s intent so high-quality responses are more likely on the first attempt.",
    role: "Solo",
    techStack: ["TypeScript", "React", "Extension APIs"],
    category: "Tooling",
    githubUrl: "https://github.com/Yuvraj2006py/refine-extension",
    favorite: true,
    featured: true,
    tags: ["Prompt Optimization", "LLM Tools", "Chrome Extension"],
    highlights: [
      "Transforms vague, underspecified prompts into clear, structured instructions.",
      "Sits directly in the browser and works across multiple LLM interfaces (e.g., ChatGPT, Claude, Cursor).",
      "Focuses on output quality by making prompts more explicit about context, constraints, and desired format."
    ],
    detailSections: [
      {
        heading: "Problem",
        body:
          "Most LLM failures are really prompt failures. Users frequently write prompts that are ambiguous, missing context or constraints, and unclear about the desired output format or depth. This leads to generic, inconsistent, or unusable responses and forces people to iterate on prompts over and over."
      },
      {
        heading: "Solution",
        body:
          "Refine is a Chrome extension that embeds prompt engineering directly into the user’s workflow. It intercepts a prompt before it is sent to the LLM and rewrites it to be more specific, contextual, and output-oriented, while preserving the user’s intent and voice.",
        bullets: [
          "Acts like a \"Grammarly for prompts\" focused on clarity and structure rather than grammar.",
          "Improves prompt quality without requiring users to learn prompt engineering techniques.",
          "Keeps users in control by letting them review, edit, or revert the refined prompt."
        ]
      },
      {
        heading: "How It Works",
        body:
          "Refine runs end-to-end inside the browser: it detects prompts in LLM web UIs, analyzes them for quality, rewrites them, and then lets the user decide what gets sent.",
        bullets: [
          "Prompt Detection: injects into browser-based LLM interfaces (such as ChatGPT, Claude, and Cursor) and captures prompts before they are submitted.",
          "Intent & Quality Analysis: inspects prompts for vagueness, missing constraints (format, length, audience, tone), and implicit intent.",
          "Prompt Refinement Engine: rewrites prompts to add structure, clarify expectations, and explicitly define the desired output while keeping the user’s voice.",
          "User Review & Control: surfaces the refined prompt so the user can accept it, tweak it further, or revert to the original before sending.",
          "LLM Execution: sends the finalized prompt to the LLM to produce more accurate and targeted responses on the first attempt."
        ]
      },
      {
        heading: "What I Implemented",
        body:
          "I built the extension’s core behavior, from browser integration through to the prompt refinement workflow and review UI.",
        bullets: [
          "Implemented the TypeScript/React-based extension shell and content/background scripts.",
          "Hooked into LLM web UIs to capture prompts without breaking the normal user flow.",
          "Designed and wired the refinement workflow, including how refined prompts are displayed and approved by the user."
        ]
      },
      {
        heading: "Key Learnings",
        body:
          "This project deepened my understanding of building model-agnostic tooling around LLMs, designing non-intrusive browser extensions, and treating prompt quality as a first-class UX problem rather than an afterthought."
      }
    ]
  },
  {
    slug: "credit-card-fraud-detector",
    name: "Credit-Card-Fraud-Detector",
    shortSummary:
      "End-to-end ETL pipeline for credit card fraud detection using Apache Airflow, Docker, and PostgreSQL.",
    longSummary:
      "Credit-Card-Fraud-Detector is an end-to-end ETL pipeline for credit card fraud detection. It uses Apache Airflow orchestrated inside Docker to automate data ingestion, feature engineering, model training, and storing results in PostgreSQL.",
    role: "Solo",
    techStack: ["Python", "Apache Airflow", "Docker", "PostgreSQL", "Pandas"],
    category: "Data/ML",
    githubUrl: "https://github.com/Yuvraj2006py/Credit-Card-Fraud-Detector",
    favorite: false,
    featured: true,
    tags: ["ETL", "Fraud Detection", "Airflow"],
    highlights: [
      "Automated DAGs for data ingestion, feature engineering, and model retraining.",
      "Containerized with Docker for reproducible execution.",
      "Stores results and metrics in PostgreSQL for downstream analysis."
    ],
    detailSections: [
      {
        heading: "Problem",
        body:
          "Fraud detection models require consistent, automated data pipelines. Without a proper ETL and orchestration layer, it is easy for training data, features, and model versions to drift apart, which makes results hard to trust and reproduce."
      },
      {
        heading: "Pipeline Design",
        body:
          "The project defines an explicit pipeline that expresses how raw transactional data turns into model-ready features and finally into fraud predictions and metrics.",
        bullets: [
          "Uses Docker to containerize the environment so runs are reproducible.",
          "Relies on Apache Airflow DAGs to orchestrate ingestion, transformation, and training tasks.",
          "Stores outputs and metrics in PostgreSQL so they can be inspected or visualized later."
        ]
      },
      {
        heading: "Approach & Architecture",
        body:
          "Apache Airflow orchestrates an end-to-end pipeline from raw data ingestion through feature engineering and model training to persistence.",
        bullets: [
          "Defined Airflow DAGs for each stage of the pipeline (ingestion, feature engineering, training, evaluation).",
          "Containerized the environment with Docker for consistent execution across machines.",
          "Persisted outputs to PostgreSQL for analysis and potential downstream dashboards."
        ]
      },
      {
        heading: "What I Implemented",
        body:
          "I implemented the DAGs, feature engineering code, and model training jobs that connect all of the pieces together.",
        bullets: [
          "Wrote operators for ingestion and transformation tasks on credit card transaction data.",
          "Engineered model-ready features from raw transactional fields (for example, aggregations and derived fields).",
          "Implemented training and evaluation steps for the fraud detection model and saved outputs into PostgreSQL."
        ]
      },
      {
        heading: "Key Learnings",
        body:
          "This project strengthened my understanding of orchestration, scheduling, and how to structure production-like ML pipelines so that data, features, and models stay aligned over time."
      }
    ]
  },
  {
    slug: "movie-recommendation-system",
    name: "Movie-Recommendation-System",
    shortSummary:
      "Content-based movie recommender using Streamlit, Pandas, and TMDb API to suggest similar titles.",
    longSummary:
      "Movie-Recommendation-System is a content-based recommender that lets users select a movie and receive a list of five similar titles. It uses precomputed similarity between movies together with the TMDb API to fetch posters and metadata, and Streamlit for the user interface.",
    role: "Solo",
    techStack: ["Python", "Streamlit", "Pandas", "TMDb API"],
    category: "Data/ML",
    githubUrl: "https://github.com/Yuvraj2006py/Movie-Recommendation-System",
    favorite: false,
    featured: true,
    tags: ["Recommender Systems", "Streamlit"],
    highlights: [
      "Lets users pick a movie and receive five similar recommendations.",
      "Uses precomputed similarity across movies for fast lookup.",
      "Fetches posters and metadata via the TMDb API for a richer UI."
    ],
    detailSections: [
      {
        heading: "Problem",
        body:
          "Finding similar movies manually is tedious, especially when you only remember the feel of a film rather than its exact title. The goal was to build an interface where a user can pick one movie they like and immediately explore a small, high-quality set of similar titles with posters and basic details."
      },
      {
        heading: "Recommendation Approach",
        body:
          "The app uses a content-based approach: movies are represented by features (for example, genres and metadata), and a precomputed similarity matrix lets the app quickly look up which titles are closest to a given movie.",
        bullets: [
          "Represents movies using content features that reflect what they are about.",
          "Precomputes pairwise similarity so recommendations are just fast lookups.",
          "Uses a simple interface to show the top five most similar titles."
        ]
      },
      {
        heading: "UI & Integration",
        body:
          "Streamlit provides a lightweight interface on top of the data and similarity logic, and the TMDb API is used to bring the results to life with real posters and metadata.",
        bullets: [
          "Precomputed similarity matrix for efficient recommendation.",
          "TMDb API integration for posters and details.",
          "Streamlit app to expose an interactive interface for picking movies and exploring recommendations."
        ]
      },
      {
        heading: "What I Implemented",
        body:
          "I implemented the similarity retrieval logic, TMDb integration, and the Streamlit front-end that ties everything together.",
        bullets: [
          "Built the recommendation function around the similarity matrix so it returns five similar movies for a given title.",
          "Integrated TMDb API calls for posters and metadata so the recommendations feel visual and engaging.",
          "Designed Streamlit components for selecting movies and viewing recommendation results."
        ]
      },
      {
        heading: "Key Learnings",
        body:
          "This project gave me hands-on experience with content-based recommender systems and with using Streamlit to quickly turn data and models into a usable, interactive app."
      }
    ]
  },
  {
    slug: "evomind",
    name: "EvoMind",
    shortSummary:
      "Modular AutoML platform that fuses evolutionary search with adaptive pipelines, explainability, and reporting for end-to-end automated machine learning.",
    longSummary:
      "EvoMind is a modular AutoML platform that fuses evolutionary search with adaptive pipelines, explainability, and reporting. The project ships as an importable SDK, CLI, and cloud-ready API so teams can automate experimentation end to end. It includes autonomous task detection, specialized adapters for different data types, Ray-powered parallel evolution, and comprehensive explainability with SHAP/LIME integration.",
    role: "Solo",
    techStack: ["Python", "Ray", "Optuna", "Streamlit", "FastAPI", "SHAP", "LIME", "Docker"],
    category: "Data/ML",
    githubUrl: "https://github.com/Yuvraj2006py/EvoMind",
    favorite: false,
    featured: true,
    tags: ["AutoML", "Evolutionary Algorithms", "MLOps", "Explainability"],
    highlights: [
      "Modular architecture with autonomous task detection and specialized adapters for tabular, NLP, vision, and multimodal data.",
      "Ray-powered parallel fitness evaluation with Optuna refinement for efficient evolutionary search.",
      "Built-in explainability with SHAP/LIME, fairness diagnostics, and automated report generation.",
      "Multiple interfaces: SDK, CLI, FastAPI service, and Streamlit dashboard for different use cases."
    ],
    detailSections: [
      {
        heading: "Problem",
        body:
          "Building production ML models requires extensive experimentation, feature engineering, and hyperparameter tuning. Manual workflows are slow, error-prone, and don't scale. Teams need an automated system that can detect task types, adapt to different data modalities, optimize models efficiently, and provide explainability and reporting out of the box."
      },
      {
        heading: "Architecture & Pipeline",
        body:
          "EvoMind follows a modular pipeline architecture that processes data from ingestion through profiling, task detection, adaptation, evolution, and insights generation. Each stage is designed to be autonomous and adaptable.",
        bullets: [
          "Dataset → Profiler: schema detection, data health scoring, integrity warnings, and time-series diagnostics.",
          "Task Detector & Adapters: autonomous task selection (classification, regression, forecasting) with specialized preprocessors for tabular, retail, NLP, vision, and multimodal data.",
          "Evolution Engine: Ray-powered parallel fitness evaluation, Optuna refinement, and ensemble synthesis of leading genomes.",
          "Insights & Reporting: SHAP/LIME explainability, fairness diagnostics, narrative summaries, and HTML/PDF report export.",
          "Visualization: Streamlit dashboard with overview, insights, data profile, lineage replay, and report download tabs."
        ]
      },
      {
        heading: "Evolutionary Search & Optimization",
        body:
          "The core of EvoMind uses evolutionary algorithms to search the space of possible model configurations and pipelines. This approach allows the system to discover novel combinations that traditional grid search or random search might miss.",
        bullets: [
          "Population-based search where each genome represents a complete pipeline configuration (preprocessing, model type, hyperparameters).",
          "Ray-powered parallel fitness evaluation allows multiple genomes to be tested simultaneously, dramatically speeding up the search process.",
          "Optuna integration for hyperparameter refinement within each genome, combining evolutionary search with Bayesian optimization.",
          "Ensemble synthesis that combines the best-performing genomes into a final model for improved robustness and performance.",
          "Automatic fallback to threaded execution on Windows or when Ray is unavailable, ensuring broad compatibility."
        ]
      },
      {
        heading: "Task Detection & Data Adaptation",
        body:
          "EvoMind automatically detects the type of ML task and adapts its preprocessing and model selection accordingly. This eliminates the need for manual task specification in most cases.",
        bullets: [
          "Autonomous task detection that identifies whether the problem is classification, regression, or forecasting based on data characteristics.",
          "Specialized adapters for different data types: tabular data, retail/transactional data, NLP text, computer vision, and multimodal combinations.",
          "Schema detection and data profiling that identifies data quality issues, missing patterns, and distribution characteristics.",
          "Time-series diagnostics that detect temporal patterns and suggest appropriate forecasting approaches.",
          "Data health scoring that provides warnings about integrity issues before model training begins."
        ]
      },
      {
        heading: "Explainability & Reporting",
        body:
          "EvoMind includes built-in explainability tools and automated reporting so teams can understand model behavior and communicate results effectively.",
        bullets: [
          "SHAP and LIME integration for feature importance and local explanations that help users understand why models make specific predictions.",
          "Fairness diagnostics that detect potential bias in model predictions across different demographic or categorical groups.",
          "Narrative summaries that automatically generate human-readable descriptions of model performance, key features, and insights.",
          "HTML and PDF report export for sharing results with stakeholders who may not have technical backgrounds.",
          "Model lineage tracking that records the complete evolution path of each model, making it possible to replay and understand how final configurations were discovered."
        ]
      },
      {
        heading: "Multiple Interfaces & Deployment",
        body:
          "EvoMind provides multiple ways to interact with the platform, from simple Python SDK calls to CLI commands, REST APIs, and interactive dashboards. This flexibility makes it suitable for different workflows and deployment scenarios.",
        bullets: [
          "Python SDK: importable library that can be used in notebooks, scripts, or larger applications with simple API calls.",
          "CLI: command-line interface for running experiments, listing models, loading saved artifacts, and generating documentation.",
          "FastAPI Service: cloud-ready REST API that can be deployed as a microservice for integration with other systems.",
          "Streamlit Dashboard: interactive web interface for exploring results, viewing insights, and downloading reports.",
          "Docker support with compose files for easy deployment and Ray cluster setup for distributed execution.",
          "Model registry that saves all artifacts (models, metrics, configurations) with auto-incrementing run IDs for versioning and reproducibility."
        ]
      },
      {
        heading: "What I Implemented",
        body:
          "I designed and built EvoMind end-to-end, from the evolutionary search engine through task detection, data adapters, explainability integration, and all the interfaces (SDK, CLI, API, dashboard).",
        bullets: [
          "Implemented the evolutionary search engine with Ray integration for parallel fitness evaluation and Optuna for hyperparameter refinement.",
          "Built autonomous task detection and specialized adapters for different data types (tabular, NLP, vision, multimodal).",
          "Integrated SHAP and LIME for explainability, along with fairness diagnostics and automated report generation.",
          "Created the Python SDK with introspection capabilities (describe_config, explain, generate_config_docs) for developer-friendly exploration.",
          "Developed the CLI interface with commands for running experiments, managing models, and generating documentation.",
          "Built the FastAPI service for cloud deployment and the Streamlit dashboard for interactive exploration of results.",
          "Implemented the model registry system with run ID management and artifact persistence."
        ]
      },
      {
        heading: "Key Learnings",
        body:
          "EvoMind taught me how to design modular ML systems that balance automation with flexibility. The project reinforced the importance of explainability in production ML, the value of multiple interfaces for different user needs, and how evolutionary algorithms can discover solutions that traditional search methods miss. Building a complete AutoML platform also deepened my understanding of MLOps, distributed computing with Ray, and how to structure complex ML systems for maintainability and extensibility."
      }
    ]
  }
];


