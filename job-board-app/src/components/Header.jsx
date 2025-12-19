import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../main'
import { useState, useEffect } from 'react'

const Header = () => {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark') {
      setDarkMode(true)
      document.documentElement.classList.add('dark-mode')
    }
  }, [])

  const toggleTheme = () => {
    setDarkMode(!darkMode)
    if (!darkMode) {
      document.documentElement.classList.add('dark-mode')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark-mode')
      localStorage.setItem('theme', 'light')
    }
  }

  const handleLogout = () => {
    logout()
    navigate('/login')
    setMobileMenuOpen(false)
  }

  const getDashboardLink = () => {
    if (!user) return null
    switch (user.role) {
      case 'seeker': return '/seeker/dashboard'
      case 'employer': return '/employer/dashboard'
      case 'admin': return '/admin/dashboard'
      default: return '/'
    }
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <>
      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        background: 'var(--bg-primary)',
        borderBottom: '1px solid var(--border)',
        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
        transition: 'all 0.3s ease',
        width: '100%'
      }}>
        <div style={{
          maxWidth: '100%',
          margin: '0 auto',
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1.5rem 4rem'
        }} className="header-container">

          {/* Logo */}
          <Link to="/" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            textDecoration: 'none',
            zIndex: 1001
          }} onClick={closeMobileMenu}>

            <svg width="48" height="48" viewBox="0 0 24 24"
              style={{ filter: 'drop-shadow(0 4px 12px rgba(0, 71, 171, 0.2))' }}
              className="logo-svg">
              <defs>
                <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#0047AB' }} />
                  <stop offset="100%" style={{ stopColor: '#000080' }} />
                </linearGradient>
              </defs>
              <path d="M12 2L2 7l10 5 10-5-10-5zm0 7.3L4 6.2v11l8 4.8 8-4.8v-11l-8 3.1z"
                fill="url(#logoGradient)" />
            </svg>

            <div className="logo-text">
              <h1 style={{
                fontSize: '1.75rem',
                fontWeight: '700',
                background: 'var(--gradient-primary)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '0'
              }}>
                JobNest
              </h1>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0' }}>
                Find Your Dream Job
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav style={{ display: 'flex', gap: '3rem', alignItems: 'center' }} className="desktop-nav">
            <Link to="/" className="nav-link" style={{ fontWeight: '600' }}>Home</Link>
            <Link to="/jobs" className="nav-link" style={{ fontWeight: '600' }}>Browse Jobs</Link>
            <Link to="/services" className="nav-link" style={{ fontWeight: '600' }}>Services</Link>
            <Link to="/about" className="nav-link" style={{ fontWeight: '600' }}>About</Link>

            {user && (
              <Link to={getDashboardLink()} className="nav-link" style={{ fontWeight: '600' }}>
                Dashboard
              </Link>
            )}
          </nav>

          {/* Desktop Actions */}
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }} className="desktop-actions">
            <div
              onClick={toggleTheme}
              style={{
                width: '56px',
                height: '28px',
                borderRadius: '14px',
                background: darkMode ? '#0047AB' : '#0047AB33',
                position: 'relative',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                padding: '2px'
              }}
              title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              <div style={{
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                background: 'white',
                position: 'absolute',
                left: darkMode ? 'calc(100% - 26px)' : '2px',
                transition: 'all 0.3s ease',
                boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                {darkMode ? (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#0047AB">
                    <path d="M21 12.79A9 9 0 0111.21 3 7 7 0 1019 15a8.94 8.94 0 01-2-.21z" />
                  </svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#0047AB">
                    <circle cx="12" cy="12" r="5" />
                    <g stroke="#0047AB" strokeWidth="2">
                      <line x1="12" y1="1" x2="12" y2="4" />
                      <line x1="12" y1="20" x2="12" y2="23" />
                      <line x1="4.22" y1="4.22" x2="6.34" y2="6.34" />
                      <line x1="17.66" y1="17.66" x2="19.78" y2="19.78" />
                      <line x1="1" y1="12" x2="4" y2="12" />
                      <line x1="20" y1="12" x2="23" y2="12" />
                      <line x1="4.22" y1="19.78" x2="6.34" y2="17.66" />
                      <line x1="17.66" y1="6.34" x2="19.78" y2="4.22" />
                    </g>
                  </svg>
                )}
              </div>
            </div>

            {/* User Actions */}
            {user ? (
              <>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.5rem 1rem',
                  background: 'var(--bg-muted)',
                  borderRadius: '25px'
                }} className="user-info">
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: 'var(--gradient-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: '600'
                  }}>
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                  <div className="user-text">
                    <div style={{ fontWeight: '600' }}>{user.name}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                      {user.role === 'seeker'
                        ? 'Job Seeker'
                        : user.role === 'employer'
                        ? 'Employer'
                        : 'Admin'}
                    </div>
                  </div>
                </div>
                <button onClick={handleLogout} className="btn btn-outline btn-sm">
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="btn btn-outline btn-sm">Sign In</Link>
                <Link to="/register" className="btn btn-primary btn-sm">Get Started</Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="mobile-menu-wrapper">
            <div
              onClick={toggleTheme}
              style={{
                width: '44px',
                height: '24px',
                borderRadius: '12px',
                background: darkMode ? '#0047AB' : '#0047AB33',
                position: 'relative',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                padding: '2px',
                marginRight: '1rem'
              }}
              className="mobile-theme-toggle"
              title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              <div style={{
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                background: 'white',
                position: 'absolute',
                left: darkMode ? 'calc(100% - 22px)' : '2px',
                transition: 'all 0.3s ease',
                boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                {darkMode ? (
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="#0047AB">
                    <path d="M21 12.79A9 9 0 0111.21 3 7 7 0 1019 15a8.94 8.94 0 01-2-.21z" />
                  </svg>
                ) : (
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="#0047AB">
                    <circle cx="12" cy="12" r="5" />
                  </svg>
                )}
              </div>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '0.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '4px',
                zIndex: 1001
              }}
              className="hamburger"
              aria-label="Toggle menu"
            >
              <span style={{
                width: '24px',
                height: '2px',
                background: 'var(--text-primary)',
                transition: 'all 0.3s ease',
                transform: mobileMenuOpen ? 'rotate(45deg) translateY(6px)' : 'none'
              }}></span>
              <span style={{
                width: '24px',
                height: '2px',
                background: 'var(--text-primary)',
                transition: 'all 0.3s ease',
                opacity: mobileMenuOpen ? 0 : 1
              }}></span>
              <span style={{
                width: '24px',
                height: '2px',
                background: 'var(--text-primary)',
                transition: 'all 0.3s ease',
                transform: mobileMenuOpen ? 'rotate(-45deg) translateY(-6px)' : 'none'
              }}></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className="mobile-menu"
          style={{
            position: 'fixed',
            top: 0,
            right: mobileMenuOpen ? 0 : '-100%',
            width: '100%',
            maxWidth: '400px',
            height: '100vh',
            background: 'var(--bg-primary)',
            boxShadow: mobileMenuOpen ? '-2px 0 10px rgba(0,0,0,0.1)' : 'none',
            transition: 'right 0.3s ease',
            padding: '6rem 2rem 2rem',
            overflowY: 'auto',
            zIndex: 999
          }}
        >
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <Link to="/" className="mobile-nav-link" onClick={closeMobileMenu}>Home</Link>
            <Link to="/jobs" className="mobile-nav-link" onClick={closeMobileMenu}>Browse Jobs</Link>
            <Link to="/services" className="mobile-nav-link" onClick={closeMobileMenu}>Services</Link>
            <Link to="/about" className="mobile-nav-link" onClick={closeMobileMenu}>About</Link>
            {user && (
              <Link to={getDashboardLink()} className="mobile-nav-link" onClick={closeMobileMenu}>
                Dashboard
              </Link>
            )}

            <div style={{ height: '1px', background: 'var(--border)', margin: '1rem 0' }}></div>

            {user ? (
              <>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '1rem',
                  background: 'var(--bg-muted)',
                  borderRadius: '12px'
                }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: 'var(--gradient-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: '600',
                    fontSize: '1.25rem'
                  }}>
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <div style={{ fontWeight: '600', fontSize: '1rem' }}>{user.name}</div>
                    <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                      {user.role === 'seeker'
                        ? 'Job Seeker'
                        : user.role === 'employer'
                        ? 'Employer'
                        : 'Admin'}
                    </div>
                  </div>
                </div>
                <button onClick={handleLogout} className="btn btn-outline" style={{ width: '100%' }}>
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="btn btn-outline" style={{ width: '100%', textAlign: 'center' }} onClick={closeMobileMenu}>
                  Sign In
                </Link>
                <Link to="/register" className="btn btn-primary" style={{ width: '100%', textAlign: 'center' }} onClick={closeMobileMenu}>
                  Get Started
                </Link>
              </>
            )}
          </nav>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div
            onClick={closeMobileMenu}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100vh',
              background: 'rgba(0,0,0,0.5)',
              zIndex: 998
            }}
          ></div>
        )}
      </header>

      <style>{`
        .nav-link {
          position: relative;
          transition: color 0.3s ease;
        }
        .nav-link:hover { color: var(--primary); }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--primary);
          transition: width 0.3s ease;
        }
        .nav-link:hover::after { width: 100%; }

        .mobile-nav-link {
          font-size: 1.125rem;
          font-weight: 600;
          padding: 0.75rem 1rem;
          border-radius: 8px;
          transition: all 0.3s ease;
        }
        .mobile-nav-link:hover {
          background: var(--bg-muted);
          color: var(--primary);
        }

        .mobile-menu-wrapper {
          display: none;
          align-items: center;
        }

        /* Tablet & Mobile Styles */
        @media (max-width: 1024px) {
          .header-container {
            padding: 1.5rem 2rem !important;
          }
          .desktop-nav {
            gap: 2rem !important;
          }
        }

        @media (max-width: 768px) {
          .desktop-nav,
          .desktop-actions {
            display: none !important;
          }
          
          .mobile-menu-wrapper {
            display: flex !important;
          }

          .header-container {
            padding: 1rem 1.5rem !important;
          }

          .logo-svg {
            width: 36px !important;
            height: 36px !important;
          }

          .logo-text h1 {
            font-size: 1.5rem !important;
          }

          .logo-text p {
            font-size: 0.7rem !important;
          }
        }

        @media (max-width: 480px) {
          .header-container {
            padding: 1rem !important;
          }

          .logo-text p {
            display: none;
          }

          .user-text {
            display: none;
          }

          .mobile-menu {
            max-width: 100% !important;
          }
        }

        /* Dark Mode */
        .dark-mode {
          --bg-primary: #1a1a1a;
          --bg-secondary: #2d2d2d;
          --bg-muted: #2d2d2d;
          --text-primary: #ffffff;
          --text-secondary: #b4b4b4;
          --text-muted: #8a8a8a;
          --border: #404040;
          --primary: #ffffff;
          --gradient-primary: linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%);
        }
        .dark-mode body {
          background: #1a1a1a;
          color: white;
        }
        
        .dark-mode .nav-link:hover {
          color: #ffffff !important;
        }
        .dark-mode .nav-link::after {
          background: #ffffff !important;
        }
        .dark-mode .mobile-nav-link:hover {
          color: #ffffff !important;
        }
        .dark-mode .btn-primary {
          background: #ffffff !important;
          color: #1a1a1a !important;
        }
        .dark-mode .btn-outline {
          border-color: #ffffff !important;
          color: #ffffff !important;
        }
        .dark-mode .btn-outline:hover {
          background: #ffffff !important;
          color: #1a1a1a !important;
        }
      `}</style>
    </>
  )
}

export default Header