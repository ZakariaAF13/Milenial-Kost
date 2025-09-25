import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { api } from '../lib/api'

const CityShow = () => {
  const { slug } = useParams()
  const [city, setCity] = useState<any>(null)
  const [items, setItems] = useState<Array<any>>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let mounted = true
    ;(async () => {
      try {
        setLoading(true)
        setError(null)
        const res = await api.get(`/api/cities/${slug}`)
        if (!mounted) return
        setCity(res?.city || null)
        const data = Array.isArray(res?.boarding_houses?.data) ? res.boarding_houses.data : []
        setItems(data)
      } catch (e: any) {
        if (!mounted) return
        setError(e?.message || 'Gagal memuat data')
      } finally {
        mounted && setLoading(false)
      }
    })()
    return () => { mounted = false }
  }, [slug])
  return (
    <div className="p-5">
      <div className="flex items-center gap-3 mb-4">
        <Link to="/" className="p-[8px_14px] rounded-[18px] border border-[#F1F2F6] bg-white">
          <img src="/assets/images/icons/arrow-right.svg" alt="back" className="w-6 h-6 rotate-180" />
        </Link>
        <h1 className="font-bold text-xl">City: {city?.name || slug}</h1>
      </div>
      {error && <div className="mb-4 p-3 rounded-lg bg-red-50 text-red-700 border border-red-200">{error}</div>}
      <div className="responsive-grid">
        {loading && [1,2,3,4].map((i) => (
          <div key={`sk-${i}`} className="flex flex-col rounded-[22px] border border-[#F1F2F6] overflow-hidden bg-white opacity-60">
            <div className="h-[143px] bg-[#EAEAEA]" />
            <div className="p-4">
              <div className="h-5 bg-[#EAEAEA] rounded w-2/3 mb-2" />
              <div className="h-4 bg-[#EAEAEA] rounded w-1/3" />
            </div>
          </div>
        ))}
        {!loading && items.map((item, idx) => (
          <Link key={item.slug || idx} to={`/kos/${item.slug || 'sample'}`} className="card">
            <div className="flex flex-col rounded-[22px] border border-[#F1F2F6] overflow-hidden bg-white">
              <div className="h-[143px] bg-[#D9D9D9]" />
              <div className="p-4">
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-ngekos-grey">{item.category?.name || ''}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default CityShow
