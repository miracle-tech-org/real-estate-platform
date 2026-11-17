import { useState, type FormEvent } from 'react'

export function ContactPage() {
  const [sent, setSent] = useState(false)

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section className="section-tight">
      <div className="container">
        <div className="page-hero">
          <span className="eyebrow">Contact</span>
          <h1>Talk with Northline</h1>
          <p>Buying, selling, or investing — send a note and we will route you to the right advisor.</p>
        </div>
        <div className="split">
          {sent ? (
            <div className="panel">
              <h2>Message received</h2>
              <p className="muted" style={{ marginTop: '0.75rem' }}>
                This is a mock form. In a production app, this would create a CRM lead.
              </p>
            </div>
          ) : (
            <form className="panel form-stack form-card" style={{ maxWidth: 'none' }} onSubmit={onSubmit}>
              <div className="field">
                <label htmlFor="c-name">Name</label>
                <input id="c-name" required />
              </div>
              <div className="field">
                <label htmlFor="c-email">Email</label>
                <input id="c-email" type="email" required />
              </div>
              <div className="field">
                <label htmlFor="c-topic">I am interested in</label>
                <select id="c-topic" defaultValue="buying">
                  <option value="buying">Buying</option>
                  <option value="selling">Selling</option>
                  <option value="renting">Renting</option>
                  <option value="investing">Investing</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="c-msg">Message</label>
                <textarea id="c-msg" required placeholder="Tell us what you are looking for..." />
              </div>
              <button type="submit" className="btn btn-primary">
                Send message
              </button>
            </form>
          )}
          <div className="panel">
            <h3>Office</h3>
            <p className="muted" style={{ marginTop: '0.75rem', lineHeight: 1.8 }}>
              480 Mission Street
              <br />
              San Francisco, CA 94105
              <br />
              (415) 555-0100
              <br />
              hello@northline.realty
              <br />
              Mon–Sat · 9am–6pm
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
