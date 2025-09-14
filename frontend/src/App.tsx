import { Route, Routes, Navigate } from 'react-router-dom'
import AppLayout from './layouts/AppLayout'
import Home from './pages/Home'
import FindKos from './pages/FindKos'
import Orders from './pages/Orders'
import CityShow from './pages/CityShow'
import CategoryShow from './pages/CategoryShow'
import KosIndex from './pages/KosIndex'
import KosShow from './pages/KosShow'
import BottomNav from './components/BottomNav'
import AdminDashboard from './admin/pages/Dashboard'
import AdminBoardingHouses from './admin/pages/BoardingHouses'
import AdminCategories from './admin/pages/Categories'
import AdminCities from './admin/pages/Cities'
import AdminTestimonials from './admin/pages/Testimonials'
import AdminTransactions from './admin/pages/Transactions'

function App() {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/find" element={<FindKos />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/city/:slug" element={<CityShow />} />
        <Route path="/category/:slug" element={<CategoryShow />} />
        <Route path="/kos" element={<KosIndex />} />
        <Route path="/kos/:slug" element={<KosShow />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/boarding-houses" element={<AdminBoardingHouses />} />
        <Route path="/admin/categories" element={<AdminCategories />} />
        <Route path="/admin/cities" element={<AdminCities />} />
        <Route path="/admin/testimonials" element={<AdminTestimonials />} />
        <Route path="/admin/transactions" element={<AdminTransactions />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <BottomNav />
    </AppLayout>
  )
}

export default App
