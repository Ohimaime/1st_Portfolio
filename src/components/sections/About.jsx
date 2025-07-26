import AnimatedSection from '../ui/AnimatedSection';

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-white/70 dark:bg-gray-900/70 text-black dark:text-white relative z-10 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto text-center">
        <AnimatedSection>
          <h2 className="text-4xl font-bold mb-8 text-blue-400">About Me</h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection direction="left" className="text-left space-y-6">
            <p className="text-gray-800 dark:text-gray-300 text-lg leading-relaxed">
              I'm a passionate <span className="text-blue-400 font-semibold">Frontend Developer</span> and <span className="text-purple-400 font-semibold">UI/UX Designer</span> dedicated to creating seamless, accessible, and visually stunning digital experiences that bridge the gap between design and functionality.
            </p>
            <p className="text-gray-800 dark:text-gray-300 text-lg leading-relaxed">
              Currently pursuing my degree at <span className="font-semibold text-blue-300">Pan-Atlantic University</span>, where I'm constantly expanding my knowledge in computer science, design principles, and emerging technologies.
            </p>
            <p className="text-gray-800 dark:text-gray-300 text-lg leading-relaxed">
              During my transformative internship at <span className="font-semibold text-purple-300">eTranzact International PLC</span>, I gained hands-on experience in enterprise-level development.
            </p>
            <p className="text-gray-800 dark:text-gray-300 text-lg leading-relaxed">
              My approach combines technical expertise with creative problem-solving, always prioritizing user experience and accessibility.
            </p>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-lg border-l-4 border-blue-400">
              <p className="text-gray-800 dark:text-gray-300 text-base italic">
                "I'm driven by the endless possibilities at the intersection of technology and creativity."
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" className="grid grid-cols-2 gap-6 text-center">
            {[
              { label: 'Projects Completed', value: '50+', color: 'blue' },
              { label: 'Years Experience', value: '3+', color: 'purple' },
              { label: 'Technologies', value: '15+', color: 'green' },
              { label: 'Client Satisfaction', value: '100%', color: 'orange' }
            ].map(stat => (
              <div key={stat.label} className={`bg-${stat.color}-100 dark:bg-${stat.color}-500/10 p-6 rounded-lg border border-${stat.color}-300 dark:border-${stat.color}-500/30`}>
                <h3 className={`text-3xl font-bold text-${stat.color}-600 dark:text-${stat.color}-400 mb-2`}>{stat.value}</h3>
                <p className="text-gray-700 dark:text-gray-300 font-medium">{stat.label}</p>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}