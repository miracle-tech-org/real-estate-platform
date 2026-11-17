import { useState, type FormEvent } from 'react'

export function InquiryForm({ propertyTitle }: { propertyTitle: string }) {
  const [sent, setSent] = useState(false)

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    setSent(true)
  }

  if (sent) {
    return (
      <div className="panel">
        <h3>Request sent</h3>
        <p className="muted" style={{ marginTop: '0.6rem' }}>
          Thanks — a Northline advisor will follow up about {propertyTitle}. (Mock form; nothing was
          emailed.)
        </p>
      </div>
    )
  }

  return (
    <form className="panel form-stack" onSubmit={onSubmit}>
      <h3>Request a tour</h3>
      <p className="muted">Ask about showings, disclosures, or comparable sales.</p>
      <div className="field">
        <label htmlFor="inq-name">Name</label>
        <input id="inq-name" name="name" required placeholder="Your name" />
      </div>
      <div className="field">
        <label htmlFor="inq-email">Email</label>
        <input id="inq-email" name="email" type="email" required placeholder="you@email.com" />
      </div>
      <div className="field">
        <label htmlFor="inq-phone">Phone</label>
        <input id="inq-phone" name="phone" placeholder="(555) 000-0000" />
      </div>
      <div className="field">
        <label htmlFor="inq-msg">Message</label>
        <textarea
          id="inq-msg"
          name="message"
          defaultValue={`I'm interested in ${propertyTitle}.`}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Send inquiry
      </button>
    </form>
  )
}
