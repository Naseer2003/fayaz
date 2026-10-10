import Icon from './Icon'
import feature from '../assets/gallery/haram-morning.jpg'
import './Packages.css'

const included = [
  { icon: 'plane', title: 'Direct flight', desc: 'Return Bangalore to Jeddah, no stopovers.' },
  { icon: 'passport', title: 'Umrah visa', desc: 'Processing and paperwork handled for you.' },
  { icon: 'shield', title: 'Travel insurance', desc: 'Health and travel cover for the full trip.' },
  { icon: 'bus', title: 'Ground transport', desc: 'Air-conditioned coaches between all sites.' },
  { icon: 'mosque', title: 'Guided ziyarat', desc: 'Historic sites in both Makkah and Madina.' },
  { icon: 'bag', title: 'Travel kit', desc: 'Ihram, prayer mat and journey essentials.' },
  { icon: 'shirt', title: 'Laundry', desc: 'Included throughout your stay.' },
  { icon: 'droplet', title: 'Zamzam water', desc: 'Five litres to carry home with you.' },
]

const facts = [
  { label: 'Departure', value: '18 November 2026' },
  { label: 'Duration', value: '10 days' },
  { label: 'Makkah hotel', value: '400 m from the Haram' },
  { label: 'Madina hotel', value: '200 m from the Nabawi' },
]

export default function Packages() {
  return (
    <section id="packages" className="section section-light packages">
      <div className="container">
        <div className="section-head packages-head">
          <div>
            <p className="eyebrow">The package</p>
            <h2 className="display">
              Ten days, <em>everything arranged</em>
            </h2>
          </div>
          <p className="lede packages-lede">
            One price covers the flight, the visa, both hotels and every transfer in
            between. Nothing to add later, nothing to arrange yourself.
          </p>
        </div>

        {/* Feature panel */}
        <div className="pkg-feature">
          <div className="pkg-feature-media">
            <img src={feature} alt="Pilgrims in the courtyard of Masjid al-Haram, Makkah" loading="lazy" />
          </div>

          <div className="pkg-feature-body">
            <h3 className="pkg-feature-title">Premium Umrah, from Bangalore</h3>

            <dl className="pkg-facts">
              {facts.map((f) => (
                <div key={f.label} className="pkg-fact">
                  <dt>{f.label}</dt>
                  <dd>{f.value}</dd>
                </div>
              ))}
            </dl>

            <div className="pkg-price-row">
              <div className="pkg-price">
                <span className="pkg-price-label">Per person, all inclusive</span>
                <span className="pkg-price-value">₹82,999</span>
              </div>
              <a href="tel:9494099717" className="btn-primary">
                Reserve a seat
              </a>
            </div>
          </div>
        </div>

        {/* Inclusions */}
        <div className="pkg-included-head">
          <h3 className="pkg-included-title">What is included</h3>
          <hr className="rule" />
        </div>

        <ul className="pkg-grid">
          {included.map((item) => (
            <li key={item.title} className="pkg-item">
              <span className="pkg-item-icon">
                <Icon name={item.icon} size={24} />
              </span>
              <h4 className="pkg-item-title">{item.title}</h4>
              <p className="pkg-item-desc">{item.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
