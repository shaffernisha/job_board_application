// App.jsx
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { useAuth } from './main'

// Import components
import Header from './components/Header'
import Footer from './components/Footer'

// Import pages
import Home from './pages/Home'
import Jobs from './pages/Jobs'
import JobDetails from './pages/JobDetails'
import Login from './pages/Login'
import Register from './pages/Register'
import MyApplications from './pages/MyApplications'
import AdminDashboard from './pages/AdminDashboard'
import EmployerDashboard from './pages/EmployerDashboard'
import SeekerDashboard from './pages/SeekerDashboard'
import Services from './pages/Services'
import About from './pages/About'
import JobSearch from './pages/JobSearch'
import ProfileSetup from './pages/ProfileSetup'

// Protected Route Component
const ProtectedRoute = ({ children, allowedRoles }) => {
  const { user, loading } = useAuth()

  if (loading) {
    return (
      <div style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center' 
      }}>
        <div className="spinner" />
      </div>
    )
  }

  if (!user) {
    return <Navigate to="/login" replace />
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    // Redirect to appropriate dashboard based on role
    if (user.role === 'admin') return <Navigate to="/admin/dashboard" replace />
    if (user.role === 'employer') return <Navigate to="/employer/dashboard" replace />
    if (user.role === 'seeker') return <Navigate to="/seeker/dashboard" replace />
    return <Navigate to="/" replace />
  }

  return children
}

function App() {
  const { user } = useAuth()
  const location = useLocation()

  // Check if current route is a dashboard
  const isDashboardRoute = location.pathname.includes('/dashboard') || 
                          location.pathname.includes('/seeker/') || 
                          location.pathname.includes('/employer/') || 
                          location.pathname.includes('/admin/')

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {!isDashboardRoute && <Header />}
      <main style={{ flex: 1 }}>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/jobs/:id" element={<JobDetails />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          
          {/* Auth Routes - Redirect if already logged in */}
          <Route 
            path="/login" 
            element={user ? <Navigate to={`/${user.role}/dashboard`} replace /> : <Login />} 
          />
          <Route 
            path="/register" 
            element={user ? <Navigate to={`/${user.role}/dashboard`} replace /> : <Register />} 
          />

          {/* Protected Routes - Job Seeker */}
          <Route
            path="/seeker/dashboard"
            element={
              <ProtectedRoute allowedRoles={['seeker']}>
                <SeekerDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/seeker/job-search"
            element={
              <ProtectedRoute allowedRoles={['seeker']}>
                <JobSearch />
              </ProtectedRoute>
            }
          />
          <Route
            path="/seeker/profile-setup"
            element={
              <ProtectedRoute allowedRoles={['seeker']}>
                <ProfileSetup />
              </ProtectedRoute>
            }
          />
          <Route
            path="/my-applications"
            element={
              <ProtectedRoute allowedRoles={['seeker']}>
                <MyApplications />
              </ProtectedRoute>
            }
          />

          {/* Protected Routes - Employer */}
          <Route
            path="/employer/dashboard"
            element={
              <ProtectedRoute allowedRoles={['employer']}>
                <EmployerDashboard />
              </ProtectedRoute>
            }
          />

          {/* Protected Routes - Admin */}
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute allowedRoles={['admin']}>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />

          {/* 404 Route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      {!isDashboardRoute && <Footer />}
    </div>
  )
}

export default App