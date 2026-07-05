import "./ReferralTable.css"
import { Link } from "react-router-dom"

const ReferralTable = ({ referrals }) => {
  return (
    <section className="referral-table-section">

      <h2 className="section-title">Referrals</h2>

      <div className="table-container">

        <table className="referral-table">

          <thead>

            <tr>
              <th>Name</th>
              <th>Date</th>
              <th>Details</th>
            </tr>

          </thead>

          <tbody>

            {referrals.map(referral => (
              <tr key={referral.id}>
                <td>{referral.name}</td>
                <td>{referral.date}</td>
                <td>
                  <Link
                    className="view-link"
                    to={`/referral/${referral.id}`}
                  >
                    View
                  </Link>
                </td>
              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </section>
  )
}

export default ReferralTable