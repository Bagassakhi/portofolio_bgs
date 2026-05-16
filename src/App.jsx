import { ThemeProvider } from './context/ThemeContext';
import Sidebar from './components/Sidebar';
import Home from './sections/Home';
import About from './sections/About';
import Skills from './sections/Skills';
import Education from './sections/Education';
import Certificates from './sections/Certificates';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

export default function App() {
  return (
    <ThemeProvider>
      <div className="bg-white dark:bg-[#0f0f0f] min-h-screen transition-colors duration-300">
        <Sidebar />

        {/* Main content — offset for sidebar on desktop */}
        <main className="lg:ml-64 pt-16 lg:pt-0">
          <Home />
          <About />
          <Skills />
          <Education />
          <Certificates />
          <Projects />
          <Contact />
          <Footer />
        </main>
      </div>
    </ThemeProvider>
  );
}
