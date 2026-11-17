import { useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'

export function SearchBar({ dark = false }: { dark?: boolean }) {
  const navigate = useNavigate()
  const [query, setQuery] = useState('')
  const [status, setStatus] = useState('for-sale')

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    const params = new URLSearchParams()
    if (query.trim()) params.set('q', query.trim())
    if (status !== 'all') params.set('status', status)
    navigate(`/listings?${params.toString()}`)
  }

  return (
    <form className="search-bar" onSubmit={onSubmit} style={dark ? undefined : { marginTop: 0 }}>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search city, neighborhood, or address"
        aria-label="Search listings"
      />
      <select value={status} onChange={(e) => setStatus(e.target.value)} aria-label="Listing status">
        <option value="for-sale">Buy</option>
        <option value="for-rent">Rent</option>
        <option value="all">All</option>
      </select>
      <button type="submit" className="btn btn-primary">
        Search homes
      </button>
    </form>
  )
}
