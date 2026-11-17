import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AppProviders } from './context/AppProviders'
import { Layout } from './components/layout/Layout'
import { HomePage } from './pages/HomePage'
import { ListingsPage } from './pages/ListingsPage'
import { ListingDetailPage } from './pages/ListingDetailPage'
import { MapPage } from './pages/MapPage'
import { AgentsPage } from './pages/AgentsPage'
import { AgentDetailPage } from './pages/AgentDetailPage'
import { NeighborhoodsPage } from './pages/NeighborhoodsPage'
import { NeighborhoodDetailPage } from './pages/NeighborhoodDetailPage'
import { BlogPage } from './pages/BlogPage'
import { BlogDetailPage } from './pages/BlogDetailPage'
import { CalculatePage } from './pages/CalculatePage'
import { FavoritesPage } from './pages/FavoritesPage'
import { ComparePage } from './pages/ComparePage'
import { LoginPage } from './pages/LoginPage'
import { RegisterPage } from './pages/RegisterPage'
import { DashboardPage } from './pages/DashboardPage'
import { ContactPage } from './pages/ContactPage'
import { NotFoundPage } from './pages/NotFoundPage'

export default function App() {
  return (
    <AppProviders>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="listings" element={<ListingsPage />} />
            <Route path="listings/:slug" element={<ListingDetailPage />} />
            <Route path="map" element={<MapPage />} />
            <Route path="agents" element={<AgentsPage />} />
            <Route path="agents/:id" element={<AgentDetailPage />} />
            <Route path="neighborhoods" element={<NeighborhoodsPage />} />
            <Route path="neighborhoods/:slug" element={<NeighborhoodDetailPage />} />
            <Route path="blog" element={<BlogPage />} />
            <Route path="blog/:slug" element={<BlogDetailPage />} />
            <Route path="calculate" element={<CalculatePage />} />
            <Route path="favorites" element={<FavoritesPage />} />
            <Route path="compare" element={<ComparePage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="home" element={<Navigate to="/" replace />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProviders>
  )
}
