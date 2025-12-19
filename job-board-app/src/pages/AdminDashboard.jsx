import { useState } from 'react'

const AdminDashboard = () => {
  const [activeMenu, setActiveMenu] = useState('dashboard')
  const [selectedJob, setSelectedJob] = useState(null)
  const [showViewModal, setShowViewModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showAllJobseekers, setShowAllJobseekers] = useState(false)
  const [showAllEmployers, setShowAllEmployers] = useState(false)
  
  const [jobseekers] = useState([
    { id: 1, name: 'Rahul Sharma', email: 'rahul.sharma@email.com', phone: '+91 98765 43210', location: 'Mumbai', skills: ['React', 'JavaScript', 'Node.js'], experience: '3 years', status: 'Active', appliedJobs: 5, joinedDate: '15 Jan 2024' },
    { id: 2, name: 'Priya Patel', email: 'priya.patel@email.com', phone: '+91 87654 32109', location: 'Bangalore', skills: ['Python', 'Data Analysis', 'SQL'], experience: '2 years', status: 'Active', appliedJobs: 8, joinedDate: '20 Feb 2024' },
    { id: 3, name: 'Amit Kumar', email: 'amit.kumar@email.com', phone: '+91 76543 21098', location: 'Delhi', skills: ['UI/UX', 'Figma', 'Adobe XD'], experience: '4 years', status: 'Active', appliedJobs: 3, joinedDate: '10 Mar 2024' },
    { id: 4, name: 'Sneha Reddy', email: 'sneha.reddy@email.com', phone: '+91 65432 10987', location: 'Hyderabad', skills: ['Java', 'Spring Boot', 'AWS'], experience: '5 years', status: 'Inactive', appliedJobs: 12, joinedDate: '05 Dec 2023' },
    { id: 5, name: 'Vikram Singh', email: 'vikram.singh@email.com', phone: '+91 54321 09876', location: 'Chennai', skills: ['Angular', 'TypeScript'], experience: '3 years', status: 'Active', appliedJobs: 6, joinedDate: '12 Jan 2024' },
    { id: 6, name: 'Ananya Gupta', email: 'ananya.gupta@email.com', phone: '+91 43210 98765', location: 'Pune', skills: ['React Native', 'Flutter'], experience: '2 years', status: 'Active', appliedJobs: 4, joinedDate: '25 Feb 2024' }
  ])

  const [employers] = useState([
    { id: 1, companyName: 'BrightCode Tech', contactPerson: 'Vikram Singh', email: 'hr@brightcode.com', phone: '+91 98765 11111', location: 'Bangalore', industry: 'Technology', postedJobs: 15, status: 'Verified', joinedDate: '01 Jan 2024' },
    { id: 2, companyName: 'InsightIQ', contactPerson: 'Meera Joshi', email: 'careers@insightiq.com', phone: '+91 87654 22222', location: 'Hyderabad', industry: 'Analytics', postedJobs: 8, status: 'Verified', joinedDate: '15 Feb 2024' },
    { id: 3, companyName: 'PixelCraft Studios', contactPerson: 'Arjun Nair', email: 'jobs@pixelcraft.com', phone: '+91 76543 33333', location: 'Pune', industry: 'Design', postedJobs: 5, status: 'Pending', joinedDate: '20 Mar 2024' },
    { id: 4, companyName: 'MarketPulse Media', contactPerson: 'Kavita Shah', email: 'hr@marketpulse.com', phone: '+91 65432 44444', location: 'Mumbai', industry: 'Marketing', postedJobs: 12, status: 'Verified', joinedDate: '10 Nov 2023' },
    { id: 5, companyName: 'CloudNine Solutions', contactPerson: 'Rajesh Kumar', email: 'hr@cloudnine.com', phone: '+91 54321 55555', location: 'Delhi', industry: 'Cloud Services', postedJobs: 20, status: 'Verified', joinedDate: '05 Dec 2023' },
    { id: 6, companyName: 'DataDrive Analytics', contactPerson: 'Sneha Patel', email: 'careers@datadrive.com', phone: '+91 43210 66666', location: 'Chennai', industry: 'Data Science', postedJobs: 10, status: 'Pending', joinedDate: '18 Jan 2024' }
  ])

  const [jobs, setJobs] = useState([
    { id: 1, title: 'Frontend Developer', company: 'BrightCode Tech', location: 'Bangalore', type: 'Full-time', category: 'Technology & IT', postedDate: '2 days ago', salary: '₹8-12 LPA', applicants: 45, description: 'Looking for experienced Frontend Developer.', requirements: ['React experience', 'TypeScript'], status: 'Active' },
    { id: 2, title: 'Data Analyst', company: 'InsightIQ', location: 'Hyderabad', type: 'Full-time', category: 'Technology & IT', postedDate: '3 days ago', salary: '₹7-10 LPA', applicants: 67, description: 'Data Analyst needed.', requirements: ['SQL', 'Python'], status: 'Active' },
    { id: 3, title: 'UI/UX Designer', company: 'PixelCraft Studios', location: 'Pune', type: 'Full-time', category: 'Design & Creative', postedDate: '1 day ago', salary: '₹6-9 LPA', applicants: 32, description: 'Creative designer needed.', requirements: ['Figma'], status: 'Active' },
    { id: 4, title: 'Cloud Architect', company: 'SkyNet Solutions', location: 'Bengaluru', type: 'Full-time', category: 'Technology & IT', postedDate: '4 days ago', salary: '₹15-20 LPA', applicants: 23, description: 'Cloud infrastructure lead.', requirements: ['AWS'], status: 'Active' }
  ])

  const stats = { totalUsers: 1248, totalJobs: 342, totalApplications: 5621, activeEmployers: 87 }
  const platformStats = { totalCandidates: 12450, totalRecruiters: 850, activeJobPosts: 3200, applications: 45100 }

  const handleDeleteJob = (id) => {
    if (window.confirm('Are you sure?')) {
      setJobs(jobs.filter(job => job.id !== id))
    }
  }

  const handleEditJob = (job) => {
    setSelectedJob({...job})
    setShowEditModal(true)
  }

  const handleViewJob = (job) => {
    setSelectedJob(job)
    setShowViewModal(true)
  }

  const handleBackToHome = () => {
    window.location.href = '/'
  }

  const handleSaveEdit = () => {
    setJobs(jobs.map(job => job.id === selectedJob.id ? selectedJob : job))
    setShowEditModal(false)
    alert('Job updated!')
  }

  const handleMenuClick = (menuId) => {
    setActiveMenu(menuId)
    setMobileMenuOpen(false)
  }

  const renderContent = () => {
    if (activeMenu === 'reports') {
      return (
        <div>
          {/* Header Section */}
          <div className="reports-header">
            <div>
              <h2 style={{ margin: 0, marginBottom: '0.25rem', fontSize: '1.5rem', fontWeight: '700', color: '#1F2937' }}>Platform Analytics</h2>
              <p style={{ color: '#6B7280', margin: 0, fontSize: '0.875rem' }}>Detailed insights into platform usage and performance.</p>
            </div>
            <div className="reports-actions">
              <button style={{ padding: '0.5rem 1rem', color: '#374151', border: '1px solid #E5E7EB', borderRadius: '6px', background: 'white', cursor: 'pointer', fontSize: '0.875rem', fontWeight: '500' }}>7 Days</button>
              <button style={{ padding: '0.5rem 1rem', color: '#374151', border: '1px solid #E5E7EB', borderRadius: '6px', background: 'white', cursor: 'pointer', fontSize: '0.875rem', fontWeight: '500' }}>30 Days</button>
              <button style={{ padding: '0.5rem 1rem', color: '#374151', border: '1px solid #E5E7EB', borderRadius: '6px', background: 'white', cursor: 'pointer', fontSize: '0.875rem', fontWeight: '500' }}>YTD</button>
              <button style={{ background: '#0047AB', color: 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '6px', fontWeight: '500', cursor: 'pointer', fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Export Report
              </button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="stats-grid">
            {[
              { label: 'Total Candidates', value: platformStats.totalCandidates, change: '+12%', up: true, icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0047AB" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              )},
              { label: 'Total Recruiters', value: platformStats.totalRecruiters, change: '+5%', up: true, icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0047AB" strokeWidth="2">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                </svg>
              )},
              { label: 'Active Job Posts', value: platformStats.activeJobPosts, change: '-2%', up: false, icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0047AB" strokeWidth="2">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                </svg>
              )},
              { label: 'Applications', value: platformStats.applications, change: '+18%', up: true, icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0047AB" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
                </svg>
              )}
            ].map((stat, i) => (
              <div key={i} style={{ background: 'white', padding: '1.25rem', borderRadius: '12px', border: '1px solid #E5E7EB' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                  <span style={{ fontSize: '0.875rem', color: '#6B7280' }}>{stat.label}</span>
                  <div style={{ padding: '0.5rem', background: '#EFF6FF', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {stat.icon}
                  </div>
                </div>
                <div style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '0.25rem', color: '#1F2937' }}>{stat.value.toLocaleString()}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={stat.up ? '#10B981' : '#EF4444'} strokeWidth="2">
                    {stat.up ? (
                      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
                    ) : (
                      <polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/>
                    )}
                  </svg>
                  <span style={{ fontSize: '0.875rem', color: stat.up ? '#10B981' : '#EF4444', fontWeight: '500' }}>{stat.change}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Charts Section */}
          <div className="charts-grid">
            {/* Platform Traffic Trends */}
            <div style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', border: '1px solid #E5E7EB' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: '600', color: '#1F2937' }}>Platform Traffic Trends</h3>
                <a href="#" style={{ color: '#0047AB', fontSize: '0.875rem', textDecoration: 'none', fontWeight: '500' }}>View Details</a>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-end', height: '220px', gap: '1rem', paddingTop: '1rem' }}>
                {[
                  { day: 'Mon', h1: 45, h2: 65 },
                  { day: 'Tue', h1: 55, h2: 75 },
                  { day: 'Wed', h1: 50, h2: 70 },
                  { day: 'Thu', h1: 70, h2: 90 },
                  { day: 'Fri', h1: 85, h2: 100 },
                  { day: 'Sat', h1: 75, h2: 95 },
                  { day: 'Sun', h1: 60, h2: 80 }
                ].map((item, i) => (
                  <div key={i} style={{ textAlign: 'center', flex: 1 }}>
                    <div style={{ display: 'flex', gap: '4px', justifyContent: 'center', alignItems: 'flex-end', height: '180px', marginBottom: '0.75rem' }}>
                      <div style={{ width: '24px', height: `${item.h1}%`, background: '#B3D4FC', borderRadius: '4px 4px 0 0' }} />
                      <div style={{ width: '24px', height: `${item.h2}%`, background: '#0047AB', borderRadius: '4px 4px 0 0' }} />
                    </div>
                    <div style={{ fontSize: '0.75rem', color: '#6B7280', fontWeight: '500' }}>{item.day}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* User Types */}
            <div style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', border: '1px solid #E5E7EB' }}>
              <h3 style={{ margin: 0, marginBottom: '1.5rem', fontSize: '1rem', fontWeight: '600', color: '#1F2937' }}>User Types</h3>
              <div style={{ position: 'relative', width: '160px', height: '160px', margin: '0 auto 1.5rem' }}>
                <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%', transform: 'rotate(-90deg)' }}>
                  <circle cx="50" cy="50" r="35" fill="none" stroke="#E5E7EB" strokeWidth="12" />
                  <circle cx="50" cy="50" r="35" fill="none" stroke="#0047AB" strokeWidth="12" strokeDasharray="154" strokeDashoffset="0" />
                  <circle cx="50" cy="50" r="35" fill="none" stroke="#60A5FA" strokeWidth="12" strokeDasharray="44" strokeDashoffset="-154" />
                  <circle cx="50" cy="50" r="35" fill="none" stroke="#E5E7EB" strokeWidth="12" strokeDasharray="22" strokeDashoffset="-198" />
                </svg>
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: '700', color: '#0047AB' }}>12.5k</div>
                  <div style={{ fontSize: '0.7rem', color: '#6B7280' }}>Total Users</div>
                </div>
              </div>
              <div>
                {[
                  { label: 'Candidates', color: '#0047AB', pct: '70%' },
                  { label: 'Recruiters', color: '#60A5FA', pct: '20%' },
                  { label: 'Guests', color: '#E5E7EB', pct: '10%' }
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: i < 2 ? '0.75rem' : 0, fontSize: '0.875rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <div style={{ width: '10px', height: '10px', background: item.color, borderRadius: '50%' }} />
                      <span style={{ color: '#4B5563' }}>{item.label}</span>
                    </div>
                    <span style={{ fontWeight: '600', color: '#1F2937' }}>{item.pct}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )
    }

    // Manage Users Section
    if (activeMenu === 'users') {
      const displayedJobseekers = showAllJobseekers ? jobseekers : jobseekers.slice(0, 4)
      const displayedEmployers = showAllEmployers ? employers : employers.slice(0, 4)
      
      return (
        <div>
          <h2 style={{ marginTop: 0, marginBottom: '0.5rem', color: '#1F2937', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
            Manage Users
          </h2>
          <p style={{ color: '#6B7280', marginBottom: '2rem' }}>View and manage jobseekers and employers</p>

          {/* Jobseekers Section */}
          <div style={{ marginBottom: '2.5rem' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#1F2937', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0047AB" strokeWidth="2">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
              </svg>
              Jobseekers(1012)
            </h3>
            <div style={{ background: 'white', borderRadius: '12px', border: '1px solid #E5E7EB', overflow: 'hidden' }}>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '800px' }}>
                  <thead>
                    <tr style={{ background: '#F9FAFB' }}>
                      <th style={{ padding: '1rem', textAlign: 'left', fontSize: '0.875rem', fontWeight: '600', color: '#374151' }}>Name</th>
                      <th style={{ padding: '1rem', textAlign: 'left', fontSize: '0.875rem', fontWeight: '600', color: '#374151' }}>Email</th>
                      <th style={{ padding: '1rem', textAlign: 'left', fontSize: '0.875rem', fontWeight: '600', color: '#374151' }}>Location</th>
                      <th style={{ padding: '1rem', textAlign: 'left', fontSize: '0.875rem', fontWeight: '600', color: '#374151' }}>Experience</th>
                      <th style={{ padding: '1rem', textAlign: 'left', fontSize: '0.875rem', fontWeight: '600', color: '#374151' }}>Applied Jobs</th>
                      <th style={{ padding: '1rem', textAlign: 'left', fontSize: '0.875rem', fontWeight: '600', color: '#374151' }}>Status</th>
                      <th style={{ padding: '1rem', textAlign: 'left', fontSize: '0.875rem', fontWeight: '600', color: '#374151' }}>Joined</th>
                    </tr>
                  </thead>
                  <tbody>
                    {displayedJobseekers.map((user, index) => (
                      <tr key={user.id} style={{ borderTop: '1px solid #E5E7EB', background: index % 2 === 0 ? 'white' : '#FAFAFA' }}>
                        <td style={{ padding: '1rem', fontSize: '0.875rem' }}>
                          <div style={{ fontWeight: '600', color: '#1F2937' }}>{user.name}</div>
                          <div style={{ color: '#6B7280', fontSize: '0.75rem' }}>{user.phone}</div>
                        </td>
                        <td style={{ padding: '1rem', fontSize: '0.875rem', color: '#4B5563' }}>{user.email}</td>
                        <td style={{ padding: '1rem', fontSize: '0.875rem', color: '#4B5563' }}>{user.location}</td>
                        <td style={{ padding: '1rem', fontSize: '0.875rem', color: '#4B5563' }}>{user.experience}</td>
                        <td style={{ padding: '1rem', fontSize: '0.875rem', color: '#0047AB', fontWeight: '600' }}>{user.appliedJobs}</td>
                        <td style={{ padding: '1rem' }}>
                          <span style={{ 
                            padding: '0.25rem 0.75rem', 
                            borderRadius: '12px', 
                            fontSize: '0.75rem', 
                            fontWeight: '600',
                            background: user.status === 'Active' ? '#D1FAE5' : '#FEE2E2',
                            color: user.status === 'Active' ? '#059669' : '#DC2626'
                          }}>{user.status}</span>
                        </td>
                        <td style={{ padding: '1rem', fontSize: '0.875rem', color: '#6B7280' }}>{user.joinedDate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {jobseekers.length > 4 && (
                <div style={{ padding: '1rem', borderTop: '1px solid #E5E7EB', textAlign: 'center' }}>
                  <button 
                    onClick={() => setShowAllJobseekers(!showAllJobseekers)}
                    style={{ 
                      background: '#0047AB', 
                      color: 'white', 
                      border: 'none', 
                      padding: '0.65rem 1.5rem', 
                      borderRadius: '8px', 
                      cursor: 'pointer', 
                      fontWeight: '600', 
                      fontSize: '0.875rem' 
                    }}
                  >
                    {showAllJobseekers ? 'Show Less' : 'Load More'}
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Employers Section */}
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#1F2937', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0047AB" strokeWidth="2">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
              </svg>
              Employers(290)
            </h3>
            <div style={{ background: 'white', borderRadius: '12px', border: '1px solid #E5E7EB', overflow: 'hidden' }}>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '900px' }}>
                  <thead>
                    <tr style={{ background: '#F9FAFB' }}>
                      <th style={{ padding: '1rem', textAlign: 'left', fontSize: '0.875rem', fontWeight: '600', color: '#374151' }}>Company</th>
                      <th style={{ padding: '1rem', textAlign: 'left', fontSize: '0.875rem', fontWeight: '600', color: '#374151' }}>Contact Person</th>
                      <th style={{ padding: '1rem', textAlign: 'left', fontSize: '0.875rem', fontWeight: '600', color: '#374151' }}>Email</th>
                      <th style={{ padding: '1rem', textAlign: 'left', fontSize: '0.875rem', fontWeight: '600', color: '#374151' }}>Industry</th>
                      <th style={{ padding: '1rem', textAlign: 'left', fontSize: '0.875rem', fontWeight: '600', color: '#374151' }}>Posted Jobs</th>
                      <th style={{ padding: '1rem', textAlign: 'left', fontSize: '0.875rem', fontWeight: '600', color: '#374151' }}>Status</th>
                      <th style={{ padding: '1rem', textAlign: 'left', fontSize: '0.875rem', fontWeight: '600', color: '#374151' }}>Joined</th>
                    </tr>
                  </thead>
                  <tbody>
                    {displayedEmployers.map((emp, index) => (
                      <tr key={emp.id} style={{ borderTop: '1px solid #E5E7EB', background: index % 2 === 0 ? 'white' : '#FAFAFA' }}>
                        <td style={{ padding: '1rem', fontSize: '0.875rem' }}>
                          <div style={{ fontWeight: '600', color: '#1F2937' }}>{emp.companyName}</div>
                          <div style={{ color: '#6B7280', fontSize: '0.75rem' }}>{emp.location}</div>
                        </td>
                        <td style={{ padding: '1rem', fontSize: '0.875rem', color: '#4B5563' }}>{emp.contactPerson}</td>
                        <td style={{ padding: '1rem', fontSize: '0.875rem', color: '#4B5563' }}>{emp.email}</td>
                        <td style={{ padding: '1rem', fontSize: '0.875rem', color: '#4B5563' }}>{emp.industry}</td>
                        <td style={{ padding: '1rem', fontSize: '0.875rem', color: '#0047AB', fontWeight: '600' }}>{emp.postedJobs}</td>
                        <td style={{ padding: '1rem' }}>
                          <span style={{ 
                            padding: '0.25rem 0.75rem', 
                            borderRadius: '12px', 
                            fontSize: '0.75rem', 
                            fontWeight: '600',
                            background: emp.status === 'Verified' ? '#D1FAE5' : '#FEF3C7',
                            color: emp.status === 'Verified' ? '#059669' : '#D97706'
                          }}>{emp.status}</span>
                        </td>
                        <td style={{ padding: '1rem', fontSize: '0.875rem', color: '#6B7280' }}>{emp.joinedDate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {employers.length > 4 && (
                <div style={{ padding: '1rem', borderTop: '1px solid #E5E7EB', textAlign: 'center' }}>
                  <button 
                    onClick={() => setShowAllEmployers(!showAllEmployers)}
                    style={{ 
                      background: '#0047AB', 
                      color: 'white', 
                      border: 'none', 
                      padding: '0.65rem 1.5rem', 
                      borderRadius: '8px', 
                      cursor: 'pointer', 
                      fontWeight: '600', 
                      fontSize: '0.875rem' 
                    }}
                  >
                    {showAllEmployers ? 'Show Less' : 'Load More'}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )
    }

    if (activeMenu === 'applications') {
      return (
        <div>
          <h2 style={{ marginTop: 0, marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            Manage Job Posts from Employers
          </h2>
          <p style={{ color: '#6B7280', marginBottom: '2rem' }}>View, edit and manage all job postings</p>

          <div style={{ display: 'grid', gap: '1rem' }}>
            {jobs.map((job) => (
              <div key={job.id} className="job-card">
                <div>
                  <h4 style={{ margin: 0, marginBottom: '0.5rem', fontSize: '1.125rem' }}>{job.title}</h4>
                  <div style={{ color: '#6B7280', fontSize: '0.875rem', marginBottom: '0.5rem' }}>
                    {job.company} • {job.location} • {job.type}
                  </div>
                  <div style={{ color: '#6B7280', fontSize: '0.875rem' }}>
                    <strong>{job.applicants}</strong> applicants • {job.postedDate} • {job.salary}
                  </div>
                </div>
                <div className="job-actions">
                  <button onClick={() => handleViewJob(job)} style={{ background: '#0047AB', color: 'white', border: 'none', padding: '0.65rem 1.25rem', borderRadius: '8px', cursor: 'pointer', fontWeight: '600', fontSize: '0.875rem' }}>View</button>
                  <button onClick={() => handleEditJob(job)} style={{ background: 'white', color: '#0047AB', border: '2px solid #0047AB', padding: '0.65rem 1.25rem', borderRadius: '8px', cursor: 'pointer', fontWeight: '600', fontSize: '0.875rem' }}>Edit</button>
                  <button onClick={() => handleDeleteJob(job.id)} style={{ background: '#ff4444', color: 'white', border: 'none', padding: '0.65rem 1.25rem', borderRadius: '8px', cursor: 'pointer', fontWeight: '600', fontSize: '0.875rem' }}>Delete</button>
                </div>
              </div>
            ))}
          </div>

          {showViewModal && selectedJob && (
            <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }} onClick={() => setShowViewModal(false)}>
              <div style={{ background: 'white', borderRadius: '16px', padding: '2rem', maxWidth: '600px', width: '90%', maxHeight: '80vh', overflowY: 'auto' }} onClick={(e) => e.stopPropagation()}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                  <div>
                    <h2 style={{ margin: 0, marginBottom: '0.5rem' }}>{selectedJob.title}</h2>
                    <div style={{ color: '#6B7280', fontSize: '0.875rem' }}>{selectedJob.company} • {selectedJob.location}</div>
                  </div>
                  <button onClick={() => setShowViewModal(false)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>✕</button>
                </div>
                
                <div style={{ marginBottom: '1.5rem', display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <span style={{ background: '#EFF6FF', color: '#0047AB', padding: '0.5rem 1rem', borderRadius: '8px', fontSize: '0.875rem', fontWeight: '600' }}>{selectedJob.type}</span>
                  <span style={{ background: '#F0FDF4', color: '#10B981', padding: '0.5rem 1rem', borderRadius: '8px', fontSize: '0.875rem', fontWeight: '600' }}>{selectedJob.salary}</span>
                </div>

                <div style={{ marginBottom: '1.5rem', padding: '1rem', background: '#F9FAFB', borderRadius: '8px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span style={{ color: '#6B7280', fontSize: '0.875rem' }}>Posted:</span>
                    <span style={{ fontWeight: '600', fontSize: '0.875rem' }}>{selectedJob.postedDate}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#6B7280', fontSize: '0.875rem' }}>Applicants:</span>
                    <span style={{ fontWeight: '600', fontSize: '0.875rem', color: '#0047AB' }}>{selectedJob.applicants}</span>
                  </div>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '0.75rem' }}>Description</h3>
                  <p style={{ color: '#4B5563', lineHeight: '1.6', margin: 0 }}>{selectedJob.description}</p>
                </div>

                <div style={{ display: 'flex', gap: '1rem', paddingTop: '1rem', borderTop: '1px solid #E5E7EB' }}>
                  <button onClick={() => { setShowViewModal(false); handleEditJob(selectedJob); }} style={{ flex: 1, padding: '0.75rem', background: '#0047AB', color: 'white', border: 'none', borderRadius: '8px', fontWeight: '600', cursor: 'pointer' }}>Edit Job</button>
                  <button onClick={() => setShowViewModal(false)} style={{ flex: 1, padding: '0.75rem', background: 'white', color: '#374151', border: '2px solid #E5E7EB', borderRadius: '8px', fontWeight: '600', cursor: 'pointer' }}>Close</button>
                </div>
              </div>
            </div>
          )}

          {showEditModal && selectedJob && (
            <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }} onClick={() => setShowEditModal(false)}>
              <div style={{ background: 'white', borderRadius: '16px', padding: '2rem', maxWidth: '600px', width: '90%', maxHeight: '80vh', overflowY: 'auto' }} onClick={(e) => e.stopPropagation()}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                  <h2 style={{ margin: 0 }}>Edit Job Posting</h2>
                  <button onClick={() => setShowEditModal(false)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>✕</button>
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.875rem' }}>Job Title</label>
                  <input type="text" value={selectedJob.title} onChange={(e) => setSelectedJob({...selectedJob, title: e.target.value})} style={{ width: '100%', padding: '0.75rem', border: '1px solid #D1D5DB', borderRadius: '8px', fontSize: '0.875rem', boxSizing: 'border-box' }} />
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.875rem' }}>Company</label>
                  <input type="text" value={selectedJob.company} onChange={(e) => setSelectedJob({...selectedJob, company: e.target.value})} style={{ width: '100%', padding: '0.75rem', border: '1px solid #D1D5DB', borderRadius: '8px', fontSize: '0.875rem', boxSizing: 'border-box' }} />
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.875rem' }}>Description</label>
                  <textarea value={selectedJob.description} onChange={(e) => setSelectedJob({...selectedJob, description: e.target.value})} rows={4} style={{ width: '100%', padding: '0.75rem', border: '1px solid #D1D5DB', borderRadius: '8px', fontSize: '0.875rem', fontFamily: 'inherit', boxSizing: 'border-box' }} />
                </div>

                <div style={{ display: 'flex', gap: '1rem' }}>
                  <button onClick={handleSaveEdit} style={{ flex: 1, padding: '0.75rem', background: '#0047AB', color: 'white', border: 'none', borderRadius: '8px', fontWeight: '600', cursor: 'pointer' }}>Save</button>
                  <button onClick={() => setShowEditModal(false)} style={{ flex: 1, padding: '0.75rem', background: 'white', color: '#374151', border: '2px solid #E5E7EB', borderRadius: '8px', fontWeight: '600', cursor: 'pointer' }}>Cancel</button>
                </div>
              </div>
            </div>
          )}
        </div>
      )
    }

    return (
      <div>
        <div className="dashboard-stats-grid">
          {[
            { label: 'Total Users', value: stats.totalUsers },
            { label: 'Total Jobs', value: stats.totalJobs },
            { label: 'Applications', value: stats.totalApplications },
            { label: 'Active Employers', value: stats.activeEmployers }
          ].map((stat, i) => (
            <div key={i} style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', border: '1px solid #E5E7EB' }}>
              <div style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '0.25rem' }}>{stat.value.toLocaleString()}</div>
              <div style={{ fontSize: '0.875rem', color: '#6B7280' }}>{stat.label}</div>
            </div>
          ))}
        </div>

        <div style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', border: '1px solid #E5E7EB' }}>
          <h3 style={{ fontSize: '1.125rem', fontWeight: '700', marginBottom: '1.5rem' }}>Recent Activity</h3>
          {[
            { action: 'New user registered', time: '5 mins ago' },
            { action: 'Job posted by TechCorp', time: '15 mins ago' },
            { action: 'Application submitted', time: '1 hour ago' }
          ].map((activity, i) => (
            <div key={i} style={{ padding: '1rem', background: '#F9FAFB', borderRadius: '8px', marginBottom: i < 2 ? '1rem' : 0 }}>
              <div style={{ fontWeight: '600', fontSize: '0.875rem' }}>{activity.action}</div>
              <div style={{ fontSize: '0.75rem', color: '#6B7280' }}>{activity.time}</div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <>
      <style>{`
        .admin-container {
          display: flex;
          min-height: 100vh;
          background: #F5F6FA;
        }
        
        .admin-sidebar {
          width: 240px;
          background: white;
          border-right: 1px solid #E5E7EB;
          position: fixed;
          height: 100vh;
          display: flex;
          flex-direction: column;
          z-index: 100;
          transition: transform 0.3s ease;
        }
        
        .admin-main {
          margin-left: 240px;
          flex: 1;
          transition: margin-left 0.3s ease;
        }
        
        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
          flex-direction: column;
          gap: 4px;
        }
        
        .mobile-menu-btn span {
          width: 24px;
          height: 2px;
          background: #374151;
          transition: all 0.3s ease;
        }
        
        .mobile-overlay {
          display: none;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.5);
          z-index: 99;
        }
        
        .reports-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1.5rem;
          flex-wrap: wrap;
          gap: 1rem;
        }
        
        .reports-actions {
          display: flex;
          gap: 0.5rem;
          align-items: center;
          flex-wrap: wrap;
        }
        
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
          margin-bottom: 1.5rem;
        }
        
        .charts-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 1.5rem;
        }
        
        .dashboard-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          margin-bottom: 2rem;
        }
        
        .job-card {
          background: white;
          padding: 1.5rem;
          border-radius: 12px;
          border: 1px solid #E5E7EB;
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
        }
        
        .job-actions {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
          align-items: start;
        }
        
        .header-content {
          padding: 1rem 2rem;
        }
        
        .header-title {
          font-size: 1.75rem;
        }
        
        .user-info-text {
          display: block;
        }
        
        /* Tablet styles */
        @media (max-width: 1024px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .dashboard-stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .charts-grid {
            grid-template-columns: 1fr;
          }
        }
        
        /* Mobile styles */
        @media (max-width: 768px) {
          .admin-sidebar {
            transform: translateX(-100%);
          }
          
          .admin-sidebar.open {
            transform: translateX(0);
          }
          
          .admin-main {
            margin-left: 0;
          }
          
          .mobile-menu-btn {
            display: flex;
          }
          
          .mobile-overlay.open {
            display: block;
          }
          
          .header-content {
            padding: 1rem;
          }
          
          .header-title {
            font-size: 1.25rem;
          }
          
          .stats-grid {
            grid-template-columns: 1fr 1fr;
          }
          
          .dashboard-stats-grid {
            grid-template-columns: 1fr 1fr;
          }
          
          .reports-header {
            flex-direction: column;
          }
          
          .reports-actions {
            width: 100%;
            justify-content: flex-start;
          }
          
          .job-card {
            flex-direction: column;
          }
          
          .job-actions {
            width: 100%;
          }
          
          .job-actions button {
            flex: 1;
          }
        }
        
        @media (max-width: 480px) {
          .stats-grid {
            grid-template-columns: 1fr;
          }
          
          .dashboard-stats-grid {
            grid-template-columns: 1fr;
          }
          
          .user-info-text {
            display: none;
          }
          
          .reports-actions button {
            padding: 0.4rem 0.75rem !important;
            font-size: 0.75rem !important;
          }
        }
      `}</style>

      <div className="admin-container">
        {/* Mobile Overlay */}
        <div 
          className={`mobile-overlay ${mobileMenuOpen ? 'open' : ''}`}
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Sidebar */}
        <aside className={`admin-sidebar ${mobileMenuOpen ? 'open' : ''}`}>
          <div style={{ padding: '1.5rem', borderBottom: '1px solid #E5E7EB' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <svg 
                width="48" 
                height="48" 
                viewBox="0 0 24 24"
                style={{ filter: 'drop-shadow(0 4px 12px rgba(0, 71, 171, 0.2))' }}
              >
                <defs>
                  <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#0047AB' }} />
                    <stop offset="100%" style={{ stopColor: '#000080' }} />
                  </linearGradient>
                </defs>
                <path d="M12 2L2 7l10 5 10-5-10-5zm0 7.3L4 6.2v11l8 4.8 8-4.8v-11l-8 3.1z" fill="url(#logoGradient)"/>
              </svg>
              <div>
                <h2 style={{ 
                  fontSize: '1.75rem', 
                  fontWeight: '700', 
                  background: 'linear-gradient(135deg, #0047AB 0%, #000080 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  margin: 0 
                }}>JobNest</h2>
                <p style={{ fontSize: '0.75rem', color: '#6D8196', margin: 0 }}>Admin Panel</p>
              </div>
            </div>
          </div>

          <nav style={{ flex: 1, padding: '1rem 0.5rem' }}>
            {[
              { id: 'dashboard', label: 'Dashboard' },
              { id: 'users', label: 'Manage Users' },
              { id: 'jobs', label: 'Review Jobs' },
              { id: 'applications', label: 'Applications' },
              { id: 'reports', label: 'Reports' },
              { id: 'settings', label: 'Settings' }
            ].map((item) => (
              <button key={item.id} onClick={() => handleMenuClick(item.id)} style={{ width: '100%', padding: '0.75rem 1rem', marginBottom: '0.25rem', border: 'none', background: activeMenu === item.id ? '#EFF6FF' : 'transparent', color: activeMenu === item.id ? '#0047AB' : '#6B7280', fontSize: '0.875rem', fontWeight: activeMenu === item.id ? '600' : '500', cursor: 'pointer', borderRadius: '8px', textAlign: 'left' }}>
                {item.label}
              </button>
            ))}
            
            <button onClick={handleBackToHome} style={{ width: '100%', padding: '0.75rem 1rem', marginTop: '0.5rem', border: 'none', background: 'transparent', color: '#6B7280', fontSize: '0.875rem', cursor: 'pointer', borderRadius: '8px', textAlign: 'left' }}>
              Back to Home
            </button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="admin-main">
          <header style={{ background: 'white', borderBottom: '1px solid #E5E7EB', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} className="header-content">
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <button 
                className="mobile-menu-btn"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                <span style={{ transform: mobileMenuOpen ? 'rotate(45deg) translateY(6px)' : 'none' }}></span>
                <span style={{ opacity: mobileMenuOpen ? 0 : 1 }}></span>
                <span style={{ transform: mobileMenuOpen ? 'rotate(-45deg) translateY(-6px)' : 'none' }}></span>
              </button>
              <h1 className="header-title" style={{ fontWeight: '700', margin: 0 }}>Admin Dashboard</h1>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <button style={{ background: 'transparent', border: 'none', cursor: 'pointer', position: 'relative' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
                  <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
                </svg>
                <span style={{ position: 'absolute', top: '6px', right: '6px', width: '8px', height: '8px', background: '#EF4444', borderRadius: '50%', border: '2px solid white' }}></span>
              </button>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.5rem 1rem', background: '#F9FAFB', borderRadius: '8px' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#0047AB', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: '600', fontSize: '0.875rem' }}>Y</div>
                <div className="user-info-text">
                  <div style={{ fontSize: '0.875rem', fontWeight: '600' }}>Yusra</div>
                  <div style={{ fontSize: '0.75rem', color: '#6B7280' }}>Administrator</div>
                </div>
              </div>
            </div>
          </header>

          <div style={{ padding: '2rem' }}>
            {renderContent()}
          </div>
        </main>
      </div>
    </>
  )
}

export default AdminDashboard
