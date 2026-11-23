// Edit your personal info here.
// Leave a value as '' to hide it on the site.
export const profile = {
  name: 'Haikal',
  fullName: 'Achmad Haikal Maali',
  photo: '/profile.jpg', // put your photo in /public/profile.jpg
  cv: '/cv.pdf', // put your CV in /public/cv.pdf
  email: '', // e.g. 'haikal@email.com'
  github: 'https://github.com/Achaikal02',
  linkedin: '', // e.g. 'https://www.linkedin.com/in/your-handle'
  location: 'Shah Alam, Malaysia',
  availability: 'Available for ML/AI internship · from March 2027',

  hero: {
    title: ['My title says AI Engineer.', 'But honestly, I’ll just do whatever you pay me to do.'],
    intro:
      'I’m Haikal — a Computer Science student building machine learning systems end to end, from EDA and modeling to APIs people can actually use.',
    education:
      'D4 Informatics Engineering, Politeknik Negeri Jakarta × BSc Computer Science, Management & Science University',
  },

  about: {
    greeting: 'Hi, I’m Haikal.',
    title: 'Studying machine learning by building it.',
    joke: 'My title says AI Engineer, but honestly, I’ll just do whatever you pay me to do.',
    statement:
      'I turn messy data into models people can use — from business understanding and EDA to APIs, dashboards and explanations they trust.',
    facts: [
      {
        label: 'Education',
        value: 'Double degree',
        detail: 'D4 Informatics, Politeknik Negeri Jakarta × BSc Computer Science, MSU Malaysia',
      },
      {
        label: 'Availability',
        value: 'March 2027',
        detail: 'Six-month ML/AI internship · based in Shah Alam, Malaysia',
      },
    ],
  },

  skills: [
    {
      title: 'Machine learning',
      items: 'XGBoost, CatBoost, Random Forest, stacking ensembles, SHAP, SMOTE, threshold tuning',
    },
    { title: 'Computer vision & LLMs', items: 'YOLOv8, MediaPipe, Groq API, Ollama' },
    {
      title: 'Engineering',
      items: 'Python, FastAPI, Flask, React, Next.js, Supabase, Docker, Kafka, Redis, MLflow',
    },
  ],
}
