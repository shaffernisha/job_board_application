import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../main'

const Login = () => {
  const { login, user } = useAuth()
  const navigate = useNavigate()
  const [selectedRole, setSelectedRole] = useState('seeker')
  const [formData, setFormData] = useState({ email: '', password: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (user) {
      redirectToDashboard(user.role)
    }
  }, [user])

  const redirectToDashboard = (role) => {
    switch (role) {
      case 'seeker':
        navigate('/seeker/dashboard')
        break
      case 'employer':
        navigate('/employer/dashboard')
        break
      case 'admin':
        navigate('/admin/dashboard')
        break
      default:
        navigate('/')
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const result = login(formData.email, formData.password)
      
      if (result.success) {
        if (result.user.role !== selectedRole) {
          setError(`This account is registered as ${result.user.role}, not ${selectedRole}. Please select the correct role.`)
          setLoading(false)
          return
        }
        redirectToDashboard(result.user.role)
      } else {
        setError(result.error)
      }
    } catch (err) {
      setError('An error occurred. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const roleOptions = [
    { 
      value: 'seeker', 
      label: 'Job Seeker', 
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
          <circle cx="12" cy="7" r="4"/>
        </svg>
      )
    },
    { 
      value: 'employer', 
      label: 'Employer', 
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
        </svg>
      )
    },
    { 
      value: 'admin', 
      label: 'Admin', 
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="3"/>
          <path d="M12 1v6m0 6v6"/>
          <path d="m4.93 4.93 4.24 4.24m5.66 5.66 4.24 4.24"/>
          <path d="M1 12h6m6 0h6"/>
          <path d="m4.93 19.07 4.24-4.24m5.66-5.66 4.24-4.24"/>
        </svg>
      )
    }
  ]

  return (
    <div className="login-page" style={{
      minHeight: 'calc(100vh - 200px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      background: 'var(--gradient-primary)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background decoration */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        right: '-5%',
        width: '400px',
        height: '400px',
        background: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '50%',
        filter: 'blur(60px)'
      }}/>
      <div style={{
        position: 'absolute',
        bottom: '-10%',
        left: '-5%',
        width: '500px',
        height: '500px',
        background: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '50%',
        filter: 'blur(80px)'
      }}/>

      <div 
        className="card fade-in" 
        style={{ 
          width: '100%',
          maxWidth: '500px',
          padding: '3rem',
          position: 'relative',
          zIndex: 1,
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)'
        }}
      >
        {/* Logo */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.75rem',
            marginBottom: '1rem'
          }}>
            <svg 
              width="48" 
              height="48" 
              viewBox="0 0 24 24"
              className="login-logo"
            >
              <defs>
                <linearGradient id="loginLogoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#0047AB', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#000080', stopOpacity: 1 }} />
                </linearGradient>
              </defs>
              <path 
                d="M12 2L2 7l10 5 10-5-10-5zm0 7.3L4 6.2v11l8 4.8 8-4.8v-11l-8 3.1z" 
                fill="url(#loginLogoGradient)"
              />
            </svg>
            <h2 style={{ marginBottom: '0', fontSize: '2rem' }}>JobNest</h2>
          </div>
          <h3 style={{ marginBottom: '0.5rem', fontSize: '1.5rem' }}>Welcome Back</h3>
          <p style={{ 
            color: 'var(--text-secondary)', 
            fontSize: '0.875rem',
            marginBottom: '0'
          }}>
            Sign in to your account
          </p>
        </div>

        {/* Role Selection */}
        <div style={{ marginBottom: '2rem' }}>
          <label style={{ 
            display: 'block', 
            marginBottom: '1rem', 
            fontWeight: '600', 
            fontSize: '0.875rem',
            textAlign: 'center'
          }}>
            Select Your Role
          </label>
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            {roleOptions.map((role) => (
              <button
                key={role.value}
                type="button"
                onClick={() => setSelectedRole(role.value)}
                className="role-button"
                style={{
                  flex: 1,
                  padding: '1rem',
                  border: `2px solid ${selectedRole === role.value ? 'var(--primary)' : 'var(--border)'}`,
                  borderRadius: '8px',
                  cursor: 'pointer',
                  background: selectedRole === role.value ? 'rgba(0, 71, 171, 0.05)' : 'transparent',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: selectedRole === role.value ? 'var(--primary)' : 'var(--text-secondary)'
                }}
              >
                {role.icon}
                <strong style={{ fontSize: '0.875rem' }}>{role.label}</strong>
              </button>
            ))}
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div style={{
            padding: '1rem',
            background: 'rgba(239, 68, 68, 0.1)',
            border: '1px solid rgba(239, 68, 68, 0.3)',
            borderRadius: '8px',
            color: '#EF4444',
            fontSize: '0.875rem',
            marginBottom: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <line x1="12" y1="8" x2="12" y2="12"/>
              <line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Email Field */}
            <div>
              <label style={{
                display: 'block',
                marginBottom: '0.5rem',
                fontWeight: '600',
                fontSize: '0.875rem'
              }}>
                Email Address
              </label>
              <div style={{ position: 'relative' }}>
                <svg 
                  width="18" 
                  height="18" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="var(--text-muted)" 
                  strokeWidth="2"
                  style={{
                    position: 'absolute',
                    left: '1rem',
                    top: '50%',
                    transform: 'translateY(-50%)'
                  }}
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your active Email ID/Username"
                  required
                  className="input"
                  style={{ paddingLeft: '3rem' }}
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label style={{
                display: 'block',
                marginBottom: '0.5rem',
                fontWeight: '600',
                fontSize: '0.875rem'
              }}>
                Password
              </label>
              <div style={{ position: 'relative' }}>
                <svg 
                  width="18" 
                  height="18" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="var(--text-muted)" 
                  strokeWidth="2"
                  style={{
                    position: 'absolute',
                    left: '1rem',
                    top: '50%',
                    transform: 'translateY(-50%)'
                  }}
                >
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  required
                  className="input"
                  style={{ paddingLeft: '3rem' }}
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="btn btn-gradient login-submit-btn"
              style={{ width: '100%' }}
            >
              {loading ? (
                <>
                  <div 
                    className="spinner" 
                    style={{ 
                      width: '20px', 
                      height: '20px', 
                      borderWidth: '2px',
                      borderColor: 'white',
                      borderTopColor: 'transparent'
                    }} 
                  />
                  Signing in...
                </>
              ) : (
                <>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/>
                    <polyline points="10 17 15 12 10 7"/>
                    <line x1="15" y1="12" x2="3" y2="12"/>
                  </svg>
                  Sign In as {selectedRole === 'seeker' ? 'Job Seeker' : selectedRole === 'employer' ? 'Employer' : 'Admin'}
                </>
              )}
            </button>
          </div>
        </form>

        {/* Divider */}
        <div style={{
          marginTop: '2rem',
          paddingTop: '2rem',
          borderTop: '1px solid var(--border)',
          textAlign: 'center'
        }}>
          <p style={{ 
            color: 'var(--text-secondary)',
            fontSize: '0.875rem',
            marginBottom: '0'
          }}>
            Don't have an account?{' '}
            <Link 
              to="/register" 
              className="login-signup-link"
              style={{
                color: 'var(--primary)',
                fontWeight: '600',
                textDecoration: 'none'
              }}
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>

      <style>{`
        /* Dark Mode Styles for Login Page */
        .dark-mode .login-page {
          background: linear-gradient(135deg, #2d2d2d 0%, #1a1a1a 100%) !important;
        }
        
        .dark-mode .login-logo path {
          fill: url(#loginLogoGradientDark) !important;
        }
        
        .dark-mode .login-submit-btn {
          background: linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%) !important;
          color: #1a1a1a !important;
        }
        
        .dark-mode .login-submit-btn:hover {
          background: linear-gradient(135deg, #e0e0e0 0%, #d0d0d0 100%) !important;
        }
        
        .dark-mode .login-submit-btn svg {
          stroke: #1a1a1a !important;
        }
        
        .dark-mode .role-button {
          border-color: var(--border) !important;
        }
        
        .dark-mode .role-button[style*="border: 2px solid var(--primary)"] {
          border-color: #ffffff !important;
          background: rgba(255, 255, 255, 0.1) !important;
          color: #ffffff !important;
        }
        
        .dark-mode .role-button svg {
          stroke: currentColor !important;
        }
        
        .dark-mode .login-signup-link {
          color: #ffffff !important;
        }
      `}</style>
    </div>
  )
}

export default Login