import Icon from './Icon'
import './Footer.css'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-col brand-col">
          <div className="footer-logo">
            <div className="footer-logo-badge">فياض</div>
            <div>
              <div className="footer-title">FAYAZ</div>
              <div className="footer-sub">Tours & Travels Pvt Ltd</div>
            </div>
          </div>
          <p className="footer-motto">Where heart meets and soul connects</p>
          <p className="footer-about">
            Dedicated to providing the most spiritually fulfilling, comfortable, and trusted Umrah experiences from Bangalore with direct flights and 5-star hospitality.
          </p>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#packages">Umrah Packages</a></li>
            <li><a href="#inclusions">Inclusions & Process</a></li>
            <li><a href="#gallery">Holy Sites Gallery</a></li>
            <li><a href="#testimonials">Pilgrim Reviews</a></li>
            <li><a href="#contact">Contact & Booking</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Package Highlights</h4>
          <ul className="footer-links">
            <li><span>Direct flight from Bangalore</span></li>
            <li><span>Departing 18 November 2026</span></li>
            <li><span>Makkah hotel, 400 m from the Haram</span></li>
            <li><span>Madina hotel, 200 m from the Nabawi</span></li>
            <li><span>Five litres of Zamzam and a travel kit</span></li>
            <li><span>Laundry included</span></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Office & Contact</h4>
          <p className="footer-info-text">
            <strong>Contact Person:</strong> Shaik Fayaz<br />
            <strong>Phones:</strong>{' '}
            <a href="tel:9494099717">+91 94940 99717</a> /{' '}
            <a href="tel:9945438434">+91 99454 38434</a><br />
            <strong>Location:</strong> St Johnson Church Road near Coles Park, Shivaji Nagar, Bangalore
          </p>
          <button onClick={scrollToTop} className="btn-outline back-top-btn" id="footer-top-btn">
            <Icon name="arrowUp" size={15} />
            Back to top
          </button>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© {new Date().getFullYear()} Fayaz Tours And Travels Pvt Ltd. All rights reserved.</p>
          <p className="footer-credits">Shivaji Nagar, Bangalore</p>
        </div>
      </div>
    </footer>
  )
}
