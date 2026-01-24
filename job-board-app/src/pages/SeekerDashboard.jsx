import { useState } from 'react'
import { useAuth } from '../main'
import { useNavigate } from 'react-router-dom'
import { mockJobs } from '../data/mockData'

const SeekerDashboard = () => {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const [activeMenu, setActiveMenu] = useState('dashboard')

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  const handleMenuClick = (menuId) => {
    setActiveMenu(menuId)
    if (menuId === 'dashboard') {
      // Stay on dashboard
    } else if (menuId === 'job-search') {
      navigate('/jobs')
    } else if (menuId === 'profile') {
      navigate('/seeker/profile-setup')
    } else if (menuId === 'applications') {
      navigate('/my-applications')
    } else if (menuId === 'saved') {
      navigate('/jobs')
    }
  }
  const allJobs = mockJobs.length >= 10 ? mockJobs : [
    ...mockJobs,
    {
      id: 101,
      title: 'Backend Developer',
      company: 'CloudTech',
      companyLogo: 'https://via.placeholder.com/100',
      location: 'Remote',
      type: 'Full-time',
      experience: 'Mid-Level',
      salary: '₹12L - ₹18L',
      category: 'Technology & IT',
      description: 'Build scalable backend systems',
      applicants: 28,
      postedDate: '3 days ago'
    },
    {
      id: 102,
      title: 'DevOps Engineer',
      company: 'InfraSys',
      companyLogo: 'https://via.placeholder.com/100',
      location: 'Pune',
      type: 'Full-time',
      experience: 'Senior',
      salary: '₹18L - ₹25L',
      category: 'Technology & IT',
      description: 'Manage cloud infrastructure',
      applicants: 35,
      postedDate: '5 days ago'
    }
  ]

  const recommendedJobs = allJobs.slice(0, 6)
  const savedJobs = allJobs.slice(6, 10)
  
  const stats = {
    applied: 12,
    inReview: 5,
    interviewing: 2,
    offers: 1
  }

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg> },
    { id: 'profile', label: 'My Profile', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg> },
    { id: 'applications', label: 'Applications', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg> },
    { id: 'job-search', label: 'Job Search', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg> },
    { id: 'saved', label: 'Saved Jobs', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg> }
  ]

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#F5F6FA' }}>
      {/* Left Sidebar */}
      <aside style={{
        width: '240px',
        background: 'white',
        borderRight: '1px solid #E5E7EB',
        display: 'flex',
        flexDirection: 'column',
        position: 'fixed',
        height: '100vh',
        overflowY: 'auto'
      }}>
        {/* Logo */}
        <div 
          onClick={() => navigate('/')}
          style={{ 
            padding: '1.5rem 1.25rem',
            cursor: 'pointer'
          }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <svg width="40" height="40" viewBox="0 0 24 24">
              <defs>
                <linearGradient id="sidebarLogo" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#0047AB', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#000080', stopOpacity: 1 }} />
                </linearGradient>
              </defs>
              <path d="M12 2L2 7l10 5 10-5-10-5zm0 7.3L4 6.2v11l8 4.8 8-4.8v-11l-8 3.1z" fill="url(#sidebarLogo)"/>
            </svg>
            <div>
              <h2 style={{ fontSize: '1.125rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: 0, lineHeight: 1.2 }}>JobNest</h2>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: 0 }}>Job Seeker</p>
            </div>
          </div>
        </div>

        {/* Menu Items */}
        <nav style={{ flex: 1, padding: '1rem 0.5rem' }}>
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleMenuClick(item.id)}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '0.75rem 1rem',
                marginBottom: '0.25rem',
                border: 'none',
                background: activeMenu === item.id ? '#EFF6FF' : 'transparent',
                color: activeMenu === item.id ? '#0047AB' : '#6B7280',
                fontSize: '0.875rem',
                fontWeight: activeMenu === item.id ? '600' : '500',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                borderRadius: '8px',
                textAlign: 'left'
              }}
              onMouseEnter={(e) => {
                if (activeMenu !== item.id) {
                  e.currentTarget.style.background = '#F9FAFB';
                }
              }}
              onMouseLeave={(e) => {
                if (activeMenu !== item.id) {
                  e.currentTarget.style.background = 'transparent';
                }
              }}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}
          
          {/* Logout Button */}
          <button
            onClick={handleLogout}
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '0.75rem 1rem',
              marginTop: '0.5rem',
              border: 'none',
              background: 'transparent',
              color: '#6B7280',
              fontSize: '0.875rem',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              borderRadius: '8px',
              textAlign: 'left'
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = '#FEE2E2'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
              <polyline points="16 17 21 12 16 7"/>
              <line x1="21" y1="12" x2="9" y2="12"/>
            </svg>
            <span>Log Out</span>
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main style={{ marginLeft: '240px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Top Header */}
        <header style={{
          background: 'white',
          borderBottom: '1px solid #E5E7EB',
          padding: '1rem 2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <h1 style={{ fontSize: '1.75rem', fontWeight: '700', color: '#1F2937', marginBottom: 0 }}>
            Welcome back, {user?.name?.split(' ')[0] || 'Alex'}!
          </h1>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            {/* Notification */}
            <button style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              position: 'relative',
              padding: '0.5rem'
            }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
              </svg>
            </button>

            {/* User Profile */}
            <div 
              onClick={() => handleMenuClick('profile')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                cursor: 'pointer'
              }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: '#0047AB',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden'
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
              </div>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontWeight: '600', fontSize: '0.875rem', color: '#1F2937' }}>
                  {user?.name || 'Alex Chen'}
                </div>
                <div style={{ fontSize: '0.75rem', color: '#6B7280' }}>
                  {user?.email || 'alex.chen@email.com'}
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Content Area  */}
        <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '400px 1fr', gap: '2rem', flex: 1 }}>
            {/* Left Column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {/* Strengthen Your Profile */}
              <div style={{
                background: 'white',
                padding: '1.5rem',
                borderRadius: '12px',
                border: '1px solid #E5E7EB'
              }}>
                <h3 style={{ fontSize: '1.125rem', fontWeight: '700', color: '#1F2937', marginBottom: '1rem' }}>
                  Strengthen Your Profile
                </h3>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  marginBottom: '0.75rem'
                }}>
                  <span style={{ fontSize: '0.875rem', color: '#6B7280' }}>Profile Strength</span>
                  <span style={{ fontSize: '0.875rem', fontWeight: '700', color: '#0047AB' }}>75%</span>
                </div>
                <div style={{ 
                  width: '100%', 
                  height: '8px', 
                  background: '#E5E7EB', 
                  borderRadius: '4px',
                  marginBottom: '1rem'
                }}>
                  <div style={{
                    width: '75%',
                    height: '100%',
                    background: '#0047AB',
                    borderRadius: '4px'
                  }}/>
                </div>
                <p style={{ fontSize: '0.875rem', color: '#6B7280', marginBottom: '1.25rem', lineHeight: '1.5' }}>
                  Add your work experience to attract more recruiters.
                </p>
                <button
                  onClick={() => navigate('/seeker/profile-setup')}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    background: '#0047AB',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                  onMouseEnter={(e) => e.target.style.background = '#003d8f'}
                  onMouseLeave={(e) => e.target.style.background = '#0047AB'}
                >
                  Complete Your Profile
                </button>
              </div>

              {/* Jobs Recommended For You */}
              <div style={{
                background: 'white',
                padding: '1.5rem',
                borderRadius: '12px',
                border: '1px solid #E5E7EB',
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                maxHeight: 'calc(100vh - 400px)',
                overflow: 'hidden'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: '700', color: '#1F2937', marginBottom: 0 }}>
                    Jobs Recommended For You
                  </h3>
                  <button 
                    onClick={() => navigate('/jobs')}
                    style={{ 
                      background: 'none', 
                      border: 'none', 
                      color: '#0047AB', 
                      fontSize: '0.813rem', 
                      fontWeight: '600', 
                      cursor: 'pointer' 
                    }}>
                    View All
                  </button>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', overflowY: 'auto', flex: 1 }}>
                  {recommendedJobs.map((job, index) => (
                    <div 
                      key={job.id} 
                      style={{
                        display: 'flex',
                        gap: '1rem',
                        alignItems: 'center',
                        paddingBottom: index < recommendedJobs.length - 1 ? '1rem' : 0,
                        borderBottom: index < recommendedJobs.length - 1 ? '1px solid #F3F4F6' : 'none',
                        cursor: 'pointer',
                        transition: 'all 0.2s'
                      }}
                      onClick={() => navigate(`/jobs/${job.id}`)}
                      onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(4px)'}
                      onMouseLeave={(e) => e.currentTarget.style.transform = 'translateX(0)'}
                    >
                      <div style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '10px',
                        overflow: 'hidden',
                        flexShrink: 0,
                        background: '#F3F4F6'
                      }}>
                        <img 
                          src={job.companyLogo} 
                          alt={job.company}
                          style={{ 
                            width: '100%', 
                            height: '100%', 
                            objectFit: 'cover' 
                          }}
                          onError={(e) => {
                            e.target.style.display = 'none'
                            e.target.parentElement.innerHTML = `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:#EFF6FF;color:#0047AB;font-weight:700;font-size:1.125rem">${job.company.charAt(0)}</div>`
                          }}
                        />
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <h4 style={{ fontSize: '0.938rem', fontWeight: '600', color: '#1F2937', marginBottom: '0.25rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                          {job.title}
                        </h4>
                        <p style={{ fontSize: '0.813rem', color: '#6B7280', marginBottom: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                          {job.company} · {job.location}
                        </p>
                      </div>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation()
                        }}
                        style={{
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          padding: '0.25rem',
                          flexShrink: 0
                        }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2">
                          <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {/* Application Pipeline */}
              <div style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '12px',
                border: '1px solid #E5E7EB'
              }}>
                <h3 style={{ fontSize: '1.125rem', fontWeight: '700', color: '#1F2937', marginBottom: '2rem' }}>
                  Your Application Pipeline
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem' }}>
                  {[
                    { label: 'Applied', value: stats.applied },
                    { label: 'In Review', value: stats.inReview },
                    { label: 'Interviewing', value: stats.interviewing },
                    { label: 'Offers', value: stats.offers }
                  ].map((stat, index) => (
                    <div key={index} style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '0.813rem', color: '#6B7280', marginBottom: '0.75rem', fontWeight: '500' }}>
                        {stat.label}
                      </div>
                      <div style={{ fontSize: '2.5rem', fontWeight: '700', color: '#1F2937' }}>
                        {stat.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Saved Jobs  */}
              <div style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '12px',
                border: '1px solid #E5E7EB',
                flex: 1,
                maxHeight: 'calc(100vh - 350px)',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: '700', color: '#1F2937', marginBottom: 0 }}>
                    Your Saved Jobs
                  </h3>
                  <button 
                    onClick={() => navigate('/jobs')}
                    style={{ 
                      background: 'none', 
                      border: 'none', 
                      color: '#0047AB', 
                      fontSize: '0.813rem', 
                      fontWeight: '600', 
                      cursor: 'pointer' 
                    }}>
                    View All
                  </button>
                </div>

                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(2, 1fr)', 
                  gap: '1.5rem',
                  overflowY: 'auto',
                  flex: 1
                }}>
                  {savedJobs.map((job) => (
                    <div 
                      key={job.id} 
                      style={{
                        padding: '1.25rem',
                        border: '1px solid #E5E7EB',
                        borderRadius: '12px',
                        cursor: 'pointer',
                        transition: 'all 0.3s',
                        background: 'white',
                        display: 'flex',
                        flexDirection: 'column',
                        height: 'fit-content'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,71,171,0.1)'
                        e.currentTarget.style.borderColor = '#0047AB'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = 'none'
                        e.currentTarget.style.borderColor = '#E5E7EB'
                      }}
                      onClick={() => navigate(`/jobs/${job.id}`)}
                    >
                      <div style={{ display: 'flex', gap: '0.875rem', marginBottom: '0.75rem' }}>
                        <div style={{
                          width: '48px',
                          height: '48px',
                          borderRadius: '10px',
                          overflow: 'hidden',
                          flexShrink: 0,
                          background: '#F3F4F6'
                        }}>
                          <img 
                            src={job.companyLogo} 
                            alt={job.company}
                            style={{ 
                              width: '100%', 
                              height: '100%', 
                              objectFit: 'cover' 
                            }}
                            onError={(e) => {
                              e.target.style.display = 'none'
                              e.target.parentElement.innerHTML = `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:#DBEAFE;color:#0047AB;font-weight:700;font-size:1.125rem">${job.company.charAt(0)}</div>`
                            }}
                          />
                        </div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <h4 style={{ 
                            fontSize: '0.938rem', 
                            fontWeight: '600', 
                            color: '#1F2937', 
                            marginBottom: '0.375rem',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis'
                          }}>
                            {job.title}
                          </h4>
                          <p style={{ fontSize: '0.813rem', color: '#6B7280', marginBottom: 0 }}>
                            {job.company}
                          </p>
                        </div>
                      </div>
                      
                      <div style={{ 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        alignItems: 'center',
                        marginTop: '0.5rem'
                      }}>
                        <p style={{ fontSize: '0.75rem', color: '#9CA3AF', marginBottom: 0 }}>
                          {job.location.split(',')[0]}
                        </p>
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            navigate(`/jobs/${job.id}`)
                          }}
                          style={{
                            padding: '0.375rem 0.875rem',
                            background: '#0047AB',
                            color: 'white',
                            border: 'none',
                            borderRadius: '6px',
                            fontSize: '0.75rem',
                            fontWeight: '600',
                            cursor: 'pointer',
                            transition: 'all 0.2s',
                            flexShrink: 0
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.background = '#003d8f'
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.background = '#0047AB'
                          }}
                        >
                          Apply Now
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default SeekerDashboard