export default function Navbar({ activeSection, scrollToSection, theme, setTheme }) {
    return (
      <nav className="fixed top-0 left-0 w-full bg-white/80 dark:bg-gray-900/90 backdrop-blur-md z-50 shadow-md border-b border-blue-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-extrabold text-blue-400 tracking-wide">Ohimaime</h1>
          <div className="flex gap-6 text-sm md:text-base">
            {['about', 'skills', 'projects', 'contact'].map(section => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`cursor-pointer hover:text-blue-400 transition capitalize ${activeSection === section ? 'text-blue-400' : 'text-gray-600 dark:text-gray-300'}`}
              >
                {section}
              </button>
            ))}
          </div>
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="text-blue-400 hover:text-blue-500 transition"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        </div>
      </nav>
    );
  }