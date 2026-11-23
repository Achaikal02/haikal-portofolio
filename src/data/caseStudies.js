// Detail page content for each project, keyed by the project's id in projects.js.
// A project with an entry here gets a "Read the case study ›" link and a page at /work/<id>.
// The page also reuses the project's name, links, video and stats from projects.js.
//
// Sections (all optional except kicker + summary):
//   facts       small fact row under the header
//   problem     { title, text }
//   approachIntro + approach   numbered steps
//   table       { title, intro, rows: [[label, value], ...] }
//   learnings   { title, items: [...] }
//   note        small grey footnote (limitations, disclaimers)
//   stack       tech chips
//   gallery     screenshots: [{ src: '/screenshots/<id>/1.png', caption: '...' }]
//               put the images in public/screenshots/<id>/  (PNG/JPG/WebP, ~1600px wide)

export const caseStudies = {
  valora: {
    gallery: [
      // { src: '/screenshots/valora/1.png', caption: 'Describe what this screen shows' },
    ],
    kicker: 'Case study · Final-year thesis',
    summary:
      'Valora is a web app that estimates house prices in Greater Jakarta (Jabodetabek) using an XGBoost model. It is built for property appraisers who need a quick, explainable second opinion.',
    facts: [
      { label: 'Role', value: 'Solo builder', detail: 'Data prep, modeling, API, web app and deployment' },
      { label: 'Data', value: 'Rumah123 listings', detail: 'From Kaggle, enriched with OpenStreetMap. Evaluated on 685 test houses' },
      { label: 'Method', value: 'CRISP-DM', detail: 'Plus SDLC Waterfall for the web system' },
      { label: 'Status', value: 'Live', detail: 'valorappraisal.tech · user testing (SUS) completed' },
    ],
    problem: {
      title: 'The problem.',
      text: 'Manual property valuation is slow, and location is hard to turn into numbers a model can use. Most existing studies stop at a notebook and never reach real users.',
    },
    approachIntro: 'From raw listings to a live app in four steps.',
    approach: [
      {
        title: 'Location feature engineering',
        text: 'I turned raw coordinates into richer signals: distance to 8 landmarks, rotated coordinates, area descriptors and 8 OpenStreetMap point-of-interest categories, then kept the strongest location setup.',
      },
      {
        title: 'Model and tuning',
        text: 'I trained XGBoost (gbtree) and tuned it with Optuna. On the test set it reached 20.17% MAPE and R² 0.838.',
      },
      {
        title: 'Honest uncertainty',
        text: 'Each estimate comes with 50% and 80% price ranges, calibrated per region. SHAP shows the top 5 factors behind each price in plain language.',
      },
      {
        title: 'Production app',
        text: 'A Flask API on Railway serves the model, and a Next.js app on Vercel handles the map-based form, login and history in Supabase. Users can compare up to 3 estimates and download a 3-page PDF report.',
      },
    ],
    table: {
      title: 'Model performance.',
      intro: 'Final XGBoost model with the best location features, on a test set of 685 houses.',
      rows: [
        ['MAPE', '20.17% (“reasonable” by Lewis, 1982)'],
        ['Median error (APE)', '14.82%'],
        ['R²', '0.838'],
        ['Predictions within ±20%', '62.8%'],
      ],
    },
    learnings: {
      title: 'What I learned.',
      items: [
        'Missing data can carry meaning. Listings without electricity info were priced higher, so leaving it empty raised estimates by about 9.6% — I made the field required.',
        'Deployment brings its own bugs. Running XGBoost under multiple preloaded Gunicorn workers caused 502 errors, so I switched to one worker with threads.',
        'Scope beats ambition. I dropped an NLP/multimodal idea and an LLM chatbot to ship a solid tabular model that people can actually use.',
      ],
    },
    note: 'The model learns from asking prices in online listings, not official appraisals. It only covers the Jabodetabek area.',
    stack: [
      'Python', 'pandas', 'XGBoost', 'Optuna', 'scikit-learn', 'SHAP', 'OpenStreetMap', 'Google Colab',
      'Flask', 'Gunicorn', 'pytest', 'Railway', 'Next.js', 'Supabase', 'Vercel',
    ],
  },

  yudhistira: {
    gallery: [
      { src: '/screenshots/yudhistira/1.png', caption: 'Dashboard 1' },
      { src: '/screenshots/yudhistira/2.png', caption: 'Dashboard 2' },
      { src: '/screenshots/yudhistira/3.png', caption: 'Business Impact' },
    ],
    kicker: 'Case study · Personal project',
    summary:
      'Yudhistira is a real-time fraud detection engine that decides ALLOW, REVIEW or BLOCK for each payment based on expected cost. I built it to practice end-to-end ML engineering, from the model to a live pipeline and the UI an analyst uses.',
    facts: [
      { label: 'Role', value: 'Solo developer', detail: 'Design, modeling, pipeline, API and web app' },
      {
        label: 'Data',
        value: 'PaySim + IEEE-CIS',
        detail: 'PaySim to build the pipeline, IEEE-CIS (590,540 transactions) to train and test the model',
      },
      { label: 'Model', value: 'XGBoost', detail: 'PR-AUC 0.668 on a time-ordered test split' },
      { label: 'Status', value: 'Open source · working demo', detail: 'Runs locally with one command' },
    ],
    problem: {
      title: 'The problem.',
      text: 'Letting fraud through costs money, and blocking a good customer costs money too. Most fraud models stop at a score, but a business needs a decision with a price attached.',
    },
    approachIntro: 'Four steps took it from a model in a notebook to a system you can watch run.',
    approach: [
      {
        title: 'Train a model that respects time',
        text: 'I trained XGBoost on IEEE-CIS with a time-ordered 70/15/15 split, so the model never learns from the future. The final model reached a PR-AUC of 0.668 on 88,581 test transactions.',
      },
      {
        title: 'Decide with money, not a threshold',
        text: 'For each payment the system estimates the cost of ALLOW, REVIEW and BLOCK, then picks the cheapest one. On the test set this cut fraud-related cost by 73.1% compared with no screening.',
      },
      {
        title: 'Make it real-time and resilient',
        text: 'Transactions stream through Kafka, features come from Redis with Postgres as the source of truth, and a FastAPI service exposes results. Replaying the test set gave exactly the same decisions as offline evaluation ($142,915.43 on both sides), even with Redis shut down mid-replay.',
      },
      {
        title: 'Explain every review case',
        text: 'Each REVIEW case gets SHAP factors and a cost breakdown in a React work queue shared by human analysts and a bot. Cases are claimed atomically with leases, so two analysts never work the same case.',
      },
    ],
    table: {
      title: 'Can a local LLM write the case summary?',
      intro:
        'I tested 3 local LLMs on 20 review cases, using an automatic fact-checker plus my own reading. Too many summaries still had wrong facts, so the app uses a template that is always correct.',
      rows: [
        ['llama3.2:3b', '60% passed fact-checker · 4.0 s per summary'],
        ['gemma3:4b', '85% passed · 6.1 s · 4 of 17 still wrong on human reading'],
        ['qwen2.5:7b', '90% passed · 9.3 s · 7 of 18 still wrong on human reading'],
        ['Decision', 'Template summaries by default; LLM kept as an opt-in experiment'],
      ],
    },
    learnings: {
      title: 'What I learned.',
      items: [
        'A good score is not a decision. Putting a dollar cost on each action made the model useful to a business.',
        'Test the system, not just the model. Matching offline and real-time results to the cent caught bugs that metrics alone would miss.',
        'Evaluate an LLM like any other model. A fact-checker that “passes” is not proof of correctness, so I also read the outputs myself.',
        'Fail loudly. Optional features may not break the main path, but their failures must still show up on the dashboard.',
      ],
    },
    note: 'This runs on a public dataset replayed as a stream, not on live bank traffic. The cost figures use my own assumed costs per decision and are for evaluation only.',
    stack: [
      'Python', 'XGBoost', 'SHAP', 'MLflow', 'Apache Kafka', 'Redis', 'PostgreSQL',
      'FastAPI', 'React', 'TypeScript', 'Tailwind CSS', 'Streamlit', 'Ollama', 'Docker Compose',
    ],
  },

  churn: {
    gallery: [
      // { src: '/screenshots/churn/1.png', caption: 'Describe what this screen shows' },
    ],
    kicker: 'Case study · CTRL_V_Architect, Politeknik Negeri Jakarta',
    summary:
      'A SaaS platform that predicts which customers will churn, explains why with SHAP, and lets the business ask a chatbot about it in plain language.',
    facts: [
      { label: 'My role', value: 'Team lead', detail: 'Business understanding, EDA, modeling' },
      { label: 'Team', value: '5 people', detail: 'University group project' },
      { label: 'Timeline', value: '~3 months', detail: 'One semester' },
      { label: 'Output', value: 'Platform + paper', detail: 'IEEE-format academic paper' },
    ],
    problem: {
      title: 'The problem.',
      text: 'Keeping a customer is cheaper than winning a new one — but only if you know who is about to leave, and why, early enough to act.',
    },
    approachIntro:
      'Churn data is imbalanced, so accuracy alone lies. We optimized for catching the customers who actually leave.',
    approach: [
      {
        title: 'Stacking ensemble',
        text: 'XGBoost, Random Forest and CatBoost as base learners, combined by a Logistic Regression meta-learner.',
      },
      {
        title: 'Handling imbalance',
        text: 'Experiments with SMOTE and class weighting, then threshold tuning to trade precision for recall.',
      },
      {
        title: 'Explain and serve',
        text: 'SHAP for per-customer explanations, a FastAPI backend, and a Groq/Ollama chatbot that answers who will churn and why.',
      },
    ],
    learnings: {
      title: 'What I learned.',
      items: [
        'Leading a team of five meant splitting the work into business, data, modeling and platform tracks — and keeping them in sync.',
        'Recall on churners mattered more to the business than headline accuracy.',
        'Replicating the pipeline in RapidMiner and writing the business feasibility study made the model easier to defend.',
      ],
    },
    stack: ['Python', 'XGBoost', 'CatBoost', 'Random Forest', 'SHAP', 'SMOTE', 'FastAPI', 'Groq API', 'Ollama', 'RapidMiner'],
  },

  keeva: {
    gallery: [
      // { src: '/screenshots/keeva/1.png', caption: 'Describe what this screen shows' },
    ],
    kicker: 'Case study · CTRL_V_Architect, Politeknik Negeri Jakarta',
    summary:
      'A smart classroom system that watches the camera feed and detects student behavior in real time, so a lecturer can see how engaged the room really is.',
    facts: [
      { label: 'My role', value: 'Team lead', detail: 'Researched the modeling approach and built the system' },
      { label: 'Team', value: '5 people', detail: 'University group project' },
      { label: 'Timeline', value: '~3 months', detail: 'One semester' },
      { label: 'Type', value: 'Computer vision', detail: 'Real-time, camera-based' },
    ],
    problem: {
      title: 'The problem.',
      text: 'In a full classroom, a lecturer can’t watch every student at once. Engagement is easy to lose and hard to measure.',
    },
    approachIntro: 'Detect, track and summarize behavior — live.',
    approach: [
      {
        title: 'Research first',
        text: 'I compared approaches and methods for recognizing classroom behavior before committing to a model.',
      },
      {
        title: 'Computer vision',
        text: 'YOLOv8 and MediaPipe work together on the camera feed to detect student behavior in real time.',
      },
      {
        title: 'Live dashboard',
        text: 'A FastAPI backend streams results to a lightweight vanilla JavaScript dashboard.',
      },
    ],
    stack: ['Python', 'YOLOv8', 'MediaPipe', 'FastAPI', 'JavaScript'],
  },
}
