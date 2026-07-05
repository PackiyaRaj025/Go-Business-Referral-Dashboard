import './Overview.css'

const Overview = ({ metrics }) => {
  return (
    <section className="overview-section">
      <h2 className="section-title">Overview</h2>

      <div className="overview-grid">
        {metrics.map(eachMetric => (
          <div className="overview-card" key={eachMetric.id}>
            <h3 className="metric-title">
              {eachMetric.label}
            </h3>

            <p className="metric-value">
              {eachMetric.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Overview