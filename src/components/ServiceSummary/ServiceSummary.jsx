import './ServiceSummary.css'

const ServiceSummary = ({ serviceSummary }) => {

    const {
        service,
        yourReferrals,
        activeReferrals,
        totalRefEarnings,
    } = serviceSummary

    return (
        <section className="service-summary">

            <h2 className="section-title">
                Service Summary
            </h2>

            <div className="summary-card">

                <div className="summary-row">
                    <span className="summary-label">
                        Service
                    </span>

                    <span className="summary-value">
                        {service}
                    </span>
                </div>

                <div className="summary-row">
                    <span className="summary-label">
                        Your Referrals
                    </span>

                    <span className="summary-value">
                        {yourReferrals}
                    </span>
                </div>

                <div className="summary-row">
                    <span className="summary-label">
                        Active Referrals
                    </span>

                    <span className="summary-value">
                        {activeReferrals}
                    </span>
                </div>

                <div className="summary-row">
                    <span className="summary-label">
                        Total Ref. Earnings
                    </span>

                    <span className="summary-value earnings">
                        ${totalRefEarnings}
                    </span>
                </div>

            </div>

        </section>
    )
}

export default ServiceSummary