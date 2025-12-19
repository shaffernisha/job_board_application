import { Link } from 'react-router-dom'

const JobCard = ({ job }) => {
  return (
    <div className="card hover-lift fade-in">
      {/* Header Section */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between',
        alignItems: 'start',
        marginBottom: '1rem'
      }}>
        <div style={{ display: 'flex', gap: '1rem', flex: 1 }}>
          {/* Company Logo */}
          <img 
            src={job.companyLogo} 
            alt={job.company}
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '12px',
              objectFit: 'cover',
              border: '2px solid var(--border)',
              flexShrink: 0
            }}
          />
          
          {/* Job Info */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <h4 style={{ marginBottom: '0.5rem' }}>
              <Link 
                to={`/jobs/${job.id}`} 
                style={{ 
                  color: 'var(--text-primary)',
                  transition: 'color 0.3s ease'
                }}
                className="job-title-link"
              >
                {job.title}
              </Link>
            </h4>
            
            {/* Company Name */}
            <div style={{ 
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: 'var(--text-secondary)', 
              fontSize: '0.875rem',
              marginBottom: '0.75rem'
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/>
                <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/>
                <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/>
              </svg>
              {job.company}
            </div>
            
            {/* Badges */}
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <span className="badge badge-secondary">{job.type}</span>
              <span className="badge badge-secondary">{job.experience}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      <p style={{ 
        color: 'var(--text-secondary)', 
        fontSize: '0.875rem',
        marginBottom: '1rem',
        lineHeight: '1.6',
        display: '-webkit-box',
        WebkitLineClamp: 2,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden'
      }}>
        {job.description.length > 120 
          ? `${job.description.substring(0, 120)}...` 
          : job.description}
      </p>

      {/* Job Details Grid */}
      <div style={{ 
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '0.75rem',
        marginBottom: '1.5rem',
        fontSize: '0.875rem',
        color: 'var(--text-secondary)'
      }}>
        {/* Location */}
        <div style={{ 
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2">
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          {job.location}
        </div>
        
        {/* Salary */}
        <div style={{ 
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2">
            <line x1="12" y1="1" x2="12" y2="23"/>
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
          </svg>
          {job.salary}
        </div>
        
        {/* Posted Date */}
        <div style={{ 
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
          {job.postedDate}
        </div>
        
        {/* Applicants */}
        <div style={{ 
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
            <circle cx="9" cy="7" r="4"/>
          </svg>
          {job.applicants} applicants
        </div>
      </div>

      {/* Footer Section */}
      <div style={{ 
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: '1rem',
        borderTop: '1px solid var(--border)'
      }}>
        <span className="badge badge-primary">{job.category}</span>
        
        <Link 
          to={`/jobs/${job.id}`} 
          className="btn btn-primary btn-sm"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}
        >
          View Details
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="5" y1="12" x2="19" y2="12"/>
            <polyline points="12 5 19 12 12 19"/>
          </svg>
        </Link>
      </div>

      <style>{`
        .job-title-link:hover {
          color: var(--primary) !important;
        }

        .job-title-link {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          word-break: break-word;
        }
      `}</style>
    </div>
  )
}

export default JobCard