import { useState, useEffect } from 'react'
import { loginUser } from '../../services/authApi.js'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'

import './Login.css'

const Login = () => {

  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      navigate('/')
    }
  }, [navigate])

  const handleSubmit = async (event) => {
    event.preventDefault()
    setLoading(true)
    setError('')
    
    try{
      const result = await loginUser(email, password)
    
      if (result.ok) {
          const jwtToken = result.data.data.token
          Cookies.set('jwt_token', jwtToken, { expires: 7 }) 
          navigate('/', { replace: true })
        }
      else{
        setError(result.data.message)
      }
    } catch (error) {
      setError('Something went wrong. Please try again.')
      console.log(error)
    }finally {
    setLoading(false)
    }
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }
  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-title">Go Business</h1>

        <p className="login-subtitle">
          Sign in to open your referral dashboard.
        </p>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>

            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              value={email}
              onChange={handleEmailChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>

            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>

          {error && <p className="error-message">{error}</p>}

          <button
            className="login-btn"
            type="submit"
            disabled={loading}
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  )
}


export default Login