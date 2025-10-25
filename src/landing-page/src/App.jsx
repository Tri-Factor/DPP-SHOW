import { motion } from 'framer-motion'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Solution from './components/Solution'
import Benefits from './components/Benefits'
import HowItWorks from './components/HowItWorks'
import CaseStudy from './components/CaseStudy'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen w-full bg-branco-algodao overflow-x-hidden m-0 p-0">
      <Hero />
      <Problem />
      <Solution />
      <Benefits />
      <HowItWorks />
      <CaseStudy />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
