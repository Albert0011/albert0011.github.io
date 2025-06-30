import React from "react";

const experiences = [
  {
    company: "Quant Valuations",
    title: "Data Scientist Intern",
    time: "May. 2025 - Jul. 2025",
    description:
      "UBC MDS Capstone Project - Built an end-to-end pipeline processing 29,000+ SEC filings, combining financial and text data to engineer features using LLM-based analysis. Developed an interpretable model with a 5.7% error rate, delivering actionable insights to support company valuation decisions.",
    url: "https://thequantvaluations.com/",
    technologies: ["Python", 
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
  },
  {
    company: "Bank Central Asia",
    title: "Backend Engineer",
    time: "Apr. 2022 — Jul. 2024",
    description:
      "Migrated legacy Mainframe data to PostgreSQL, orchestrating seamless data flows with CDC, MQ Series, and Kafka. Designed and deployed Java Spring Boot APIs and efficient batch processing (Spring Batch) solutions on RHEL, boosting application functionality and integration.",
    url: "https://www.linkedin.com/company/bca/",
    technologies: [
      "Java",
      "PostgreSQL",
      "Spring Boot",
      "Spring Batch",
      "Kafka",
      "Confluent",
      "RHEL",
    ],
  },
  {
    company: "Bank Central Asia",
    title: "Internship",
    time: "Jul. 2021 — Apr. 2022",
    description:
      "Developed backend systems with COBOL, JCL, and CICS on Mainframe, enabling data integration for analytics. Introduced a new account type in payment applications to optimize and streamline payment processes.",
    url: "https://www.linkedin.com/company/bca/",
    technologies: [
      "Mainframe",
      "COBOL",
      "CICS",
      "JCL",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Work experience"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-gray-800/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-gray-200 lg:sr-only">
          Experience
        </h2>
      </div>
      <div>
        <ol className="group/list">
          {experiences.map((exp, i) => (
            <li key={exp.company} className="mb-12">
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                {/* Hover background (desktop only) */}
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-gray-700/30 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(156,163,175,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <header
                  className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-gray-500 sm:col-span-2"
                  aria-label={exp.time}
                >
                  {exp.time}
                </header>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-gray-200">
                    <div>
                      <a
                        className="inline-flex items-baseline font-medium leading-tight text-gray-200 hover:text-gray-300 focus-visible:text-gray-300 group/link text-base"
                        href={exp.url}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label={`${exp.title} at ${exp.company} (opens in a new tab)`}
                      >
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block lg:z-10"></span>
                        <span>
                          {exp.title} · <span className="inline-block">{exp.company}</span>
                        </span>
                      </a>
                    </div>
                  </h3>
                  <p className="mt-2 text-sm leading-normal">{exp.description}</p>
                  <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                    {exp.technologies.map((tech) => (
                      <li key={tech} className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-gray-400/10 px-3 py-1 text-xs font-medium leading-5 text-gray-300">
                          {tech}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
