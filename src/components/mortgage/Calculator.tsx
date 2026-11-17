import { useMemo, useState } from 'react'
import { formatPrice } from '../../lib/format'

export function Calculator({ defaultPrice = 1200000 }: { defaultPrice?: number }) {
  const [price, setPrice] = useState(defaultPrice)
  const [down, setDown] = useState(20)
  const [rate, setRate] = useState(6.5)
  const [years, setYears] = useState(30)
  const [tax, setTax] = useState(12000)
  const [hoa, setHoa] = useState(0)

  const payment = useMemo(() => {
    const principal = price * (1 - down / 100)
    const monthlyRate = rate / 100 / 12
    const n = years * 12
    const mortgage =
      monthlyRate === 0
        ? principal / n
        : (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -n))
    return mortgage + tax / 12 + hoa
  }, [price, down, rate, years, tax, hoa])

  return (
    <div className="calc-grid">
      <div className="panel form-stack">
        <div className="field">
          <label htmlFor="price">Home price</label>
          <input
            id="price"
            type="number"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
          />
        </div>
        <div className="field">
          <label htmlFor="down">Down payment (%)</label>
          <input
            id="down"
            type="number"
            value={down}
            onChange={(e) => setDown(Number(e.target.value))}
          />
        </div>
        <div className="field">
          <label htmlFor="rate">Interest rate (%)</label>
          <input
            id="rate"
            type="number"
            step="0.01"
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
          />
        </div>
        <div className="field">
          <label htmlFor="years">Term (years)</label>
          <select id="years" value={years} onChange={(e) => setYears(Number(e.target.value))}>
            <option value={15}>15</option>
            <option value={20}>20</option>
            <option value={30}>30</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="tax">Annual property tax</label>
          <input
            id="tax"
            type="number"
            value={tax}
            onChange={(e) => setTax(Number(e.target.value))}
          />
        </div>
        <div className="field">
          <label htmlFor="hoa">Monthly HOA</label>
          <input
            id="hoa"
            type="number"
            value={hoa}
            onChange={(e) => setHoa(Number(e.target.value))}
          />
        </div>
      </div>
      <div className="calc-result">
        <span>Estimated monthly payment</span>
        <strong>{formatPrice(Math.round(payment))}</strong>
        <p style={{ opacity: 0.85, maxWidth: '18rem', marginInline: 'auto' }}>
          Includes principal, interest, taxes, and HOA. Insurance and PMI not included.
        </p>
      </div>
    </div>
  )
}
