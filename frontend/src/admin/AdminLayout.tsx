import type { PropsWithChildren } from 'react'
import { Link } from 'react-router-dom'

const AdminLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="min-h-screen max-w-[1280px] mx-auto p-4 md:p-6">
      <header className="hero-blue-bg text-white rounded-3xl p-5 mb-6 flex items-center justify-between">
        <h1 className="text-[28px] md:text-[32px] font-bold">Admin</h1>
        <nav className="flex items-center gap-3 text-sm">
          <Link to="/admin" className="p-[6px_12px] rounded-[18px] border border-[#F1F2F6] bg-white text-[#070707]">Dashboard</Link>
          <Link to="/" className="p-[6px_12px] rounded-[18px] border border-[#F1F2F6] bg-white text-[#070707]">Public UI</Link>
        </nav>
      </header>
      <main className="bg-white rounded-3xl border border-[#F1F2F6] p-6">{children}</main>
    </div>
  )
}

export default AdminLayout
