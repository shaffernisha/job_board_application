import { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../main'
import { mockJobs } from '../data/mockData'
import ApplicationForm from '../components/ApplicationForm'

const JobDetails = () => {
  const { id } = useParams()
  const { user } = useAuth()
  const navigate = useNavigate()
  const [showApplicationForm, setShowApplicationForm] = useState(false)
  const [saved, setSaved] = useState(false)

  const job = mockJobs.find(j => j.id === parseInt(id))

  const handleApply = () => {
    if (!user) {
      navigate('/login')
      return
    }
    setShowApplicationForm(true)
  }

  const handleSave = () => {
    setSaved(!saved)
  }

  // Job not found
  if (!job) {
    return (
      <div className="section">
        <div className="container" style={{ textAlign: 'center', padding: '4rem 0' }}>
          <svg 
            width="100" 
            height="100" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="var(--text-muted)" 
            strokeWidth="1.5"
            style={{ margin: '0 auto 2rem' }}
          >
            <circle cx="12" cy="12" r="10"/>
            <line x1="12" y1="8" x2="12" y2="12"/>
            <line x1="12" y1="16" x2="12.01" y2="16"/>
          </svg>
          <h2 style={{ marginBottom: '1rem' }}>Job Not Found</h2>
          <p style={{ 
            color: 'var(--text-secondary)',
            marginBottom: '2rem'
          }}>
            The job you're looking for doesn't exist or has been removed.
          </p>
          <Link to="/jobs" className="btn btn-primary">
            Browse All Jobs
          </Link>
        </div>
      </div>
    )
  }

  // Show application form
  if (showApplicationForm) {
    return (
      <div className="section">
        <div className="container">
          <ApplicationForm 
            job={job} 
            onBack={() => setShowApplicationForm(false)} 
          />
        </div>
      </div>
    )
  }

  return (
    <div>
      {/* Breadcrumb */}
      <div style={{ 
        background: 'var(--bg-muted)',
        padding: '1.5rem 0',
        borderBottom: '1px solid var(--border)'
      }}>
        <div className="container">
          <div style={{ 
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontSize: '0.875rem',
            color: 'var(--text-secondary)'
          }}>
            <Link to="/" style={{ color: 'var(--text-secondary)' }}>Home</Link>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
            <Link to="/jobs" style={{ color: 'var(--text-secondary)' }}>Jobs</Link>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
            <span style={{ color: 'var(--text-primary)', fontWeight: '600' }}>
              {job.title}
            </span>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container fade-in">
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 350px', 
            gap: '2rem',
            alignItems: 'start'
          }}>
            {/* Main Content */}
            <div>
              <div className="card" style={{ marginBottom: '0' }}>
                {/* Job Header */}
                <div style={{ 
                  display: 'flex', 
                  gap: '1.5rem',
                  paddingBottom: '2rem',
                  borderBottom: '1px solid var(--border)',
                  marginBottom: '2rem'
                }}>
                  <img 
                    src={job.companyLogo} 
                    alt={job.company}
                    style={{
                      width: '80px',
                      height: '80px',
                      borderRadius: '16px',
                      objectFit: 'cover',
                      border: '2px solid var(--border)',
                      flexShrink: 0
                    }}
                  />
                  <div style={{ flex: 1 }}>
                    <h2 style={{ marginBottom: '0.5rem' }}>{job.title}</h2>
                    <div style={{ 
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      marginBottom: '1rem',
                      color: 'var(--text-secondary)',
                      fontSize: '1.125rem'
                    }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/>
                      </svg>
                      <span style={{ fontWeight: '600' }}>{job.company}</span>
                    </div>
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                      <span className="badge badge-primary">{job.type}</span>
                      <span className="badge badge-accent">{job.experience}</span>
                      <span className="badge badge-secondary">{job.category}</span>
                    </div>
                  </div>
                </div>

                {/* Key Info */}
                <div style={{ 
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '1.5rem',
                  marginBottom: '2rem',
                  padding: '1.5rem',
                  background: 'var(--bg-muted)',
                  borderRadius: '12px'
                }}>
                  <div>
                    <div style={{ 
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      marginBottom: '0.5rem',
                      color: 'var(--text-secondary)',
                      fontSize: '0.875rem'
                    }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                        <circle cx="12" cy="10" r="3"/>
                      </svg>
                      Location
                    </div>
                    <div style={{ fontWeight: '600', fontSize: '1rem' }}>{job.location}</div>
                  </div>
                  <div>
                    <div style={{ 
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      marginBottom: '0.5rem',
                      color: 'var(--text-secondary)',
                      fontSize: '0.875rem'
                    }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2">
                        <line x1="12" y1="1" x2="12" y2="23"/>
                        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                      </svg>
                      Salary
                    </div>
                    <div style={{ fontWeight: '600', fontSize: '1rem' }}>{job.salary}</div>
                  </div>
                  <div>
                    <div style={{ 
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      marginBottom: '0.5rem',
                      color: 'var(--text-secondary)',
                      fontSize: '0.875rem'
                    }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                        <circle cx="9" cy="7" r="4"/>
                      </svg>
                      Applicants
                    </div>
                    <div style={{ fontWeight: '600', fontSize: '1rem' }}>{job.applicants} applied</div>
                  </div>
                </div>

                {/* Description */}
                <div style={{ marginBottom: '2rem' }}>
                  <h3 style={{ marginBottom: '1rem' }}>Job Description</h3>
                  <p style={{ 
                    color: 'var(--text-secondary)',
                    lineHeight: '1.8',
                    fontSize: '1rem'
                  }}>
                    {job.description}
                  </p>
                </div>

                {/* Requirements */}
                <div style={{ marginBottom: '2rem' }}>
                  <h3 style={{ marginBottom: '1rem' }}>Requirements</h3>
                  <ul style={{ 
                    paddingLeft: '1.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.75rem'
                  }}>
                    {job.requirements.map((req, index) => (
                      <li key={index} style={{ 
                        color: 'var(--text-secondary)',
                        lineHeight: '1.6'
                      }}>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Responsibilities */}
                <div>
                  <h3 style={{ marginBottom: '1rem' }}>Responsibilities</h3>
                  <ul style={{ 
                    paddingLeft: '1.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.75rem'
                  }}>
                    {job.responsibilities.map((resp, index) => (
                      <li key={index} style={{ 
                        color: 'var(--text-secondary)',
                        lineHeight: '1.6'
                      }}>
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside>
              <div className="card" style={{ position: 'sticky', top: '100px' }}>
                <button 
                  onClick={handleApply}
                  className="btn btn-gradient"
                  style={{ width: '100%', marginBottom: '1rem' }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14"/>
                    <path d="M12 5l7 7-7 7"/>
                  </svg>
                  Apply Now
                </button>
                
                <button 
                  onClick={handleSave}
                  className="btn btn-outline"
                  style={{ width: '100%', marginBottom: '2rem' }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill={saved ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
                  </svg>
                  {saved ? 'Saved' : 'Save Job'}
                </button>

                <div style={{ 
                  paddingTop: '1.5rem',
                  borderTop: '1px solid var(--border)'
                }}>
                  <h4 style={{ marginBottom: '1rem' }}>Posted</h4>
                  <p style={{ 
                    color: 'var(--text-secondary)',
                    fontSize: '0.875rem',
                    marginBottom: '1.5rem'
                  }}>
                    {job.postedDate}
                  </p>

                  <h4 style={{ marginBottom: '1rem' }}>Share this job</h4>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button 
                      className="btn btn-outline btn-sm"
                      style={{ flex: 1, padding: '0.5rem' }}
                      title="Share on LinkedIn"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
                        <circle cx="4" cy="4" r="2"/>
                      </svg>
                    </button>
                    <button 
                      className="btn btn-outline btn-sm"
                      style={{ flex: 1, padding: '0.5rem' }}
                      title="Share on Twitter"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                      </svg>
                    </button>
                    <button 
                      className="btn btn-outline btn-sm"
                      style={{ flex: 1, padding: '0.5rem' }}
                      title="Copy link"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
                      </svg>
                    </button>
                  </div>
                </div>

                <div style={{ 
                  marginTop: '1.5rem',
                  paddingTop: '1.5rem',
                  borderTop: '1px solid var(--border)'
                }}>
                  <h4 style={{ marginBottom: '1rem' }}>About {job.company}</h4>
                  <p style={{ 
                    color: 'var(--text-secondary)',
                    fontSize: '0.875rem',
                    lineHeight: '1.6'
                  }}>
                    A leading company in the {job.category} industry, committed to innovation and excellence.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .container > div > div {
            grid-template-columns: 1fr !important;
          }
          
          aside {
            position: static !important;
          }
        }
      `}</style>
    </div>
  )
}

export default JobDetails