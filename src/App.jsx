import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import Packages from './components/Packages'
import Inclusions from './components/Inclusions'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Packages />
        <Inclusions />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />

      {/* Floating WhatsApp Quick Action Button */}
      <a
        href="https://wa.me/919494099717?text=As-salamu%20alaykum%2C%20I%20would%20like%20to%20inquire%20about%20the%2010%20Days%20Umrah%20Package."
        target="_blank"
        rel="noopener noreferrer"
        className="floating-wa-btn"
        aria-label="Chat on WhatsApp"
        title="Chat with Shaik Fayaz on WhatsApp"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2m.01 1.67c4.56 0 8.25 3.69 8.25 8.24 0 2.2-.86 4.28-2.42 5.84-1.56 1.56-3.64 2.42-5.83 2.42-1.46 0-2.89-.39-4.14-1.13l-.3-.18-3.08.81.82-3-.19-.31c-.81-1.3-1.24-2.81-1.24-4.45 0-4.55 3.7-8.24 8.26-8.24m4.53 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.24-.75-.67-1.25-1.49-1.4-1.74-.15-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.45s-.56-1.35-.77-1.85c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.28 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.17-.48-.29z" />
        </svg>
        <span className="wa-tooltip">Message us on WhatsApp</span>
      </a>
    </div>
  )
}

export default App
