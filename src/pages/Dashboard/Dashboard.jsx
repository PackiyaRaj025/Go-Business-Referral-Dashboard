import {useEffect, useState} from 'react'

import Navbar from '../../components/Navbar/Navbar.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import Overview from '../../components/Overview/Overview.jsx'
import ServiceSummary from '../../components/ServiceSummary/ServiceSummary.jsx'
import ShareReferral from '../../components/ShareReferral/ShareReferral.jsx'
import ReferralTable from '../../components/ReferralTable/ReferralTable.jsx'

import './Dashboard.css'

import { getReferrals, searchReferrals, sortReferrals } from '../../services/referralApi.js'

const Dashboard = () => {
    const [dashboard, setDashboard] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [search, setSearch] = useState('')
    const [sortOrder, setSortOrder] = useState('desc') // 'asc' or 'desc'
    const [currentPage, setCurrentPage] = useState(1)
    
    const ITEMS_PER_PAGE = 10

    const lastIndex = currentPage * ITEMS_PER_PAGE
    const firstIndex = lastIndex - ITEMS_PER_PAGE

    const currentReferrals = dashboard?.referrals.slice(firstIndex, lastIndex) || []

    const totalPages = dashboard
    ? Math.ceil(dashboard.referrals.length / ITEMS_PER_PAGE)
    : 0

    useEffect(() => {
        const fetchDashboardData = async () => {
            setLoading(true)

            const result = await getReferrals()
            updateDashboard(result)
        }
        fetchDashboardData()
    }, [])

    const updateDashboard = (result) => {
        if (result.ok) {
            setDashboard(result.data.data)
            setError(null)
        } else {
            setError(result.data.message)
            
        }
        setLoading(false)

    }

    const handleSearchChange = async (event) => {
        const searchQuery = event.target.value
        setSearch(searchQuery)
        setLoading(true)
        if (searchQuery.trim() === "") {
            const result = await getReferrals()
            updateDashboard(result)
            return
        }
        const result = await searchReferrals(searchQuery)
        updateDashboard(result)
    }


    const handleSortChange = async (event) => {
        const order = event.target.value
        setSortOrder(order)
        setLoading(true)
        const result = await sortReferrals(order)
        updateDashboard(result)
    }

    if (loading) {
        return <h2 className='loading-el'>Loading...</h2>
    }

    if (error) {
        return <h2>Error: {error}</h2>
    }
    const from =
    dashboard && dashboard.referrals.length > 0
        ? firstIndex + 1
        : 0

    const to = dashboard
    ? Math.min(lastIndex, dashboard.referrals.length)
    : 0

    return (
        <>
            <Navbar /> 

            <main className="dashboard-container">

                <div className="dashboard-header">
                    <h1 className="dashboard-title">
                        Referral Dashboard
                    </h1>

                    <p className="dashboard-description">
                        Track your referrals, earnings, and partner activity in one place.
                    </p>
                </div>

                <Overview metrics={dashboard.metrics} />

                <ServiceSummary serviceSummary={dashboard.serviceSummary} />

                <ShareReferral referral={dashboard.referral} />

                <div className="dashboard-toolbar">

                    <input
                        className="search-input"
                        type="text"
                        placeholder="Search referrals..."
                        value={search}
                        onChange={handleSearchChange}
                    />

                    <select
                        className="sort-select"
                        value={sortOrder}
                        onChange={handleSortChange}
                    >
                        <option value="desc">Newest First</option>
                        <option value="asc">Oldest First</option>
                    </select>

                </div>

                <ReferralTable referrals={currentReferrals} />

                <div className="pagination-container">

                    <p className="pagination-info">
                        Showing {from}–{to} of {dashboard.referrals.length} entries
                    </p>

                    <div className="pagination-controls">

                        <button
                            className="page-btn"
                            disabled={currentPage === 1}
                            onClick={() => setCurrentPage(prev => prev - 1)}
                        >
                            Previous
                        </button>

                        <span className="page-number">
                            Page {currentPage} of {totalPages}
                        </span>

                        <button
                            className="page-btn"
                            disabled={currentPage === totalPages}
                            onClick={() => setCurrentPage(prev => prev + 1)}
                        >
                            Next
                        </button>

                    </div>

                </div>

            </main>

            <Footer />
        </>
    )
}

export default Dashboard