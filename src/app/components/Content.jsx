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
      component: <Tools/>,
    },
    {
      heading: "My creative portfolio",
      subheading: "Explore a showcase of my diverse projects and creations",
    //   component: <Tools cards={["Portfolio 1", "Portfolio 2", "Portfolio 3"]} />,
    },
  ];

  return (
    <div className="flex flex-col items-center gap-16 mt-16 px-4 sm:px-8 md:px-16 lg:px-24">
      {sections.map((section, index) => (
        <div key={index} className="text-center">
          <h2 className="text-[#7E57C2] font-poppins font-[500] text-[40px] sm:text-[50px] md:text-[60px] leading-[50px] sm:leading-[60px] md:leading-[70px] tracking-[-0.03em] mx-auto mt-[50px] sm:mt-[75px] md:mt-[100px]">
            {section.heading}
          </h2>
          <p className="text-[#7E57C2] font-poppins font-[400] text-[16px] sm:text-[18px] leading-[140%] sm:leading-[150%] w-full max-w-[751px] mx-auto mt-4">
            {section.subheading}
          </p>
          <div className="mt-8">{section.component}</div>
        </div>
      ))}
    </div>
  );
}