import Projects from './Projects';
import Skills from './Skills';
import Tools from './Tools';

export default function Content() {
  const sections = [
    {
      heading: "My Skills and Expertise",
      subheading: "As a web designer, I possess a diverse set of skills and expertise to bring your web design visions to life",
      component: <Skills cards={["Skill 1", "Skill 2", "Skill 3", "Skill 4", "Skill 5", "Skill 6"]} />,
    },
    {
      heading: "Tools I use with ease",
      subheading: "Explore a showcase of my diverse projects and creations",
      component: <Tools />,
    },
    {
      heading: "My creative portfolio",
      subheading: "Explore a showcase of my diverse projects and creations",
      component: <Projects />,
    },
  ];

  return (
    <div className="flex flex-col items-center gap-20 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 mt-12 sm:mt-16">
      {sections.map((section, index) => (
        <div key={index} className="w-full text-center">
          <h2 className="text-[#7E57C2] font-poppins font-medium text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] leading-tight tracking-[-0.03em] mx-auto mt-[40px] sm:mt-[60px] md:mt-[80px]">
            {section.heading}
          </h2>
          <p className="text-[#7E57C2] font-poppins font-normal text-[15px] sm:text-[17px] md:text-[18px] leading-relaxed max-w-[750px] mx-auto mt-4 px-2">
            {section.subheading}
          </p>
          <div className="mt-10">{section.component}</div>
        </div>
      ))}
    </div>
  );
}
