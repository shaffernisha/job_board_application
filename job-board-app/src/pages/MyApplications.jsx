import { useEffect, useState } from 'react'
import { useAuth } from '../main'
import { useNavigate, Link } from 'react-router-dom'
import { mockApplications, mockJobs } from '../data/mockData'

const MyApplications = () => {
  const { user } = useAuth()
  const navigate = useNavigate()
  const [applications, setApplications] = useState([])
  const [filter, setFilter] = useState('all')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!user) {
      navigate('/login')
      return
    }
    
    // Simulate API call
    setTimeout(() => {
      const enrichedApplications = mockApplications.map(app => {
        const job = mockJobs.find(j => j.id === app.jobId)
        return {
          ...app,
          location: job?.location || 'Remote',
          companyLogo: job?.companyLogo
        }
      })
      setApplications(enrichedApplications)
      setLoading(false)
    }, 1000)
  }, [user, navigate])

  const filteredApplications = applications.filter(app => {
    if (filter === 'all') return true
    return app.status === filter
  })

  const stats = {
    total: applications.length,
    underReview: applications.filter(a => a.status === 'Under Review').length,
    shortlisted: applications.filter(a => a.status === 'Shortlisted').length,
    rejected: applications.filter(a => a.status === 'Rejected').length
  }

  const getStatusBadgeColor = (status) => {
    if (status === 'Shortlisted') return { bg: '#10B98115', color: '#10B981' }
    if (status === 'Under Review') return { bg: '#3B82F615', color: '#3B82F6' }
    return { bg: '#6B728015', color: '#6B7280' }
  }

  return (
    <div style={{ minHeight: '100vh', background: '#F9FAFB', padding: '2rem' }}>
      {/* Back Button */}
      <button
        onClick={() => navigate('/seeker/dashboard')}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          background: 'none',
          border: 'none',
          color: '#6B7280',
          fontSize: '0.875rem',
          cursor: 'pointer',
          marginBottom: '1.5rem',
          padding: '0.5rem'
        }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
        Back to Dashboard
      </button>

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Page Header */}
        <div style={{ marginBottom: '2rem' }}>
          <h1 style={{ fontSize: '2rem', fontWeight: '700', color: '#1F2937', marginBottom: '0.5rem' }}>
            My Applications
          </h1>
          <p style={{ fontSize: '1rem', color: '#6B7280' }}>
            Track and manage your job applications
          </p>
        </div>

        {/* Stats Cards */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(4, 1fr)', 
          gap: '1.5rem',
          marginBottom: '2rem'
        }}>
          {[
            { label: 'Total Applications', value: stats.total, filter: 'all', color: '#0047AB', bg: '#EFF6FF' },
            { label: 'Under Review', value: stats.underReview, filter: 'Under Review', color: '#0047AB', bg: '#DBEAFE' },
            { label: 'Shortlisted', value: stats.shortlisted, filter: 'Shortlisted', color: '#10B981', bg: '#D1FAE5' },
            { label: 'Rejected', value: stats.rejected, filter: 'Rejected', color: '#6B7280', bg: '#F3F4F6' }
          ].map((stat, index) => (
            <div 
              key={index}
              onClick={() => setFilter(stat.filter)}
              style={{
                background: 'white',
                padding: '1.5rem',
                borderRadius: '12px',
                border: filter === stat.filter ? `2px solid ${stat.color}` : '1px solid #E5E7EB',
                cursor: 'pointer',
                textAlign: 'center',
                transition: 'all 0.2s'
              }}
            >
              <div style={{ 
                fontSize: '2rem', 
                fontWeight: '700',
                color: stat.color,
                marginBottom: '0.5rem'
              }}>
                {stat.value}
              </div>
              <div style={{ 
                fontSize: '0.875rem',
                color: '#6B7280',
                fontWeight: '500'
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Applications List */}
        {loading ? (
          <div style={{ 
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '4rem',
            gap: '1rem',
            background: 'white',
            borderRadius: '12px'
          }}>
            <div className="spinner" />
            <p style={{ color: '#6B7280' }}>Loading applications...</p>
          </div>
        ) : filteredApplications.length === 0 ? (
          <div style={{ 
            textAlign: 'center',
            padding: '4rem',
            background: 'white',
            borderRadius: '12px',
            border: '1px solid #E5E7EB'
          }}>
            <svg 
              width="80" 
              height="80" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="#9CA3AF" 
              strokeWidth="1.5"
              style={{ margin: '0 auto 1.5rem' }}
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
            </svg>
            <h3 style={{ marginBottom: '0.5rem', color: '#1F2937' }}>
              {filter === 'all' ? 'No applications yet' : `No ${filter.toLowerCase()} applications`}
            </h3>
            <p style={{ color: '#6B7280', marginBottom: '2rem' }}>
              {filter === 'all' 
                ? 'Start applying to jobs to see them here'
                : 'Try changing the filter to see other applications'
              }
            </p>
            {filter === 'all' && (
              <button 
                onClick={() => navigate('/seeker/job-search')}
                className="btn btn-primary">
                Browse Jobs
              </button>
            )}
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {filteredApplications.map((app) => {
              const statusColor = getStatusBadgeColor(app.status)
              return (
                <div 
                  key={app.id} 
                  style={{
                    background: 'white',
                    padding: '1.5rem',
                    borderRadius: '12px',
                    border: '1px solid #E5E7EB',
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                  onClick={() => navigate(`/jobs/${app.jobId}`)}
                  onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)'}
                  onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}
                >
                  <div style={{ 
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'start',
                    marginBottom: '1rem'
                  }}>
                    <div style={{ display: 'flex', gap: '1rem', flex: 1 }}>
                      {/* Company Logo */}
                      <div style={{
                        width: '56px',
                        height: '56px',
                        borderRadius: '12px',
                        background: app.companyLogo ? `url(${app.companyLogo})` : statusColor.bg,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: statusColor.color,
                        fontSize: '1.5rem',
                        fontWeight: '700',
                        flexShrink: 0
                      }}>
                        {!app.companyLogo && app.company.charAt(0)}
                      </div>

                      <div style={{ flex: 1, minWidth: 0 }}>
                        <h4 style={{ marginBottom: '0.5rem', fontSize: '1.125rem', fontWeight: '600', color: '#1F2937' }}>
                          {app.jobTitle}
                        </h4>
                        <p style={{ 
                          color: '#6B7280',
                          fontSize: '0.875rem',
                          marginBottom: '0.75rem',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem'
                        }}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/>
                          </svg>
                          {app.company}
                        </p>
                        <p style={{
                          color: '#9CA3AF',
                          fontSize: '0.875rem',
                          marginBottom: 0,
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem'
                        }}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                            <circle cx="12" cy="10" r="3"/>
                          </svg>
                          {app.location}
                        </p>
                      </div>
                    </div>
                    <span style={{
                      padding: '0.5rem 1rem',
                      background: statusColor.bg,
                      color: statusColor.color,
                      borderRadius: '8px',
                      fontSize: '0.75rem',
                      fontWeight: '600',
                      whiteSpace: 'nowrap'
                    }}>
                      {app.status}
                    </span>
                  </div>

                  <div style={{ 
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingTop: '1rem',
                    borderTop: '1px solid #F3F4F6',
                    fontSize: '0.875rem'
                  }}>
                    <span style={{ 
                      color: '#6B7280',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                        <line x1="16" y1="2" x2="16" y2="6"/>
                        <line x1="8" y1="2" x2="8" y2="6"/>
                        <line x1="3" y1="10" x2="21" y2="10"/>
                      </svg>
                      Applied on {app.appliedDate}
                    </span>
                    
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        navigate(`/jobs/${app.jobId}`)
                      }}
                      style={{
                        padding: '0.5rem 1rem',
                        background: '#0047AB',
                        color: 'white',
                        border: 'none',
                        borderRadius: '6px',
                        fontSize: '0.875rem',
                        fontWeight: '600',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                      }}
                    >
                      View Job
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="5" y1="12" x2="19" y2="12"/>
                        <polyline points="12 5 19 12 12 19"/>
                      </svg>
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 1024px) {
          div[style*="gridTemplateColumns: 'repeat(4, 1fr)'"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (max-width: 768px) {
          div[style*="gridTemplateColumns: 'repeat(4, 1fr)'"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  )
}

export default MyApplications