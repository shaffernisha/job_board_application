import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../main'

const Register = () => {
  const { register, user } = useAuth()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    password: '', 
    confirmPassword: '', 
    role: 'seeker' 
  })
  const [errors, setErrors] = useState({})
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
      default:
        navigate('/')
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }
    
    if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters'
    }
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match'
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setLoading(true)
    setErrors({})

    try {
      const result = register(
        formData.name,
        formData.email,
        formData.password,
        formData.role
      )
      
      if (result.success) {
        redirectToDashboard(result.user.role)
      } else {
        setErrors({ submit: result.error })
      }
    } catch (err) {
      setErrors({ submit: err.message || 'Registration failed. Please try again.' })
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
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
    }
  ]

  return (
    <div className="register-page" style={{ 
      minHeight: 'calc(100vh - 200px)', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      padding: '2rem', 
      background: 'var(--gradient-accent)',
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
          maxWidth: '550px', 
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
              className="register-logo"
            >
              <defs>
                <linearGradient id="registerLogoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#82C8E5', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#0047AB', stopOpacity: 1 }} />
                </linearGradient>
              </defs>
              <path 
                d="M12 2L2 7l10 5 10-5-10-5zm0 7.3L4 6.2v11l8 4.8 8-4.8v-11l-8 3.1z" 
                fill="url(#registerLogoGradient)"
              />
            </svg>
            <h2 style={{ marginBottom: '0', fontSize: '2rem' }}>JobNest</h2>
          </div>
          <h3 style={{ marginBottom: '0.5rem', fontSize: '1.5rem' }}>Create Account</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Join JobNest today</p>
        </div>

        {errors.submit && (
          <div style={{ 
            padding: '1rem', 
            background: 'rgba(239,68,68,0.1)', 
            border: '1px solid rgba(239,68,68,0.3)', 
            borderRadius: '8px', 
            color: '#EF4444', 
            marginBottom: '1.5rem',
            fontSize: '0.875rem'
          }}>
            {errors.submit}
          </div>
        )}

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.875rem' }}>
              Full Name
            </label>
            <input 
              type="text" 
              name="name"
              required 
              className="input" 
              placeholder="What is your full name?" 
              value={formData.name} 
              onChange={handleChange}
            />
            {errors.name && <p style={{ color: '#EF4444', fontSize: '0.75rem', marginTop: '0.5rem' }}>{errors.name}</p>}
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.875rem' }}>
              Email
            </label>
            <input 
              type="email" 
              name="email"
              required 
              className="input" 
              placeholder="Tell us your active Email ID" 
              value={formData.email} 
              onChange={handleChange}
            />
            {errors.email && <p style={{ color: '#EF4444', fontSize: '0.75rem', marginTop: '0.5rem' }}>{errors.email}</p>}
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.875rem' }}>
              Password
            </label>
            <input 
              type="password" 
              name="password"
              required 
              className="input" 
              placeholder="••••••••" 
              value={formData.password} 
              onChange={handleChange}
            />
            {errors.password && <p style={{ color: '#EF4444', fontSize: '0.75rem', marginTop: '0.5rem' }}>{errors.password}</p>}
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.875rem' }}>
              Confirm Password
            </label>
            <input 
              type="password" 
              name="confirmPassword"
              required 
              className="input" 
              placeholder="••••••••" 
              value={formData.confirmPassword} 
              onChange={handleChange}
            />
            {errors.confirmPassword && <p style={{ color: '#EF4444', fontSize: '0.75rem', marginTop: '0.5rem' }}>{errors.confirmPassword}</p>}
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '0.75rem', fontWeight: '600', fontSize: '0.875rem' }}>
              I am a
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem' }}>
              {roleOptions.map((role) => (
                <label 
                  key={role.value}
                  className="role-option"
                  style={{ 
                    padding: '1rem', 
                    border: `2px solid ${formData.role === role.value ? 'var(--primary)' : 'var(--border)'}`, 
                    borderRadius: '8px', 
                    cursor: 'pointer', 
                    background: formData.role === role.value ? 'rgba(0, 71, 171, 0.05)' : 'transparent',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: formData.role === role.value ? 'var(--primary)' : 'var(--text-secondary)'
                  }}
                >
                  <input 
                    type="radio" 
                    name="role" 
                    value={role.value} 
                    checked={formData.role === role.value} 
                    onChange={handleChange}
                    style={{ display: 'none' }} 
                  />
                  {role.icon}
                  <strong style={{ fontSize: '0.875rem' }}>{role.label}</strong>
                </label>
              ))}
            </div>
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="btn btn-gradient register-submit-btn"
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
                Creating Account...
              </>
            ) : (
              'Create Account'
            )}
          </button>
        </form>

        <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid var(--border)', textAlign: 'center' }}>
          <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
            Already have an account? <Link to="/login" className="register-signin-link" style={{ color: 'var(--accent-dark)', fontWeight: '600' }}>Sign in</Link>
          </p>
        </div>
      </div>

      <style>{`
        /* Dark Mode Styles for Register Page */
        .dark-mode .register-page {
          background: linear-gradient(135deg, #2d2d2d 0%, #1a1a1a 100%) !important;
        }
        
        .dark-mode .register-logo path {
          fill: url(#registerLogoGradientDark) !important;
        }
        
        .dark-mode .register-submit-btn {
          background: linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%) !important;
          color: #1a1a1a !important;
        }
        
        .dark-mode .register-submit-btn:hover {
          background: linear-gradient(135deg, #e0e0e0 0%, #d0d0d0 100%) !important;
        }
        
        .dark-mode .role-option {
          border-color: var(--border) !important;
        }
        
        .dark-mode .role-option[style*="border: 2px solid var(--primary)"] {
          border-color: #ffffff !important;
          background: rgba(255, 255, 255, 0.1) !important;
          color: #ffffff !important;
        }
        
        .dark-mode .role-option svg {
          stroke: currentColor !important;
        }
        
        .dark-mode .register-signin-link {
          color: #ffffff !important;
        }
      `}</style>
    </div>
  )
}

export default Register