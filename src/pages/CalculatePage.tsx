import { Calculator } from '../components/mortgage/Calculator'

export function CalculatePage() {
  return (
    <section className="section-tight">
      <div className="container">
        <div className="page-hero">
          <span className="eyebrow">Mortgage</span>
          <h1>Estimate your monthly payment</h1>
          <p>
            Model price, down payment, rate, taxes, and HOA. Figures are illustrative mock
            calculations only.
          </p>
        </div>
        <Calculator />
      </div>
    </section>
  )
}
