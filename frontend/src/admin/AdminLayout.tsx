import type { PropsWithChildren } from 'react'
import { Link } from 'react-router-dom'

const AdminLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="min-h-screen max-w-[1024px] mx-auto p-6">
      <header className="flex items-center justify-between mb-6">
        <h1 className="text-[32px] font-bold">Admin</h1>
        <nav className="flex items-center gap-4 text-sm">
          <Link to="/admin" className="p-[6px_12px] rounded-[18px] border border-[#F1F2F6] bg-white">Dashboard</Link>
          <Link to="/" className="p-[6px_12px] rounded-[18px] border border-[#F1F2F6] bg-white">Public UI</Link>
        </nav>
      </header>
      <main className="bg-white rounded-3xl border border-[#F1F2F6] p-6">{children}</main>
    </div>
  )
}

export default AdminLayout
