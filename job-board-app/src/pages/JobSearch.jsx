import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { mockJobs } from '../data/mockData'

const JobSearch = () => {
  const navigate = useNavigate()
  const [searchQuery, setSearchQuery] = useState('')
  const [locationFilter, setLocationFilter] = useState('')
  const [showFilter, setShowFilter] = useState(false)
  const [filteredJobs, setFilteredJobs] = useState(mockJobs)

  const handleSearch = () => {
    let filtered = mockJobs
    
    if (searchQuery) {
      const searchLower = searchQuery.toLowerCase()
      filtered = filtered.filter(job =>
        job.title.toLowerCase().includes(searchLower) ||
        job.company.toLowerCase().includes(searchLower) ||
        job.description.toLowerCase().includes(searchLower)
      )
    }

    if (locationFilter) {
      filtered = filtered.filter(job => job.location.includes(locationFilter))
    }

    setFilteredJobs(filtered)
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
        {/* Search Bar */}
        <div style={{
          background: 'white',
          padding: '1.5rem',
          borderRadius: '12px',
          marginBottom: '2rem',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }}>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: '300px', position: 'relative' }}>
              <svg 
                width="18" 
                height="18" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="#9CA3AF" 
                strokeWidth="2"
                style={{
                  position: 'absolute',
                  left: '1rem',
                  top: '50%',
                  transform: 'translateY(-50%)'
                }}
              >
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.35-4.35"/>
              </svg>
              <input
                type="text"
                placeholder="Job Title, Company, or Keywords"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem 0.75rem 3rem',
                  border: '1px solid #E5E7EB',
                  borderRadius: '8px',
                  fontSize: '0.875rem',
                  outline: 'none'
                }}
              />
            </div>

            <div style={{ width: '220px', position: 'relative' }}>
              <svg 
                width="18" 
                height="18" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="#9CA3AF" 
                strokeWidth="2"
                style={{
                  position: 'absolute',
                  left: '1rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  zIndex: 1
                }}
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <select
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem 0.75rem 3rem',
                  border: '1px solid #E5E7EB',
                  borderRadius: '8px',
                  fontSize: '0.875rem',
                  outline: 'none',
                  cursor: 'pointer',
                  appearance: 'none',
                  background: 'white'
                }}
              >
                <option value="">Select Location</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Delhi">Delhi</option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="Pune">Pune</option>
                <option value="Chennai">Chennai</option>
                <option value="Remote">Remote</option>
              </select>
            </div>

            <button
              onClick={() => setShowFilter(!showFilter)}
              style={{
                padding: '0.75rem 1.25rem',
                border: '1px solid #E5E7EB',
                borderRadius: '8px',
                background: 'white',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.875rem',
                color: '#374151'
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>
              </svg>
              Filter
            </button>

            <button
              onClick={handleSearch}
              style={{
                padding: '0.75rem 2rem',
                background: '#0047AB',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '0.875rem',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              Search
            </button>
          </div>
        </div>

        {/* Results Count */}
        <p style={{ color: '#6B7280', fontSize: '0.875rem', marginBottom: '1.5rem' }}>
          Showing <strong>{filteredJobs.length}</strong> results
        </p>

        {/* Job Cards Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(3, 1fr)', 
          gap: '1.5rem' 
        }}>
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              style={{
                background: 'white',
                padding: '1.5rem',
                borderRadius: '12px',
                border: '1px solid #E5E7EB',
                cursor: 'pointer',
                transition: 'all 0.2s',
                position: 'relative'
              }}
              onClick={() => navigate(`/jobs/${job.id}`)}
            >
              {/* Three dots menu */}
              <button style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '0.25rem',
                color: '#9CA3AF'
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="12" cy="5" r="2"/>
                  <circle cx="12" cy="12" r="2"/>
                  <circle cx="12" cy="19" r="2"/>
                </svg>
              </button>

              {/* Company Logo */}
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '12px',
                background: job.companyLogo ? `url(${job.companyLogo})` : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '1.5rem',
                fontWeight: '700'
              }}>
                {!job.companyLogo && job.company.charAt(0)}
              </div>

              {/* Job Title */}
              <h3 style={{ 
                fontSize: '1rem', 
                fontWeight: '700', 
                color: '#1F2937', 
                marginBottom: '0.5rem' 
              }}>
                {job.title}
              </h3>

              {/* Company Name */}
              <p style={{ 
                fontSize: '0.875rem', 
                color: '#6B7280', 
                marginBottom: '1rem' 
              }}>
                {job.company}
              </p>

              {/* Description */}
              <p style={{
                fontSize: '0.875rem',
                color: '#6B7280',
                lineHeight: '1.5',
                marginBottom: '1rem',
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden'
              }}>
                {job.description}
              </p>

              {/* Job Details */}
              <div style={{ 
                display: 'flex', 
                gap: '1rem', 
                marginBottom: '1rem',
                fontSize: '0.75rem',
                color: '#9CA3AF'
              }}>
                <span>📍 {job.location.split(',')[0]}</span>
                <span>💰 {job.salary}</span>
              </div>

              {/* Friends */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.75rem',
                color: '#6B7280',
                marginBottom: '1.25rem'
              }}>
                <div style={{ display: 'flex', marginLeft: '-0.25rem' }}>
                  {[1, 2, 3].map(i => (
                    <div
                      key={i}
                      style={{
                        width: '24px',
                        height: '24px',
                        borderRadius: '50%',
                        background: '#E5E7EB',
                        border: '2px solid white',
                        marginLeft: i > 1 ? '-8px' : 0
                      }}
                    />
                  ))}
                </div>
                <span>+{job.applicants} friends work here</span>
              </div>

              {/* Apply Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  navigate(`/jobs/${job.id}`)
                }}
                style={{
                  width: '100%',
                  padding: '0.625rem',
                  background: 'transparent',
                  color: '#1F2937',
                  border: '1px solid #E5E7EB',
                  borderRadius: '8px',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          div[style*="gridTemplateColumns: 'repeat(3, 1fr)'"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        
        @media (max-width: 768px) {
          div[style*="gridTemplateColumns: 'repeat(3, 1fr)'"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  )
}

export default JobSearch