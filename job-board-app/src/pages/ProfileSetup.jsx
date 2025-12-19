import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ProfileSetup = () => {
  const navigate = useNavigate()
  const [currentStep, setCurrentStep] = useState(1)
  const [profileData, setProfileData] = useState({
    photo: null,
    phone: '',
    location: '',
    jobTitle: '',
    experienceLevel: '',
    salaryMin: '',
    salaryMax: '',
    skills: [],
    resume: null,
    portfolio: '',
    roleTypes: [],
    workLocations: [],
    industries: [],
    jobAlerts: 'daily'
  })
  const [newSkill, setNewSkill] = useState('')

  const steps = [
    { number: 1, title: 'Basic Info' },
    { number: 2, title: 'Professional Information' },
    { number: 3, title: 'Skills & Resume' },
    { number: 4, title: 'Job Preferences' }
  ]

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1)
    } else {
      navigate('/seeker/dashboard')
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    } else {
      navigate('/seeker/dashboard')
    }
  }

  const addSkill = () => {
    if (newSkill.trim() && profileData.skills.length < 15) {
      setProfileData({ ...profileData, skills: [...profileData.skills, newSkill.trim()] })
      setNewSkill('')
    }
  }

  const removeSkill = (index) => {
    setProfileData({ 
      ...profileData, 
      skills: profileData.skills.filter((_, i) => i !== index) 
    })
  }

  const toggleArrayValue = (field, value) => {
    const current = profileData[field]
    if (current.includes(value)) {
      setProfileData({ ...profileData, [field]: current.filter(v => v !== value) })
    } else {
      setProfileData({ ...profileData, [field]: [...current, value] })
    }
  }

  return (
    <div style={{ minHeight: '100vh', background: '#F9FAFB' }}>
      {/* Header with JobNest Logo */}
      <header style={{
        background: 'white',
        borderBottom: '1px solid #E5E7EB',
        padding: '1rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <svg width="40" height="40" viewBox="0 0 24 24">
            <defs>
              <linearGradient id="profileLogo" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#0047AB' }} />
                <stop offset="100%" style={{ stopColor: '#000080' }} />
              </linearGradient>
            </defs>
            <path 
              d="M12 2L2 7l10 5 10-5-10-5zm0 7.3L4 6.2v11l8 4.8 8-4.8v-11l-8 3.1z" 
              fill="url(#profileLogo)"
            />
          </svg>
          <div>
            <h2 style={{ fontSize: '1.125rem', fontWeight: '700', color: '#1F2937', marginBottom: 0, lineHeight: 1.2 }}>JobNest</h2>
            <p style={{ fontSize: '0.75rem', color: '#6B7280', marginBottom: 0 }}>Job Seeker</p>
          </div>
        </div>
        
        <button
          onClick={() => navigate('/seeker/dashboard')}
          style={{
            padding: '0.625rem 1.25rem',
            background: '#0047AB',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '0.875rem',
            fontWeight: '600',
            cursor: 'pointer'
          }}
        >
          Back to Dashboard
        </button>
      </header>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '3rem 2rem' }}>
        {/* Title */}
        <div style={{ marginBottom: '3rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '0.5rem' }}>
            {currentStep === 1 && 'Set Up Your Profile'}
            {currentStep > 1 && 'Profile Setup'}
          </h1>
          <p style={{ fontSize: '1rem', color: '#6B7280' }}>
            {currentStep === 1 && 'This information helps employers get to know you.'}
            {currentStep === 2 && 'Step 2: Professional Information'}
            {currentStep === 3 && 'Step 3: Skills & Resume'}
            {currentStep === 4 && 'Step 4: Job Preferences'}
          </p>
        </div>

        {/* Progress Bar */}
        <div style={{ marginBottom: '3rem' }}>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            marginBottom: '0.5rem',
            fontSize: '0.875rem',
            color: '#6B7280'
          }}>
            <span>Step {currentStep} of 4: {steps[currentStep - 1].title}</span>
            {currentStep === 2 && <span>Profile Completion</span>}
            {currentStep === 4 && <span>Step 4 of 4 Complete</span>}
          </div>
          <div style={{ 
            width: '100%', 
            height: '8px', 
            background: '#E5E7EB', 
            borderRadius: '4px',
            overflow: 'hidden'
          }}>
            <div style={{
              width: `${(currentStep / 4) * 100}%`,
              height: '100%',
              background: '#0047AB',
              transition: 'width 0.3s ease'
            }}/>
          </div>
        </div>

        {/* Step Content */}
        <div style={{
          background: 'white',
          padding: '3rem',
          borderRadius: '12px',
          border: '1px solid #E5E7EB'
        }}>
          {/* Step 1: Basic Info */}
          {currentStep === 1 && (
            <div>
              {/* Profile Photo - Changed color to #0047AB */}
              <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <div style={{
                  width: '120px',
                  height: '120px',
                  borderRadius: '50%',
                  background: '#0047AB',
                  margin: '0 auto 1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden'
                }}>
                  {profileData.photo ? (
                    <img src={profileData.photo} alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  ) : (
                    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="1.5">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                      <circle cx="12" cy="7" r="4"/>
                    </svg>
                  )}
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.5rem' }}>Profile Photo</h3>
                <p style={{ color: '#6B7280', fontSize: '0.875rem', marginBottom: '1rem' }}>
                  Upload a professional photo.
                </p>
                <button
                  onClick={() => document.getElementById('photoInput').click()}
                  style={{
                    padding: '0.625rem 1.5rem',
                    background: '#F3F4F6',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    cursor: 'pointer'
                  }}
                >
                  Upload Photo
                </button>
                <input
                  id="photoInput"
                  type="file"
                  accept="image/*"
                  style={{ display: 'none' }}
                  onChange={(e) => {
                    const file = e.target.files[0]
                    if (file) {
                      const reader = new FileReader()
                      reader.onloadend = () => {
                        setProfileData({ ...profileData, photo: reader.result })
                      }
                      reader.readAsDataURL(file)
                    }
                  }}
                />
              </div>

              {/* Phone and Location */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <div>
                  <label style={{ display: 'block', fontWeight: '600', marginBottom: '0.5rem', fontSize: '0.875rem' }}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 00000-00000"
                    value={profileData.phone}
                    onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid #E5E7EB',
                      borderRadius: '8px',
                      fontSize: '0.875rem'
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontWeight: '600', marginBottom: '0.5rem', fontSize: '0.875rem' }}>
                    Location
                  </label>
                  <input
                    type="text"
                    placeholder="City, State, Country"
                    value={profileData.location}
                    onChange={(e) => setProfileData({ ...profileData, location: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid #E5E7EB',
                      borderRadius: '8px',
                      fontSize: '0.875rem'
                    }}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Professional Information */}
          {currentStep === 2 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div>
                <label style={{ display: 'block', fontWeight: '600', marginBottom: '0.5rem' }}>
                  Current Job Title
                </label>
                <input
                  type="text"
                  placeholder="e.g. Senior Product Manager"
                  value={profileData.jobTitle}
                  onChange={(e) => setProfileData({ ...profileData, jobTitle: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.875rem',
                    border: '1px solid #E5E7EB',
                    borderRadius: '8px',
                    fontSize: '0.875rem'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontWeight: '600', marginBottom: '0.5rem' }}>
                  Experience Level
                </label>
                <select
                  value={profileData.experienceLevel}
                  onChange={(e) => setProfileData({ ...profileData, experienceLevel: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.875rem',
                    border: '1px solid #E5E7EB',
                    borderRadius: '8px',
                    fontSize: '0.875rem',
                    cursor: 'pointer'
                  }}
                >
                  <option value="">Select your experience level</option>
                  <option value="Entry Level">Entry Level (0-2 years)</option>
                  <option value="Mid Level">Mid Level (3-5 years)</option>
                  <option value="Senior Level">Senior Level (6-10 years)</option>
                  <option value="Lead">Lead (10+ years)</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontWeight: '600', marginBottom: '0.5rem' }}>
                  Expected Salary Range
                </label>
                <p style={{ fontSize: '0.875rem', color: '#6B7280', marginBottom: '0.75rem' }}>
                  Enter your desired annual salary.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <input
                    type="text"
                    placeholder="$ Minimum"
                    value={profileData.salaryMin}
                    onChange={(e) => setProfileData({ ...profileData, salaryMin: e.target.value })}
                    style={{
                      padding: '0.875rem',
                      border: '1px solid #E5E7EB',
                      borderRadius: '8px',
                      fontSize: '0.875rem'
                    }}
                  />
                  <input
                    type="text"
                    placeholder="$ Maximum"
                    value={profileData.salaryMax}
                    onChange={(e) => setProfileData({ ...profileData, salaryMax: e.target.value })}
                    style={{
                      padding: '0.875rem',
                      border: '1px solid #E5E7EB',
                      borderRadius: '8px',
                      fontSize: '0.875rem'
                    }}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Skills & Resume */}
          {currentStep === 3 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              {/* Breadcrumb */}
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.5rem', 
                fontSize: '0.875rem',
                color: '#6B7280'
              }}>
                <span>Personal Info</span>
                <span>›</span>
                <span>Experience</span>
                <span>›</span>
                <span style={{ color: '#0047AB', fontWeight: '600' }}>Skills & Resume</span>
                <span>›</span>
                <span>Review</span>
              </div>

              <div>
                <h2 style={{ fontSize: '1.75rem', fontWeight: '700', marginBottom: '0.5rem' }}>
                  Skills & Resume
                </h2>
                <p style={{ color: '#6B7280' }}>
                  Highlight your expertise and provide key documents to help employers find you.
                </p>
              </div>

              {/* Skills - Made input box visible */}
              <div>
                <h3 style={{ fontSize: '1.125rem', fontWeight: '700', marginBottom: '0.5rem' }}>Skills</h3>
                <p style={{ fontSize: '0.875rem', color: '#6B7280', marginBottom: '1rem' }}>
                  Add up to 15 key skills. Press Enter to add a new one.
                </p>
                <div style={{ 
                  display: 'flex', 
                  flexWrap: 'wrap', 
                  gap: '0.5rem',
                  padding: '0.75rem',
                  border: '2px solid #E5E7EB',
                  borderRadius: '8px',
                  minHeight: '48px',
                  background: 'white'
                }}>
                  {profileData.skills.map((skill, index) => (
                    <span
                      key={index}
                      style={{
                        padding: '0.375rem 0.75rem',
                        background: '#DBEAFE',
                        color: '#0047AB',
                        borderRadius: '6px',
                        fontSize: '0.875rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                      }}
                    >
                      {skill}
                      <button
                        onClick={() => removeSkill(index)}
                        style={{
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          color: '#0047AB',
                          padding: 0,
                          display: 'flex',
                          alignItems: 'center'
                        }}
                      >
                        ×
                      </button>
                    </span>
                  ))}
                  <input
                    type="text"
                    placeholder="Type a skill and press Enter..."
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault()
                        addSkill()
                      }
                    }}
                    style={{
                      border: 'none',
                      outline: 'none',
                      padding: '0.375rem 0.5rem',
                      fontSize: '0.875rem',
                      flex: 1,
                      minWidth: '200px',
                      background: 'transparent'
                    }}
                  />
                </div>
              </div>

              {/* Resume Upload */}
              <div>
                <h3 style={{ fontSize: '1.125rem', fontWeight: '700', marginBottom: '0.5rem' }}>Resume / CV</h3>
                <p style={{ fontSize: '0.875rem', color: '#6B7280', marginBottom: '1rem' }}>
                  Upload your resume in PDF format. Max file size: 5MB.
                </p>
                <div style={{
                  border: '2px dashed #E5E7EB',
                  borderRadius: '12px',
                  padding: '3rem 2rem',
                  textAlign: 'center',
                  cursor: 'pointer'
                }}
                onClick={() => document.getElementById('resumeInput').click()}
                >
                  <div style={{
                    width: '60px',
                    height: '60px',
                    background: '#DBEAFE',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1rem'
                  }}>
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                      <polyline points="14 2 14 8 20 8"/>
                    </svg>
                  </div>
                  <p style={{ fontWeight: '600', marginBottom: '0.25rem' }}>
                    Click to upload or drag and drop
                  </p>
                  <p style={{ fontSize: '0.875rem', color: '#6B7280' }}>
                    PDF (max. 5MB)
                  </p>
                  <button
                    style={{
                      marginTop: '1rem',
                      padding: '0.625rem 1.5rem',
                      background: '#F3F4F6',
                      border: 'none',
                      borderRadius: '8px',
                      fontSize: '0.875rem',
                      fontWeight: '600',
                      cursor: 'pointer'
                    }}
                  >
                    Browse file
                  </button>
                </div>
                <input
                  id="resumeInput"
                  type="file"
                  accept=".pdf"
                  style={{ display: 'none' }}
                  onChange={(e) => {
                    if (e.target.files[0]) {
                      setProfileData({ ...profileData, resume: e.target.files[0] })
                    }
                  }}
                />
                {profileData.resume && (
                  <div style={{
                    marginTop: '1rem',
                    padding: '1rem',
                    background: '#F9FAFB',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <div style={{
                        width: '32px',
                        height: '32px',
                        background: '#10B981',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                      </div>
                      <span style={{ fontSize: '0.875rem', fontWeight: '600' }}>
                        {profileData.resume.name}
                      </span>
                    </div>
                    <button
                      onClick={() => setProfileData({ ...profileData, resume: null })}
                      style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        color: '#EF4444'
                      }}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                      </svg>
                    </button>
                  </div>
                )}
              </div>

              {/* Portfolio */}
              <div>
                <h3 style={{ fontSize: '1.125rem', fontWeight: '700', marginBottom: '0.5rem' }}>
                  Portfolio or LinkedIn URL
                </h3>
                <p style={{ fontSize: '0.875rem', color: '#6B7280', marginBottom: '1rem' }}>
                  Optional. Link to your work samples or professional profile.
                </p>
                <div style={{ position: 'relative' }}>
                  <svg 
                    width="20" 
                    height="20" 
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
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
                  </svg>
                  <input
                    type="url"
                    placeholder="https://..."
                    value={profileData.portfolio}
                    onChange={(e) => setProfileData({ ...profileData, portfolio: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.875rem 1rem 0.875rem 3rem',
                      border: '1px solid #E5E7EB',
                      borderRadius: '8px',
                      fontSize: '0.875rem'
                    }}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Job Preferences */}
          {currentStep === 4 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              <p style={{ color: '#6B7280' }}>
                Set your preferences to receive relevant job matches.
              </p>

              {/* Role Types */}
              <div>
                <h3 style={{ fontSize: '1.125rem', fontWeight: '700', marginBottom: '1rem' }}>
                  What type of roles are you looking for?
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                  {['Full-time', 'Part-time', 'Remote', 'Contract'].map((type) => (
                    <button
                      key={type}
                      onClick={() => toggleArrayValue('roleTypes', type)}
                      style={{
                        padding: '0.875rem',
                        border: `2px solid ${profileData.roleTypes.includes(type) ? '#0047AB' : '#E5E7EB'}`,
                        borderRadius: '8px',
                        background: profileData.roleTypes.includes(type) ? '#EFF6FF' : 'white',
                        color: profileData.roleTypes.includes(type) ? '#0047AB' : '#374151',
                        fontSize: '0.875rem',
                        fontWeight: '600',
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                        textAlign: 'left'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <div style={{
                          width: '18px',
                          height: '18px',
                          borderRadius: '4px',
                          border: `2px solid ${profileData.roleTypes.includes(type) ? '#0047AB' : '#D1D5DB'}`,
                          background: profileData.roleTypes.includes(type) ? '#0047AB' : 'white',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}>
                          {profileData.roleTypes.includes(type) && (
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                              <polyline points="20 6 9 17 4 12"/>
                            </svg>
                          )}
                        </div>
                        {type}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Work Locations */}
              <div>
                <h3 style={{ fontSize: '1.125rem', fontWeight: '700', marginBottom: '1rem' }}>
                  Where do you want to work?
                </h3>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                  padding: '0.875rem',
                  border: '1px solid #E5E7EB',
                  borderRadius: '8px',
                  minHeight: '48px'
                }}>
                  {profileData.workLocations.map((loc, index) => (
                    <span
                      key={index}
                      style={{
                        padding: '0.375rem 0.75rem',
                        background: '#DBEAFE',
                        color: '#0047AB',
                        borderRadius: '6px',
                        fontSize: '0.875rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                      }}
                    >
                      {loc}
                      <button
                        onClick={() => setProfileData({
                          ...profileData,
                          workLocations: profileData.workLocations.filter((_, i) => i !== index)
                        })}
                        style={{
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          color: '#1E40AF',
                          padding: 0
                        }}
                      >
                        ×
                      </button>
                    </span>
                  ))}
                  <input
                    type="text"
                    placeholder="Enter a city, state, or zip code"
                    onKeyPress={(e) => {
                      if (e.key === 'Enter' && e.target.value.trim()) {
                        setProfileData({
                          ...profileData,
                          workLocations: [...profileData.workLocations, e.target.value.trim()]
                        })
                        e.target.value = ''
                      }
                    }}
                    style={{
                      border: 'none',
                      outline: 'none',
                      padding: '0.375rem',
                      fontSize: '0.875rem',
                      flex: 1,
                      minWidth: '200px'
                    }}
                  />
                </div>
              </div>

              {/* Industries */}
              <div>
                <h3 style={{ fontSize: '1.125rem', fontWeight: '700', marginBottom: '1rem' }}>
                  Which industries interest you?
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                  {['Technology', 'Marketing', 'Finance', 'Healthcare'].map((industry) => (
                    <button
                      key={industry}
                      onClick={() => toggleArrayValue('industries', industry)}
                      style={{
                        padding: '0.875rem',
                        border: `2px solid ${profileData.industries.includes(industry) ? '#2563EB' : '#E5E7EB'}`,
                        borderRadius: '8px',
                        background: profileData.industries.includes(industry) ? '#EFF6FF' : 'white',
                        color: profileData.industries.includes(industry) ? '#2563EB' : '#374151',
                        fontSize: '0.875rem',
                        fontWeight: '600',
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                        textAlign: 'left'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <div style={{
                          width: '18px',
                          height: '18px',
                          borderRadius: '4px',
                          border: `2px solid ${profileData.industries.includes(industry) ? '#0047AB' : '#D1D5DB'}`,
                          background: profileData.industries.includes(industry) ? '#0047AB' : 'white',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}>
                          {profileData.industries.includes(industry) && (
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                              <polyline points="20 6 9 17 4 12"/>
                            </svg>
                          )}
                        </div>
                        {industry}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Job Alerts */}
              <div>
                <h3 style={{ fontSize: '1.125rem', fontWeight: '700', marginBottom: '1rem' }}>
                  How often do you want to receive job alerts?
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {[
                    { value: 'daily', label: 'Daily' },
                    { value: 'weekly', label: 'Weekly' },
                    { value: 'never', label: 'Never' }
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => setProfileData({ ...profileData, jobAlerts: option.value })}
                      style={{
                        padding: '0.875rem 1.25rem',
                        border: `2px solid ${profileData.jobAlerts === option.value ? '#2563EB' : '#E5E7EB'}`,
                        borderRadius: '8px',
                        background: profileData.jobAlerts === option.value ? '#EFF6FF' : 'white',
                        color: profileData.jobAlerts === option.value ? '#2563EB' : '#374151',
                        fontSize: '0.875rem',
                        fontWeight: '600',
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                        textAlign: 'left'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <div style={{
                          width: '20px',
                          height: '20px',
                          borderRadius: '50%',
                          border: `2px solid ${profileData.jobAlerts === option.value ? '#0047AB' : '#D1D5DB'}`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}>
                          {profileData.jobAlerts === option.value && (
                            <div style={{
                              width: '10px',
                              height: '10px',
                              borderRadius: '50%',
                              background: '#0047AB'
                            }}/>
                          )}
                        </div>
                        {option.label}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between',
            marginTop: '3rem',
            paddingTop: '2rem',
            borderTop: '1px solid #E5E7EB'
          }}>
            <button
              onClick={handleBack}
              style={{
                padding: '0.75rem 1.5rem',
                background: 'white',
                color: '#374151',
                border: '1px solid #E5E7EB',
                borderRadius: '8px',
                fontSize: '0.875rem',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              Back
            </button>
            
            <div style={{ display: 'flex', gap: '1rem' }}>
              {currentStep < 4 && (
                <button
                  onClick={() => navigate('/seeker/dashboard')}
                  style={{
                    padding: '0.75rem 1.5rem',
                    background: 'white',
                    color: '#0047AB',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    cursor: 'pointer'
                  }}
                >
                  Save and complete later
                </button>
              )}
              <button
                onClick={handleNext}
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
                {currentStep === 4 ? 'Complete Profile' : currentStep === 2 ? 'Next: Add Skills' : 'Next'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileSetup