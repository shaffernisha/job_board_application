import { Link } from 'react-router-dom'

const About = () => {
  const stats = [
    { 
      number: '10,000+', 
      label: 'Active Users', 
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      )
    },
    { 
      number: '5,000+', 
      label: 'Jobs Posted', 
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
        </svg>
      )
    },
    { 
      number: '8+', 
      label: 'Years Experience', 
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2v20m0-20 7 7m-7-7-7 7"/>
        </svg>
      )
    },
    { 
      number: '95%', 
      label: 'Success Rate', 
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
          <polyline points="22 4 12 14.01 9 11.01"/>
        </svg>
      )
    }
  ]

  const team = [
    {
      name: 'Rajesh Kumar',
      role: 'CEO & Founder',
      image: '/images/team/Rajesh.webp',
      bio: '15+ years in HR and recruitment'
    },
    {
      name: 'Priya Sharma',
      role: 'CTO',
      image: '/images/team/preethi.jpg',
      bio: 'Tech expert with passion for innovation'
    },
    {
      name: 'Sneha Reddy',
      role: 'Lead Designer',
      image: '/images/team/mam.webp',
      bio: 'Creating beautiful user experiences'
    },
    {
      name: 'Amit Patel',
      role: 'Head of Operations',
      image: '/images/team/amit.jpg',
      bio: 'Operations specialist with 10+ years'
    }
  ]

  const values = [
    {
      icon: (
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5z"/>
          <path d="M2 17l10 5 10-5"/>
          <path d="M2 12l10 5 10-5"/>
        </svg>
      ),
      title: 'Mission Driven',
      description: 'We are committed to connecting talent with opportunities and transforming careers.'
    },
    {
      icon: (
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
        </svg>
      ),
      title: 'Trust & Integrity',
      description: 'Building lasting relationships through transparency and ethical practices.'
    },
    {
      icon: (
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
        </svg>
      ),
      title: 'Innovation',
      description: 'Constantly evolving our platform with cutting-edge technology and features.'
    },
    {
      icon: (
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
      title: 'User-Centric',
      description: 'Your success is our success. We prioritize user experience in everything we do.'
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="about-hero" style={{
        background: 'var(--gradient-primary)',
        color: 'white',
        padding: '6rem 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <h1 className="fade-in about-hero-title" style={{ 
            color: 'white', 
            fontSize: '3rem', 
            marginBottom: '1.5rem' 
          }}>
            About JobNest
          </h1>
          <p className="fade-in about-hero-text" style={{ 
            color: 'white',
            fontSize: '1.25rem',
            fontWeight: '500',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: '1.8'
          }}>
            Empowering careers and connecting talent with opportunities since 2016. We're more than just a job portal — we're your career partner.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-4">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="card hover-lift fade-in" 
                style={{ textAlign: 'center' }}
              >
                <div className="stat-icon" style={{
                  color: 'var(--primary)',
                  marginBottom: '1rem',
                  display: 'flex',
                  justifyContent: 'center'
                }}>
                  {stat.icon}
                </div>
                <div className="stat-number" style={{ 
                  fontSize: '2.5rem', 
                  fontWeight: '700', 
                  color: 'var(--primary)',
                  marginBottom: '0.5rem'
                }}>
                  {stat.number}
                </div>
                <div style={{ 
                  color: 'var(--text-secondary)',
                  fontSize: '0.875rem'
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section" style={{ background: 'var(--bg-muted)' }}>
        <div className="container">
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 1fr', 
            gap: '4rem', 
            alignItems: 'center' 
          }}>
            <div className="fade-in">
              <h2 style={{ marginBottom: '1.5rem' }}>Our Story</h2>
              <p style={{ 
                color: 'var(--text-secondary)', 
                lineHeight: '1.8',
                marginBottom: '1rem'
              }}>
                JobNest was founded in 2016 with a simple yet powerful vision: to bridge the gap between talented professionals and their dream opportunities. What started as a small startup in Bangalore has grown into one of India's leading job portals.
              </p>
              <p style={{ 
                color: 'var(--text-secondary)', 
                lineHeight: '1.8',
                marginBottom: '1rem'
              }}>
                Today, we serve thousands of job seekers and hundreds of employers across various industries. Our platform has facilitated over 10,000 successful placements, and we continue to innovate and expand our services.
              </p>
              <p style={{ 
                color: 'var(--text-secondary)', 
                lineHeight: '1.8'
              }}>
                We believe that everyone deserves to find work they love, and every company deserves to find talent that drives their success. That's why we've built a platform that makes the job search and hiring process simple, efficient, and effective.
              </p>
            </div>
            <div className="fade-in">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop" 
                alt="Our Team" 
                style={{ 
                  width: '100%', 
                  height: '400px', 
                  objectFit: 'cover', 
                  borderRadius: '20px',
                  boxShadow: 'var(--card-shadow-hover)'
                }} 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section">
        <div className="container">
          <div className="section-title fade-in">
            <h2>Our Values</h2>
            <p style={{ color: 'var(--text-secondary)' }}>
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-4">
            {values.map((value, index) => (
              <div key={index} className="card hover-lift fade-in" style={{ textAlign: 'center' }}>
                <div className="value-icon" style={{
                  color: 'var(--primary)',
                  marginBottom: '1rem',
                  display: 'flex',
                  justifyContent: 'center'
                }}>
                  {value.icon}
                </div>
                <h4 style={{ marginBottom: '1rem' }}>{value.title}</h4>
                <p style={{ 
                  color: 'var(--text-secondary)',
                  fontSize: '0.875rem',
                  lineHeight: '1.6'
                }}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section" style={{ background: 'var(--bg-muted)' }}>
        <div className="container">
          <div className="section-title fade-in">
            <h2>Meet Our Team</h2>
            <p style={{ color: 'var(--text-secondary)' }}>
              The passionate people behind JobNest
            </p>
          </div>

          <div className="grid grid-cols-4">
            {team.map((member, index) => (
              <div 
                key={index} 
                className="card hover-lift fade-in" 
                style={{ textAlign: 'center' }}
              >
                <div className="team-member-image" style={{
                  width: '140px',
                  height: '140px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  margin: '0 auto 1.5rem',
                  border: '4px solid var(--primary)',
                  boxShadow: '0 4px 12px rgba(0, 71, 171, 0.2)'
                }}>
                  <img 
                    src={member.image} 
                    alt={member.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                </div>
                <h4 style={{ marginBottom: '0.5rem' }}>{member.name}</h4>
                <p className="team-role" style={{ 
                  color: 'var(--primary)',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  marginBottom: '0.75rem'
                }}>
                  {member.role}
                </p>
                <p style={{ 
                  color: 'var(--text-secondary)',
                  fontSize: '0.875rem',
                  lineHeight: '1.6'
                }}>
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section about-cta" style={{ 
        background: 'var(--gradient-accent)', 
        color: 'white', 
        textAlign: 'center' 
      }}>
        <div className="container">
          <h2 className="cta-title" style={{ color: 'white', marginBottom: '1rem' }}>
            Join Us on This Journey
          </h2>
          <p className="cta-text" style={{ 
            fontSize: '1.125rem', 
            opacity: '0.9', 
            marginBottom: '2rem',
            maxWidth: '600px',
            margin: '0 auto 2rem'
          }}>
            Whether you're looking for your dream job or the perfect candidate, we're here to help
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/register" className="btn btn-accent btn-lg" style={{ background: 'white', color: 'var(--primary)' }}>
              Get Started
            </Link>
            <Link to="/jobs" className="btn btn-outline btn-lg cta-btn-outline" style={{ borderColor: 'white', color: 'white' }}>
              Browse Jobs
            </Link>
            <Link to="/services" className="btn btn-outline btn-lg cta-btn-outline" style={{ borderColor: 'white', color: 'white' }}>
              Our Services
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 1024px) {
          .grid-cols-4 {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (max-width: 768px) {
          .grid-cols-4 {
            grid-template-columns: 1fr !important;
          }
          
          div[style*="gridTemplateColumns: '1fr 1fr'"] {
            grid-template-columns: 1fr !important;
          }
        }
        
        /* Dark Mode Styles */
        .dark-mode .about-hero {
          background: linear-gradient(135deg, #2d2d2d 0%, #1a1a1a 100%) !important;
        }
        
        .dark-mode .about-hero-title,
        .dark-mode .about-hero-text {
          color: #ffffff !important;
        }
        
        .dark-mode .stat-icon svg {
          stroke: #ffffff !important;
        }
        
        .dark-mode .stat-number {
          color: #ffffff !important;
        }
        
        .dark-mode .value-icon svg {
          stroke: #ffffff !important;
        }
        
        .dark-mode .team-member-image {
          border-color: #ffffff !important;
          box-shadow: 0 4px 12px rgba(255, 255, 255, 0.2) !important;
        }
        
        .dark-mode .team-role {
          color: #ffffff !important;
        }
        
        .dark-mode .about-cta {
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
      `}</style>
    </div>
  )
}

export default About