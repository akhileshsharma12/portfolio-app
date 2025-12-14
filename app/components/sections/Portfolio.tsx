import { FolderGit2 } from "lucide-react";

export default function Portfolio() {
  const categories = ["All", "Web Design", "Applications", "Web Development"];

  return (
    <>
      <h2 className="text-3xl font-bold text-white mb-2">Portfolio</h2>
      <div className="h-1.5 w-10 bg-[#ffdb70] rounded-full mb-8"></div>

      {/* Filter Categories */}
      <ul className="flex flex-wrap gap-6 mb-8">
        {categories.map((category, index) => (
          <li key={index}>
            <button
              className={`text-sm font-medium transition-colors ${
                index === 0
                  ? "text-[#ffdb70]"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>

      {/* Empty State Container */}
      <div className="flex flex-col items-center justify-center min-h-100 bg-[#2b2b2c] border border-[#383838] rounded-3xl p-8 text-center relative overflow-hidden">
        <div className="w-20 h-20 bg-[#383838] rounded-2xl flex items-center justify-center mb-6 shadow-inner">
          <FolderGit2 size={40} className="text-[#ffdb70] opacity-80" />
        </div>

        <h3 className="text-2xl font-bold text-white mb-3">
          Projects Coming Soon
        </h3>

        <p className="text-white/60 max-w-md leading-relaxed">
          I am currently working on building and documenting my latest projects.
          Check back soon to see my work in Web Development and App Design!
        </p>
      </div>
    </>
  );
}
