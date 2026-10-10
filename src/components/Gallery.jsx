import { useState, useEffect, useCallback } from 'react'
import haramNight from '../assets/gallery/haram-night.jpg'
import kaabaDoor from '../assets/gallery/kaaba-door.jpg'
import nabawiInterior from '../assets/gallery/nabawi-interior.jpg'
import nabawiPrayerHall from '../assets/gallery/nabawi-prayer-hall.jpg'
import kaabaPilgrims from '../assets/gallery/kaaba-pilgrims.jpg'
import greenDome from '../assets/gallery/green-dome.jpg'
import './Gallery.css'

// Order matters: tile 1 spans two rows and tile 5 spans two columns, which
// fills a 4 x 2 grid exactly.
const images = [
  { src: haramNight, title: 'Masjid al-Haram by night', place: 'Makkah', size: 'tall' },
  { src: nabawiInterior, title: 'Inside the Prophet’s Mosque', place: 'Madina', size: '' },
  { src: kaabaDoor, title: 'The door of the Kaaba', place: 'Makkah', size: '' },
  { src: kaabaPilgrims, title: 'Pilgrims at the Kaaba', place: 'Makkah', size: '' },
  { src: greenDome, title: 'The Green Dome', place: 'Madina', size: 'wide' },
  { src: nabawiPrayerHall, title: 'The prayer hall at Nabawi', place: 'Madina', size: '' },
]

export default function Gallery() {
  const [active, setActive] = useState(null)

  const close = useCallback(() => setActive(null), [])

  useEffect(() => {
    if (!active) return
    const onKey = (e) => e.key === 'Escape' && close()
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [active, close])

  return (
    <section id="gallery" className="section section-dark gallery">
      <div className="container">
        <div className="section-head gallery-head">
          <div>
            <p className="eyebrow">Where you will be</p>
            <h2 className="display">
              The two <em>holy cities</em>
            </h2>
          </div>
          <p className="lede gallery-lede">
            Ten days between Masjid al-Haram and Masjid an-Nabawi, with guided visits
            to the sites around both.
          </p>
        </div>

        <div className="gallery-grid">
          {images.map((img) => (
            <button
              key={img.src}
              type="button"
              className={`gallery-item ${img.size}`}
              onClick={() => setActive(img)}
              aria-label={`View ${img.title}, ${img.place}`}
            >
              <img src={img.src} alt={`${img.title}, ${img.place}`} loading="lazy" />
              <span className="gallery-caption">
                <span className="gallery-place">{img.place}</span>
                <span className="gallery-title">{img.title}</span>
              </span>
            </button>
          ))}
        </div>
      </div>

      {active && (
        <div
          className="lightbox"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
        >
          <button type="button" className="lightbox-close" onClick={close} aria-label="Close">
            &#10005;
          </button>
          <figure className="lightbox-figure" onClick={(e) => e.stopPropagation()}>
            <img src={active.src} alt={`${active.title}, ${active.place}`} />
            <figcaption>
              <span className="lightbox-place">{active.place}</span>
              <span className="lightbox-title">{active.title}</span>
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  )
}
