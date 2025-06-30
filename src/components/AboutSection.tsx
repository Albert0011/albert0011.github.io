export default function AboutSection() {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="About me"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-gray-800/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-gray-200 lg:sr-only">
          About
        </h2>
      </div>
      <div>
        <p className="mb-4">
          Hey, I’m Albert! I’m a data scientist with a background in backend engineering, obsessed with turning messy problems into meaningful, measurable impact. I love working at the intersection of data, business, and technology—solving real-world problems.
        </p>
        <p className="mb-4">
          Currently, I just finished my Master's degree in {" "}
          <a
            className="font-medium text-gray-200 hover:text-gray-300 focus-visible:text-gray-300 relative z-10 pointer-events-auto"
            href="https://masterdatascience.ubc.ca/"
            target="_blank"
            rel="noreferrer noopener"
          >
            UBC MDS Program
          </a>
          , where I dove deep into machine learning, statistical modeling, and the art of storytelling with data.
        </p>
        <p className="mb-4">
          My journey started in computer science and working as a backend engineer in {" "}
          <a
            className="font-medium text-gray-200 hover:text-gray-300 focus-visible:text-gray-300 relative z-10 pointer-events-auto"
            href="https://www.linkedin.com/company/bca/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Bank Central Asia
          </a>
          , but curiosity quickly pulled me toward data science: from building end-to-end machine learning pipelines and interactive dashboards, to hands-on statistical modeling, data wrangling, and translating complex analyses into actionable insights.
        </p>
        <p>
          Currently, I’m open to new opportunities—ready to bring my skills, curiosity, and collaborative spirit to a new challenge. Hit me up!
        </p>
      </div>
    </section>
  );
}
