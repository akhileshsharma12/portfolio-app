import { Smartphone, Layers, Code2, Globe } from "lucide-react";
import Image from "next/image";

export default function About() {
  const services = [
    {
      title: "Website Development",
      description:
        "Building modern, responsive, and high-performance websites tailored to your needs.",
      icon: <Globe size={32} className="text-[#ffdb70]" />,
    },
    {
      title: "React Native",
      description:
        "Creating cross-platform mobile applications for iOS and Android using React Native.",
      icon: <Smartphone size={32} className="text-[#ffdb70]" />,
    },
    {
      title: "React Development",
      description:
        "Building dynamic, interactive, and fast Single Page Applications (SPAs) using React.js.",
      icon: <Code2 size={32} className="text-[#ffdb70]" />,
    },
    {
      title: "Angular",
      description:
        "Developing scalable, robust, and enterprise-grade web applications with the Angular framework.",
      icon: <Layers size={32} className="text-[#ffdb70]" />,
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Akash Pawar",
      text: "Akhilesh was hired to create a corporate identity. We were very pleased with the work. He has a great eye for design.",
      avatar: "/testimonial/avatar-1.png", // Replace with your image path
    },
    {
      id: 2,
      name: "Rutik Tade",
      text: "Working with Akhilesh was a pleasure. He understood our requirements perfectly and delivered an excellent website.",
      avatar: "/testimonial/avatar-2.png", // Replace with your image path
    }
  ];

  return (
    <>
      <h1 className="text-3xl font-bold mb-4 relative">
        About Me
        <span className="absolute left-0 -bottom-2 w-12 h-0.75 bg-[#f5c451] rounded"></span>
      </h1>

      <section className="text-white/70 space-y-6 mt-8">
        <p>
          I&apos;m a <b className="text-white">Computer Science Student</b> and{" "}
          <b className="text-white">Aspiring Web Developer</b> from{" "}
          <b className="text-white">Akola, Maharashtra</b>. I am passionate
          about coding and building modern web applications.
        </p>

        <p>
          I am currently focusing on{" "}
          <b className="text-white">Full Stack Development</b>. I love turning
          my ideas into real-world projects using technologies like MERN and
          MEAN. My goal is to write clean code and build user-friendly websites
          and Web-Applications. I am always eager to learn new skills and solve
          complex problems through code.
        </p>
      </section>

      <section className="mt-10">
        <h3 className="text-2xl font-bold text-white mb-6">What I&apos;m Doing</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#272727] border border-[#383838] p-6 rounded-2xl shadow-sm flex flex-col sm:flex-row gap-4 hover:bg-[#303031] transition-colors"
            >
              {/* Icon Box */}
              <div className="self-start sm:self-center">{service.icon}</div>

              {/* Text Content */}
              <div>
                <h4 className="text-lg font-bold text-white mb-2">
                  {service.title}
                </h4>
                <p className="text-white/70 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

     <section className="mt-10">
      <h3 className="text-2xl font-bold text-white mb-6">Testimonials</h3>

      {/* Scrollable Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6  pb-6  scrollbar-gold">
        {testimonials.map((item) => (
          <div 
            key={item.id}
            className=" bg-[#272727] border border-[#383838] p-6 rounded-2xl shadow-sm flex flex-col sm:flex-row gap-4 snap-center relative top-0"
          >
            {/* Avatar */}
            <div className="shrink-0">
              <div className="w-16 h-16 rounded-2xl bg-[#383838] overflow-hidden relative">
                <Image
                  src={item.avatar}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1">
              <h4 className="text-lg font-bold text-white">{item.name}</h4>
              {/* <p className="text-xs text-[#ffdb70] mb-2">{item.role}</p> */}
              <p className="text-white/70 text-sm leading-relaxed mt-2">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Custom Scrollbar Styles */}
     
    </section>
    </>
  );
}
