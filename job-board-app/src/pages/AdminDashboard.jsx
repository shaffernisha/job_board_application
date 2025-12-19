import { useState } from 'react'

const AdminDashboard = () => {
  const [activeMenu, setActiveMenu] = useState('dashboard')
  const [selectedJob, setSelectedJob] = useState(null)
  const [showViewModal, setShowViewModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [reportRange, setReportRange] = useState('7days')
  const [adminSettings, setAdminSettings] = useState({ email: 'admin@jobnest.com', currentPassword: '', newPassword: '', confirmPassword: '' })
  
  const [jobs, setJobs] = useState([
    { id: 1, title: 'Frontend Developer', company: 'BrightCode Tech', location: 'Bangalore', type: 'Full-time', category: 'Technology & IT', postedDate: '2 days ago', salary: '₹8-12 LPA', applicants: 45, description: 'We are looking for an experienced Frontend Developer to join our team. Must have strong React skills and modern web development experience.', requirements: ['3+ years React experience', 'TypeScript proficiency', 'Responsive design expertise'], status: 'Pending' },
    { id: 2, title: 'Data Analyst', company: 'InsightIQ', location: 'Hyderabad', type: 'Full-time', category: 'Technology & IT', postedDate: '3 days ago', salary: '₹7-10 LPA', applicants: 67, description: 'Seeking a Data Analyst to analyze business metrics.', requirements: ['SQL expertise', 'Python knowledge'], status: 'Approved' },
    { id: 3, title: 'UI/UX Designer', company: 'PixelCraft Studios', location: 'Pune', type: 'Full-time', category: 'Design & Creative', postedDate: '1 day ago', salary: '₹6-9 LPA', applicants: 32, description: 'Creative UI/UX designer needed.', requirements: ['Figma expertise', 'Portfolio required'], status: 'Pending' },
    { id: 4, title: 'Cloud Solutions Architect', company: 'SkyNet Solutions', location: 'Bengaluru', type: 'Full-time', category: 'Technology & IT', postedDate: '4 days ago', salary: '₹15-20 LPA', applicants: 23, description: 'Lead cloud infrastructure design.', requirements: ['AWS/Azure certification'], status: 'Approved' },
    { id: 5, title: 'Digital Marketing Executive', company: 'MarketPulse Media', location: 'Mumbai', type: 'Full-time', category: 'Marketing & Content', postedDate: '2 days ago', salary: '₹5-7 LPA', applicants: 89, description: 'Execute digital marketing campaigns.', requirements: ['SEO/SEM knowledge'], status: 'Pending' },
    { id: 6, title: 'HR Manager', company: 'Zenith Corp', location: 'Delhi', type: 'Full-time', category: 'Business & Management', postedDate: '3 days ago', salary: '₹10-14 LPA', applicants: 41, description: 'Manage HR operations.', requirements: ['HR certification'], status: 'Rejected' }
  ])

  const [jobseekers] = useState([
    { id: 1, name: 'Rahul Sharma', email: 'rahul.sharma@email.com', phone: '+91 98765 43210', location: 'Mumbai', skills: ['React', 'JavaScript', 'Node.js'], experience: '3 years', status: 'Active', appliedJobs: 5, joinedDate: '15 Jan 2024' },
    { id: 2, name: 'Priya Patel', email: 'priya.patel@email.com', phone: '+91 87654 32109', location: 'Bangalore', skills: ['Python', 'Data Analysis', 'SQL'], experience: '2 years', status: 'Active', appliedJobs: 8, joinedDate: '20 Feb 2024' },
    { id: 3, name: 'Amit Kumar', email: 'amit.kumar@email.com', phone: '+91 76543 21098', location: 'Delhi', skills: ['UI/UX', 'Figma', 'Adobe XD'], experience: '4 years', status: 'Active', appliedJobs: 3, joinedDate: '10 Mar 2024' },
    { id: 4, name: 'Sneha Reddy', email: 'sneha.reddy@email.com', phone: '+91 65432 10987', location: 'Hyderabad', skills: ['Java', 'Spring Boot', 'AWS'], experience: '5 years', status: 'Inactive', appliedJobs: 12, joinedDate: '05 Dec 2023' }
  ])

  const [employers] = useState([
    { id: 1, companyName: 'BrightCode Tech', contactPerson: 'Vikram Singh', email: 'hr@brightcode.com', phone: '+91 98765 11111', location: 'Bangalore', industry: 'Technology', postedJobs: 15, status: 'Verified', joinedDate: '01 Jan 2024' },
    { id: 2, companyName: 'InsightIQ', contactPerson: 'Meera Joshi', email: 'careers@insightiq.com', phone: '+91 87654 22222', location: 'Hyderabad', industry: 'Analytics', postedJobs: 8, status: 'Verified', joinedDate: '15 Feb 2024' },
    { id: 3, companyName: 'PixelCraft Studios', contactPerson: 'Arjun Nair', email: 'jobs@pixelcraft.com', phone: '+91 76543 33333', location: 'Pune', industry: 'Design', postedJobs: 5, status: 'Pending', joinedDate: '20 Mar 2024' },
    { id: 4, companyName: 'MarketPulse Media', contactPerson: 'Kavita Shah', email: 'hr@marketpulse.com', phone: '+91 65432 44444', location: 'Mumbai', industry: 'Marketing', postedJobs: 12, status: 'Verified', joinedDate: '10 Nov 2023' }
  ])

  const stats = { totalUsers: 1248, totalJobs: 342, totalApplications: 5621, activeEmployers: 87 }

  const reportStats = {
    totalCandidates: { value: 12450, change: '+12%', positive: true },
    totalRecruiters: { value: 850, change: '+5%', positive: true },
    activeJobPosts: { value: 3200, change: '-2%', positive: false },
    applications: { value: 45100, change: '+18%', positive: true }
  }

  const trafficData = [
    { day: 'Mon', visitors: 1200, applications: 450 },
    { day: 'Tue', visitors: 1400, applications: 520 },
    { day: 'Wed', visitors: 1100, applications: 380 },
    { day: 'Thu', visitors: 1600, applications: 600 },
    { day: 'Fri', visitors: 1800, applications: 720 },
    { day: 'Sat', visitors: 2200, applications: 850 },
    { day: 'Sun', visitors: 1900, applications: 700 }
  ]

  const userTypes = [
    { type: 'Candidates', percentage: 70, color: '#0047AB' },
    { type: 'Recruiters', percentage: 20, color: '#82C8E5' },
    { type: 'Guests', percentage: 10, color: '#E5E7EB' }
  ]

  const handleDeleteJob = (id) => {
    if (window.confirm('Are you sure you want to delete this job?')) {
      setJobs(jobs.filter(job => job.id !== id))
    }
  }

  const handleApproveJob = (id) => {
    setJobs(jobs.map(job => job.id === id ? { ...job, status: 'Approved' } : job))
    alert('Job approved successfully!')
  }

  const handleRejectJob = (id) => {
    setJobs(jobs.map(job => job.id === id ? { ...job, status: 'Rejected' } : job))
    alert('Job rejected!')
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
    alert('Job updated successfully!')
  }

  const handleUpdateSettings = () => {
    if (adminSettings.newPassword !== adminSettings.confirmPassword) {
      alert('New passwords do not match!')
      return
    }
    if (adminSettings.newPassword && adminSettings.newPassword.length < 6) {
      alert('Password must be at least 6 characters!')
      return
    }
    alert('Settings updated successfully!')
    setAdminSettings({ ...adminSettings, currentPassword: '', newPassword: '', confirmPassword: '' })
  }

  const maxTraffic = Math.max(...trafficData.map(d => d.visitors + d.applications))

  const renderContent = () => {
    // Manage Users Section
    if (activeMenu === 'users') {
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
              Jobseekers ({jobseekers.length})
            </h3>
            <div style={{ background: 'white', borderRadius: '12px', border: '1px solid #E5E7EB', overflow: 'hidden' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
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
                  {jobseekers.map((user, index) => (
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
          </div>

          {/* Employers Section */}
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#1F2937', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0047AB" strokeWidth="2">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
              </svg>
              Employers ({employers.length})
            </h3>
            <div style={{ background: 'white', borderRadius: '12px', border: '1px solid #E5E7EB', overflow: 'hidden' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
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
                  {employers.map((emp, index) => (
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
          </div>
        </div>
      )
    }

    // Review Jobs Section
    if (activeMenu === 'jobs') {
      return (
        <div>
          <h2 style={{ marginTop: 0, marginBottom: '0.5rem', color: '#1F2937', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
            </svg>
            Review Jobs
          </h2>
          <p style={{ color: '#6B7280', marginBottom: '2rem' }}>Approve or reject job postings from employers</p>

          <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
            <span style={{ padding: '0.5rem 1rem', background: '#FEF3C7', color: '#D97706', borderRadius: '8px', fontSize: '0.875rem', fontWeight: '600' }}>
              Pending: {jobs.filter(j => j.status === 'Pending').length}
            </span>
            <span style={{ padding: '0.5rem 1rem', background: '#D1FAE5', color: '#059669', borderRadius: '8px', fontSize: '0.875rem', fontWeight: '600' }}>
              Approved: {jobs.filter(j => j.status === 'Approved').length}
            </span>
            <span style={{ padding: '0.5rem 1rem', background: '#FEE2E2', color: '#DC2626', borderRadius: '8px', fontSize: '0.875rem', fontWeight: '600' }}>
              Rejected: {jobs.filter(j => j.status === 'Rejected').length}
            </span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
            {jobs.map((job) => (
              <div key={job.id} style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', border: '1px solid #E5E7EB' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                      <h4 style={{ margin: 0, fontSize: '1.125rem' }}>{job.title}</h4>
                      <span style={{ 
                        padding: '0.25rem 0.75rem', 
                        borderRadius: '12px', 
                        fontSize: '0.75rem', 
                        fontWeight: '600',
                        background: job.status === 'Approved' ? '#D1FAE5' : job.status === 'Pending' ? '#FEF3C7' : '#FEE2E2',
                        color: job.status === 'Approved' ? '#059669' : job.status === 'Pending' ? '#D97706' : '#DC2626'
                      }}>{job.status}</span>
                    </div>
                    <div style={{ color: '#6B7280', fontSize: '0.875rem', marginBottom: '0.5rem' }}>
                      {job.company} • {job.location} • {job.type}
                    </div>
                    <div style={{ color: '#6B7280', fontSize: '0.875rem' }}>
                      Posted {job.postedDate} • {job.salary} • {job.applicants} applicants
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    <button onClick={() => handleViewJob(job)} style={{ background: '#0047AB', color: 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '8px', cursor: 'pointer', fontWeight: '600', fontSize: '0.875rem' }}>
                      View
                    </button>
                    {job.status === 'Pending' && (
                      <>
                        <button onClick={() => handleApproveJob(job.id)} style={{ background: '#059669', color: 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '8px', cursor: 'pointer', fontWeight: '600', fontSize: '0.875rem' }}>
                          Approve
                        </button>
                        <button onClick={() => handleRejectJob(job.id)} style={{ background: '#DC2626', color: 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '8px', cursor: 'pointer', fontWeight: '600', fontSize: '0.875rem' }}>
                          Reject
                        </button>
                      </>
                    )}
                    <button onClick={() => handleEditJob(job)} style={{ background: 'white', color: '#0047AB', border: '2px solid #0047AB', padding: '0.5rem 1rem', borderRadius: '8px', cursor: 'pointer', fontWeight: '600', fontSize: '0.875rem' }}>
                      Edit
                    </button>
                    <button onClick={() => handleDeleteJob(job.id)} style={{ background: '#ff4444', color: 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '8px', cursor: 'pointer', fontWeight: '600', fontSize: '0.875rem' }}>
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    }

    // Applications Section
    if (activeMenu === 'applications') {
      return (
        <div>
          <h2 style={{ marginTop: 0, marginBottom: '0.5rem', color: '#1F2937', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>
            </svg>
            Applications Management
          </h2>
          <p style={{ color: '#6B7280', marginBottom: '2rem' }}>View and manage all job applications</p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
            {jobs.filter(j => j.status === 'Approved').map((job) => (
              <div key={job.id} style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', border: '1px solid #E5E7EB', display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                <div>
                  <h4 style={{ margin: 0, marginBottom: '0.5rem', fontSize: '1.125rem' }}>{job.title}</h4>
                  <div style={{ color: '#6B7280', fontSize: '0.875rem', marginBottom: '0.5rem' }}>
                    {job.company} • {job.location} • {job.type}
                  </div>
                  <div style={{ color: '#6B7280', fontSize: '0.875rem' }}>
                    <strong style={{ color: '#0047AB' }}>{job.applicants}</strong> applicants • Posted {job.postedDate} • {job.salary}
                  </div>
                </div>
                <button onClick={() => handleViewJob(job)} style={{ background: '#0047AB', color: 'white', border: 'none', padding: '0.65rem 1.25rem', borderRadius: '8px', cursor: 'pointer', fontWeight: '600', fontSize: '0.875rem' }}>
                  View Applications
                </button>
              </div>
            ))}
          </div>
        </div>
      )
    }

    // Reports Section
    if (activeMenu === 'reports') {
      return (
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '2rem' }}>
            <div>
              <h2 style={{ marginTop: 0, marginBottom: '0.5rem', color: '#1F2937' }}>Platform Analytics</h2>
              <p style={{ color: '#6B7280', margin: 0 }}>Detailed insights into platform usage and performance.</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ display: 'flex', border: '1px solid #E5E7EB', borderRadius: '8px', overflow: 'hidden' }}>
                {['7days', '30days', 'ytd'].map((range) => (
                  <button 
                    key={range} 
                    onClick={() => setReportRange(range)}
                    style={{ 
                      padding: '0.5rem 1rem', 
                      border: 'none', 
                      background: reportRange === range ? '#0047AB' : 'white', 
                      color: reportRange === range ? 'white' : '#374151',
                      cursor: 'pointer',
                      fontSize: '0.875rem',
                      fontWeight: '500'
                    }}
                  >
                    {range === '7days' ? '7 Days' : range === '30days' ? '30 Days' : 'YTD'}
                  </button>
                ))}
              </div>
              <button style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', background: '#0047AB', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: '600', fontSize: '0.875rem' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Export Report
              </button>
            </div>
          </div>

          {/* Stats Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', marginBottom: '1.5rem' }}>
            {[
              { label: 'Total Candidates', ...reportStats.totalCandidates, icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0047AB" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg> },
              { label: 'Total Recruiters', ...reportStats.totalRecruiters, icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0047AB" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg> },
              { label: 'Active Job Posts', ...reportStats.activeJobPosts, icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg> },
              { label: 'Applications', ...reportStats.applications, icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0047AB" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg> }
            ].map((stat, i) => (
              <div key={i} style={{ background: 'white', padding: '1.25rem', borderRadius: '12px', border: '1px solid #E5E7EB' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '0.75rem' }}>
                  <span style={{ fontSize: '0.875rem', color: '#6B7280' }}>{stat.label}</span>
                  {stat.icon}
                </div>
                <div style={{ fontSize: '2rem', fontWeight: '700', color: '#1F2937', marginBottom: '0.25rem' }}>{stat.value.toLocaleString()}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.875rem', color: stat.positive ? '#059669' : '#DC2626' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    {stat.positive ? <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/> : <polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/>}
                  </svg>
                  {stat.change}
                </div>
              </div>
            ))}
          </div>

          {/* Charts */}
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.5rem' }}>
            {/* Traffic Trends */}
            <div style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', border: '1px solid #E5E7EB' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: '700', color: '#1F2937' }}>Platform Traffic Trends</h3>
                <button style={{ background: 'none', border: 'none', color: '#0047AB', fontWeight: '600', cursor: 'pointer', fontSize: '0.875rem' }}>View Details</button>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: '1rem', height: '200px' }}>
                {trafficData.map((data, i) => (
                  <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '2px' }}>
                      <div style={{ 
                        width: '100%', 
                        height: `${(data.visitors / maxTraffic) * 150}px`, 
                        background: '#82C8E5', 
                        borderRadius: '4px 4px 0 0' 
                      }}></div>
                      <div style={{ 
                        width: '100%', 
                        height: `${(data.applications / maxTraffic) * 150}px`, 
                        background: '#0047AB', 
                        borderRadius: '0 0 4px 4px' 
                      }}></div>
                    </div>
                    <span style={{ fontSize: '0.75rem', color: '#6B7280' }}>{data.day}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* User Types */}
            <div style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', border: '1px solid #E5E7EB' }}>
              <h3 style={{ margin: 0, marginBottom: '1.5rem', fontSize: '1rem', fontWeight: '700', color: '#1F2937' }}>User Types</h3>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {/* Donut Chart */}
                <div style={{ position: 'relative', width: '150px', height: '150px', marginBottom: '1.5rem' }}>
                  <svg viewBox="0 0 36 36" style={{ width: '100%', height: '100%', transform: 'rotate(-90deg)' }}>
                    <circle cx="18" cy="18" r="15.915" fill="none" stroke="#E5E7EB" strokeWidth="3.8"/>
                    <circle cx="18" cy="18" r="15.915" fill="none" stroke="#0047AB" strokeWidth="3.8" strokeDasharray="70 30" strokeDashoffset="0"/>
                    <circle cx="18" cy="18" r="15.915" fill="none" stroke="#82C8E5" strokeWidth="3.8" strokeDasharray="20 80" strokeDashoffset="-70"/>
                    <circle cx="18" cy="18" r="15.915" fill="none" stroke="#E5E7EB" strokeWidth="3.8" strokeDasharray="10 90" strokeDashoffset="-90"/>
                  </svg>
                  <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
                    <div style={{ fontSize: '1.25rem', fontWeight: '700', color: '#1F2937' }}>12.5k</div>
                    <div style={{ fontSize: '0.75rem', color: '#6B7280' }}>Total Users</div>
                  </div>
                </div>
                {/* Legend */}
                <div style={{ width: '100%' }}>
                  {userTypes.map((type, i) => (
                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.5rem 0' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: type.color }}></div>
                        <span style={{ fontSize: '0.875rem', color: '#4B5563' }}>{type.type}</span>
                      </div>
                      <span style={{ fontSize: '0.875rem', fontWeight: '600', color: '#1F2937' }}>{type.percentage}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }

    // Settings Section
    if (activeMenu === 'settings') {
      return (
        <div>
          <h2 style={{ marginTop: 0, marginBottom: '0.5rem', color: '#1F2937', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="3"/><path d="M12 1v6m0 6v6"/><path d="m4.93 4.93 4.24 4.24m5.66 5.66 4.24 4.24"/><path d="M1 12h6m6 0h6"/><path d="m4.93 19.07 4.24-4.24m5.66-5.66 4.24-4.24"/>
            </svg>
            Admin Settings
          </h2>
          <p style={{ color: '#6B7280', marginBottom: '2rem' }}>Update your admin credentials</p>

          <div style={{ maxWidth: '500px' }}>
            <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', border: '1px solid #E5E7EB' }}>
              <h3 style={{ margin: 0, marginBottom: '1.5rem', fontSize: '1.125rem', fontWeight: '700', color: '#1F2937' }}>Account Credentials</h3>
              
              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.875rem', color: '#374151' }}>Admin Email</label>
                <input 
                  type="email" 
                  value={adminSettings.email} 
                  onChange={(e) => setAdminSettings({...adminSettings, email: e.target.value})}
                  style={{ width: '100%', padding: '0.75rem', border: '1px solid #D1D5DB', borderRadius: '8px', fontSize: '0.875rem', boxSizing: 'border-box' }} 
                />
              </div>

              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.875rem', color: '#374151' }}>Current Password</label>
                <input 
                  type="password" 
                  value={adminSettings.currentPassword} 
                  onChange={(e) => setAdminSettings({...adminSettings, currentPassword: e.target.value})}
                  placeholder="Enter current password"
                  style={{ width: '100%', padding: '0.75rem', border: '1px solid #D1D5DB', borderRadius: '8px', fontSize: '0.875rem', boxSizing: 'border-box' }} 
                />
              </div>

              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.875rem', color: '#374151' }}>New Password</label>
                <input 
                  type="password" 
                  value={adminSettings.newPassword} 
                  onChange={(e) => setAdminSettings({...adminSettings, newPassword: e.target.value})}
                  placeholder="Enter new password"
                  style={{ width: '100%', padding: '0.75rem', border: '1px solid #D1D5DB', borderRadius: '8px', fontSize: '0.875rem', boxSizing: 'border-box' }} 
                />
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.875rem', color: '#374151' }}>Confirm New Password</label>
                <input 
                  type="password" 
                  value={adminSettings.confirmPassword} 
                  onChange={(e) => setAdminSettings({...adminSettings, confirmPassword: e.target.value})}
                  placeholder="Confirm new password"
                  style={{ width: '100%', padding: '0.75rem', border: '1px solid #D1D5DB', borderRadius: '8px', fontSize: '0.875rem', boxSizing: 'border-box' }} 
                />
              </div>

              <button 
                onClick={handleUpdateSettings}
                style={{ width: '100%', padding: '0.875rem', background: '#0047AB', color: 'white', border: 'none', borderRadius: '8px', fontWeight: '600', fontSize: '0.875rem', cursor: 'pointer' }}
              >
                Update Credentials
              </button>
            </div>
          </div>
        </div>
      )
    }

    // Dashboard (default)
    return (
      <div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
          {[
            { label: 'Total Users', value: stats.totalUsers, icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg> },
            { label: 'Total Jobs', value: stats.totalJobs, icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg> },
            { label: 'Applications', value: stats.totalApplications, icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg> },
            { label: 'Active Employers', value: stats.activeEmployers, icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg> }
          ].map((stat, i) => (
            <div key={i} style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', border: '1px solid #E5E7EB' }}>
              <div style={{ color: '#0047AB', opacity: 0.7, marginBottom: '1rem' }}>{stat.icon}</div>
              <div style={{ fontSize: '2rem', fontWeight: '700', color: '#1F2937', marginBottom: '0.25rem' }}>{stat.value.toLocaleString()}</div>
              <div style={{ fontSize: '0.875rem', color: '#6B7280' }}>{stat.label}</div>
            </div>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
          <div style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', border: '1px solid #E5E7EB' }}>
            <h3 style={{ fontSize: '1.125rem', fontWeight: '700', marginBottom: '1.5rem' }}>Recent Activity</h3>
            {[
              { action: 'New user registered', time: '5 mins ago', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg> },
              { action: 'Job posted by TechCorp', time: '15 mins ago', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg> },
              { action: 'Application submitted', time: '1 hour ago', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg> },
              { action: 'User profile updated', time: '2 hours ago', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg> }
            ].map((activity, i) => (
              <div key={i} style={{ padding: '1rem', background: '#F9FAFB', borderRadius: '8px', marginBottom: i < 3 ? '1rem' : 0, display: 'flex', gap: '0.75rem', alignItems: 'start' }}>
                <div style={{ color: '#0047AB', marginTop: '0.2rem' }}>{activity.icon}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: '600', fontSize: '0.875rem' }}>{activity.action}</div>
                  <div style={{ fontSize: '0.75rem', color: '#6B7280' }}>{activity.time}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', border: '1px solid #E5E7EB' }}>
            <h3 style={{ fontSize: '1.125rem', fontWeight: '700', marginBottom: '1.5rem' }}>Quick Actions</h3>
            <button onClick={() => setActiveMenu('users')} style={{ width: '100%', padding: '1rem', background: '#0047AB', color: 'white', border: 'none', borderRadius: '8px', fontWeight: '600', marginBottom: '0.75rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              Manage Users
            </button>
            <button onClick={() => setActiveMenu('jobs')} style={{ width: '100%', padding: '1rem', background: '#82C8E5', color: 'white', border: 'none', borderRadius: '8px', fontWeight: '600', marginBottom: '0.75rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
              Review Jobs
            </button>
            <button onClick={() => setActiveMenu('reports')} style={{ width: '100%', padding: '1rem', background: 'white', color: '#374151', border: '2px solid #E5E7EB', borderRadius: '8px', fontWeight: '600', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center', marginBottom: '0.75rem' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 20V10"/><path d="M12 20V4"/><path d="M6 20v-6"/></svg>
              View Reports
            </button>
            <button onClick={() => setActiveMenu('settings')} style={{ width: '100%', padding: '1rem', background: 'white', color: '#374151', border: '2px solid #E5E7EB', borderRadius: '8px', fontWeight: '600', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M12 1v6m0 6v6"/><path d="m4.93 4.93 4.24 4.24m5.66 5.66 4.24 4.24"/><path d="M1 12h6m6 0h6"/><path d="m4.93 19.07 4.24-4.24m5.66-5.66 4.24-4.24"/></svg>
              Platform Settings
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#F5F6FA' }}>
      {/* View Modal */}
      {showViewModal && selectedJob && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }} onClick={() => setShowViewModal(false)}>
          <div style={{ background: 'white', borderRadius: '16px', padding: '2rem', maxWidth: '600px', width: '90%', maxHeight: '80vh', overflowY: 'auto' }} onClick={(e) => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1.5rem' }}>
              <div>
                <h2 style={{ margin: 0, marginBottom: '0.5rem', color: '#1F2937' }}>{selectedJob.title}</h2>
                <div style={{ color: '#6B7280', fontSize: '0.875rem' }}>{selectedJob.company} • {selectedJob.location}</div>
              </div>
              <button onClick={() => setShowViewModal(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#6B7280', padding: '0.5rem' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              </button>
            </div>
            
            <div style={{ marginBottom: '1.5rem', display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <span style={{ background: '#EFF6FF', color: '#0047AB', padding: '0.5rem 1rem', borderRadius: '8px', fontSize: '0.875rem', fontWeight: '600' }}>{selectedJob.type}</span>
              <span style={{ background: '#F0FDF4', color: '#10B981', padding: '0.5rem 1rem', borderRadius: '8px', fontSize: '0.875rem', fontWeight: '600' }}>{selectedJob.salary}</span>
              <span style={{ background: '#FEF3C7', color: '#F59E0B', padding: '0.5rem 1rem', borderRadius: '8px', fontSize: '0.875rem', fontWeight: '600' }}>{selectedJob.category}</span>
            </div>

            <div style={{ marginBottom: '1.5rem', padding: '1rem', background: '#F9FAFB', borderRadius: '8px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span style={{ color: '#6B7280', fontSize: '0.875rem' }}>Posted Date:</span>
                <span style={{ fontWeight: '600', fontSize: '0.875rem' }}>{selectedJob.postedDate}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span style={{ color: '#6B7280', fontSize: '0.875rem' }}>Total Applicants:</span>
                <span style={{ fontWeight: '600', fontSize: '0.875rem', color: '#0047AB' }}>{selectedJob.applicants}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#6B7280', fontSize: '0.875rem' }}>Status:</span>
                <span style={{ 
                  background: selectedJob.status === 'Approved' ? '#10B981' : selectedJob.status === 'Pending' ? '#F59E0B' : '#DC2626', 
                  color: 'white', 
                  padding: '0.25rem 0.75rem', 
                  borderRadius: '12px', 
                  fontSize: '0.75rem', 
                  fontWeight: '600' 
                }}>{selectedJob.status}</span>
              </div>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '0.75rem', color: '#1F2937' }}>Job Description</h3>
              <p style={{ color: '#4B5563', lineHeight: '1.6', margin: 0 }}>{selectedJob.description}</p>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '0.75rem', color: '#1F2937' }}>Requirements</h3>
              <ul style={{ margin: 0, paddingLeft: '1.25rem', color: '#4B5563' }}>
                {selectedJob.requirements.map((req, i) => (
                  <li key={i} style={{ marginBottom: '0.5rem' }}>{req}</li>
                ))}
              </ul>
            </div>

            <div style={{ display: 'flex', gap: '1rem', paddingTop: '1rem', borderTop: '1px solid #E5E7EB' }}>
              <button onClick={() => { setShowViewModal(false); handleEditJob(selectedJob); }} style={{ flex: 1, padding: '0.75rem', background: '#0047AB', color: 'white', border: 'none', borderRadius: '8px', fontWeight: '600', cursor: 'pointer' }}>
                Edit Job
              </button>
              <button onClick={() => setShowViewModal(false)} style={{ flex: 1, padding: '0.75rem', background: 'white', color: '#374151', border: '2px solid #E5E7EB', borderRadius: '8px', fontWeight: '600', cursor: 'pointer' }}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {showEditModal && selectedJob && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }} onClick={() => setShowEditModal(false)}>
          <div style={{ background: 'white', borderRadius: '16px', padding: '2rem', maxWidth: '600px', width: '90%', maxHeight: '80vh', overflowY: 'auto' }} onClick={(e) => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <h2 style={{ margin: 0, color: '#1F2937' }}>Edit Job Posting</h2>
              <button onClick={() => setShowEditModal(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#6B7280', padding: '0.5rem' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              </button>
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.875rem', color: '#374151' }}>Job Title</label>
              <input type="text" value={selectedJob.title} onChange={(e) => setSelectedJob({...selectedJob, title: e.target.value})} style={{ width: '100%', padding: '0.75rem', border: '1px solid #D1D5DB', borderRadius: '8px', fontSize: '0.875rem', boxSizing: 'border-box' }} />
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.875rem', color: '#374151' }}>Company</label>
              <input type="text" value={selectedJob.company} onChange={(e) => setSelectedJob({...selectedJob, company: e.target.value})} style={{ width: '100%', padding: '0.75rem', border: '1px solid #D1D5DB', borderRadius: '8px', fontSize: '0.875rem', boxSizing: 'border-box' }} />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.875rem', color: '#374151' }}>Location</label>
                <input type="text" value={selectedJob.location} onChange={(e) => setSelectedJob({...selectedJob, location: e.target.value})} style={{ width: '100%', padding: '0.75rem', border: '1px solid #D1D5DB', borderRadius: '8px', fontSize: '0.875rem', boxSizing: 'border-box' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.875rem', color: '#374151' }}>Salary</label>
                <input type="text" value={selectedJob.salary} onChange={(e) => setSelectedJob({...selectedJob, salary: e.target.value})} style={{ width: '100%', padding: '0.75rem', border: '1px solid #D1D5DB', borderRadius: '8px', fontSize: '0.875rem', boxSizing: 'border-box' }} />
              </div>
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.875rem', color: '#374151' }}>Description</label>
              <textarea value={selectedJob.description} onChange={(e) => setSelectedJob({...selectedJob, description: e.target.value})} rows={4} style={{ width: '100%', padding: '0.75rem', border: '1px solid #D1D5DB', borderRadius: '8px', fontSize: '0.875rem', fontFamily: 'inherit', boxSizing: 'border-box', resize: 'vertical' }} />
            </div>

            <div style={{ display: 'flex', gap: '1rem', paddingTop: '1rem', borderTop: '1px solid #E5E7EB' }}>
              <button onClick={handleSaveEdit} style={{ flex: 1, padding: '0.75rem', background: '#0047AB', color: 'white', border: 'none', borderRadius: '8px', fontWeight: '600', cursor: 'pointer' }}>
                Save Changes
              </button>
              <button onClick={() => setShowEditModal(false)} style={{ flex: 1, padding: '0.75rem', background: 'white', color: '#374151', border: '2px solid #E5E7EB', borderRadius: '8px', fontWeight: '600', cursor: 'pointer' }}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Sidebar */}
      <aside style={{ width: '240px', background: 'white', borderRight: '1px solid #E5E7EB', display: 'flex', flexDirection: 'column', position: 'fixed', height: '100vh', overflowY: 'auto' }}>
        <div style={{ padding: '1.5rem 1.25rem', borderBottom: '1px solid #E5E7EB' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
  <svg
    width="40"
    height="40"
    viewBox="0 0 24 24"
    style={{ filter: 'drop-shadow(0 4px 12px rgba(0,71,171,0.25))' }}
  >
    <defs>
      <linearGradient id="jobnestGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0047AB" />
        <stop offset="100%" stopColor="#000080" />
      </linearGradient>
    </defs>
    <path
      d="M12 2L2 7l10 5 10-5-10-5zm0 7.3L4 6.2v11l8 4.8 8-4.8v-11l-8 3.1z"
      fill="url(#jobnestGradient)"
    />
  </svg>

  <div>
    <h2
      style={{
        fontSize: '1.2rem',
        fontWeight: '800',
        margin: 0,
        background: 'linear-gradient(135deg, #0047AB, #000080)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
      }}
    >
      JobNest
    </h2>
    <p style={{ fontSize: '0.75rem', color: '#6B7280', margin: 0 }}>
      Admin Panel
    </p>
  </div>
</div>
      
          </div>
        </div>

        <nav style={{ flex: 1, padding: '1rem 0.5rem' }}>
          {[
            { id: 'dashboard', label: 'Dashboard', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg> },
            { id: 'users', label: 'Manage Users', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg> },
            { id: 'jobs', label: 'Review Jobs', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg> },
            { id: 'applications', label: 'Applications', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg> },
            { id: 'reports', label: 'Reports', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 20V10"/><path d="M12 20V4"/><path d="M6 20v-6"/></svg> },
            { id: 'settings', label: 'Settings', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M12 1v6m0 6v6"/><path d="m4.93 4.93 4.24 4.24m5.66 5.66 4.24 4.24"/><path d="M1 12h6m6 0h6"/><path d="m4.93 19.07 4.24-4.24m5.66-5.66 4.24-4.24"/></svg> }
          ].map((item) => (
            <button key={item.id} onClick={() => setActiveMenu(item.id)} style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem 1rem', marginBottom: '0.25rem', border: 'none', background: activeMenu === item.id ? '#EFF6FF' : 'transparent', color: activeMenu === item.id ? '#0047AB' : '#6B7280', fontSize: '0.875rem', fontWeight: activeMenu === item.id ? '600' : '500', cursor: 'pointer', borderRadius: '8px', textAlign: 'left' }}>
              {item.icon}
              {item.label}
            </button>
          ))}
          
          <button onClick={handleBackToHome} style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem 1rem', marginTop: '0.5rem', border: 'none', background: 'transparent', color: '#6B7280', fontSize: '0.875rem', fontWeight: '500', cursor: 'pointer', borderRadius: '8px', textAlign: 'left' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
              <polyline points="16 17 21 12 16 7"/>
              <line x1="21" y1="12" x2="9" y2="12"/>
            </svg>
            <span>Back to Home</span>
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main style={{ marginLeft: '240px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <header style={{ background: 'white', borderBottom: '1px solid #E5E7EB', padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1 style={{ fontSize: '1.75rem', fontWeight: '700', color: '#1F2937', margin: 0 }}>Admin Dashboard</h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <button style={{ background: 'transparent', border: 'none', cursor: 'pointer', position: 'relative', padding: '0.5rem' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
              </svg>
              <span style={{ position: 'absolute', top: '6px', right: '6px', width: '8px', height: '8px', background: '#EF4444', borderRadius: '50%', border: '2px solid white' }}></span>
            </button>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.5rem 1rem', background: '#F9FAFB', borderRadius: '8px', cursor: 'pointer' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#0047AB', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: '600', fontSize: '0.875rem' }}>Y</div>
              <div>
                <div style={{ fontSize: '0.875rem', fontWeight: '600', color: '#1F2937' }}>Yusra</div>
                <div style={{ fontSize: '0.75rem', color: '#6B7280' }}>Administrator</div>
              </div>
            </div>
          </div>
        </header>

        <div style={{ padding: '2rem', flex: 1, overflowY: 'auto' }}>
          {renderContent()}
        </div>
      </main>
      <style>{`
  @media (max-width: 1024px) {
    aside {
      width: 200px !important;
    }
    main {
      margin-left: 200px !important;
    }
  }

  @media (max-width: 768px) {
    aside {
      position: fixed !important;
      transform: translateX(-100%);
    }

    main {
      margin-left: 0 !important;
    }
  }

  @media (max-width: 480px) {
    header {
      padding: 1rem !important;
    }
  }
`}</style>

    </div>
  )
}

export default AdminDashboard