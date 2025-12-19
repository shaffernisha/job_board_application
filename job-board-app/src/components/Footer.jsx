import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer style={{
      background: 'var(--text-primary)',
      color: 'white',
      marginTop: 'auto',
      width: '100%'
    }}>
      <div style={{
        maxWidth: '100%',
        margin: '0 auto',
        width: '100%',
        padding: '4rem 4rem 2rem'
      }}>
        {/* Main Footer Content */}
        <div className="grid grid-cols-4" style={{ marginBottom: '3rem' }}>
          {/* About Section */}
          <div>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.75rem',
              marginBottom: '1.5rem'
            }}>
              {/* Logo */}
              <svg 
                width="40" 
                height="40" 
                viewBox="0 0 24 24"
              >
                <defs>
                  <linearGradient id="footerLogoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#82C8E5', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#0047AB', stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
                <path 
                  d="M12 2L2 7l10 5 10-5-10-5zm0 7.3L4 6.2v11l8 4.8 8-4.8v-11l-8 3.1z" 
                  fill="url(#footerLogoGradient)"
                />
              </svg>
              <div>
                <h3 style={{ marginBottom: '0', fontSize: '1.25rem', color: 'white' }}>JobNest</h3>
                <p style={{ 
                  fontSize: '0.75rem', 
                  opacity: '0.8',
                  marginBottom: '0',
                  color: 'white'
                }}>
                  Find Your Dream Job
                </p>
              </div>
            </div>
            <p style={{ 
              opacity: '0.8', 
              fontSize: '0.875rem', 
              lineHeight: '1.6',
              marginBottom: '1.5rem',
              color: 'rgba(255, 255, 255, 0.8)'
            }}>
              Connecting exceptional talent with premium opportunities for over 8 years. Your career success is our mission.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a 
                href="https://linkedin.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover-scale" 
                style={{ 
                  width: '40px',
                  height: '40px',
                  background: 'rgba(255,255,255,0.1)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
                  color: 'white'
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover-scale" 
                style={{ 
                  width: '40px',
                  height: '40px',
                  background: 'rgba(255,255,255,0.1)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
                  color: 'white'
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                </svg>
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover-scale" 
                style={{ 
                  width: '40px',
                  height: '40px',
                  background: 'rgba(255,255,255,0.1)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
                  color: 'white'
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* For Job Seekers */}
          <div>
            <h4 style={{ marginBottom: '1.5rem', fontSize: '1.125rem', color: 'white' }}>For Job Seekers</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '0.75rem' }}>
                <Link 
                  to="/jobs" 
                  style={{ 
                    opacity: '0.8', 
                    fontSize: '0.875rem',
                    transition: 'all 0.3s ease',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }} 
                  className="footer-link"
                >
                  Browse Jobs
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ opacity: 0, transition: 'all 0.3s ease' }} className="arrow-icon">
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="12 5 19 12 12 19"/>
                  </svg>
                </Link>
              </li>
              <li style={{ marginBottom: '0.75rem' }}>
                <Link 
                  to="/register" 
                  style={{ 
                    opacity: '0.8', 
                    fontSize: '0.875rem',
                    transition: 'all 0.3s ease',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }} 
                  className="footer-link"
                >
                  Create Profile
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ opacity: 0, transition: 'all 0.3s ease' }} className="arrow-icon">
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="12 5 19 12 12 19"/>
                  </svg>
                </Link>
              </li>
            </ul>
          </div>

          {/* For Employers */}
          <div>
            <h4 style={{ marginBottom: '1.5rem', fontSize: '1.125rem', color: 'white' }}>For Employers</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '0.75rem' }}>
                <span 
                  style={{ 
                    opacity: '0.5', 
                    fontSize: '0.875rem',
                    color: 'white',
                    cursor: 'not-allowed'
                  }}
                >
                  Post a Job
                </span>
              </li>
              <li style={{ marginBottom: '0.75rem' }}>
                <span 
                  style={{ 
                    opacity: '0.5', 
                    fontSize: '0.875rem',
                    color: 'white',
                    cursor: 'not-allowed'
                  }}
                >
                  Search Candidates
                </span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ marginBottom: '1.5rem', fontSize: '1.125rem', color: 'white' }}>Contact Us</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ 
                display: 'flex', 
                gap: '0.75rem', 
                opacity: '0.8', 
                fontSize: '0.875rem',
                alignItems: 'start',
                color: 'rgba(255, 255, 255, 0.8)'
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ flexShrink: 0, marginTop: '2px' }}>
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <div>
                  <div>Brigade Road, MG Road</div>
                  <div>Bangalore, Karnataka 560001</div>
                </div>
              </div>
              <div style={{ 
                display: 'flex', 
                gap: '0.75rem', 
                opacity: '0.8', 
                fontSize: '0.875rem', 
                alignItems: 'center',
                color: 'rgba(255, 255, 255, 0.8)'
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <a href="tel:+919876543210" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                  +91 98765 43210
                </a>
              </div>
              <div style={{ 
                display: 'flex', 
                gap: '0.75rem', 
                opacity: '0.8', 
                fontSize: '0.875rem', 
                alignItems: 'center',
                color: 'rgba(255, 255, 255, 0.8)'
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                <a href="mailto:hello@jobnest.in" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                  hello@jobnest.in
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          paddingTop: '2rem',
          borderTop: '1px solid rgba(255,255,255,0.1)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '0.875rem',
          opacity: '0.8',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div style={{ color: 'rgba(255, 255, 255, 0.8)' }}>© 2025 JobNest. All rights reserved.</div>
          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
            <a href="#" style={{ color: 'rgba(255, 255, 255, 0.8)' }} className="footer-link">
              Privacy Policy
            </a>
            <a href="#" style={{ color: 'rgba(255, 255, 255, 0.8)' }} className="footer-link">
              Terms of Service
            </a>
            <a href="#" style={{ color: 'rgba(255, 255, 255, 0.8)' }} className="footer-link">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .footer-link:hover {
          opacity: 1 !important;
          color: #82C8E5 !important;
        }

        .footer-link:hover .arrow-icon {
          opacity: 1 !important;
          transform: translateX(4px);
        }

        @media (max-width: 1024px) {
          .grid-cols-4 {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 3rem;
          }
        }

        @media (max-width: 768px) {
          .grid-cols-4 {
            grid-template-columns: 1fr !important;
            gap: 2rem;
          }
          
          footer > div > div:last-child {
            flex-direction: column !important;
            gap: 1rem !important;
            text-align: center;
          }
          
          footer > div > div:last-child > div:last-child {
            flex-direction: column !important;
            gap: 0.5rem !important;
          }
        }
        
        /* Dark Mode Footer */
        .dark-mode footer {
          background: #0d0d0d !important;
          border-top: 1px solid #404040;
        }
        
        .dark-mode .footer-link:hover {
          color: #ffffff !important;
        }
        
        .dark-mode footer svg[fill*="url(#footerLogoGradient)"] {
          fill: url(#footerLogoGradientDark) !important;
        }
        
        /* Dark mode gradient for footer logo */
        .dark-mode footer svg defs linearGradient stop:first-child {
          stop-color: #ffffff !important;
        }
        
        .dark-mode footer svg defs linearGradient stop:last-child {
          stop-color: #e0e0e0 !important;
        }
      `}</style>
    </footer>
  )
}

export default Footer