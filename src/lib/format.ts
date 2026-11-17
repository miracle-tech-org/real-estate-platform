export function formatPrice(price: number, status?: string) {
  const formatted = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(price)

  if (status === 'for-rent') return `${formatted}/mo`
  return formatted
}

export function formatNumber(value: number) {
  return new Intl.NumberFormat('en-US').format(value)
}

export function formatSqft(sqft: number) {
  if (!sqft) return '—'
  return `${formatNumber(sqft)} sqft`
}

export function formatStatus(status: string) {
  const map: Record<string, string> = {
    'for-sale': 'For Sale',
    'for-rent': 'For Rent',
    pending: 'Pending',
    sold: 'Sold',
  }
  return map[status] ?? status
}

export function formatType(type: string) {
  return type.charAt(0).toUpperCase() + type.slice(1)
}

export function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
