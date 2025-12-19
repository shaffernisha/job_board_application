import { Link } from 'react-router-dom'
import { mockJobs, categories } from '../data/mockData'
import JobCard from '../components/JobCard'

const Home = () => {
  const featuredJobs = mockJobs.slice(0, 3)

  const categoryIcons = {
    'Technology & IT': <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>,
    'Marketing & Content': <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 20V10"/><path d="M12 20V4"/><path d="M6 20v-6"/></svg>,
    'Business & Management': <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>,
    'Design & Creative': <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>,
    'Finance & Accounting': <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
    'Healthcare': <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>,
    'Education': <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>,
    'Sales': <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
    'Engineering': <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M12 1v6m0 6v6"/><path d="m4.93 4.93 4.24 4.24m5.66 5.66 4.24 4.24"/><path d="M1 12h6m6 0h6"/><path d="m4.93 19.07 4.24-4.24m5.66-5.66 4.24-4.24"/></svg>,
    'Customer Service': <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
  }

  return (
    <div>
      {/* Hero Section */}
      <section style={{ 
        background: 'linear-gradient(135deg, rgba(0,71,171,0.05) 0%, rgba(130,200,229,0.05) 100%)', 
        padding: '6rem 2rem',
        position: 'relative',
        overflow: 'hidden',
        width: '100%'
      }}>
        <div style={{ maxWidth: '100%', margin: '0 auto', width: '100%', padding: '0 4rem' }}>
          <div className="grid grid-cols-2" style={{ alignItems: 'center', gap: '4rem' }}>
            {/* Left Content */}
            <div className="fade-in">
              <h1 style={{ marginBottom: '1.5rem', fontSize: '3.5rem' }}>
                <span style={{ background: 'var(--gradient-primary)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Connect Your Career with Opportunity</span>
              </h1>
              <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '2.5rem' }}>
                JobNest bridges the gap between exceptional talent and premium opportunities.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link to="/jobs" className="btn btn-gradient btn-lg">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8"/>
                    <path d="m21 21-4.35-4.35"/>
                  </svg>
                  Find a Job
                </Link>
                <Link to="/register" className="btn btn-outline btn-lg">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14"/>
                    <path d="M12 5l7 7-7 7"/>
                  </svg>
                  Get Started
                </Link>
              </div>
              
              {/* Stats */}
              <div style={{ display: 'flex', gap: '3rem', marginTop: '3rem' }}>
                <div>
                  <div style={{ fontSize: '2.5rem', fontWeight: '700', color: 'var(--primary)' }}>8+</div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Years</div>
                </div>
                <div>
                  <div style={{ fontSize: '2.5rem', fontWeight: '700', color: 'var(--primary)' }}>10K+</div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Active Users</div>
                </div>
                <div>
                  <div style={{ fontSize: '2.5rem', fontWeight: '700', color: 'var(--primary)' }}>500+</div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Placements</div>
                </div>
              </div>
            </div>
            
            {/* Right Image */}
            <div className="slide-in" style={{ position: 'relative' }}>
              <div style={{
                position: 'relative',
                width: '100%',
                height: '500px',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: 'var(--card-shadow-hover)'
              }}>
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=500&fit=crop&q=80" 
                  alt="Professional team collaboration" 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover'
                  }} 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section" style={{ width: '100%', padding: '4rem 2rem' }}>
        <div style={{ maxWidth: '100%', margin: '0 auto', width: '100%', padding: '0 4rem' }}>
          <div className="section-title fade-in">
            <h2>Browse by Category</h2>
            <p style={{ color: 'var(--text-secondary)' }}>Explore jobs across different industries</p>
          </div>
          <div className="grid grid-cols-4">
            {categories.map((cat, i) => (
              <div key={i} className="card hover-scale" style={{ textAlign: 'center', cursor: 'pointer' }}>
                <div style={{ 
                  width: '60px', 
                  height: '60px', 
                  background: 'var(--gradient-primary)', 
                  borderRadius: '16px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  margin: '0 auto 1rem',
                  color: 'white'
                }}>
                  {categoryIcons[cat]}
                </div>
                <h4>{cat}</h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                  {Math.floor(Math.random() * 50) + 10} jobs
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Jobs */}
      <section className="section" style={{ background: 'var(--bg-muted)', width: '100%', padding: '4rem 2rem' }}>
        <div style={{ maxWidth: '100%', margin: '0 auto', width: '100%', padding: '0 4rem' }}>
          <div className="section-title fade-in">
            <h2>Featured Opportunities</h2>
            <p style={{ color: 'var(--text-secondary)' }}>Premium jobs from top companies</p>
          </div>
          <div className="grid grid-cols-3">
            {featuredJobs.map(job => <JobCard key={job.id} job={job} />)}
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/jobs" className="btn btn-outline">
              View All Jobs
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section" style={{ width: '100%', padding: '4rem 2rem' }}>
        <div style={{ maxWidth: '100%', margin: '0 auto', width: '100%', padding: '0 4rem' }}>
          <div className="section-title fade-in">
            <h2>How It Works</h2>
            <p style={{ color: 'var(--text-secondary)' }}>Get started in three simple steps</p>
          </div>
          <div className="grid grid-cols-3">
            {[
              {
                step: '1',
                icon: <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
                title: 'Create Your Profile',
                description: 'Sign up and build your professional profile with your skills, experience, and preferences.'
              },
              {
                step: '2',
                icon: <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>,
                title: 'Search & Apply',
                description: 'Browse through thousands of job listings and apply to positions that match your criteria.'
              },
              {
                step: '3',
                icon: <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>,
                title: 'Get Hired',
                description: 'Connect with employers, attend interviews, and land your dream job.'
              }
            ].map((item, index) => (
              <div key={index} className="card fade-in" style={{ textAlign: 'center', position: 'relative' }}>
                <div style={{
                  position: 'absolute',
                  top: '-20px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '40px',
                  height: '40px',
                  background: 'var(--gradient-primary)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: '700',
                  fontSize: '1.125rem'
                }}>
                  {item.step}
                </div>
                <div style={{ 
                  color: 'var(--primary)', 
                  marginTop: '1rem', 
                  marginBottom: '1rem',
                  display: 'flex',
                  justifyContent: 'center'
                }}>
                  {item.icon}
                </div>
                <h3 style={{ marginBottom: '1rem' }}>{item.title}</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section home-cta" style={{ background: 'var(--gradient-primary)', color: 'white', textAlign: 'center', width: '100%', padding: '4rem 2rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', width: '100%' }}>
          <h2 className="cta-title" style={{ color: 'white', marginBottom: '1rem' }}>Ready to Start Your Journey?</h2>
          <p className="cta-text" style={{ fontSize: '1.125rem', opacity: '0.9', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
            Join thousands who found their dream job through JobNest
          </p>
          <Link to="/register" className="btn btn-accent btn-lg cta-button" style={{ background: 'white', color: 'var(--primary)' }}>
            Get Started Today
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </Link>
        </div>
      </section>

      <style>{`
        /* Tablet */
        @media (max-width: 1024px) {
          section {
            padding: 3rem 1.5rem !important;
          }
          
          section > div {
            padding: 0 2rem !important;
          }
          
          .grid-cols-2 {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          
          .grid-cols-3 {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          
          .grid-cols-4 {
            grid-template-columns: repeat(3, 1fr) !important;
          }
          
          .slide-in {
            margin-top: 2rem;
          }
          
          .slide-in > div {
            height: 400px !important;
          }
          
          h1 {
            font-size: 2.5rem !important;
          }
          
          section[style*="padding: 6rem"] {
            padding: 4rem 1.5rem !important;
          }
        }
        
        /* Mobile */
        @media (max-width: 768px) {
          section {
            padding: 2rem 1rem !important;
          }
          
          section > div {
            padding: 0 1rem !important;
          }
          
          h1 {
            font-size: 1.75rem !important;
            margin-bottom: 1rem !important;
          }
          
          h2 {
            font-size: 1.5rem !important;
          }
          
          h3 {
            font-size: 1.125rem !important;
          }
          
          h4 {
            font-size: 1rem !important;
          }
          
          p {
            font-size: 1rem !important;
          }
          
          .grid-cols-3,
          .grid-cols-4 {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
          }
          
          .slide-in > div {
            height: 300px !important;
            border-radius: 12px !important;
          }
          
          div[style*="display: flex"] {
            flex-direction: column !important;
            gap: 0.75rem !important;
          }
          
          div[style*="gap: 3rem"] {
            flex-direction: row !important;
            gap: 1.5rem !important;
            margin-top: 2rem !important;
          }
          
          div[style*="fontSize: '2.5rem'"] {
            font-size: 2rem !important;
          }
          
          .btn-lg {
            padding: 0.75rem 1.5rem !important;
            font-size: 0.875rem !important;
          }
          
          .card {
            padding: 1.25rem !important;
          }
          
          section[style*="padding: 6rem"] {
            padding: 3rem 1rem !important;
          }
          
          .section-title h2 {
            margin-bottom: 0.5rem !important;
          }
          
          .section-title p {
            font-size: 0.875rem !important;
          }
          
          div[style*="width: '60px'"] {
            width: 48px !important;
            height: 48px !important;
          }
          
          div[style*="width: '60px'"] svg {
            width: 36px !important;
            height: 36px !important;
          }
        }
        
        /* Extra Small Mobile */
        @media (max-width: 480px) {
          h1 {
            font-size: 1.5rem !important;
          }
          
          h2 {
            font-size: 1.25rem !important;
          }
          
          section > div {
            padding: 0 0.5rem !important;
          }
          
          .btn {
            width: 100%;
            justify-content: center;
          }
          
          div[style*="gap: 1.5rem"] {
            gap: 1rem !important;
          }
          
          div[style*="fontSize: '2rem'"] {
            font-size: 1.5rem !important;
          }
          
          .card div[style*="position: absolute"] {
            width: 32px !important;
            height: 32px !important;
            font-size: 0.875rem !important;
          }
        }
        
        /* Dark Mode - Change blue colors to white */
        .dark-mode h1 span {
          background: linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%) !important;
          -webkit-background-clip: text !important;
          -webkit-text-fill-color: transparent !important;
        }
        
        .dark-mode .btn-gradient {
          background: linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%) !important;
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
        
        .dark-mode .card {
          background: #2d2d2d !important;
          border-color: #404040 !important;
        }
        
        .dark-mode .card div[style*="background: var(--gradient-primary)"] {
          background: linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%) !important;
        }
        
        .dark-mode .card div[style*="background: var(--gradient-primary)"] svg {
          color: #1a1a1a !important;
        }
        
        .dark-mode div[style*="color: var(--primary)"] {
          color: #ffffff !important;
        }
        
        .dark-mode div[style*="background: var(--gradient-primary)"] {
          background: linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%) !important;
        }
        
        /* Dark Mode CTA Section */
        .dark-mode .home-cta {
          background: linear-gradient(135deg, #2d2d2d 0%, #1a1a1a 100%) !important;
        }
        
        .dark-mode .cta-title,
        .dark-mode .cta-text {
          color: #ffffff !important;
          opacity: 1 !important;
        }
        
        .dark-mode .cta-button {
          background: #ffffff !important;
          color: #1a1a1a !important;
        }
        
        .dark-mode .cta-button:hover {
          background: #e0e0e0 !important;
        }
        
        /* Dark Mode - Step Numbers in How It Works */
        .dark-mode .card div[style*="position: absolute"] {
          background: linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%) !important;
          color: #1a1a1a !important;
        }
      `}</style>
    </div>
  )
}

export default Home