import React from "react";

const projects = [
  {
    title: "Revenue Prediction for Quant Valuations",
    description:
      "UBC MDS Capstone Project - Built an end-to-end pipeline processing 29,000+ SEC filings, combining financial and text data to engineer features using LLM-based analysis. Developed an interpretable model with a 5.7% error rate, delivering actionable insights to support company valuation decisions.",
    url: "https://thequantvaluations.com/",
    image: "/forecast.png",
    tech: ["Python", 
      "Pandas", 
      "TimeXer",
      "XGBoost", 
      "Linear Regression", 
      "Ridge", 
      "Lasso",
      "Ollama",
      "LangChain",
      "Matplotlib",
    ],
    github: null,
  },
  {
    title: "Pokemon Dashboard",
    description:
      "Built an interactive web dashboard using Dash (Plotly) and Python to explore Pokémon dataset features—allowing dynamic filtering by type, stats, and generation. Visualizations include bar charts, scatter plots, and boxplots to highlight trends across Pokémon attributes. This tool emphasizes user-driven exploration and insightful visual storytelling.",
    url: "https://dsci-532-2025-06-pokemon-dashboard.onrender.com/",
    image: "/pokemon.gif",
    tech: [
      "Python",
      "Pandas",
      "Dash (Plotly)",
      "Altair",
    ],
    github: "https://github.com/UBC-MDS/DSCI-532_2025_06_pokemon-dashboard",
  },
  {
    title: "datastructpy",
    description:
      "Developed datastructpy, a Python package offering practical and customizable implementations of core data structures like Binary Search Trees (BST), tailored for interview prep, coding challenges, and educational use.",
    url: "https://datastructpy.readthedocs.io/en/latest/?badge=latest",
    image: "/bst.png",
    tech: [
      "Python",
      "Custom Data Structures (BST, Linked List, Stack, Queue)",
      "Unit Testing (pytest)",
      "Packaging (setuptools)",
    ],
    github: "https://github.com/UBC-MDS/datastructpy",
  },
  {
    title: "Heart Disease Predictor",
    description:
      "Developed and compared multiple classification models—including Logistic Regression, SVC, and Decision Trees—to predict heart disease using the Cleveland dataset. Achieved 0.84 test accuracy with interpretable models, analyzed misclassifications for feature improvement, and outlined next steps for enhancing clinical usability.",
    url: "https://ubc-mds.github.io/heart_disease_predictor_py/",
    image: "/heart_disease.jpg",
    tech: [
      "Python",
      "Pandas",
      "XGBoost",
      "Matplotlib",
      "Docker",
      "Pytest"
    ],
    github:
      "https://github.com/UBC-MDS/heart_disease_predictor_py",
  },
  {
    title: "MendoBERT: Medical Indonesian BERT - Undergraduate Thesis",
    description:
      "Developed a BERT-based model for processing Indonesian biomedical data, demonstrating the application of deep learning to healthcare.",
    url: "http://library.binus.ac.id/eColls/eThesisdoc/Abstrak/2221-3585-CSCI-OS1_2_Abstrak.pdf",
    image: "/bert.jpg",
    tech: [
      "Python",
      "Pandas",
      "BERT",
      "Hugging Face",
      "Beautiful Soup"
    ],
    github: null,
  },
  {
    title: "COVID-19 Detection Model on Chest CT Scan and X-ray Images Using VGG16 Convolutional Neural Network",
    description:
      "Developed deep learning models using a customized VGG16 CNN to identify COVID-19 from lung X-ray and CT scan images. The results showed that X-ray-based models outperformed CT scan models, highlighting X-rays as a promising and practical alternative for rapid COVID-19 detection.",
    url: "https://ieeexplore.ieee.org/document/9702839",
    image: "/covid19.jpg",
    tech: [
      "Python",
      "PyTorch",
      "Pandas",
      "VGG16",
      "CNN",
    ],
    github: null,
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Selected projects"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-gray-800/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-gray-200 lg:sr-only">
          Projects
        </h2>
      </div>
      <div>
        <ul className="group/list">
          {projects.map((proj) => (
            <li key={proj.title} className="mb-12">
              <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                {/* Hover background (desktop only) */}
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-gray-700/30 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(156,163,175,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <div className="z-10 sm:order-2 sm:col-span-6">
                  <h3>
                    <a
                      className="inline-flex items-baseline font-medium leading-tight text-gray-200 hover:text-gray-300 focus-visible:text-gray-300 group/link text-base"
                      href={proj.url}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block lg:z-10"></span>
                      <span>
                        {proj.title}
                      </span>
                    </a>
                    {proj.github && (
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label="GitHub"
                        title="View on GitHub"
                        className="ml-2 inline-block relative z-20"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                          className="inline h-5 w-5 text-gray-400 hover:text-gray-300 hover:scale-110 transition-all duration-200"
                        >
                          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                        </svg>
                      </a>
                    )}
                  </h3>
                  <p className="mt-2 text-sm leading-normal">{proj.description}</p>
                  <ul className="mt-2 flex flex-wrap" aria-label="Technologies used:">
                    {proj.tech.map((tech) => (
                      <li key={tech} className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-gray-400/10 px-3 py-1 text-xs font-medium leading-5 text-gray-300">
                          {tech}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <img
                  alt={proj.title + " screenshot"}
                  width={200}
                  height={48}
                  className="aspect-video object-cover rounded border-2 border-gray-200/10 transition group-hover:border-gray-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                  src={proj.image}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
