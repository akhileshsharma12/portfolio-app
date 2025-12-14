import About from "./sections/About";
import Resume from "./sections/Resume";
import Portfolio from "./sections/Portfolio";
import Blog from "./sections/Blog";
import Contact from "./sections/Contact";

export default function MainContent({ active }: { active: string }) {
  return (
    <div className="px-8">
      {active === "About" && <About />}
      {active === "Resume" && <Resume />}
      {active === "Portfolio" && <Portfolio />}
      {active === "Blog" && <Blog />}
      {active === "Contact" && <Contact />}
    </div>
  );
}
