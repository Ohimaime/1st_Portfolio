import AnimatedSection from '../ui/AnimatedSection';
import { ExternalLink, Github } from '../ui/Icons';

const projects = [
  {
    icon: '🚀',
    title: 'E-Commerce Platform',
    description: 'Full-stack solution with React, Node.js, and Stripe.',
    stack: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    color: 'blue'
  },
  {
    icon: '📱',
    title: 'Task Management App',
    description: 'Real-time updates, team features, built with Vue and Firebase.',
    stack: ['Vue.js', 'Firebase', 'Vuex', 'PWA'],
    color: 'purple'
  },
  {
    icon: '📊',
    title: 'Analytics Dashboard',
    description: 'Data visualization platform using D3.js and Chart.js.',
    stack: ['React', 'D3.js', 'Express', 'Chart.js'],
    color: 'green'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-white/70 dark:bg-gray-900/70 text-black dark:text-white relative z-10 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-blue-400">Featured Projects</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Some recent projects that showcase my skills in frontend, design, and problem-solving.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <AnimatedSection key={project.title} delay={index * 200} className="group">
              <div className={`bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-200 dark:border-gray-700 hover:border-${project.color}-400 dark:hover:border-${project.color}-400`}>
                <div className={`h-48 bg-gradient-to-br from-${project.color}-400 to-${project.color}-500 relative overflow-hidden`}>
                  <div className="absolute inset-0 flex items-center justify-center text-white text-6xl">
                    {project.icon}
                  </div>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.stack.map(tag => (
                      <span key={tag} className={`bg-${project.color}-100 dark:bg-${project.color}-900/30 text-${project.color}-600 dark:text-${project.color}-400 px-2 py-1 rounded text-xs`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <button className={`flex items-center gap-2 text-${project.color}-400 hover:text-${project.color}-500 transition`}>
                      <ExternalLink size={16} /> <span className="text-sm">Live Demo</span>
                    </button>
                    <button className="flex items-center gap-2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition">
                      <Github size={16} /> <span className="text-sm">Code</span>
                    </button>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}