import { ArrowDown, ExternalLink, Code2 } from 'lucide-react';

export default function App() {
  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white shadow-md z-10">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">Your Name</h1>
          <div className="space-x-6">
            <a href="#work" className="hover:text-blue-600">Work</a>
            <a href="#skills" className="hover:text-blue-600">Skills</a>
            <a href="#resources" className="hover:text-blue-600">Resources</a>
            <a href="#setup" className="hover:text-blue-600">Setup</a>
          </div>
        </div>
      </nav>

      {/* Hero / Basic Info */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-center">
          <img 
            src="https://via.placeholder.com/200" 
            alt="Your photo" 
            className="w-48 h-48 rounded-full mx-auto mb-6 border-4 border-white shadow-lg"
          />
          <h1 className="text-6xl font-bold mb-4">Hi, I'm Your Name</h1>
          <p className="text-2xl text-gray-700 mb-8">Full Stack Developer • Canada</p>
          <ArrowDown className="mx-auto animate-bounce w-10 h-10" />
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">My Work</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img src="https://via.placeholder.com/400x200" className="w-full" />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Project Title 1</h3>
                <p className="text-gray-600 mb-4">Short description of what you built.</p>
                <div className="flex gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">React</span>
                  <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Tailwind</span>
                </div>
                <a href="#" className="text-blue-600 flex items-center gap-2">
                  View Project <ExternalLink size={16} />
                </a>
              </div>
            </div>
            {/* Repeat 2 more times for Project 2 & 3 */}
            {/* Just copy-paste the div above and change the text */}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-xl font-bold mb-4">Languages</h3>
              <p className="text-gray-600">JavaScript, Python, HTML, CSS</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Frameworks</h3>
              <p className="text-gray-600">React, Node.js, Express</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Tools</h3>
              <p className="text-gray-600">VS Code, Git, Figma, Postman</p>
            </div>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section id="resources" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Resources I Love</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <a href="https://react.dev" className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
              <h3 className="text-xl font-bold mb-2">React Docs</h3>
              <p className="text-gray-600">Best place to learn React</p>
            </a>
            {/* Add 2 more */}
          </div>
        </div>
      </section>

      {/* Developer Setup */}
      <section id="setup" className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">My Developer Setup</h2>
          <div className="bg-black text-green-400 p-8 rounded-xl font-mono">
            <p>Editor: VS Code</p>
            <p>Font: JetBrains Mono 14pt</p>
            <p>Theme: Dracula</p>
            <p>Terminal: Windows Terminal + Oh My Posh</p>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8 text-center">
        <p>Made with <span className="text-red-500">❤</span> by Your Name • 2025</p>
      </footer>
    </>
  );
}
