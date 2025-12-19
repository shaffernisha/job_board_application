import { Link } from 'react-router-dom'

const Services = () => {
  const services = [
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8"/>
          <path d="m21 21-4.35-4.35"/>
        </svg>
      ),
      title: 'Job Search Assistance',
      description: 'Advanced search algorithms to match you with the perfect job opportunities based on your skills and preferences.',
      features: ['Smart job matching', 'Personalized recommendations', 'Real-time notifications', 'Filter by location & salary']
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
          <line x1="16" y1="13" x2="8" y2="13"/>
          <line x1="16" y1="17" x2="8" y2="17"/>
          <polyline points="10 9 9 9 8 9"/>
        </svg>
      ),
      title: 'Resume Building',
      description: 'Professional resume templates and expert guidance to create a standout resume that gets you noticed.',
      features: ['Professional templates', 'Expert feedback', 'ATS-friendly formats', 'Multiple download formats']
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
      title: 'Career Counseling',
      description: 'One-on-one guidance from industry experts to help you navigate your career path and make informed decisions.',
      features: ['Personalized advice', 'Industry insights', 'Career roadmaps', 'Skill gap analysis']
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          <path d="M8 10h.01"/>
          <path d="M12 10h.01"/>
          <path d="M16 10h.01"/>
        </svg>
      ),
      title: 'Interview Preparation',
      description: 'Comprehensive interview prep resources including mock interviews, common questions, and expert tips.',
      features: ['Mock interviews', 'Question banks', 'Video tutorials', 'Feedback sessions']
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
        </svg>
      ),
      title: 'Employer Solutions',
      description: 'Complete hiring solutions for employers including job posting, candidate screening, and recruitment analytics.',
      features: ['Job posting', 'Candidate screening', 'Analytics dashboard', 'Bulk hiring support']
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
        </svg>
      ),
      title: 'Skill Assessment',
      description: 'Comprehensive skill testing and certification to validate your expertise and stand out to employers.',
      features: ['Multiple domains', 'Instant results', 'Certificates', 'Performance analytics']
    }
  ]

  const pricingPlans = [
    {
      name: 'Free',
      price: '₹0',
      period: 'forever',
      features: ['Basic job search', 'Limited applications', 'Email support', 'Job alerts'],
      recommended: false
    },
    {
      name: 'Premium',
      price: '₹999',
      period: 'per month',
      features: ['Unlimited applications', 'Resume building', 'Priority support', 'Interview prep', 'Career counseling', 'Featured profile'],
      recommended: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'contact us',
      features: ['All Premium features', 'Dedicated account manager', 'Bulk hiring', 'Custom integrations', 'API access', 'Advanced analytics'],
      recommended: false
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="services-hero" style={{
        background: 'var(--gradient-primary)',
        color: 'white',
        padding: '6rem 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <h1 className="fade-in services-hero-title" style={{ 
            color: 'white', 
            fontSize: '3rem', 
            marginBottom: '1.5rem' 
          }}>
            Our Services
          </h1>
          <p className="fade-in services-hero-text" style={{ 
            color: 'white',
            fontSize: '1.25rem',
            fontWeight: '500',
            maxWidth: '700px',
            margin: '0 auto'
          }}>
            Comprehensive solutions for job seekers and employers to achieve their career and hiring goals
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section">
        <div className="container">
          <div className="section-title fade-in">
            <h2>What We Offer</h2>
            <p style={{ color: 'var(--text-secondary)' }}>
              End-to-end career and recruitment solutions
            </p>
          </div>

          <div className="grid grid-cols-3">
            {services.map((service, index) => (
              <div key={index} className="card hover-lift fade-in">
                <div className="service-icon-box" style={{
                  width: '60px',
                  height: '60px',
                  background: 'var(--gradient-primary)',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  marginBottom: '1.5rem'
                }}>
                  {service.icon}
                </div>
                <h3 style={{ marginBottom: '1rem' }}>{service.title}</h3>
                <p style={{ 
                  color: 'var(--text-secondary)', 
                  marginBottom: '1.5rem',
                  lineHeight: '1.6'
                }}>
                  {service.description}
                </p>
                <ul style={{ 
                  listStyle: 'none', 
                  padding: 0, 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: '0.75rem' 
                }}>
                  {service.features.map((feature, idx) => (
                    <li key={idx} style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '0.5rem',
                      color: 'var(--text-secondary)',
                      fontSize: '0.875rem'
                    }}>
                      <svg className="feature-check" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section" style={{ background: 'var(--bg-muted)' }}>
        <div className="container">
          <div className="section-title fade-in">
            <h2>Pricing Plans</h2>
            <p style={{ color: 'var(--text-secondary)' }}>
              Choose the plan that works best for you
            </p>
          </div>

          <div className="grid grid-cols-3">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index} 
                className="card hover-lift fade-in pricing-card"
                style={{
                  border: plan.recommended ? '2px solid var(--primary)' : '1px solid var(--border)',
                  position: 'relative'
                }}
              >
                {plan.recommended && (
                  <div className="recommended-badge" style={{
                    position: 'absolute',
                    top: '-12px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'var(--gradient-primary)',
                    color: 'white',
                    padding: '0.25rem 1rem',
                    borderRadius: '20px',
                    fontSize: '0.75rem',
                    fontWeight: '600'
                  }}>
                    RECOMMENDED
                  </div>
                )}
                
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                  <h3 style={{ marginBottom: '1rem' }}>{plan.name}</h3>
                  <div className="pricing-amount" style={{ 
                    fontSize: '3rem', 
                    fontWeight: '700', 
                    color: 'var(--primary)',
                    marginBottom: '0.5rem'
                  }}>
                    {plan.price}
                  </div>
                  <p style={{ 
                    color: 'var(--text-secondary)', 
                    fontSize: '0.875rem' 
                  }}>
                    {plan.period}
                  </p>
                </div>

                <ul style={{ 
                  listStyle: 'none', 
                  padding: 0, 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: '1rem',
                  marginBottom: '2rem'
                }}>
                  {plan.features.map((feature, idx) => (
                    <li key={idx} style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '0.75rem',
                      color: 'var(--text-secondary)'
                    }}>
                      <svg className="feature-check" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button 
                  className={plan.recommended ? 'btn btn-gradient pricing-get-started' : 'btn btn-outline pricing-get-started'}
                  style={{ width: '100%' }}
                >
                  {plan.name === 'Enterprise' ? 'Contact Us' : 'Get Started'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section services-cta" style={{ 
        background: 'var(--gradient-accent)', 
        color: 'white', 
        textAlign: 'center' 
      }}>
        <div className="container">
          <h2 className="cta-title" style={{ color: 'white', marginBottom: '1rem' }}>
            Ready to Get Started?
          </h2>
          <p className="cta-text" style={{ 
            fontSize: '1.125rem', 
            opacity: '0.9', 
            marginBottom: '2rem',
            maxWidth: '600px',
            margin: '0 auto 2rem'
          }}>
            Join thousands of satisfied users who found their dream jobs through JobNest
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Link to="/register" className="btn btn-accent btn-lg" style={{ background: 'white', color: 'var(--primary)' }}>
              Sign Up Now
            </Link>
            <Link to="/jobs" className="btn btn-outline btn-lg cta-btn-outline" style={{ borderColor: 'white', color: 'white' }}>
              Browse Jobs
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 1024px) {
          .grid-cols-3 {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (max-width: 768px) {
          .grid-cols-3 {
            grid-template-columns: 1fr !important;
          }
        }
        
        /* Dark Mode Styles */
        .dark-mode .services-hero {
          background: linear-gradient(135deg, #2d2d2d 0%, #1a1a1a 100%) !important;
        }
        
        .dark-mode .services-hero-title,
        .dark-mode .services-hero-text {
          color: #ffffff !important;
        }
        
        .dark-mode .service-icon-box {
          background: linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%) !important;
        }
        
        .dark-mode .service-icon-box svg {
          stroke: #1a1a1a !important;
        }
        
        .dark-mode .feature-check {
          stroke: #ffffff !important;
        }
        
        .dark-mode .pricing-amount {
          color: #ffffff !important;
        }
        
        .dark-mode .pricing-card[style*="border: 2px solid"] {
          border-color: #ffffff !important;
        }
        
        .dark-mode .recommended-badge {
          background: linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%) !important;
          color: #1a1a1a !important;
        }
        
        .dark-mode .services-cta {
          background: linear-gradient(135deg, #2d2d2d 0%, #1a1a1a 100%) !important;
        }
        
        .dark-mode .cta-title,
        .dark-mode .cta-text {
          color: #ffffff !important;
        }
        
        .dark-mode .cta-btn-outline {
          border-color: #ffffff !important;
          color: #ffffff !important;
        }
        
        .dark-mode .cta-btn-outline:hover {
          background: #ffffff !important;
          color: #1a1a1a !important;
        }
        
        .dark-mode .btn-accent {
          background: #ffffff !important;
          color: #1a1a1a !important;
        }
        
        .dark-mode .btn-accent:hover {
          background: #e0e0e0 !important;
        }
        
        .dark-mode .pricing-get-started.btn-gradient {
          background: linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%) !important;
          color: #1a1a1a !important;
        }
        
        .dark-mode .pricing-get-started.btn-outline {
          border-color: #ffffff !important;
          color: #ffffff !important;
        }
        
        .dark-mode .pricing-get-started.btn-outline:hover {
          background: #ffffff !important;
          color: #1a1a1a !important;
        }
      `}</style>
    </div>
  )
}

export default Services