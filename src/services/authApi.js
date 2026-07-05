
export const loginUser = async (email, password) => {

    const userDetails = {
        email: email,
        password: password
    }

    const option = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body : JSON.stringify(userDetails),
    }

    const LOGIN_URL = "https://v9fes04dwf.execute-api.eu-north-1.amazonaws.com/api/auth/signin"

    const response = await fetch(LOGIN_URL, option)
    const data = await response.json()

    return {
        ok : response.ok,
        data : data
    }
}
