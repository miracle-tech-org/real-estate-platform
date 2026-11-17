import { useState, type FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useApp } from '../context/AppProviders'

export function RegisterPage() {
  const { register } = useApp()
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    register(name, email)
    navigate('/dashboard')
  }

  return (
    <section className="section">
      <div className="container">
        <form className="panel form-stack auth-card" onSubmit={onSubmit}>
          <span className="eyebrow">Get started</span>
          <h1>Create account</h1>
          <p className="muted">Mock registration stores a profile in local storage only.</p>
          <div className="field">
            <label htmlFor="reg-name">Full name</label>
            <input id="reg-name" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className="field">
            <label htmlFor="reg-email">Email</label>
            <input
              id="reg-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="field">
            <label htmlFor="reg-password">Password</label>
            <input id="reg-password" type="password" required minLength={6} />
          </div>
          <button type="submit" className="btn btn-primary">
            Create account
          </button>
          <p className="muted">
            Already registered? <Link to="/login">Sign in</Link>
          </p>
        </form>
      </div>
    </section>
  )
}
