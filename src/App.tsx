import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import SidebarNav from "./components/SidebarNav";
import ProjectsSection from "./components/ProjectsSection";
import SocialLinks from "./components/SocialLinks";
import CursorGlow from "./components/CursorGlow";
import DogModel from "./components/DogModel";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-bg text-slate-400 antialiased selection-bg px-6 py-12 font-sans md:px-12 md:py-16">
      <div className="mx-auto max-w-screen-xl lg:flex lg:justify-between lg:gap-4">
      <CursorGlow />
        {/* Sidebar */}
        <header className="lg:fixed lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
              Albert C. Halim
            </h1>
            <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
              Data Scientist / ex-Backend Engineer
            </h2>
            <p className="mt-4 max-w-xs leading-normal">
              I wrangle data, tame code, and sprinkle a little magic to build clever solutions.
            </p>
            <p className="mt-4 max-w-xs leading-normal">
              Vancouver, Canada
            </p>
            <p className="mt-4 max-w-xs leading-normal">
              albertc.halim0011.ach@gmail.com
            </p>
            <DogModel />
            <SidebarNav />
            <SocialLinks />
          </div>
        </header>
        
        {/* Main Content */}
        <main id="content" className="pt-24 lg:w-[52%] lg:py-24 lg:ml-[48%]">
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
        </main>
      </div>
    </div>
  );
}
