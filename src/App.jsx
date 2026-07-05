import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from './pages/Login/Login.jsx'
import Dashboard from './pages/Dashboard/Dashboard.jsx'
import NotFound from './pages/NotFound/NotFound.jsx'
import ReferralDetails from "./pages/ReferralDetails/ReferralDetails.jsx"
import { ProtectedRoute } from "./routes/ProtectedRoute.jsx"

function App () {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/login" element={<Login /> } />

        <Route path="/" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />

        <Route path="/referral/:id" element={
          <ProtectedRoute>
            <ReferralDetails />
          </ProtectedRoute>
        } />
        
        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App 