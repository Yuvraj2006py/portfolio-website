export type ExperienceDetailSection = {
  heading: string;
  body: string;
  bullets?: string[];
};

export type Experience = {
  id: string;
  role: string;
  organization: string;
  location?: string;
  startDate: string;
  endDate: string | "Present";
  summary: string;
  bullets: string[];
  techStack: string[];
  relatedProjectSlugs?: string[];
  relatedReportSlugs?: string[];
  detailSections: ExperienceDetailSection[];
};

export const experiences: Experience[] = [
  {
    id: "pfsl-operations-analyst",
    role: "Operations Analyst Intern",
    organization: "PFSL Investments Canada Ltd.",
    location: "Mississauga, ON",
    startDate: "May 2025",
    endDate: "August 2025",
    summary:
      "Managed high-volume client operations and documentation processing for a leading investment firm, ensuring compliance and operational efficiency through systematic workflows and proactive problem-solving.",
    bullets: [
      "Responded to 80-100 daily client and advisor emails regarding KYC updates, redemptions, transfers, and account maintenance, ensuring a 95% same-day resolution rate.",
      "Reviewed and analyzed an average of 75+ KYC, subsequent investment, and PAC (Pre-Authorized Contribution) forms daily for accuracy and completeness before processing.",
      "Coordinated with branch managers on client documentation, ensuring correct routing of ~40 forms daily to fund companies or internal teams for timely processing.",
      "Processed redemptions, contributing to a 20% reduction in processing backlog through proactive workflow engagement.",
      "Assisted in batching and organizing over 500 client and PFSL documents, streamlining document retention and routing processes to improve operational efficiency and compliance."
    ],
    techStack: ["Document Management Systems", "Email Management", "Compliance Tools", "Workflow Automation"],
    relatedProjectSlugs: [],
    relatedReportSlugs: [],
    detailSections: [
      {
        heading: "Role & Context",
        body:
          "As an Operations Analyst Intern at PFSL Investments, I supported the operations team in managing client accounts, processing documentation, and ensuring regulatory compliance. The role required attention to detail, efficient workflow management, and strong communication skills to handle high-volume client interactions."
      },
      {
        heading: "Client Communication & Support",
        body:
          "Managed a high-volume email queue, responding to 80-100 daily inquiries from clients and financial advisors. The focus was on providing accurate, timely responses while maintaining a 95% same-day resolution rate.",
        bullets: [
          "Handled inquiries covering KYC (Know Your Client) updates, account redemptions, fund transfers, and general account maintenance requests.",
          "Developed templates and standardized responses to improve efficiency while ensuring consistency and compliance.",
          "Escalated complex cases to senior team members when necessary, maintaining clear documentation throughout the process.",
          "Tracked resolution times and response quality to continuously improve service delivery."
        ]
      },
      {
        heading: "Document Review & Processing",
        body:
          "Reviewed and validated an average of 75+ forms daily, including KYC documents, subsequent investment forms, and Pre-Authorized Contribution (PAC) agreements. Each document required careful verification against compliance requirements and internal policies.",
        bullets: [
          "Verified completeness and accuracy of client information, signatures, and supporting documentation.",
          "Identified discrepancies or missing information and coordinated with clients or advisors to resolve issues.",
          "Ensured all forms met regulatory requirements before routing to processing teams.",
          "Maintained detailed records of review outcomes and processing status for audit purposes."
        ]
      },
      {
        heading: "Coordination & Workflow Management",
        body:
          "Coordinated with branch managers and internal teams to ensure proper routing and timely processing of approximately 40 forms daily. This involved understanding different document types, their destinations, and processing requirements.",
        bullets: [
          "Liaised with branch managers to clarify client documentation requirements and resolve routing questions.",
          "Ensured correct routing of forms to appropriate fund companies or internal processing teams based on document type and client needs.",
          "Tracked document status through the processing pipeline to identify bottlenecks and ensure timely completion.",
          "Maintained communication channels with multiple stakeholders to facilitate smooth document flow."
        ]
      },
      {
        heading: "Process Improvement & Efficiency",
        body:
          "Contributed to operational improvements by processing redemptions proactively and organizing document workflows. These efforts resulted in measurable improvements in backlog reduction and processing efficiency.",
        bullets: [
          "Processed redemption requests efficiently, contributing to a 20% reduction in processing backlog through proactive engagement and workflow optimization.",
          "Assisted in batching and organizing over 500 client and PFSL documents, improving document retention and routing processes.",
          "Identified opportunities to streamline repetitive tasks and reduce manual errors through better organization and workflow design.",
          "Supported compliance initiatives by ensuring proper document retention and audit trail maintenance."
        ]
      },
      {
        heading: "Key Learnings",
        body:
          "This internship provided valuable exposure to financial services operations, regulatory compliance, and high-volume document processing. I learned the importance of systematic workflows, attention to detail, and effective communication in maintaining operational efficiency and regulatory compliance."
      }
    ]
  },
  {
    id: "western-quantitative-co-president",
    role: "Quantitative Developer",
    organization: "Western Quantitative",
    location: "London, ON",
    startDate: "September 2025",
    endDate: "Present",
    summary:
      "Leading a 20-member quantitative research division focused on algorithmic trading, market microstructure, and financial modeling. Developed real-time arbitrage systems for crypto and prediction markets, processing millions of data points daily to identify trading opportunities.",
    bullets: [
      "Led a 20-member quant research division, developed models for high-frequency trading, algorithmic strategy design, and market microstructure research, overseeing 5+ active projects per semester.",
      "Co-developed CryptoCop, a real-time crypto arbitrage engine that scanned 10,000+ price pairs daily to identify cross-exchange inefficiencies and optimize execution across 5+ major exchanges using Python, FastAPI, and PostgreSQL.",
      "Built a sports and prediction-market arbitrage platform analyzing 50,000+ odds updates per day from Kalshi, Polymarket, and sportsbook APIs to detect pricing inefficiencies and alpha opportunities."
    ],
    techStack: ["Python", "FastAPI", "PostgreSQL", "Algorithmic Trading", "Market Data APIs", "Real-time Systems"],
    relatedProjectSlugs: ["sportsbook-analysis"],
    relatedReportSlugs: [],
    detailSections: [
      {
        heading: "Leadership & Organization",
        body:
          "As a Quantitative Developer at Western Quantitative, I contribute to a 20-member research division focused on quantitative finance, algorithmic trading, and market analysis. The organization develops trading strategies, builds quantitative models, and conducts research on market microstructure and high-frequency trading."
      },
      {
        heading: "Research & Development",
        body:
          "Oversee 5+ active research projects per semester, covering topics from high-frequency trading strategies to market microstructure analysis. The team develops models, backtests strategies, and builds tools to support quantitative research.",
        bullets: [
          "Coordinate research projects across different domains including algorithmic strategy design, market microstructure, and statistical arbitrage.",
          "Facilitate knowledge sharing through workshops, code reviews, and research presentations.",
          "Mentor junior members in quantitative methods, programming best practices, and financial modeling.",
          "Manage project timelines and resource allocation to ensure research objectives are met."
        ]
      },
      {
        heading: "CryptoCop: Crypto Arbitrage Engine",
        body:
          "Co-developed CryptoCop, a real-time cryptocurrency arbitrage detection and execution system. The platform monitors price differences across multiple exchanges and identifies profitable trading opportunities.",
        bullets: [
          "Scans 10,000+ cryptocurrency price pairs daily across 5+ major exchanges (Binance, Coinbase, Kraken, etc.) to detect arbitrage opportunities.",
          "Built using Python for data processing, FastAPI for API endpoints, and PostgreSQL for storing price data and trade history.",
          "Implements real-time price monitoring, latency optimization, and risk management to enable profitable arbitrage execution.",
          "Handles order routing, position management, and profit tracking across multiple exchange accounts.",
          "Optimizes execution timing and routing to maximize profit while minimizing slippage and execution risk."
        ]
      },
      {
        heading: "Sports & Prediction Market Arbitrage",
        body:
          "Developed a comprehensive arbitrage platform for sports betting and prediction markets. The system analyzes odds from multiple sources to identify pricing inefficiencies and arbitrage opportunities.",
        bullets: [
          "Processes 50,000+ odds updates per day from sources including Kalshi, Polymarket, and traditional sportsbook APIs.",
          "Detects arbitrage opportunities across different markets and exchanges, identifying situations where the combined implied probability is less than 100%.",
          "Analyzes pricing patterns to identify alpha opportunities beyond simple arbitrage, including middling strategies and value bets.",
          "Implements risk management and position sizing to optimize returns while managing exposure.",
          "Tracks performance metrics and provides analytics on opportunity frequency, profitability, and market efficiency."
        ]
      },
      {
        heading: "Technical Implementation",
        body:
          "Both systems require robust technical infrastructure to handle high-frequency data ingestion, real-time processing, and reliable execution. The architecture emphasizes scalability, reliability, and low latency.",
        bullets: [
          "Designed data pipelines for ingesting market data from multiple APIs with different rate limits and data formats.",
          "Implemented efficient data structures and algorithms for real-time price comparison and opportunity detection.",
          "Built monitoring and alerting systems to track system health, data quality, and trading performance.",
          "Developed backtesting frameworks to validate strategies before live deployment.",
          "Created dashboards and analytics tools for visualizing opportunities, performance, and system metrics."
        ]
      },
      {
        heading: "Key Learnings",
        body:
          "Leading Western Quantitative has deepened my understanding of quantitative finance, algorithmic trading, and building production-grade financial systems. The experience has taught me how to balance research rigor with practical implementation, manage technical teams, and build systems that operate reliably in real-time financial markets."
      }
    ]
  },
  {
    id: "western-basketball-analytics",
    role: "Performance Analyst",
    organization: "Western Varsity Basketball Analytics",
    location: "London, ON",
    startDate: "June 2025",
    endDate: "Present",
    summary:
      "Engineered data pipelines and analytical tools to support coaching decisions for Western's varsity basketball team. Analyzed player performance, team efficiency, and on-court synergies to inform recruitment, lineup optimization, and game strategy.",
    bullets: [
      "Engineered Python pipelines (Pandas, NumPy) analyzing 1,000+ player possessions and seasonal OUA stats to model efficiency, archetypes, and on-court synergies for recruitment targeting and lineup optimization.",
      "Automated data cleaning and correlation analyses through modular notebooks, reducing manual scouting prep by 40% and improving reproducibility.",
      "Created analytical dashboards (Matplotlib, Seaborn) and pre-game reports used by coaches to adjust matchups and rotations, driving data-driven strategy adoption."
    ],
    techStack: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter Notebooks", "Data Analysis"],
    relatedProjectSlugs: [],
    relatedReportSlugs: ["nba-roster-geometry-resilience"],
    detailSections: [
      {
        heading: "Role & Context",
        body:
          "As Performance Analyst for Western Varsity Basketball, I provide data-driven insights to support coaching decisions, player evaluation, and game strategy. The role involves analyzing player and team performance data, building analytical tools, and presenting findings to coaches in actionable formats."
      },
      {
        heading: "Player Performance Analysis",
        body:
          "Developed Python-based pipelines to analyze player performance using possession-level data and seasonal statistics from the OUA (Ontario University Athletics). The analysis focuses on efficiency metrics, player archetypes, and on-court synergies.",
        bullets: [
          "Processes 1,000+ player possessions per game to calculate efficiency metrics, usage rates, and shot selection patterns.",
          "Analyzes seasonal OUA statistics to identify player strengths, weaknesses, and development trends over time.",
          "Models player archetypes based on playing style, statistical profiles, and on-court roles to inform recruitment targeting.",
          "Evaluates on-court synergies by analyzing lineup performance and identifying which player combinations work best together.",
          "Tracks individual player development trajectories to assess improvement and identify areas for coaching focus."
        ]
      },
      {
        heading: "Data Pipeline & Automation",
        body:
          "Built automated data processing pipelines to streamline the analysis workflow. The modular notebook-based approach reduces manual work and improves reproducibility of analyses.",
        bullets: [
          "Engineered Python pipelines using Pandas and NumPy for data cleaning, transformation, and aggregation.",
          "Automated data cleaning processes to handle missing values, outliers, and data quality issues consistently.",
          "Performed correlation analyses to identify relationships between different performance metrics and team outcomes.",
          "Reduced manual scouting preparation time by 40% through automation and standardized workflows.",
          "Created modular, reusable notebooks that can be easily updated as new data becomes available."
        ]
      },
      {
        heading: "Visualization & Reporting",
        body:
          "Developed analytical dashboards and pre-game reports that present insights in formats coaches can quickly understand and act upon. Visualizations highlight key matchups, lineup recommendations, and strategic considerations.",
        bullets: [
          "Created dashboards using Matplotlib and Seaborn to visualize player performance, team trends, and matchup analyses.",
          "Generated pre-game reports that highlight opponent strengths and weaknesses, recommended matchups, and rotation strategies.",
          "Designed visualizations that make complex statistical concepts accessible to coaches without technical backgrounds.",
          "Provided real-time analytics during games to support in-game decision-making and adjustments.",
          "Tracked the impact of data-driven decisions on game outcomes to demonstrate value and refine recommendations."
        ]
      },
      {
        heading: "Strategic Impact",
        body:
          "The analytics work directly informs coaching decisions around lineup optimization, player rotations, and game strategy. The data-driven approach has been adopted by coaches to complement traditional scouting and game planning.",
        bullets: [
          "Informed recruitment decisions by identifying player archetypes and statistical profiles that fit team needs.",
          "Optimized lineups by analyzing which player combinations produce the best on-court results.",
          "Supported matchup planning by identifying opponent weaknesses and optimal defensive assignments.",
          "Drove data-driven strategy adoption by demonstrating the value of analytics in improving team performance.",
          "Contributed to a more systematic approach to player evaluation and development."
        ]
      },
      {
        heading: "Key Learnings",
        body:
          "This role has taught me how to translate technical analysis into actionable insights for non-technical stakeholders. I've learned the importance of clear communication, practical recommendations, and building trust through demonstrated value. The experience has also deepened my understanding of sports analytics and how data can enhance traditional coaching methods."
      }
    ]
  }
];


