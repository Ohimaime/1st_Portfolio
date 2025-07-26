import Tilt from 'react-parallax-tilt';
import AnimatedSection from '../ui/AnimatedSection';

const skills = [
  { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-gray-50/70 dark:bg-gray-800/70 text-black dark:text-white relative z-10 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto text-center">
        <AnimatedSection>
          <h2 className="text-4xl font-bold mb-12 text-blue-400">Skills & Technologies</h2>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
          {skills.map((skill, index) => (
            <AnimatedSection key={skill.name} delay={index * 100}>
              <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} glareEnable={true} glareColor="white" className="w-full h-full">
                <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg border border-transparent gradient-hover-border transition-all duration-300 hover:scale-105 group">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-12 h-12 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                  />
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200">{skill.name}</h3>
                </div>
              </Tilt>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
