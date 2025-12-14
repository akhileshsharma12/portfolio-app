import TimelineSection from "../Timeline";

export default function Resume() {
  const educationData = [
    {
      title: "Raisoni Collage of Engineering",
      date: "2023 — 2026",
      description:
        "Pursuing a Bachelor's degree in Computer Science. Focusing on Data Structures, Algorithms, and Full Stack Web Development.",
    },
    {
      title: "L.R.T. Collage of Commerce",
      date: "2020 — 2021",
      description:
        "Completed Higher Secondary Education (HSC). Developed a strong foundation in core subjects and analytical problem-solving.",
    },
    {
      title: "Jawahar School of Excellence",
      date: "2019",
      description:
        "Completed Secondary School Education (SSC). Achieved excellent academic performance and participated in various school activities.",
    },
  ];

  const experienceData = [
    {
      title: "Associate Frontend Developer",
      date: "Nov 2025 - Onwards",
      description:
        "Promoted to Associate Frontend Developer after a successful 3-month internship. Continued development on the website and client app projects, focusing on advanced features and optimization.",
    },
    {
      title: "Frontend Developer Intern",
      date: "Aug 2025 - Nov 2025",
      description:
        "Started from scratch developing the website and client app for Property Cibil. Built responsive user interfaces and ensured application stability.",
    },
    {
      title: "Full Stack Developer Intern",
      date: "May 2025 - Aug 2025",
      description:
        "Contributed to full-stack web development projects like HRMS Software and Portfolio Website. Worked with Express.js and SQL for backend services and integrated them with React, Next frontends.",
    },
  ];

  const skills = [
    { name: "React / Next", percentage: 80 },
    { name: "Angular", percentage: 20 },
    { name: "TypeScript", percentage: 90 },
    { name: "Express.js", percentage: 40 },
    { name: "Tailwind CSS", percentage: 95 },
  ];

  return (
    <>
      <h2 className="text-3xl font-bold text-white mb-2">Resume</h2>
      <div className="h-1.5 w-10 bg-[#ffdb70] rounded-full mb-10"></div>

      <div className="mt-10">
        <TimelineSection
          title="Education"
          icon="education"
          items={educationData}
        />

        <div className="mt-10"></div>

        <TimelineSection
          title="Experience"
          icon="experience"
          items={experienceData}
        />
      </div>

      {/* Section Title with gold underline */}
      <h3 className="text-2xl font-bold text-white mb-8 relative">
        My Skills
        {/* <span className="absolute -bottom-2 left-0 h-1.5 w-10 bg-[#ffdb70] rounded-full"></span> */}
      </h3>

      <section className="bg-[#1e1e1f] border border-[#383838] p-6 rounded-2xl shadow-sm mt-5">
        {/* Skills List */}
        <div className="space-y-6">
          {skills.map((skill, index) => (
            <div key={index}>
              {/* Skill Name and Percentage Label */}
              <div className="flex justify-between mb-2">
                <span className="text-white font-medium">{skill.name}</span>
                <span className="text-white/70 text-sm">
                  {skill.percentage}%
                </span>
              </div>

              {/* Progress Bar Track (Dark Gray) */}
              <div className="h-2.5 bg-[#383838] rounded-full overflow-hidden">
                {/* Progress Bar Fill (Gold) */}
                <div
                  className="h-full bg-[#ffdb70] rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
