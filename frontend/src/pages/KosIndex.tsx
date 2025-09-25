import { Link, useSearchParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { api } from '../lib/api'

const KosIndex = () => {
  const [params] = useSearchParams()
  const [items, setItems] = useState<Array<any>>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let mounted = true
    ;(async () => {
      try {
        setLoading(true)
        setError(null)
        const city = params.get('city')
        const category = params.get('category')
        const q = params.get('q')
        const qs = new URLSearchParams()
        if (city) qs.set('city', city)
        if (category) qs.set('category', category)
        if (q) qs.set('q', q)
        const res = await api.get(`/api/boarding-houses${qs.toString() ? `?${qs.toString()}` : ''}`)
        const data = Array.isArray(res?.data) ? res.data : Array.isArray(res) ? res : []
        if (!mounted) return
        setItems(data)
      } catch (e: any) {
        if (!mounted) return
        setError(e?.message || 'Gagal memuat data')
      } finally {
        mounted && setLoading(false)
      }
    })()
    return () => { mounted = false }
  }, [params])

  return (
    <div className="p-5">
      <h1 className="font-bold text-xl mb-4">All Great Koskos</h1>
      {error && <div className="mb-4 p-3 rounded-lg bg-red-50 text-red-700 border border-red-200">{error}</div>}
      <div className="responsive-list">
        {loading && [1,2,3,4].map((i) => (
          <div key={`sk-${i}`} className="flex rounded-[30px] border border-[#F1F2F6] p-4 gap-4 bg-white opacity-60">
            <div className="flex w-[120px] h-[183px] shrink-0 rounded-[30px] bg-[#EAEAEA]" />
            <div className="flex flex-col gap-3 w-full">
              <div className="h-6 bg-[#EAEAEA] rounded w-2/3" />
              <div className="h-4 bg-[#EAEAEA] rounded w-1/3" />
            </div>
          </div>
        ))}
        {!loading && items.map((item, idx) => (
          <Link key={item.slug || idx} to={`/kos/${item.slug || 'sample'}`} className="card">
            <div className="flex rounded-[30px] border border-[#F1F2F6] p-4 gap-4 bg-white hover:border-[#91BF77] transition-all duration-300">
              <div className="flex w-[120px] h-[183px] shrink-0 rounded-[30px] bg-[#D9D9D9] overflow-hidden">
                <img src="/assets/images/sample/kos-thumb.jpg" className="w-full h-full object-cover" alt="icon" />
              </div>
              <div className="flex flex-col gap-3 w-full">
                <h3 className="font-semibold text-lg leading-[27px] line-clamp-2 min-h-[54px]">{item.name}</h3>
                <hr className="border-[#F1F2F6]" />
                <div className="flex items-center gap-[6px]">
                  <img src="/assets/images/icons/location.svg" className="w-5 h-5 flex shrink-0" alt="icon" />
                  <p className="text-sm text-ngekos-grey">{item.city?.name || ''}</p>
                </div>
                <hr className="border-[#F1F2F6]" />
                <p className="font-semibold text-lg text-ngekos-orange">{item.price ? `IDR ${item.price.toLocaleString('id-ID')}` : 'IDR -'}<span className="text-sm text-ngekos-grey font-normal">/bulan</span></p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default KosIndex
