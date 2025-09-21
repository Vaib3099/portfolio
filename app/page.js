import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Experience from '../components/Experience'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <main id="main" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Hero />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <About />
          <Skills />
          <Projects />
          <Contact />
        </div>

        <div className="lg:col-span-1">
          <Experience />
        </div>
      </div>
    </main>
  )
}
