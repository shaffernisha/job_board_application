import { categories, locations, jobTypes, experienceLevels } from '../data/mockData'

const JobFilters = ({ filters, setFilters, onReset }) => {
  const handleChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }))
  }

  const handleCheckboxChange = (key, value, checked) => {
    setFilters(prev => ({
      ...prev,
      [key]: checked 
        ? [...prev[key], value]
        : prev[key].filter(item => item !== value)
    }))
  }

  const hasActiveFilters = 
    filters.search || 
    filters.category || 
    filters.location || 
    filters.jobType.length > 0 || 
    filters.experience.length > 0

  return (
    <div className="card" style={{ position: 'sticky', top: '100px' }}>
      {/* Header */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '1.5rem'
      }}>
        <h3 style={{ marginBottom: '0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>
          </svg>
          Filters
        </h3>
        {hasActiveFilters && (
          <button
            onClick={onReset}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--primary)',
              fontSize: '0.875rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'opacity 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '0.25rem'
            }}
            className="reset-btn"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/>
              <path d="M21 3v5h-5"/>
              <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/>
              <path d="M8 16H3v5"/>
            </svg>
            Reset
          </button>
        )}
      </div>

      {/* Search Input */}
      <div style={{ marginBottom: '1.5rem' }}>
        <label style={{ 
          display: 'block', 
          marginBottom: '0.5rem',
          fontWeight: '600',
          fontSize: '0.875rem',
          color: 'var(--text-primary)'
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ display: 'inline', marginRight: '0.5rem', verticalAlign: 'middle' }}>
            <circle cx="11" cy="11" r="8"/>
            <path d="m21 21-4.35-4.35"/>
          </svg>
          Search Keywords
        </label>
        <input
          type="text"
          placeholder="Job title, keywords..."
          value={filters.search}
          onChange={(e) => handleChange('search', e.target.value)}
          className="input"
          style={{ fontSize: '0.875rem' }}
        />
      </div>

      {/* Category Filter */}
      <div style={{ marginBottom: '1.5rem' }}>
        <label style={{ 
          display: 'block', 
          marginBottom: '0.5rem',
          fontWeight: '600',
          fontSize: '0.875rem',
          color: 'var(--text-primary)'
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ display: 'inline', marginRight: '0.5rem', verticalAlign: 'middle' }}>
            <rect x="3" y="3" width="7" height="7"/>
            <rect x="14" y="3" width="7" height="7"/>
            <rect x="14" y="14" width="7" height="7"/>
            <rect x="3" y="14" width="7" height="7"/>
          </svg>
          Category
        </label>
        <select
          value={filters.category}
          onChange={(e) => handleChange('category', e.target.value)}
          className="select"
          style={{ fontSize: '0.875rem' }}
        >
          <option value="">All Categories</option>
          {categories.map((cat, index) => (
            <option key={index} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      {/* Location Filter */}
      <div style={{ marginBottom: '1.5rem' }}>
        <label style={{ 
          display: 'block', 
          marginBottom: '0.5rem',
          fontWeight: '600',
          fontSize: '0.875rem',
          color: 'var(--text-primary)'
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ display: 'inline', marginRight: '0.5rem', verticalAlign: 'middle' }}>
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          Location
        </label>
        <select
          value={filters.location}
          onChange={(e) => handleChange('location', e.target.value)}
          className="select"
          style={{ fontSize: '0.875rem' }}
        >
          <option value="">All Locations</option>
          {locations.map((loc, index) => (
            <option key={index} value={loc}>{loc}</option>
          ))}
        </select>
      </div>

      {/* Job Type Filter */}
      <div style={{ marginBottom: '1.5rem' }}>
        <label style={{ 
          display: 'block', 
          marginBottom: '0.75rem',
          fontWeight: '600',
          fontSize: '0.875rem',
          color: 'var(--text-primary)'
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ display: 'inline', marginRight: '0.5rem', verticalAlign: 'middle' }}>
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
          </svg>
          Job Type
        </label>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {jobTypes.map((type, index) => (
            <label 
              key={index}
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.5rem',
                cursor: 'pointer',
                fontSize: '0.875rem',
                padding: '0.5rem',
                borderRadius: '6px',
                transition: 'background 0.2s ease'
              }}
              className="checkbox-label"
            >
              <input
                type="checkbox"
                checked={filters.jobType.includes(type)}
                onChange={(e) => handleCheckboxChange('jobType', type, e.target.checked)}
                style={{ 
                  width: '18px', 
                  height: '18px',
                  cursor: 'pointer',
                  accentColor: 'var(--primary)'
                }}
              />
              <span style={{ color: 'var(--text-secondary)' }}>{type}</span>
              {filters.jobType.includes(type) && (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="3" style={{ marginLeft: 'auto' }}>
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              )}
            </label>
          ))}
        </div>
      </div>

      {/* Experience Level Filter */}
      <div>
        <label style={{ 
          display: 'block', 
          marginBottom: '0.75rem',
          fontWeight: '600',
          fontSize: '0.875rem',
          color: 'var(--text-primary)'
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ display: 'inline', marginRight: '0.5rem', verticalAlign: 'middle' }}>
            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
          </svg>
          Experience Level
        </label>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {experienceLevels.map((level, index) => (
            <label 
              key={index}
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.5rem',
                cursor: 'pointer',
                fontSize: '0.875rem',
                padding: '0.5rem',
                borderRadius: '6px',
                transition: 'background 0.2s ease'
              }}
              className="checkbox-label"
            >
              <input
                type="checkbox"
                checked={filters.experience.includes(level)}
                onChange={(e) => handleCheckboxChange('experience', level, e.target.checked)}
                style={{ 
                  width: '18px', 
                  height: '18px',
                  cursor: 'pointer',
                  accentColor: 'var(--primary)'
                }}
              />
              <span style={{ color: 'var(--text-secondary)' }}>{level}</span>
              {filters.experience.includes(level) && (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="3" style={{ marginLeft: 'auto' }}>
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              )}
            </label>
          ))}
        </div>
      </div>

      {/* Active Filters Count */}
      {hasActiveFilters && (
        <div style={{
          marginTop: '1.5rem',
          padding: '1rem',
          background: 'var(--bg-muted)',
          borderRadius: '8px',
          fontSize: '0.875rem',
          color: 'var(--text-secondary)',
          textAlign: 'center'
        }}>
          <strong style={{ color: 'var(--primary)' }}>
            {[
              filters.search && 1,
              filters.category && 1,
              filters.location && 1,
              filters.jobType.length,
              filters.experience.length
            ].filter(Boolean).reduce((a, b) => a + b, 0)}
          </strong> active filter(s)
        </div>
      )}

      <style>{`
        .reset-btn:hover {
          opacity: 0.7;
        }

        .checkbox-label:hover {
          background: var(--bg-muted);
        }

        .checkbox-label input[type="checkbox"] {
          flex-shrink: 0;
        }
      `}</style>
    </div>
  )
}

export default JobFilters