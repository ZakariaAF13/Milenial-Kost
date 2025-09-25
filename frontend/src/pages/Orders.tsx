import { useState } from 'react'
import { api } from '../lib/api'

const Orders = () => {
  const [code, setCode] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [result, setResult] = useState<any>(null)

  const onCheck = async () => {
    try {
      setLoading(true)
      setError(null)
      setResult(null)
      if (!code.trim()) {
        setError('Silakan masukkan kode booking terlebih dahulu')
        return
      }
      const res = await api.get(`/api/orders/check?code=${encodeURIComponent(code.trim())}`)
      setResult(res)
    } catch (e: any) {
      setError(e?.message || 'Gagal memeriksa kode booking')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="p-5">
      <h1 className="font-bold text-xl mb-4">Orders</h1>
      <p className="text-ngekos-grey">Cek status pemesanan kos Anda di sini.</p>
      <div className="mt-6 rounded-[30px] border border-[#F1F2F6] p-7 bg-white">
        <label className="block text-sm text-ngekos-grey mb-3">Kode Booking</label>
        <div className="mt-5 flex items-center gap-4 p-[16px] rounded-[24px] border border-[#F1F2F6] bg-white focus-within:ring-1 focus-within:ring-[#91BF77]">
          <img src="/assets/images/icons/note-favorite.svg" alt="icon" className="w-7 h-7" />
          <input
            type="text"
            placeholder="Masukkan kode booking"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full outline-none bg-white text-[#070707] placeholder:text-ngekos-grey text-[16px] md:text-[17px]"
          />
        </div>
        <button onClick={onCheck} disabled={loading} className="mt-40 w-full md:w-auto p-[16px_26px] bg-ngekos-orange text-white rounded-[24px] disabled:opacity-60">
          {loading ? 'Memeriksa...' : 'Cek'}
        </button>
        {error && (
          <div className="mt-4 w-full p-3 rounded-lg bg-red-50 text-red-700 border border-red-200">{error}</div>
        )}
        {result && (
          <div className="mt-4 w-full p-4 rounded-[18px] border border-[#F1F2F6] bg-white">
            <p className="font-semibold mb-1">Hasil Pencarian</p>
            <p className="text-sm text-ngekos-grey">Kode: {result.code}</p>
            <p className="text-sm text-ngekos-grey">Ditemukan: {result.found ? 'Ya' : 'Tidak'}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Orders
