import Icon from './Icon'
import './Testimonials.css'

const testimonials = [
  {
    name: 'Mohammed Rizwan',
    location: 'Shivaji Nagar, Bangalore',
    date: 'Ramadan 2025',
    quote:
      'The hotel really was 400 metres from the Haram, which mattered enormously with elderly parents. Fayaz bhai checked on every pilgrim himself.',
  },
  {
    name: 'Syed Tanveer Ahmed',
    location: 'Frazer Town, Bangalore',
    date: 'December 2025',
    quote:
      'Visa handled without a single follow-up from me, a direct flight with no layover, and ziyarat that came with real historical context. Ideal for a first Umrah.',
  },
  {
    name: 'Farhana & family',
    location: 'Benson Town, Bangalore',
    date: 'January 2026',
    quote:
      'Laundry and the Zamzam packing were taken care of, so we had nothing to think about. Two hundred metres from Nabawi meant we made every prayer.',
  },
]

const initials = (name) =>
  name
    .replace(/&.*/, '')
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase()

export default function Testimonials() {
  return (
    <section id="testimonials" className="section testimonials">
      <div className="container">
        <div className="section-head section-head-center">
          <p className="eyebrow eyebrow-center">Pilgrims</p>
          <h2 className="display">
            Families who have <em>already gone</em>
          </h2>
        </div>

        <div className="quotes">
          {testimonials.map((t) => (
            <figure key={t.name} className="quote">
              <span className="quote-mark">
                <Icon name="quote" size={26} strokeWidth={1.2} />
              </span>
              <blockquote className="quote-text">{t.quote}</blockquote>
              <figcaption className="quote-author">
                <span className="quote-initials" aria-hidden="true">
                  {initials(t.name)}
                </span>
                <span className="quote-meta">
                  <span className="quote-name">{t.name}</span>
                  <span className="quote-where">
                    {t.location} &middot; {t.date}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
