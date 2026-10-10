import './TrustBar.css'

const stats = [
  { value: '500+', label: 'Pilgrims guided' },
  { value: '10+', label: 'Years of service' },
  { value: '100%', label: 'Visa success rate' },
  { value: '24/7', label: 'Support on the ground' },
]

export default function TrustBar() {
  return (
    <section className="trust-bar">
      <div className="container trust-bar-inner">
        {stats.map((stat) => (
          <div key={stat.label} className="trust-stat">
            <span className="trust-value">{stat.value}</span>
            <span className="trust-label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
