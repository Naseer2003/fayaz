import Icon from './Icon'
import './Inclusions.css'

const steps = [
  {
    n: '01',
    title: 'Reserve your seat',
    desc: 'Call or message Shaik Fayaz to hold a place on the November departure.',
  },
  {
    n: '02',
    title: 'Send your documents',
    desc: 'Passport and photographs. The visa and the paperwork are handled for you.',
  },
  {
    n: '03',
    title: 'Fly direct',
    desc: 'Bangalore to Jeddah with no stopovers, travelling together as one group.',
  },
  {
    n: '04',
    title: 'Perform your Umrah',
    desc: 'Ten days in Makkah and Madina with guided ziyarat and support throughout.',
  },
]

const reasons = [
  {
    icon: 'hotel',
    title: 'Walking distance',
    desc: 'Both hotels sit minutes from the mosques — 400 m in Makkah, 200 m in Madina.',
  },
  {
    icon: 'wallet',
    title: 'One fixed price',
    desc: 'Flight, visa, hotels, transport and kit are all inside the ₹82,999.',
  },
  {
    icon: 'users',
    title: 'Accompanied group',
    desc: 'You travel with a guide who knows the rites and the route.',
  },
  {
    icon: 'support',
    title: 'Reachable always',
    desc: 'Someone from the team is contactable day and night while you are away.',
  },
  {
    icon: 'shield',
    title: 'Fully insured',
    desc: 'Medical and travel cover runs for the whole of your journey.',
  },
  {
    icon: 'award',
    title: 'Ten years of trips',
    desc: 'Hundreds of families from Bangalore have made this journey with us.',
  },
]

export default function Inclusions() {
  return (
    <section id="inclusions" className="section inclusions">
      <div className="container">
        {/* How it works */}
        <div className="section-head">
          <p className="eyebrow">How it works</p>
          <h2 className="display">
            Four steps, <em>and we take the rest</em>
          </h2>
        </div>

        <ol className="steps">
          {steps.map((s) => (
            <li key={s.n} className="step">
              <span className="step-n">{s.n}</span>
              <h3 className="step-title">{s.title}</h3>
              <p className="step-desc">{s.desc}</p>
            </li>
          ))}
        </ol>

        <hr className="rule inclusions-divider" />

        {/* Why us */}
        <div className="section-head">
          <p className="eyebrow">Why travel with us</p>
          <h2 className="display">
            The details that <em>change the trip</em>
          </h2>
        </div>

        <div className="reasons">
          {reasons.map((r) => (
            <article key={r.title} className="reason">
              <span className="reason-icon">
                <Icon name={r.icon} size={26} />
              </span>
              <div>
                <h3 className="reason-title">{r.title}</h3>
                <p className="reason-desc">{r.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
