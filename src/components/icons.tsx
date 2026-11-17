import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

export function IconSearch(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-3.5-3.5" strokeLinecap="round" />
    </svg>
  )
}

export function IconHeart(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path
        d="M12 20s-7-4.4-9.2-8.2C1.2 9.1 2.4 6 5.3 5.3 7.1 4.8 8.9 5.5 10 6.8 11.1 5.5 12.9 4.8 14.7 5.3c2.9.7 4.1 3.8 2.5 6.5C19 15.6 12 20 12 20z"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function IconHeartFilled(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 20s-7-4.4-9.2-8.2C1.2 9.1 2.4 6 5.3 5.3 7.1 4.8 8.9 5.5 10 6.8 11.1 5.5 12.9 4.8 14.7 5.3c2.9.7 4.1 3.8 2.5 6.5C19 15.6 12 20 12 20z" />
    </svg>
  )
}

export function IconCompare(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M4 7h10M14 7l-3-3M14 7l-3 3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 17H10M10 17l3-3M10 17l3 3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function IconMapPin(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M12 21s7-5.2 7-11a7 7 0 10-14 0c0 5.8 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  )
}

export function IconBed(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M3 18v-5a3 3 0 013-3h12a3 3 0 013 3v5" strokeLinecap="round" />
      <path d="M3 18h18M6 10V7a2 2 0 012-2h4a2 2 0 012 2v3" strokeLinecap="round" />
    </svg>
  )
}

export function IconBath(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M4 12h16v2a4 4 0 01-4 4H8a4 4 0 01-4-4v-2z" strokeLinejoin="round" />
      <path d="M6 12V6a2 2 0 012-2h1" strokeLinecap="round" />
    </svg>
  )
}

export function IconMenu(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
    </svg>
  )
}

export function IconClose(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
    </svg>
  )
}

export function IconStar(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 3.5l2.4 4.9 5.4.8-3.9 3.8.9 5.4L12 16.8 7.2 18.4l.9-5.4-3.9-3.8 5.4-.8L12 3.5z" />
    </svg>
  )
}

export function IconArrow(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
