// Every project on the home page comes from this list, in this order.
// To add a new project: copy one object, change the fields, done.
//
// Fields:
//   id          short slug, used for #anchors and /work/<id>
//   eyebrow     small label above the headline
//   headline    big line: what the project does
//   name        project name, shown under the headline
//   subtitle    optional small line under the name
//   theme       'dark' for a black section, otherwise sections alternate grey/white
//   links       [{ label, href }]  (href '' hides the link)
//   video       { src, poster }   put files in /public/videos; src '' shows a placeholder
//   stats       optional [{ value, label }]
//   highlights  [{ title, text }]
//   caseStudy   optional — adds a "Read the case study" page at /work/<id>

export const projects = [
  {
    id: 'valora',
    eyebrow: 'Final-year thesis · Live',
    headline: 'House price analytics for Greater Jakarta.',
    name: 'Valora',
    subtitle: 'House Price Prediction',
    links: [{ label: 'Try it live', href: 'https://valorappraisal.tech/' }],
    video: { src: '/videos/valora.mp4', poster: '' },
    stats: [
      { value: '0.838', label: 'R² on 685 test houses' },
      { value: '14.8%', label: 'Median error' },
      { value: '382', label: 'Areas across Jabodetabek' },
    ],
    highlights: [
      {
        title: 'Pin it, price it',
        text: 'Drop a pin on the map, enter the specs, and get an estimate, a price range and comparable listings.',
      },
      {
        title: 'Shows its reasoning',
        text: 'Every estimate lists the main value drivers, plus a market explorer with price maps by area.',
      },
      {
        title: 'Built end to end',
        text: 'XGBoost on Rumah123 listings and OpenStreetMap data, served through Flask, Next.js and Supabase. Bilingual EN/ID.',
      },
    ],
  },
  {
    id: 'yudhistira',
    eyebrow: 'ML Engineering · Personal',
    headline: 'Real-time fraud decisions, priced and explained.',
    name: 'Yudhistira',
    subtitle: 'Real-Time Fraud Detection Engine',
    links: [{ label: 'GitHub', href: 'https://github.com/Achaikal02/realtime-fraud-detection' }],
    video: { src: '/videos/yudhistira.mp4', poster: '' },
    highlights: [
      {
        title: 'Streaming pipeline',
        text: 'Transactions scored in real time with Kafka, Redis and FastAPI, all containerized with Docker. Trained on PaySim, now extending to IEEE-CIS.',
      },
      {
        title: 'Decisions priced in dollars',
        text: 'Every approve, review or block is weighed against real business cost — chargebacks, lost customers and manual review.',
      },
      {
        title: 'Explained for analysts',
        text: 'A React dashboard for investigators, LLM case summaries via local Ollama, and experiments tracked in MLflow.',
      },
    ],
  },
  {
    id: 'churn',
    eyebrow: 'Machine Learning · Team lead',
    headline: 'Know which customers will leave — and why.',
    name: 'Customer Churn Prediction',
    theme: 'dark',
    links: [{ label: 'GitHub', href: '' }],
    video: { src: '/videos/keeva.mp4', poster: '' },
    stats: [
      { value: '92.56%', label: 'Accuracy' },
      { value: '82.02%', label: 'Recall' },
      { value: '0.971', label: 'AUC-ROC' },
    ],
    highlights: [
      {
        title: 'Stacking ensemble',
        text: 'XGBoost, Random Forest and CatBoost, combined by a Logistic Regression meta-learner.',
      },
      {
        title: 'Built for imbalance',
        text: 'SMOTE and class-weighting experiments, plus threshold tuning to catch more churners.',
      },
      {
        title: 'Explains itself',
        text: 'SHAP explanations and a Groq/Ollama chatbot behind a FastAPI backend. Published as an IEEE-format paper.',
      },
    ],
    caseStudy: {
      kicker: 'Case study · CTRL_V_Architect, Politeknik Negeri Jakarta',
      summary:
        'A SaaS platform that predicts which customers will churn, explains why with SHAP, and lets the business ask a chatbot about it in plain language.',
      facts: [
        { label: 'My role', value: 'Team lead', detail: 'Business understanding, EDA, modeling' },
        { label: 'Team', value: '5 people', detail: 'University group project' },
        { label: 'Timeline', value: '~3 months', detail: 'One semester' },
        { label: 'Output', value: 'Platform + paper', detail: 'IEEE-format academic paper' },
      ],
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
      stack: ['Python', 'XGBoost', 'CatBoost', 'Random Forest', 'SHAP', 'SMOTE', 'FastAPI', 'Groq API', 'Ollama', 'RapidMiner'],
    },
  },
  {
    id: 'keeva',
    eyebrow: 'Computer Vision · Team lead',
    headline: 'See how engaged a classroom really is.',
    name: 'KEEVA',
    subtitle: 'Smart Classroom Engagement Monitoring',
    links: [{ label: 'GitHub', href: '' }],
    video: { src: '/videos/class.mp4', poster: '' },
    highlights: [
      {
        title: 'Real-time detection',
        text: 'YOLOv8 and MediaPipe detect student behavior live from the classroom camera.',
      },
      { title: 'Full system', text: 'A FastAPI backend with a lightweight vanilla JavaScript dashboard.' },
      {
        title: 'My role',
        text: 'Led a team of five; researched the modeling approach and built the system.',
      },
    ],
  },
]
