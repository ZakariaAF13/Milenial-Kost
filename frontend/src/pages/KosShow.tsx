import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { api } from '../lib/api'

const KosShow = () => {
  const { slug } = useParams()
  const [kos, setKos] = useState<any>(null)
  const [rooms, setRooms] = useState<Array<any>>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let mounted = true
    ;(async () => {
      try {
        setLoading(true)
        setError(null)
        const [detail, roomRes] = await Promise.all([
          api.get(`/api/boarding-houses/${slug}`),
          api.get(`/api/boarding-houses/${slug}/rooms`),
        ])
        if (!mounted) return
        setKos(detail)
        const r = Array.isArray(roomRes) ? roomRes : roomRes?.data || roomRes || []
        setRooms(r)
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
    <div className="pb-[138px]">
      <div className="relative h-[230px] rounded-b-[75px] overflow-hidden">
        <img src="/assets/images/sample/kos-hero.jpg" alt="hero" className="w-full h-full object-cover" />
        <div className="absolute top-[60px] left-5 w-[320px] p-[10px_20px] rounded-[40px] bg-white/10 backdrop-blur-sm">
          <h1 className="font-semibold text-white text-[22px] leading-[33px]">{kos?.name || slug?.replace('-', ' ')}</h1>
        </div>
        <Link
          to={-1 as unknown as string}
          className="absolute top-[60px] left-5 p-[8px_14px] rounded-[18px] bg-white/10 backdrop-blur-sm"
        >
          <img src="/assets/images/icons/arrow-right.svg" alt="back" className="w-6 h-6 rotate-180" />
        </Link>
      </div>

      <div className="px-5 mt-5 split-2-desktop">
        {/* Left: Details */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <img src="/assets/images/icons/location.svg" alt="loc" className="w-5 h-5" />
            <p className="text-sm text-ngekos-grey">{kos?.city?.name || '-'}</p>
          </div>
          <p className="text-ngekos-grey">
            {kos?.description || 'Deskripsi kos singkat. Lokasi strategis, fasilitas lengkap, akses transportasi mudah.'}
          </p>
          <p className="font-semibold text-lg text-ngekos-orange">
            {kos?.price ? `IDR ${kos.price.toLocaleString('id-ID')}` : 'IDR -'}<span className="text-sm text-ngekos-grey font-normal">/bulan</span>
          </p>
        </div>

        {/* Right: Rooms */}
        <div>
          <h2 className="font-bold mb-3">Rooms</h2>
          <div className="responsive-grid">
            {loading && [1,2,3,4].map((i) => (
              <div key={`sk-${i}`} className="rounded-[22px] border border-[#F1F2F6] overflow-hidden bg-white opacity-60">
                <div className="h-[156px] bg-[#EAEAEA]" />
                <div className="p-4">
                  <div className="h-5 bg-[#EAEAEA] rounded w-2/3 mb-2" />
                  <div className="h-4 bg-[#EAEAEA] rounded w-1/3" />
                </div>
              </div>
            ))}
            {!loading && rooms.map((room, idx) => (
              <div key={idx} className="rounded-[22px] border border-[#F1F2F6] overflow-hidden bg-white">
                <div className="h-[156px] bg-[#D9D9D9]" />
                <div className="p-4">
                  <p className="font-semibold">{room.name || `Kamar ${idx+1}`}</p>
                  <p className="text-sm text-ngekos-grey">{room.status || 'Tersedia'}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {error && (
        <div className="px-5 mt-4">
          <div className="w-full p-3 rounded-lg bg-red-50 text-red-700 border border-red-200">{error}</div>
        </div>
      )}

      <div className="fixed left-1/2 -translate-x-1/2 bottom-[110px] z-40 w-full max-w-[640px] px-5">
        <div className="p-[12px] bg-white/90 backdrop-blur-sm rounded-[40px] shadow-[0_8px_24px_rgba(0,0,0,0.12)]">
          <button className="w-full p-[14px_22px] rounded-[24px] bg-ngekos-orange text-white">Booking Sekarang</button>
        </div>
      </div>
    </div>
  )
}

export default KosShow
