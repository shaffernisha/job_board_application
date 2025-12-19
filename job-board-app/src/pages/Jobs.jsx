import { useState, useEffect } from 'react'
import { mockJobs } from '../data/mockData'
import JobFilters from '../components/JobFilters'
import JobCard from '../components/JobCard'

const Jobs = () => {
  const [filters, setFilters] = useState({
    search: '',
    category: '',
    location: '',
    jobType: [],
    experience: []
  })
  
  const [filteredJobs, setFilteredJobs] = useState(mockJobs)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // Simulate API call with loading state
    setLoading(true)
    
    setTimeout(() => {
      let filtered = mockJobs

      // Search filter - searches in title, company, and description
      if (filters.search) {
        const searchLower = filters.search.toLowerCase()
        filtered = filtered.filter(job =>
          job.title.toLowerCase().includes(searchLower) ||
          job.company.toLowerCase().includes(searchLower) ||
          job.description.toLowerCase().includes(searchLower)
        )
      }

      // Category filter
      if (filters.category) {
        filtered = filtered.filter(job => job.category === filters.category)
      }

      // Location filter
      if (filters.location) {
        filtered = filtered.filter(job => job.location === filters.location)
      }

      // Job type filter (multiple selections)
      if (filters.jobType.length > 0) {
        filtered = filtered.filter(job => filters.jobType.includes(job.type))
      }

      // Experience filter (multiple selections)
      if (filters.experience.length > 0) {
        filtered = filtered.filter(job => filters.experience.includes(job.experience))
      }

      setFilteredJobs(filtered)
      setLoading(false)
    }, 300)
  }, [filters])

  const handleResetFilters = () => {
    setFilters({
      search: '',
      category: '',
      location: '',
      jobType: [],
      experience: []
    })
  }

  return (
    <div>
      {/* Page Header */}
      <section className="jobs-hero" style={{
        background: 'var(--gradient-primary)',
        color: 'white',
        padding: '4rem 0 3rem',
        textAlign: 'center'
      }}>
        <div className="container">
          <h1 className="fade-in jobs-hero-title" style={{ color: 'white', marginBottom: '1rem' }}>
            Browse Jobs
          </h1>
          <p className="fade-in jobs-hero-text" style={{ 
            color: 'white',
            fontSize: '1.25rem',
            fontWeight: '500',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Discover your next career opportunity from our curated job listings
          </p>
        </div>
      </section>

      {/* Jobs Section */}
      <section className="section">
        <div className="container">
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: '300px 1fr',
            gap: '2rem',
            alignItems: 'start'
          }}>
            {/* Filters Sidebar */}
            <aside className="filters-sidebar">
              <JobFilters 
                filters={filters}
                setFilters={setFilters}
                onReset={handleResetFilters}
              />
            </aside>

            {/* Jobs List */}
            <main>
              {loading ? (
                <div style={{ 
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '4rem',
                  gap: '1rem'
                }}>
                  <div className="spinner" />
                  <p style={{ color: 'var(--text-secondary)' }}>Loading jobs...</p>
                </div>
              ) : filteredJobs.length === 0 ? (
                <div className="card" style={{ 
                  textAlign: 'center',
                  padding: '4rem'
                }}>
                  <svg 
                    width="80" 
                    height="80" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="var(--text-muted)" 
                    strokeWidth="1.5"
                    style={{ margin: '0 auto 1.5rem' }}
                  >
                    <circle cx="11" cy="11" r="8"/>
                    <path d="m21 21-4.35-4.35"/>
                  </svg>
                  <h3 style={{ marginBottom: '0.5rem' }}>No jobs found</h3>
                  <p style={{ 
                    color: 'var(--text-secondary)',
                    marginBottom: '2rem'
                  }}>
                    Try adjusting your filters or search criteria
                  </p>
                  <button 
                    onClick={handleResetFilters}
                    className="btn btn-primary"
                  >
                    Reset Filters
                  </button>
                </div>
              ) : (
                <>
                  {/* Results Header */}
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '1.5rem',
                    padding: '1rem 1.5rem',
                    background: 'var(--bg-primary)',
                    borderRadius: '12px',
                    border: '1px solid var(--border)'
                  }}>
                    <p style={{ 
                      color: 'var(--text-secondary)',
                      fontSize: '0.875rem',
                      marginBottom: '0'
                    }}>
                      Showing <strong style={{ color: 'var(--text-primary)' }}>{filteredJobs.length}</strong> {filteredJobs.length === 1 ? 'job' : 'jobs'}
                    </p>
                    <select 
                      className="select" 
                      style={{ 
                        width: 'auto',
                        padding: '0.5rem 2rem 0.5rem 1rem',
                        fontSize: '0.875rem'
                      }}
                    >
                      <option value="recent">Most Recent</option>
                      <option value="relevant">Most Relevant</option>
                      <option value="salary-high">Salary: High to Low</option>
                      <option value="salary-low">Salary: Low to High</option>
                      <option value="applicants">Most Applicants</option>
                    </select>
                  </div>

                  {/* Jobs Grid */}
                  <div style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    gap: '1.5rem' 
                  }}>
                    {filteredJobs.map((job) => (
                      <JobCard key={job.id} job={job} />
                    ))}
                  </div>

                  {/* Load More Button (for future pagination) */}
                  {filteredJobs.length > 0 && filteredJobs.length >= 10 && (
                    <div style={{ 
                      textAlign: 'center',
                      marginTop: '3rem'
                    }}>
                      <button 
                        className="btn btn-outline"
                        style={{
                          minWidth: '200px'
                        }}
                      >
                        Load More Jobs
                      </button>
                    </div>
                  )}
                </>
              )}
            </main>
          </div>
        </div>
      </section>

      <style>{`
        /* Responsive Design */
        @media (max-width: 1024px) {
          .container > div {
            grid-template-columns: 250px 1fr !important;
          }
        }

        @media (max-width: 768px) {
          .container > div {
            grid-template-columns: 1fr !important;
          }
          
          .filters-sidebar {
            position: static !important;
          }
        }
        
        /* Dark Mode Styles */
        .dark-mode .jobs-hero {
          background: linear-gradient(135deg, #2d2d2d 0%, #1a1a1a 100%) !important;
        }
        
        .dark-mode .jobs-hero-title,
        .dark-mode .jobs-hero-text {
          color: #ffffff !important;
        }
      `}</style>
    </div>
  )
}

export default Jobs