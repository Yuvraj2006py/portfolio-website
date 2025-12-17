export type ReportDetailSection = {
  heading: string;
  body: string;
  bullets?: string[];
};

export type Report = {
  slug: string;
  title: string;
  context: "Coursework" | "Personal" | "Research";
  domain: string;
  summary: string;
  techStack: string[];
  pdfUrl?: string;
  githubUrl?: string;
  highlights: string[];
  detailSections: ReportDetailSection[];
};

export const reports: Report[] = [
  {
    slug: "nba-roster-geometry-resilience",
    title: "Roster Geometry and Resilience: A Network-Based Analysis of NBA Payroll Structure",
    context: "Research",
    domain: "Sports Analytics / Network Analysis",
    summary:
      "Explores how NBA roster construction and salary allocation interact with on-court lineup usage to influence playoff stability and resilience. Models each team as a salary-weighted player network, capturing not just how much teams spend, but how that spending is distributed across players who actually share the court.",
    techStack: ["Python", "Network Analysis", "Graph Theory", "Statistical Modeling", "Simulation", "Data Visualization"],
    pdfUrl: "/Roster_Geometry_and_Resilience__A_Network_Based_Approach_to_Payroll_Structure_and_Performance_Stability_in_the_NBA (3).pdf",
    highlights: [
      "Introduces Roster Resilience Score (RRS) to systematically evaluate team robustness through stress-testing simulations.",
      "Reveals that teams with lower salary assortativity (mixed high/low-salary lineups) advance further in playoffs.",
      "Demonstrates that roster geometry improves playoff prediction beyond standard team strength controls.",
      "Shows that balanced, interconnected salary structures exhibit greater playoff stability without increasing payroll."
    ],
    detailSections: [
      {
        heading: "Project Motivation",
        body:
          "Traditional NBA analytics often examine payroll totals or individual player value in isolation. However, two critical gaps remain: salary distribution is rarely studied in the context of lineups and shared possessions, and network-based basketball studies typically focus on ball movement rather than roster structure under salary cap constraints. This project bridges those gaps by treating the roster itself as a network whose geometry can be measured, stress-tested, and linked directly to playoff outcomes.",
        bullets: [
          "Central idea: roster structure behaves like a networked system where certain salary distributions and lineup connectivity patterns make teams more or less resilient to disruptions.",
          "Explores how salary allocation interacts with on-court lineup usage to influence playoff stability and resilience.",
          "Models teams as salary-weighted player networks, capturing not just spending amount but how spending is distributed across players who share the court."
        ]
      },
      {
        heading: "Data & Network Construction",
        body:
          "The analysis covers 149 NBA team-seasons from 2020–21 through 2024–25, using public data from Basketball-Reference and Cleaning the Glass. For each team-season, networks are constructed where nodes represent players and edges represent on-court connectivity.",
        bullets: [
          "Nodes represent players, scaled by their share of team salary to create salary-weighted networks.",
          "Edges represent how often two players share the court, normalized by possessions to reflect true lineup connectivity.",
          "Only players with meaningful minutes are included to avoid noise from fringe roster members.",
          "This produces a salary-weighted, possession-based graph that reflects how financial resources and on-court usage intersect in practice."
        ]
      },
      {
        heading: "Topology Features & Roster Geometry",
        body:
          "From each roster network, multiple structural features are computed to describe the 'geometry' of a roster beyond raw talent or payroll size. These features capture how salaries are distributed and how players are connected through shared court time.",
        bullets: [
          "Salary dispersion: Gini coefficient and top-salary concentration measures to quantify how evenly salaries are distributed.",
          "Salary assortativity: measures whether high-salary players tend to play together or are distributed across lineups.",
          "Community structure: identifies clusters of players frequently used together, revealing natural lineup groupings.",
          "Centralization and edge concentration: captures dependence on specific players or lineup combinations, indicating structural fragility or robustness."
        ]
      },
      {
        heading: "Roster Resilience Score (RRS)",
        body:
          "To evaluate robustness, the project introduces a Roster Resilience Score (RRS). Each roster network is systematically stress-tested by simulating the removal of key players to assess how well teams can maintain performance under disruptions.",
        bullets: [
          "Stress-testing simulations remove: a star player, a mid-salary contributor, and a key connector between lineup communities.",
          "After each removal, the expected team performance drop is estimated using a model trained on intact rosters.",
          "Teams that experience smaller performance declines receive higher resilience scores, indicating better structural robustness.",
          "RRS provides a quantitative measure of how well a roster can withstand disruptions without catastrophic performance drops."
        ]
      },
      {
        heading: "Predictive Modeling & Results",
        body:
          "The project evaluates whether roster topology improves prediction of playoff advancement beyond standard team strength controls. Using season-wise cross-validation, models incorporating network features are compared against baseline approaches.",
        bullets: [
          "Models that incorporate connectivity and salary topology features outperform strength-only baselines in predicting playoff advancement.",
          "Salary assortativity and edge concentration emerge as particularly informative features for predicting team success.",
          "Teams with lower salary assortativity (meaning high- and low-salary players are mixed across lineups) tend to advance further in the playoffs and exhibit higher resilience scores.",
          "Permutation tests confirm that these patterns are not artifacts of roster size or random salary assignment, validating the network-based approach."
        ]
      },
      {
        heading: "Key Insights",
        body:
          "The analysis reveals fundamental insights about roster construction that challenge traditional approaches to team building and salary cap management.",
        bullets: [
          "Roster construction is not just about how much is spent, but how salaries are distributed across lineups.",
          "Highly star-concentrated, tightly coupled salary networks are more fragile to disruptions such as injuries or rotation changes.",
          "More balanced, interconnected salary structures exhibit greater playoff stability without increasing payroll.",
          "These findings suggest that teams can improve resilience through strategic lineup and salary staggering, even under fixed cap constraints."
        ]
      },
      {
        heading: "Why This Project Stands Out",
        body:
          "This project demonstrates the ability to translate a real-world sports management problem into a formal network model, design new metrics (RRS) to evaluate system robustness, and apply graph theory, simulation, and predictive modeling to sports analytics. It highlights how network science can uncover insights in domains where traditional metrics fall short, with practical implications for decision-makers. The project also builds a fully reproducible, end-to-end data science pipeline that can be extended to other sports or organizational contexts."
      }
    ]
  },
  {
    slug: "rotman-datathon",
    title: "Rotman Datathon 2025: Supply Chain Stability Under Rising Living Costs",
    context: "Coursework",
    domain: "Supply Chain Analytics / Economic Modeling",
    summary:
      "Investigates how rising living costs influence global supply chain stability and operating costs, identifying economic indicators that most reliably predict supply chain disruptions. Combines macroeconomic data, logistics performance metrics, and statistical modeling to generate actionable insights for businesses and policymakers.",
    techStack: ["Python", "ARIMA", "Monte Carlo Simulation", "Statistical Analysis", "Time-Series Forecasting", "Regression Analysis"],
    pdfUrl: "/rotmans datathon reports.pdf",
    highlights: [
      "Identifies Producer Price Index (PPI) and freight rate indices as strongest predictors of supply chain costs.",
      "Develops predictive models using ARIMA and Monte Carlo simulations to forecast supply chain disruptions.",
      "Reveals that developing economies experience up to 2.5× more disruptions during inflationary periods.",
      "Provides data-driven strategies for improving supply chain resilience during economic uncertainty."
    ],
    detailSections: [
      {
        heading: "Project Overview & Objectives",
        body:
          "This project investigates how rising living costs influence global supply chain stability and operating costs, with a focus on identifying the economic indicators that most reliably predict supply chain disruptions. The central objective is to determine whether increases in the cost of living meaningfully impact supply chain performance and to distinguish correlation from causation across global economies.",
        bullets: [
          "Tests the assumption that inflation and rising prices destabilize supply chains using rigorous statistical analysis.",
          "Addresses three key questions: which economic indicators most strongly affect supply chain costs, whether future shifts can be predicted using macroeconomic signals, and what strategies organizations can adopt to improve resilience during inflationary periods.",
          "Combines quantitative modeling with qualitative industry insights to generate actionable recommendations for businesses and policymakers."
        ]
      },
      {
        heading: "Data & Methodology",
        body:
          "The analysis uses a mixed-methods approach that combines quantitative modeling with qualitative industry insights. Key datasets include macroeconomic indicators, logistics performance metrics, and supply chain volatility measures from global sources.",
        bullets: [
          "Consumer Price Index (CPI) and Producer Price Index (PPI) data to measure inflation and production costs.",
          "Freight rate indices such as the Baltic Dry Index to track logistics costs.",
          "GDP per capita and Logistics Performance Index (LPI) to assess economic development and infrastructure quality.",
          "Supply chain volatility measures from global sources to quantify disruption frequency and severity.",
          "Correlation analysis to measure the strength of relationships between economic indicators and supply chain costs.",
          "Time-series forecasting using ARIMA models to predict future cost trends.",
          "Multiple regression analysis to isolate drivers of cost increases and control for confounding variables.",
          "Monte Carlo simulations to model uncertainty and predict supply chain cost shifts under different economic scenarios."
        ]
      },
      {
        heading: "Key Findings",
        body:
          "The analysis reveals that production-side and logistics-related indicators are far stronger predictors of supply chain costs than consumer-side inflation alone. The findings challenge common assumptions about macroeconomic influence on logistics efficiency.",
        bullets: [
          "Producer Price Index (PPI) shows the strongest relationship with supply chain costs, indicating that increases in production costs directly translate into higher supply chain expenses.",
          "Freight rate indices strongly predict logistics cost increases, especially for globally sourced industries.",
          "CPI (inflation) is correlated with supply chain costs, but the relationship is inconsistent across countries and time periods, suggesting it is not a defining driver on its own.",
          "GDP per capita and inequality levels play a major role: developing economies and countries with high income inequality are significantly more vulnerable to supply chain disruptions during periods of rising living costs.",
          "No consistent causal relationship found between supply chain costs and factors such as short-term national debt or foreign direct investment, challenging common assumptions."
        ]
      },
      {
        heading: "Regional & Industry Insights",
        body:
          "The impact of rising costs varies significantly by region and industry, with some sectors and countries showing much greater vulnerability than others.",
        bullets: [
          "Countries with low Logistics Performance Index scores experience up to 2.5× more supply chain disruptions during inflationary periods.",
          "Industries with complex global sourcing networks, such as electronics and automotive manufacturing, are the most vulnerable to rising freight and production costs.",
          "Sectors like pharmaceuticals show greater resilience due to higher margins, regulatory stockpiles, and localized production strategies.",
          "Regional analysis reveals that supply chain stability is highly dependent on infrastructure quality and economic development levels."
        ]
      },
      {
        heading: "Predictive Modeling & Scenario Analysis",
        body:
          "A predictive supply chain resilience model was developed using multiple economic indicators and industry-specific vulnerability indices. Monte Carlo simulations enable scenario analysis under different economic conditions.",
        bullets: [
          "Predictive model incorporates CPI trends, PPI changes, freight rates, GDP per capita, and industry-specific vulnerability indices.",
          "Monte Carlo simulations show that modest increases in inflation and freight rates can lead to 7–10% cost increases in highly exposed industries.",
          "Global supply chains exhibit significantly higher sensitivity to economic shocks than localized ones.",
          "Scenario analysis helps organizations prepare for different economic futures and assess their vulnerability to supply chain disruptions."
        ]
      },
      {
        heading: "Strategic Impact & Recommendations",
        body:
          "Based on the findings, the report proposes data-driven strategies to improve supply chain resilience for both businesses and policymakers.",
        bullets: [
          "For businesses: supplier diversification, nearshoring strategies, advanced demand forecasting, and AI-driven inventory optimization.",
          "For policymakers: targeted infrastructure investment, trade policy adjustments, and workforce development initiatives to reduce national logistics costs and improve long-term stability.",
          "Recommendations are grounded in statistical evidence rather than intuition, providing a solid foundation for strategic decision-making."
        ]
      },
      {
        heading: "Key Learnings",
        body:
          "This project demonstrates the ability to analyze complex, real-world economic systems using data, separate intuitive assumptions from statistically supported conclusions, build predictive models under uncertainty, and translate technical analysis into practical business and policy recommendations. It highlights how data science can be applied beyond forecasting to strategic decision-making in global operations and economics."
      }
    ]
  }
];


