import { useEffect, useState } from 'react'
import kaaba from '../assets/hero/makkah-kaaba-clocktower.jpg'
import courtyard from '../assets/hero/madina-courtyard.jpg'
import tawaf from '../assets/hero/makkah-tawaf.jpg'
import greenDome from '../assets/hero/madina-green-dome.jpg'
import kaabaTall from '../assets/hero/makkah-kaaba-clocktower-portrait.jpg'
import courtyardTall from '../assets/hero/madina-courtyard-portrait.jpg'
import tawafTall from '../assets/hero/makkah-tawaf-portrait.jpg'
import greenDomeTall from '../assets/hero/madina-green-dome-portrait.jpg'
import {
  kaabaLqip,
  courtyardLqip,
  tawafLqip,
  greenDomeLqip,
} from '../assets/hero/placeholders'
import './Hero.css'

// Phones get a portrait crop: a wide photo cropped to a tall viewport leaves
// only a narrow strip of the middle, which loses the subject entirely.
const slides = [
  { src: kaaba, tall: kaabaTall, preview: kaabaLqip },
  { src: courtyard, tall: courtyardTall, preview: courtyardLqip },
  { src: tawaf, tall: tawafTall, preview: tawafLqip },
  { src: greenDome, tall: greenDomeTall, preview: greenDomeLqip },
]

export default function Hero() {
  const [active, setActive] = useState(0)
  const previous = (active - 1 + slides.length) % slides.length

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const timer = setTimeout(() => setActive((i) => (i + 1) % slides.length), 7000)
    return () => clearTimeout(timer)
  }, [active])

  return (
    <section id="home" className="hero">
      <div className="hero-media" aria-hidden="true">
        {slides.map((slide, i) => (
          <div
            key={slide.src}
            className={[
              'hero-slide',
              i === active ? 'is-active' : '',
              i === previous ? 'is-previous' : '',
            ]
              .join(' ')
              .trim()}
            style={{ backgroundImage: `url(${slide.preview})` }}
          >
            <picture>
              <source
                media="(max-width: 860px) and (orientation: portrait)"
                srcSet={slide.tall}
              />
              <img
                src={slide.src}
                alt=""
                decoding="async"
                loading={i === 0 ? 'eager' : 'lazy'}
                fetchPriority={i === 0 ? 'high' : 'low'}
              />
            </picture>
          </div>
        ))}
        <div className="hero-scrim" />
      </div>

      <div className="container hero-content">
        <p className="hero-kicker">
          <span className="kicker-rule" />
          Departing 18 November 2026
        </p>

        <h1 className="hero-title">
          <span className="title-line">10 Days Umrah</span>
          <em className="title-line title-accent">from Bangalore</em>
        </h1>

        <p className="hero-text">
          Direct flights, hotels within walking distance of both Harams, and
          personal guidance from Shaik Fayaz throughout.
        </p>

        <div className="hero-buttons">
          <a href="tel:9494099717" className="hero-btn">
            Call Shaik Fayaz
          </a>
          <a href="#packages" className="hero-link">
            <span>View the package</span>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M5 12h13M12 6l6 6-6 6" />
            </svg>
          </a>
        </div>
      </div>

      <div className="hero-dots">
        {slides.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            className={i === active ? 'is-active' : ''}
            aria-label={`Image ${i + 1}`}
            onClick={() => setActive(i)}
          />
        ))}
      </div>
    </section>
  )
}
