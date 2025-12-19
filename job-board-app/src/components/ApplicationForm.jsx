import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ApplicationForm = ({ job, onBack }) => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({ fullName: '', email: '', phone: '', resume: null, coverLetter: '' })
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 2000))
    setSubmitting(false)
    setSuccess(true)
    setTimeout(() => navigate('/my-applications'), 2000)
  }

  if (success) {
    return (
      <div className="card fade-in" style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center', padding: '3rem' }}>
        <div style={{ width: '80px', height: '80px', background: 'var(--gradient-accent)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem' }}>
          ✓
        </div>
        <h2>Application Submitted!</h2>
        <p style={{ color: 'var(--text-secondary)' }}>Your application for <strong>{job.title}</strong> has been submitted.</p>
      </div>
    )
  }

  return (
    <div className="card fade-in">
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem', paddingBottom: '1.5rem', borderBottom: '1px solid var(--border)' }}>
        <button onClick={onBack} className="btn btn-outline btn-sm">← Back</button>
        <div>
          <h2 style={{ marginBottom: '0.25rem' }}>Apply for {job.title}</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginBottom: '0' }}>{job.company}</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.875rem' }}>Full Name *</label>
          <input type="text" required className="input" placeholder="Enter your full name" value={formData.fullName} onChange={(e) => setFormData({...formData, fullName: e.target.value})} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.875rem' }}>Email *</label>
            <input type="email" required className="input" placeholder="Enter your Active Email ID" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.875rem' }}>Phone *</label>
            <input type="tel" required className="input" placeholder="Enter your phone number" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
          </div>
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.875rem' }}>Resume/CV *</label>
          <input type="file" required accept=".pdf,.doc,.docx" className="input" onChange={(e) => setFormData({...formData, resume: e.target.files[0]})} />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.875rem' }}>Cover Letter *</label>
          <textarea required rows="6" className="input" placeholder="Tell us why you're a great fit..." value={formData.coverLetter} onChange={(e) => setFormData({...formData, coverLetter: e.target.value})} style={{ resize: 'vertical' }} />
        </div>

        <div style={{ display: 'flex', gap: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--border)' }}>
          <button type="button" onClick={onBack} className="btn btn-outline" style={{ flex: 1 }}>Cancel</button>
          <button type="submit" disabled={submitting} className="btn btn-gradient" style={{ flex: 2 }}>
            {submitting ? 'Submitting...' : 'Submit Application'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default ApplicationForm