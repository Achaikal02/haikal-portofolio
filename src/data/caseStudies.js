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

export const caseStudies = {
  valora: {
    kicker: 'Case study · Final-year thesis',
    summary:
      'A web app that estimates the price of a landed house anywhere in Greater Jakarta — with a price range, the reasons behind it, and comparable listings.',
    facts: [
      { label: 'Type', value: 'Final-year thesis', detail: 'Politeknik Negeri Jakarta' },
      { label: 'Data', value: 'Rumah123 + OSM', detail: 'Listing prices and OpenStreetMap location data' },
      { label: 'Method', value: 'CRISP-DM', detail: 'Plus SDLC Waterfall for the web system' },
      { label: 'Status', value: 'Live', detail: 'valorappraisal.tech' },
    ],
    problem: {
      title: 'The problem.',
      text: 'Knowing what a house is worth usually means hiring an appraiser or guessing from scattered listings. Valora gives buyers, sellers, agents and lenders a fast, explainable first estimate — before a formal valuation, not instead of one.',
    },
    approachIntro: 'A tabular model, a map-first interface, and every number explained.',
    approach: [
      {
        title: 'Data and features',
        text: 'Rumah123 listings for landed houses across Jabodetabek, enriched with OpenStreetMap location data and grouped into 382 areas.',
      },
      {
        title: 'XGBoost regression',
        text: 'A gradient-boosted tree model (gbtree) trained on house specifications and location, evaluated on a held-out set of 685 houses.',
      },
      {
        title: 'Built for people',
        text: 'Pin a house on the map, enter its specs, and get a point estimate, a price range, the main value drivers and comparable listings — in English or Indonesian.',
      },
    ],
    learnings: {
      title: 'What I learned.',
      items: [
        'A simpler tabular model beat my original multi-modal/NLP plan once I weighed accuracy against the time to ship a usable system.',
        'Real appraisal data is messy: an early attempt with official appraisal files hit small samples, inconsistent coordinates and merged spreadsheet headers.',
        'The contribution that matters most is access — putting a model behind a web app non-technical people can actually use.',
      ],
    },
    note: 'Valora is a research prototype. It uses asking prices, does not inspect physical condition or legal status, and is not an official appraisal report.',
    stack: ['Python', 'XGBoost', 'OpenStreetMap', 'Flask', 'Next.js', 'Supabase'],
  },

  yudhistira: {
    kicker: 'Case study · Personal project',
    summary:
      'A real-time payment fraud engine that scores every transaction as it streams in, decides approve, review or block based on what each mistake actually costs, and explains each case to analysts.',
    facts: [
      { label: 'Built by', value: 'Solo', detail: 'End to end, from data to dashboard' },
      { label: 'Data', value: 'PaySim → IEEE-CIS', detail: 'Synthetic mobile money, then real e-commerce transactions' },
      { label: 'Goal', value: 'Production-style', detail: 'A system, not a notebook' },
      { label: 'Status', value: 'Complete', detail: 'Code on GitHub' },
    ],
    problem: {
      title: 'The problem.',
      text: 'Fraud models are usually judged on accuracy, but a missed fraud and a blocked loyal customer cost very different amounts. And a score alone doesn’t help the analyst who has to make the final call.',
    },
    approachIntro: 'Stream it, price it, explain it.',
    approach: [
      {
        title: 'Real-time pipeline',
        text: 'Transactions flow through Kafka, features are served from Redis, and a FastAPI service scores each one — all containerized with Docker.',
      },
      {
        title: 'Cost-aware decisions',
        text: 'Instead of one fixed threshold, each transaction’s approve, review or block decision minimizes expected cost in dollars, scaled by the transaction amount.',
      },
      {
        title: 'Explained for analysts',
        text: 'A React dashboard for investigators. When an analyst claims a case, a local LLM (Ollama) writes a plain-language summary. Experiments are tracked in MLflow.',
      },
    ],
    table: {
      title: 'What a wrong call costs.',
      intro: 'The decision costs used for the IEEE-CIS phase.',
      rows: [
        ['Chargeback fee on a missed fraud', '$20'],
        ['Merchant margin lost on a blocked sale', '30%'],
        ['Customer who leaves after a false block', '$35'],
        ['Holding a transaction for review', '$5'],
      ],
    },
    learnings: {
      title: 'What I learned.',
      items: [
        'Docker, Kafka, Redis and FastAPI were new to me — this project was where I learned to run ML as a service, not a script.',
        'Pricing decisions in money makes trade-offs obvious to non-technical people in a way precision and recall never do.',
        'On limited hardware, generating LLM summaries only when an analyst opens a case keeps the system fast.',
      ],
    },
    stack: ['Python', 'Kafka', 'Redis', 'FastAPI', 'Docker', 'MLflow', 'React', 'Ollama', 'PaySim', 'IEEE-CIS'],
  },

  churn: {
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
