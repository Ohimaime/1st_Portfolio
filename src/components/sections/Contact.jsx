import AnimatedSection from '../ui/AnimatedSection';
import { Mail, Linkedin, Github } from '../ui/Icons';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-50/70 dark:bg-gray-800/70 text-black dark:text-white relative z-10 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto text-center">
        <AnimatedSection>
          <h2 className="text-4xl font-bold mb-8 text-blue-400">Get In Touch</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just a chat about tech and design.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12">
          <AnimatedSection direction="left" className="space-y-8 text-left">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-white dark:bg-gray-900 rounded-lg shadow border border-gray-200 dark:border-gray-700">
                  <div className="text-blue-400 text-xl"><Mail /></div>
                  <div>
                    <p className="font-semibold text-gray-800 dark:text-white">Email</p>
                    <p className="text-gray-600 dark:text-gray-300">ohimaime05@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white dark:bg-gray-900 rounded-lg shadow border border-gray-200 dark:border-gray-700">
                  <div className="text-purple-400 text-xl"><Linkedin /></div>
                  <div>
                    <p className="font-semibold text-gray-800 dark:text-white">LinkedIn</p>
                    <p className="text-gray-600 dark:text-gray-300">linkedin.com/in/emmanuel-ogoh-6928312bb/</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white dark:bg-gray-900 rounded-lg shadow border border-gray-200 dark:border-gray-700">
                  <div className="text-green-400 text-xl"><Github /></div>
                  <div>
                    <p className="font-semibold text-gray-800 dark:text-white">GitHub</p>
                    <p className="text-gray-600 dark:text-gray-300">github.com/Ohimaime</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <form className="space-y-6 bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 text-left">
              <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Send a Message</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">First Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-400" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Last Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-400" placeholder="Doe" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input type="email" className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-400" placeholder="john.doe@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-400" placeholder="Let's discuss a project" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-400 resize-none" placeholder="Tell me about your project..."></textarea>
              </div>
              <button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white py-3 px-6 rounded-lg transition transform hover:scale-105 shadow-lg">
                Send Message
              </button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}