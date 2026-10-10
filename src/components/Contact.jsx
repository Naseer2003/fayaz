import { useState } from 'react'
import Icon from './Icon'
import './Contact.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    seats: '1',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Open WhatsApp with prefilled message
    const text = encodeURIComponent(
      `As-salamu alaykum Shaik Fayaz bhai,\n\nI want to book the 10 Days Umrah Package (Nov 18 2026).\nName: ${formData.name}\nPhone: ${formData.phone}\nSeats: ${formData.seats}\nMessage: ${formData.message || 'Please share booking details.'}`
    )
    window.open(`https://wa.me/919494099717?text=${text}`, '_blank')
    setSubmitted(true)
  }

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="contact-wrapper">
          {/* Left Info Panel */}
          <div className="contact-info-panel">
            <p className="eyebrow">Reserve a seat</p>
            <h2 className="display">
              Seats are limited for <em>18 November</em>
            </h2>
            <p className="lede">
              Speak to Shaik Fayaz directly, or come to the office in Shivaji Nagar.
              Either way you will talk to the person running the trip.
            </p>

            <div className="contact-cards">
              <a href="tel:9494099717" className="contact-item">
                <div className="contact-icon"><Icon name="phone" size={20} /></div>
                <div className="contact-meta">
                  <span className="contact-label">Call or WhatsApp</span>
                  <strong className="contact-value">+91 94940 99717</strong>
                </div>
              </a>

              <a href="tel:9945438434" className="contact-item">
                <div className="contact-icon"><Icon name="support" size={20} /></div>
                <div className="contact-meta">
                  <span className="contact-label">Alternate number</span>
                  <strong className="contact-value">+91 99454 38434</strong>
                </div>
              </a>

              <div className="contact-item">
                <div className="contact-icon"><Icon name="pin" size={20} /></div>
                <div className="contact-meta">
                  <span className="contact-label">Office</span>
                  <strong className="contact-value">
                    St Johnson Church Road near Coles Park, Shivaji Nagar, Bangalore
                  </strong>
                </div>
              </div>

              <div className="contact-item highlight-box">
                <div className="contact-icon"><Icon name="calendar" size={20} /></div>
                <div className="contact-meta">
                  <span className="contact-label">Departure and fare</span>
                  <strong className="contact-value">
                    18 November 2026 · ₹82,999 all inclusive
                  </strong>
                </div>
              </div>
            </div>
          </div>

          {/* Right Booking Form */}
          <div className="contact-form-container">
            <h3 className="form-title">Booking enquiry</h3>
            <p className="form-subtitle">Leave your details and we will continue on WhatsApp.</p>

            {submitted ? (
              <div className="success-banner">
                <div className="success-icon">✓</div>
                <h4>JazakAllah Khair!</h4>
                <p>Your request has been initiated. If WhatsApp didn't open automatically, you can also call us directly at <strong>9494099717</strong>.</p>
                <button
                  type="button"
                  className="btn-primary"
                  style={{ marginTop: '16px' }}
                  onClick={() => setSubmitted(false)}
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="booking-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="e.g. Mohammed Farooq"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone / WhatsApp Number *</label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    placeholder="e.g. +91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="seats">Number of Pilgrims (Seats)</label>
                  <select
                    id="seats"
                    value={formData.seats}
                    onChange={(e) => setFormData({ ...formData, seats: e.target.value })}
                  >
                    <option value="1">1 Pilgrim</option>
                    <option value="2">2 Pilgrims (Couple)</option>
                    <option value="3">3 Pilgrims</option>
                    <option value="4">4 Pilgrims (Family)</option>
                    <option value="5+">5+ Pilgrims (Group)</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Special Requirements / Notes</label>
                  <textarea
                    id="message"
                    rows="3"
                    placeholder="Need wheelchair support, specific hotel sharing options, etc."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary form-submit-btn">
                  <span>Continue on WhatsApp</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2m.01 1.67c4.56 0 8.25 3.69 8.25 8.24 0 2.2-.86 4.28-2.42 5.84-1.56 1.56-3.64 2.42-5.83 2.42-1.46 0-2.89-.39-4.14-1.13l-.3-.18-3.08.81.82-3-.19-.31c-.81-1.3-1.24-2.81-1.24-4.45 0-4.55 3.7-8.24 8.26-8.24m4.53 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.24-.75-.67-1.25-1.49-1.4-1.74-.15-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.45s-.56-1.35-.77-1.85c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.28 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.17-.48-.29z"/>
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
