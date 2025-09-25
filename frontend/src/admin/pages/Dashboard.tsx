import AdminLayout from '../AdminLayout'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <AdminLayout>
      <div className="responsive-grid gap-4">
        <Link to="/admin/boarding-houses" className="p-5 rounded-3xl border border-[#F1F2F6] bg-white">
          <h2 className="font-semibold text-xl">Boarding Houses</h2>
          <p className="text-sm text-ngekos-grey">CRUD data kos</p>
        </Link>
        <Link to="/admin/categories" className="p-5 rounded-3xl border border-[#F1F2F6] bg-white">
          <h2 className="font-semibold text-xl">Categories</h2>
          <p className="text-sm text-ngekos-grey">Kelola kategori</p>
        </Link>
        <Link to="/admin/cities" className="p-5 rounded-3xl border border-[#F1F2F6] bg-white">
          <h2 className="font-semibold text-xl">Cities</h2>
          <p className="text-sm text-ngekos-grey">Kelola kota</p>
        </Link>
        <Link to="/admin/testimonials" className="p-5 rounded-3xl border border-[#F1F2F6] bg-white">
          <h2 className="font-semibold text-xl">Testimonials</h2>
          <p className="text-sm text-ngekos-grey">Kelola ulasan</p>
        </Link>
        <Link to="/admin/transactions" className="p-5 rounded-3xl border border-[#F1F2F6] bg-white">
          <h2 className="font-semibold text-xl">Transactions</h2>
          <p className="text-sm text-ngekos-grey">Kelola pemesanan</p>
        </Link>
      </div>
    </AdminLayout>
  )
}

export default Dashboard
