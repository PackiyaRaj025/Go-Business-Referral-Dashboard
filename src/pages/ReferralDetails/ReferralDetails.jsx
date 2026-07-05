import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getReferralById } from '../../services/referralApi.js'

import "./ReferralDetails.css"

const ReferralDetails = () => {
    const { id } = useParams()
    const [referral, setReferral] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
    const fetchReferral = async () => {
        setLoading(true)

        const result = await getReferralById(id)
        console.log(result)

        if (result.ok) {
        setReferral(result.data.data)
        setError("")
        } else {
        setError(result.data.message)
        }

        setLoading(false)
    }

    fetchReferral()
    }, [id])

    if (loading) {
        return <h2 className='loading-el'>Loading...</h2>
    }
    if (error){
        return <h2>{error}</h2>
    }

    if (!referral) {
        return (
            <>
                <h1>Referral not found</h1>

                <Link to="/"> Back to dashboard</Link>
            </>
        )
    }

    const formattedDate = referral.referrals[0].date.replace(/-/g, "/")

    const formattedProfit = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0,
        }).format(referral.referrals[0].profit)

    return (
        <main className="details-container">

            <Link
                className="back-btn"
                to="/"
            >
                ← Back to Dashboard
            </Link>

            <div className="details-card">

                <h1 className="details-title">
                    Referral Details
                </h1>

                <h2 className="partner-name">
                    {referral.referrals[0].name}
                </h2>

                <div className="detail-row">
                    <span>Referral ID</span>
                    <strong>{referral.referrals[0].id}</strong>
                </div>

                <div className="detail-row">
                    <span>Service</span>
                    <strong>{referral.referrals[0].serviceName}</strong>
                </div>


                <div className="detail-row">
                    <span>Date</span>
                    <strong>{formattedDate}</strong>
                </div>

                <div className="detail-row">
                    <span>Profit</span>

                    <strong className="profit">
                        {formattedProfit}
                    </strong>

                </div>

            </div>

        </main>
    )
}

export default ReferralDetails