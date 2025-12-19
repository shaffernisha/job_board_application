import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../main'

const EmployerDashboard = () => {
  const navigate = useNavigate()
  const { logout } = useAuth()
  const [activeTab, setActiveTab] = useState('dashboard')
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [jobs, setJobs] = useState([
    { id: 1, title: 'Senior React Developer', location: 'Coimbatore', applicants: 24, postedDate: '2 days ago', salary: '₹7-12LPA' },
    { id: 2, title: 'Product Designer', location: 'Vellore', applicants: 18, postedDate: '5 days ago', salary: '₹ 6LPA-9LPA' },
    { id: 3, title: 'Full Stack Developer', location: 'Bangalore', applicants: 42, postedDate: '1 week ago', salary: '₹8LPA-14LPA' }
  ])
  
  const [formData, setFormData] = useState({
    title: '',
    location: '',
    salary: ''
  })
  
  const [profileData, setProfileData] = useState({
    companyName: '',
    companyDescription: ''
  })
  
  const [savedProfile, setSavedProfile] = useState(null)
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const [editingId, setEditingId] = useState(null)
  const [showEditModal, setShowEditModal] = useState(false)

  const stats = {
    totalJobs: jobs.length,
    activeJobs: jobs.length,
    totalApplications: jobs.reduce((sum, job) => sum + job.applicants, 0),
    newApplications: 23
  }

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  const handleOpenModal = (job = null) => {
    if (job) {
      setEditingId(job.id)
      setFormData({ title: job.title, location: job.location, salary: job.salary })
      setShowEditModal(true)
    } else {
      setEditingId(null)
      setFormData({ title: '', location: '', salary: '' })
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }
  
  const handleProfileInputChange = (e) => {
    const { name, value } = e.target
    setProfileData(prev => ({ ...prev, [name]: value }))
  }
  
  const handleSaveProfile = () => {
    if (!profileData.companyName.trim() || !profileData.companyDescription.trim()) {
      alert('Please fill in all fields')
      return
    }
    
    setSavedProfile({ ...profileData })
    setShowSuccessMessage(true)
    
    setTimeout(() => {
      setShowSuccessMessage(false)
    }, 3000)
  }

  const handleSaveJob = () => {
    if (!formData.title || !formData.location || !formData.salary) {
      alert('Please fill all fields')
      return
    }

    if (editingId) {
      setJobs(jobs.map(job => job.id === editingId ? { ...job, ...formData } : job))
      setShowEditModal(false)
    } else {
      setJobs([...jobs, { id: Date.now(), ...formData, applicants: 0, postedDate: 'Just now' }])
    }
    setEditingId(null)
    setFormData({ title: '', location: '', salary: '' })
    setActiveTab('my-jobs')
  }

  const handleDeleteJob = (id) => {
    if (window.confirm('Are you sure you want to delete this job posting?')) {
      setJobs(jobs.filter(job => job.id !== id))
    }
  }

  const handleNavClick = (tabId) => {
    setActiveTab(tabId)
    setSidebarOpen(false)
  }

  const DashboardIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="7" height="7"></rect>
      <rect x="14" y="3" width="7" height="7"></rect>
      <rect x="14" y="14" width="7" height="7"></rect>
      <rect x="3" y="14" width="7" height="7"></rect>
    </svg>
  )

  const PlusIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="12" y1="5" x2="12" y2="19"></line>
      <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
  )

  const FileIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
    </svg>
  )

  const UserIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
      <circle cx="12" cy="7" r="4"></circle>
    </svg>
  )

  const LogoutIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
      <polyline points="16 17 21 12 16 7"></polyline>
      <line x1="21" y1="12" x2="9" y2="12"></line>
    </svg>
  )

  const ChartIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="18" y1="20" x2="18" y2="10"></line>
      <line x1="12" y1="20" x2="12" y2="4"></line>
    </svg>
  )

  const CheckIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  )

  const UsersIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
  )

  const BellIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
      <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
    </svg>
  )

  const EditIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
    </svg>
  )

  const TrashIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="3 6 5 6 21 6"></polyline>
      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
      <line x1="10" y1="11" x2="10" y2="17"></line>
      <line x1="14" y1="11" x2="14" y2="17"></line>
    </svg>
  )

  const LocationIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
      <circle cx="12" cy="10" r="3"></circle>
    </svg>
  )

  const ApplicantsIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
  )

  const SalaryIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="12" y1="1" x2="12" y2="23"></line>
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
      <line x1="12" y1="1" x2="12" y2="23"></line>
    </svg>
  )

  const CalendarIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="16" y1="2" x2="16" y2="6"></line>
      <line x1="8" y1="2" x2="8" y2="6"></line>
      <line x1="3" y1="10" x2="21" y2="10"></line>
    </svg>
  )

  const ReportIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
      <polyline points="7 10 12 15 17 10"></polyline>
      <line x1="12" y1="15" x2="12" y2="3"></line>
    </svg>
  )

  const SettingsIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="3"></circle>
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
    </svg>
  )

  const MenuIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="3" y1="12" x2="21" y2="12"></line>
      <line x1="3" y1="6" x2="21" y2="6"></line>
      <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
  )

  const CloseIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  )

  const renderContent = () => {
    if (activeTab === 'dashboard') {
      return (
        <div>
          <div style={{ marginBottom: '2rem' }}>
            <h1 style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', fontWeight: '700', color: '#1a1a1a', margin: '0 0 0.5rem 0' }}>
              Welcome back, Shaffer!
            </h1>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
            {[
              { icon: ChartIcon, label: 'Total Jobs', value: stats.totalJobs },
              { icon: CheckIcon, label: 'Active Jobs', value: stats.activeJobs },
              { icon: UsersIcon, label: 'Applications', value: stats.totalApplications },
              { icon: BellIcon, label: 'New', value: stats.newApplications }
            ].map((stat, i) => {
              const Icon = stat.icon
              return (
                <div key={i} style={{ background: 'white', borderRadius: '12px', padding: 'clamp(1rem, 3vw, 1.5rem)', boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08)', border: '1px solid #f0f0f0' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ width: '48px', height: '48px', borderRadius: '10px', background: '#e8f1ff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0047AB', flexShrink: 0 }}>
                      <Icon />
                    </div>
                    <div>
                      <p style={{ fontSize: 'clamp(1.25rem, 3vw, 1.75rem)', fontWeight: '700', color: '#1a1a1a', margin: '0' }}>{stat.value}</p>
                      <p style={{ fontSize: 'clamp(0.75rem, 2vw, 0.875rem)', color: '#666', margin: '0' }}>{stat.label}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            <div style={{ background: 'white', borderRadius: '12px', padding: 'clamp(1rem, 3vw, 1.5rem)', boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08)', border: '1px solid #f0f0f0' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '600', color: '#1a1a1a', margin: '0 0 1rem 0' }}>Recent Job Postings</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {jobs.slice(0, 3).map(job => (
                  <div key={job.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', padding: '1rem', background: '#f8fafc', borderRadius: '8px', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <div style={{ minWidth: '0', flex: 1 }}>
                      <p style={{ fontWeight: '600', color: '#1a1a1a', margin: '0 0 0.25rem 0', fontSize: 'clamp(0.85rem, 2vw, 0.95rem)' }}>{job.title}</p>
                      <p style={{ fontSize: 'clamp(0.7rem, 1.8vw, 0.8rem)', color: '#666', margin: '0 0 0.25rem 0', wordBreak: 'break-word' }}>
                        {job.location} • {job.applicants} applicants • {job.salary}
                      </p>
                      <p style={{ fontSize: '0.75rem', color: '#999', margin: '0' }}>Posted {job.postedDate}</p>
                    </div>
                    <span style={{ background: '#e8f5e9', color: '#2e7d32', padding: '0.25rem 0.75rem', borderRadius: '20px', fontSize: '0.75rem', fontWeight: '500', whiteSpace: 'nowrap' }}>Active</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: 'white', borderRadius: '12px', padding: 'clamp(1rem, 3vw, 1.5rem)', boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08)', border: '1px solid #f0f0f0' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '600', color: '#1a1a1a', margin: '0 0 1rem 0' }}>Quick Actions</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <button onClick={() => setActiveTab('post-job')} style={{
                  padding: '0.875rem 1.5rem',
                  background: '#0047AB',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: '600',
                  fontSize: '0.95rem',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem'
                }} onMouseEnter={(e) => e.target.style.background = '#000080'} onMouseLeave={(e) => e.target.style.background = '#0047AB'}>
                  <PlusIcon /> Post New Job
                </button>
                <button onClick={() => setActiveTab('my-jobs')} style={{
                  padding: '0.875rem 1.5rem',
                  background: '#82C8E5',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: '600',
                  fontSize: '0.95rem',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem'
                }} onMouseEnter={(e) => e.target.style.background = '#6DB8D6'} onMouseLeave={(e) => e.target.style.background = '#82C8E5'}>
                  <FileIcon /> View All Jobs
                </button>
                <button style={{ padding: '0.875rem 1.5rem', background: 'white', color: '#1a1a1a', border: '1px solid #e0e0e0', borderRadius: '8px', cursor: 'pointer', fontWeight: '600', fontSize: '0.95rem', transition: 'all 0.3s ease', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }} onMouseEnter={(e) => e.target.style.background = '#f5f5f5'} onMouseLeave={(e) => e.target.style.background = 'white'}>
                  <ReportIcon /> Download Reports
                </button>
                <button style={{ padding: '0.875rem 1.5rem', background: 'white', color: '#1a1a1a', border: '1px solid #e0e0e0', borderRadius: '8px', cursor: 'pointer', fontWeight: '600', fontSize: '0.95rem', transition: 'all 0.3s ease', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }} onMouseEnter={(e) => e.target.style.background = '#f5f5f5'} onMouseLeave={(e) => e.target.style.background = 'white'}>
                  <SettingsIcon /> Settings
                </button>
              </div>
            </div>
          </div>
        </div>
      )
    }

    if (activeTab === 'post-job') {
      return (
        <div style={{ maxWidth: '600px' }}>
          <h1 style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', fontWeight: '700', color: '#1a1a1a', margin: '0 0 2rem 0' }}>Post a New Job</h1>
          <div style={{ background: 'white', borderRadius: '12px', padding: 'clamp(1.5rem, 4vw, 2rem)', boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08)', border: '1px solid #f0f0f0' }}>
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#1a1a1a', fontSize: '0.95rem' }}>Job Title *</label>
              <input type="text" name="title" value={formData.title} onChange={handleInputChange} placeholder="e.g., Senior React Developer" style={{ width: '100%', padding: '0.75rem', border: '1px solid #e0e0e0', borderRadius: '6px', fontSize: '0.95rem', boxSizing: 'border-box' }} />
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#1a1a1a', fontSize: '0.95rem' }}>Location *</label>
              <input type="text" name="location" value={formData.location} onChange={handleInputChange} placeholder="e.g., Coimbatore, Tamil Nadu" style={{ width: '100%', padding: '0.75rem', border: '1px solid #e0e0e0', borderRadius: '6px', fontSize: '0.95rem', boxSizing: 'border-box' }} />
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#1a1a1a', fontSize: '0.95rem' }}>Salary Range *</label>
              <input type="text" name="salary" value={formData.salary} onChange={handleInputChange} placeholder="e.g., ₹7LPA - ₹12LPA" style={{ width: '100%', padding: '0.75rem', border: '1px solid #e0e0e0', borderRadius: '6px', fontSize: '0.95rem', boxSizing: 'border-box' }} />
            </div>

            <button onClick={handleSaveJob} style={{ width: '100%', padding: '0.875rem', background: '#0047AB', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: '600', fontSize: '0.95rem', transition: 'all 0.3s ease' }} onMouseEnter={(e) => e.target.style.background = '#000080'} onMouseLeave={(e) => e.target.style.background = '#0047AB'}>Post Job</button>
          </div>
        </div>
      )
    }

    if (activeTab === 'my-jobs') {
      return (
        <div>
          <h1 style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', fontWeight: '700', color: '#1a1a1a', margin: '0 0 2rem 0' }}>My Job Postings</h1>
          {jobs.length === 0 ? (
            <div style={{ background: 'white', borderRadius: '12px', padding: '3rem', textAlign: 'center', boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08)', border: '1px solid #f0f0f0' }}>
              <p style={{ color: '#666', fontSize: '1rem' }}>No job postings yet. Create your first one!</p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {jobs.map(job => (
                <div key={job.id} style={{ background: 'white', borderRadius: '12px', padding: 'clamp(1rem, 3vw, 1.5rem)', boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08)', border: '1px solid #f0f0f0', transition: 'all 0.3s ease' }} onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 71, 171, 0.1)'; e.currentTarget.style.borderColor = '#e0e7ff' }} onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.08)'; e.currentTarget.style.borderColor = '#f0f0f0' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                    <div style={{ flex: 1, minWidth: '200px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                        <h3 style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', fontWeight: '600', color: '#1a1a1a', margin: '0' }}>{job.title}</h3>
                        <span style={{ background: '#e8f5e9', color: '#2e7d32', padding: '0.25rem 0.75rem', borderRadius: '20px', fontSize: '0.75rem', fontWeight: '500' }}>Active</span>
                      </div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem 1.5rem', fontSize: '0.875rem', color: '#666' }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}><LocationIcon /> {job.location}</span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}><ApplicantsIcon /> {job.applicants} applicants</span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}><SalaryIcon /> {job.salary}</span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}><CalendarIcon /> Posted {job.postedDate}</span>
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                      <button onClick={() => handleOpenModal(job)} style={{ padding: '0.65rem 1.2rem', background: '#0047AB', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: '600', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.4rem', transition: 'all 0.3s ease' }} onMouseEnter={(e) => e.target.style.background = '#000080'} onMouseLeave={(e) => e.target.style.background = '#0047AB'}><EditIcon /> Edit</button>
                      <button onClick={() => handleDeleteJob(job.id)} style={{ padding: '0.65rem 1.2rem', background: '#ffebee', color: '#c62828', border: '1px solid #ffcdd2', borderRadius: '6px', cursor: 'pointer', fontWeight: '600', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.4rem', transition: 'all 0.3s ease' }} onMouseEnter={(e) => { e.target.style.background = '#c62828'; e.target.style.color = 'white' }} onMouseLeave={(e) => { e.target.style.background = '#ffebee'; e.target.style.color = '#c62828' }}><TrashIcon /> Delete</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )
    }

    if (activeTab === 'profile') {
      return (
        <div style={{ maxWidth: '600px' }}>
          <h1 style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', fontWeight: '700', color: '#1a1a1a', margin: '0 0 2rem 0' }}>My Profile</h1>
          
          {showSuccessMessage && (
            <div style={{ background: '#e8f1ff', border: '1px solid #0047AB', borderRadius: '8px', padding: '1rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#0047AB' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              Your information about company has been added successfully!
            </div>
          )}
          
          {savedProfile && (
            <div style={{ background: 'white', borderRadius: '12px', padding: 'clamp(1rem, 3vw, 1.5rem)', boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08)', border: '1px solid #f0f0f0', marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '600', color: '#1a1a1a', margin: '0 0 1rem 0' }}>Company Information</h3>
              <div style={{ marginBottom: '1rem' }}>
                <p style={{ fontSize: '0.85rem', color: '#666', margin: '0 0 0.25rem 0' }}>Company Name</p>
                <p style={{ fontSize: '1rem', color: '#1a1a1a', margin: '0', fontWeight: '500' }}>{savedProfile.companyName}</p>
              </div>
              <div>
                <p style={{ fontSize: '0.85rem', color: '#666', margin: '0 0 0.25rem 0' }}>Company Description</p>
                <p style={{ fontSize: '1rem', color: '#1a1a1a', margin: '0', lineHeight: '1.5' }}>{savedProfile.companyDescription}</p>
              </div>
            </div>
          )}
          
          <div style={{ background: 'white', borderRadius: '12px', padding: 'clamp(1.5rem, 4vw, 2rem)', boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08)', border: '1px solid #f0f0f0' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'linear-gradient(135deg, #0047AB 0%, #000080 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '1.5rem', fontWeight: '600', flexShrink: 0 }}>
                S
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1a1a1a', margin: '0' }}>Shaffer</h3>
                <p style={{ color: '#666', margin: '0', fontSize: '0.9rem' }}>shaffer@sha.com</p>
              </div>
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#1a1a1a', fontSize: '0.95rem' }}>Company Name</label>
              <input type="text" name="companyName" value={profileData.companyName} onChange={handleProfileInputChange} placeholder="Enter your company name" style={{ width: '100%', padding: '0.75rem', border: '1px solid #e0e0e0', borderRadius: '6px', fontSize: '0.95rem', boxSizing: 'border-box' }} />
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#1a1a1a', fontSize: '0.95rem' }}>Company Description</label>
              <textarea name="companyDescription" value={profileData.companyDescription} onChange={handleProfileInputChange} placeholder="Tell us about your company" rows={4} style={{ width: '100%', padding: '0.75rem', border: '1px solid #e0e0e0', borderRadius: '6px', fontSize: '0.95rem', boxSizing: 'border-box', resize: 'vertical' }} />
            </div>
            <button 
              onClick={handleSaveProfile}
              style={{ width: '100%', padding: '0.875rem', background: '#0047AB', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: '600', fontSize: '0.95rem', transition: 'all 0.3s ease' }} 
              onMouseEnter={(e) => e.target.style.background = '#000080'} 
              onMouseLeave={(e) => e.target.style.background = '#0047AB'}
            >
              Save Profile
            </button>
          </div>
        </div>
      )
    }
  }

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#f5f5f5', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
      {/* Mobile Header */}
      <div style={{ 
        display: 'none', 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        right: 0, 
        height: '60px', 
        background: 'white', 
        borderBottom: '1px solid #f0f0f0', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        padding: '0 1rem', 
        zIndex: 1000,
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08)'
      }} className="mobile-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <svg width="28" height="28" viewBox="0 0 24 24">
            <defs>
              <linearGradient id="logoGradientMobile" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#0047AB' }} />
                <stop offset="100%" style={{ stopColor: '#000080' }} />
              </linearGradient>
            </defs>
            <path d="M12 2L2 7l10 5 10-5-10-5zm0 7.3L4 6.2v11l8 4.8 8-4.8v-11l-8 3.1z" fill="url(#logoGradientMobile)" />
          </svg>
          <span style={{ fontSize: '1rem', fontWeight: '700', color: '#0047AB' }}>JobNest</span>
        </div>
        <button onClick={() => setSidebarOpen(!sidebarOpen)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.5rem', color: '#1a1a1a' }}>
          {sidebarOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div 
          onClick={() => setSidebarOpen(false)} 
          style={{ 
            position: 'fixed', 
            top: 0, 
            left: 0, 
            right: 0, 
            bottom: 0, 
            background: 'rgba(0, 0, 0, 0.5)', 
            zIndex: 998 
          }} 
          className="mobile-overlay"
        />
      )}

      {/* Sidebar */}
      <div style={{ 
        width: '250px', 
        background: 'white', 
        borderRight: '1px solid #f0f0f0', 
        padding: '2rem 0', 
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08)', 
        display: 'flex', 
        flexDirection: 'column',
        position: 'fixed',
        top: 0,
        left: 0,
        bottom: 0,
        zIndex: 999,
        transform: 'translateX(0)',
        transition: 'transform 0.3s ease'
      }} className={`sidebar ${sidebarOpen ? 'sidebar-open' : ''}`}>
        <div style={{ padding: '0 1.5rem', marginBottom: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <svg width="32" height="32" viewBox="0 0 24 24">
              <defs>
                <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#0047AB' }} />
                  <stop offset="100%" style={{ stopColor: '#000080' }} />
                </linearGradient>
              </defs>
              <path d="M12 2L2 7l10 5 10-5-10-5zm0 7.3L4 6.2v11l8 4.8 8-4.8v-11l-8 3.1z" fill="url(#logoGradient)" />
            </svg>
            <div>
              <h2 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#0047AB', margin: '0' }}>JobNest</h2>
              <p style={{ fontSize: '0.7rem', color: '#666', margin: '0' }}>Employer</p>
            </div>
          </div>
        </div>

        <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1 }}>
          {[
            { id: 'dashboard', label: 'Dashboard', icon: DashboardIcon },
            { id: 'post-job', label: 'Post a Job', icon: PlusIcon },
            { id: 'my-jobs', label: 'My Job Posts', icon: FileIcon },
            { id: 'profile', label: 'My Profile', icon: UserIcon }
          ].map(item => {
            const Icon = item.icon
            return (
              <button key={item.id} onClick={() => handleNavClick(item.id)} style={{ padding: '0.875rem 1.5rem', background: activeTab === item.id ? '#e8f1ff' : 'transparent', color: activeTab === item.id ? '#0047AB' : '#666', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: activeTab === item.id ? '600' : '500', fontSize: '0.9rem', transition: 'all 0.3s ease', margin: '0 0.5rem', borderRadius: '8px' }} onMouseEnter={(e) => { if (activeTab !== item.id) { e.target.style.background = '#f0f0f0'; e.target.style.color = '#0047AB' } }} onMouseLeave={(e) => { if (activeTab !== item.id) { e.target.style.background = 'transparent'; e.target.style.color = '#666' } }}>
                <Icon /> {item.label}
              </button>
            )
          })}
          
          <button onClick={handleLogout} style={{ margin: '0 0.5rem', padding: '0.875rem 1.5rem', background: 'transparent', color: '#c62828', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: '500', fontSize: '0.9rem', transition: 'all 0.3s ease', borderRadius: '8px' }} onMouseEnter={(e) => { e.target.style.background = '#ffebee' }} onMouseLeave={(e) => { e.target.style.background = 'transparent' }}>
            <LogoutIcon /> Logout
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, overflowY: 'auto', padding: 'clamp(1rem, 4vw, 2rem) clamp(1rem, 5vw, 3rem)', marginLeft: '250px' }} className="main-content">
        {renderContent()}
      </div>

      {showEditModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          padding: '1rem'
        }}>
          <div style={{
            background: 'white',
            borderRadius: '12px',
            padding: 'clamp(1.5rem, 4vw, 2rem)',
            width: '100%',
            maxWidth: '500px',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
            maxHeight: '90vh',
            overflowY: 'auto'
          }}>
            <h2 style={{ color: '#1a1a1a', marginTop: 0, marginBottom: '1.5rem', fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: '600' }}>Edit Job Posting</h2>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#1a1a1a', fontSize: '0.95rem' }}>Job Title *</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="e.g., Senior React Developer"
                style={{ width: '100%', padding: '0.75rem', border: '1px solid #e0e0e0', borderRadius: '6px', fontSize: '0.95rem', boxSizing: 'border-box' }}
              />
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#1a1a1a', fontSize: '0.95rem' }}>Location *</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                placeholder="e.g., Coimbatore, Tamil Nadu"
                style={{ width: '100%', padding: '0.75rem', border: '1px solid #e0e0e0', borderRadius: '6px', fontSize: '0.95rem', boxSizing: 'border-box' }}
              />
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#1a1a1a', fontSize: '0.95rem' }}>Salary Range *</label>
              <input
                type="text"
                name="salary"
                value={formData.salary}
                onChange={handleInputChange}
                placeholder="e.g., ₹7LPA - ₹12LPA"
                style={{ width: '100%', padding: '0.75rem', border: '1px solid #e0e0e0', borderRadius: '6px', fontSize: '0.95rem', boxSizing: 'border-box' }}
              />
            </div>

            <div style={{ display: 'flex', gap: '1rem', flexDirection: 'row', flexWrap: 'wrap' }}>
              <button
                onClick={handleSaveJob}
                style={{
                  flex: 1,
                  minWidth: '120px',
                  padding: '0.875rem',
                  background: '#0047AB',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontWeight: '600',
                  fontSize: '0.95rem',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.background = '#000080'}
                onMouseLeave={(e) => e.target.style.background = '#0047AB'}
              >
                Update Job
              </button>
              <button
                onClick={() => {
                  setShowEditModal(false)
                  setEditingId(null)
                  setFormData({ title: '', location: '', salary: '' })
                }}
                style={{
                  flex: 1,
                  minWidth: '120px',
                  padding: '0.875rem',
                  background: 'white',
                  color: '#0047AB',
                  border: '2px solid #0047AB',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontWeight: '600',
                  fontSize: '0.95rem',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = '#0047AB'
                  e.target.style.color = 'white'
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'white'
                  e.target.style.color = '#0047AB'
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .mobile-header {
            display: flex !important;
          }
          .sidebar {
            transform: translateX(-100%);
            top: 60px;
          }
          .sidebar-open {
            transform: translateX(0) !important;
          }
          .main-content {
            margin-left: 0 !important;
            padding-top: calc(60px + 1rem) !important;
          }
          .mobile-overlay {
            display: block;
          }
        }
        @media (min-width: 769px) {
          .mobile-header {
            display: none !important;
          }
          .mobile-overlay {
            display: none !important;
          }
          .sidebar {
            transform: translateX(0) !important;
          }
        }
      `}</style>
    </div>
  )
}

export default EmployerDashboard