import { useEffect, useMemo, useState } from 'react'
import { api } from '../lib/api'

const FindKos = () => {
  const [q, setQ] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [results, setResults] = useState<Array<any>>([])

  // Simple debounce to reduce API calls while typing
  const debouncedQ = useMemo(() => q, [q])

  useEffect(() => {
    let mounted = true
    const run = async () => {
      try {
        setLoading(true)
        setError(null)
        const res = await api.get(`/api/search?q=${encodeURIComponent(debouncedQ)}`)
        if (!mounted) return
        const data = Array.isArray(res?.data) ? res.data : Array.isArray(res) ? res : []
        setResults(data)
      } catch (e: any) {
        if (!mounted) return
        setError(e?.message || 'Gagal memuat hasil')
        setResults([])
      } finally {
        mounted && setLoading(false)
      }
    }
    run()
    return () => {
      mounted = false
    }
  }, [debouncedQ])

  return (
    <div className="p-5">
      <h1 className="font-bold text-xl mb-4">Find Kost</h1>
      <div className="flex items-center gap-3 p-[12px] bg-white rounded-[22px] border border-[#F1F2F6]">
        <img src="/assets/images/icons/search-status.svg" alt="icon" className="w-6 h-6" />
        <input
          type="text"
          placeholder="Cari kost terdekat..."
          value={q}
          onChange={(e) => setQ(e.target.value)}
          className="w-full outline-none placeholder:text-ngekos-grey placeholder:font-normal bg-white text-[#070707]"
        />
      </div>

      {error && (
        <div className="mt-4 p-3 rounded-lg bg-red-50 text-red-700 border border-red-200">{error}</div>
      )}

      <div className="mt-5 responsive-grid">
        {loading && [1,2,3,4].map((i) => (
          <div key={`sk-${i}`} className="flex flex-col rounded-[22px] border border-[#F1F2F6] overflow-hidden bg-white opacity-60">
            <div className="h-[132px] bg-[#EAEAEA]" />
            <div className="p-4">
              <div className="h-5 bg-[#EAEAEA] rounded w-2/3 mb-2" />
              <div className="h-4 bg-[#EAEAEA] rounded w-1/3" />
            </div>
          </div>
        ))}

        {!loading && results.map((item, idx) => (
          <div key={item.slug || idx} className="flex flex-col rounded-[22px] border border-[#F1F2F6] overflow-hidden bg-white">
            <div className="h-[132px] bg-[#D9D9D9]" />
            <div className="p-4">
              <p className="font-semibold">{item.name || 'Kost'}</p>
              <p className="text-sm text-ngekos-grey">{item.city?.name || ''}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FindKos
