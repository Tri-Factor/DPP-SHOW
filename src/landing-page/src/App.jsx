import { motion } from 'framer-motion'
import Hero from './components/Hero'
import Solution from './components/Solution'
import HowItWorks from './components/HowItWorks'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen w-full bg-branco-algodao overflow-x-hidden m-0 p-0">
      <Hero />
      <Solution />
      <HowItWorks />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
