import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AuthProvider } from './context/AuthContext'
import CookieConsent from './components/CookieConsent'
import SakuraCanvas from './components/SakuraCanvas'
import Header from './components/Header'
import Footer from './components/Footer'

import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import FaqPage from './pages/FaqPage'
import RegulationsPage from './pages/RegulationsPage'
import SocialMediaPage from './pages/SocialMediaPage'
import PolitykaPage from './pages/PolitykaPage'
import ZwrotyPage from './pages/ZwrotyPage'
import KontaktPage from './pages/KontaktPage'
import AdminPage from './pages/AdminPage'
import MojeZamowieniaPage from './pages/MojeZamowieniaPage'
import HistoriaVoucherowPage from './pages/HistoriaVoucherowPage'
import PlatnoscSukces from './pages/PlatnoscSukces'
import PlatnoscBlad from './pages/PlatnoscBlad'
import AuthCallback from './pages/AuthCallback'
import NotFound from './pages/NotFound'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      staleTime: 60 * 1000,
      refetchOnWindowFocus: false,
    },
  },
})

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AuthProvider>
          <ScrollToTop />
          <SakuraCanvas />
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/faq" element={<FaqPage />} />
              <Route path="/regulamin" element={<RegulationsPage />} />
              <Route path="/social-media" element={<SocialMediaPage />} />
              <Route path="/polityka" element={<PolitykaPage />} />
              <Route path="/zwroty" element={<ZwrotyPage />} />
              <Route path="/kontakt" element={<KontaktPage />} />
              <Route path="/admin" element={<AdminPage />} />
              <Route path="/moje-zamowienia" element={<MojeZamowieniaPage />} />
              <Route path="/platnosc/sukces" element={<PlatnoscSukces />} />
              <Route path="/platnosc/blad" element={<PlatnoscBlad />} />
              <Route path="/auth/callback" element={<AuthCallback />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <CookieConsent />
        </AuthProvider>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App