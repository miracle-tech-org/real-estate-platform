import { useState, type FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useApp } from '../context/AppProviders'

export function LoginPage() {
  const { login } = useApp()
  const navigate = useNavigate()
  const [email, setEmail] = useState('alex@example.com')
  const [name, setName] = useState('Alex Rivera')

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    login(name, email)
    navigate('/dashboard')
  }

  return (
    <section className="section">
      <div className="container">
        <form className="panel form-stack auth-card" onSubmit={onSubmit}>
          <span className="eyebrow">Welcome back</span>
          <h1>Sign in</h1>
          <p className="muted">Mock auth — any name and email will create a local session.</p>
          <div className="field">
            <label htmlFor="login-name">Name</label>
            <input id="login-name" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className="field">
            <label htmlFor="login-email">Email</label>
            <input
              id="login-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="field">
            <label htmlFor="login-password">Password</label>
            <input id="login-password" type="password" defaultValue="password" required />
          </div>
          <button type="submit" className="btn btn-primary">
            Sign in
          </button>
          <p className="muted">
            New here? <Link to="/register">Create an account</Link>
          </p>
        </form>
      </div>
    </section>
  )
}
