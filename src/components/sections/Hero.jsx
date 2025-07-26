import AdvancedTypewriter from "../ui/Typewriter";
import AnimatedSection from "../ui/AnimatedSection";

export default function Hero({ scrollToSection }) {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative pt-28 z-10">
      {/* Profile Image */}
      <AnimatedSection>
        <div className="w-48 h-48 md:w-72 md:h-72 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg transition-transform duration-500 hover:scale-105 hover:shadow-blue-500/40">
          <img
            src="/IMG_3445-removebg-preview.png"
            alt="Emmanuel Ogoh"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </AnimatedSection>

      {/* Name */}
      <AnimatedSection delay={200}>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent drop-shadow-md mt-6 mb-4">
          Emmanuel Ohimaime Ogoh
        </h1>
      </AnimatedSection>

      {/* Typewriter Role */}
      <AnimatedSection delay={400}>
        <div className="text-lg md:text-2xl text-blue-300 font-medium mb-8 h-8">
          <AdvancedTypewriter />
        </div>
      </AnimatedSection>

      {/* Buttons */}
      <AnimatedSection delay={600}>
        <div className="flex gap-4 flex-wrap justify-center">
          <button
            onClick={() => scrollToSection('projects')}
            className="cursor-pointer bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-6 py-3 rounded-full shadow-xl transition transform hover:scale-105"
          >
            View Projects
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="cursor-pointer border border-blue-600 hover:bg-blue-600 text-blue-600 hover:text-white px-6 py-3 rounded-full transition transform hover:scale-105"
          >
            Contact Me
          </button>
        </div>
      </AnimatedSection>
    </section>
  );
}
