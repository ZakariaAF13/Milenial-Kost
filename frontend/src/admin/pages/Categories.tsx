import AdminLayout from '../AdminLayout'
import { useEffect, useState } from 'react'
import { api } from '../../lib/api'

const AdminCategories = () => {
  const [items, setItems] = useState<Array<any>>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [q, setQ] = useState('')

  const load = async () => {
    try {
      setLoading(true)
      setError(null)
      const res = await api.get('/api/admin/categories')
      const data = Array.isArray(res) ? res : res?.data || []
      setItems(data)
    } catch (e: any) {
      setError(e?.message || 'Gagal memuat kategori')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    load()
  }, [])

  const onCreate = async () => {
    const name = typeof window !== 'undefined' ? window.prompt('Nama kategori baru:') : ''
    if (!name) return
    try {
      await api.post('/api/admin/categories', { name })
      await load()
    } catch (e: any) {
      alert(e?.message || 'Gagal membuat kategori')
    }
  }

  const onDelete = async (id: number) => {
    if (!confirm('Yakin hapus kategori ini?')) return
    try {
      await api.delete(`/api/admin/categories/${id}`)
      await load()
    } catch (e: any) {
      alert(e?.message || 'Gagal menghapus kategori')
    }
  }

  return (
    <AdminLayout>
      <h2 className="font-bold text-xl mb-4">Categories</h2>
      <div className="flex items-center justify-between mb-4">
        <input
          className="p-[10px] rounded-[18px] border border-[#F1F2F6] w-full max-w-[320px]"
          placeholder="Search..."
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
        <button onClick={onCreate} className="ml-4 btn-primary">Create</button>
      </div>
      {error && <div className="mb-4 p-3 rounded-lg bg-red-50 text-red-700 border border-red-200">{error}</div>}
      <div className="table-responsive rounded-3xl border border-[#F1F2F6] overflow-hidden">
        <table className="w-full table-sm">
          <thead className="bg-[#F5F6F8]">
            <tr>
              <th className="text-left p-4">Name</th>
              <th className="text-left p-4">Boarding Houses</th>
              <th className="text-left p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading && (
              <tr>
                <td className="p-4" colSpan={3}>Loading...</td>
              </tr>
            )}
            {!loading && items
              .filter((c) => (q ? (c.name || '').toLowerCase().includes(q.toLowerCase()) : true))
              .map((c) => (
              <tr key={c.id} className="border-b border-[#F1F2F6]">
                <td className="p-4">{c.name}</td>
                <td className="p-4">-</td>
                <td className="p-4 whitespace-nowrap">
                  <button className="btn-outline btn-sm mr-2" disabled>Edit</button>
                  <button onClick={() => onDelete(c.id)} className="btn-danger-outline btn-sm">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  )
}

export default AdminCategories
