import Cookies from 'js-cookie'

const REFERRAL_API = 'https://v9fes04dwf.execute-api.eu-north-1.amazonaws.com/api/referrals'

// Get all referrals
export const getReferrals = async () => {
    try {
        const jwtToken = Cookies.get('jwt_token')

        const options = {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${jwtToken}`
            }
        }

        const response = await fetch(REFERRAL_API, options)  
        const data = await response.json()

        return {
            ok : response.ok,
            data : data
        }

    } catch (error) {
        console.log("Error fetching referrals:", error)
        return {
            ok : false,
            data : { message : error.message }
        }
    }
}


// Search referrals by query
export const searchReferrals = async (searchQuery) => {
    
    try {
        const jwtToken = Cookies.get('jwt_token')
        const options = {
            method : 'GET',
            headers : {
                'Content-Type' : 'application/json',
                'Authorization' : `Bearer ${jwtToken}`
            }
        }

        const response = await fetch(`${REFERRAL_API}?search=${encodeURIComponent(searchQuery)}`, options)
        const data = await response.json()
        return {
            ok : response.ok,
            data : data
        }
    } catch (error) {
        console.log("Error searching referrals:", error)
        return {
            ok : false,
            data : { message : error.message }
        }
    }
}


// Sort referrals by order
export const sortReferrals = async (order) => {
    try {
        const jwtToken = Cookies.get('jwt_token')
        const options = {
            method : 'GET',
            headers : {
                'Authorization' : `Bearer ${jwtToken}`
            }
        }

        const response = await fetch(`${REFERRAL_API}?sort=${order}`, options)
        const data = await response.json()
        return {
            ok : response.ok,
            data : data
        }
    } catch (error) {
        return {
            ok: false,
            data: {
                message: error.message,
            },
        }
    }
}


// Get referral details by ID 
export const getReferralById = async (id) => {
    try {
        const jwtToken = Cookies.get('jwt_token')
        const options = {
            method : 'GET',
            headers : {
                'Authorization' : `Bearer ${jwtToken}`
            }
        }
        
        const response = await fetch(`${REFERRAL_API}?id=${id}`, options)
        const data = await response.json()
        return {
            ok : response.ok,
            data : data
        }
    } catch (error) {
        console.log("Error fetching referral details:", error)
        return {
            ok : false,
            data : { message : error.message }
        }
    }
}