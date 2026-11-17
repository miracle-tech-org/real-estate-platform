import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import type { User } from '../types'

interface AppContextValue {
  favorites: string[]
  compare: string[]
  user: User | null
  toggleFavorite: (id: string) => void
  toggleCompare: (id: string) => void
  clearCompare: () => void
  login: (name: string, email: string) => void
  logout: () => void
  register: (name: string, email: string) => void
}

const AppContext = createContext<AppContextValue | null>(null)

const FAV_KEY = 'northline-favorites'
const COMPARE_KEY = 'northline-compare'
const USER_KEY = 'northline-user'

function readJson<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key)
    return raw ? (JSON.parse(raw) as T) : fallback
  } catch {
    return fallback
  }
}

export function AppProviders({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<string[]>(() => readJson(FAV_KEY, []))
  const [compare, setCompare] = useState<string[]>(() => readJson(COMPARE_KEY, []))
  const [user, setUser] = useState<User | null>(() => readJson(USER_KEY, null))

  useEffect(() => {
    localStorage.setItem(FAV_KEY, JSON.stringify(favorites))
  }, [favorites])

  useEffect(() => {
    localStorage.setItem(COMPARE_KEY, JSON.stringify(compare))
  }, [compare])

  useEffect(() => {
    if (user) localStorage.setItem(USER_KEY, JSON.stringify(user))
    else localStorage.removeItem(USER_KEY)
  }, [user])

  const value = useMemo<AppContextValue>(
    () => ({
      favorites,
      compare,
      user,
      toggleFavorite: (id) => {
        setFavorites((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]))
      },
      toggleCompare: (id) => {
        setCompare((prev) => {
          if (prev.includes(id)) return prev.filter((x) => x !== id)
          if (prev.length >= 4) return prev
          return [...prev, id]
        })
      },
      clearCompare: () => setCompare([]),
      login: (name, email) => setUser({ id: 'u1', name, email }),
      logout: () => setUser(null),
      register: (name, email) => setUser({ id: 'u1', name, email }),
    }),
    [favorites, compare, user],
  )

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must be used within AppProviders')
  return ctx
}
