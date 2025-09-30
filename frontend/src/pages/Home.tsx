import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { api } from '../lib/api'

const Home = () => {
  // Local state for API data
  const [popular, setPopular] = useState<Array<any>>([])
  const [cities, setCities] = useState<Array<any>>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Fetch popular kos and cities
  useEffect(() => {
    let mounted = true
    ;(async () => {
      try {
        setLoading(true)
        const [popRes, cityRes] = await Promise.all([
          api.get('/api/boarding-houses/popular'),
          api.get('/api/cities'),
        ])
        if (!mounted) return
        setPopular(Array.isArray(popRes) ? popRes : popRes?.data || [])
        // cities endpoint returns { data, total } in our stub
        setCities(Array.isArray(cityRes) ? cityRes : cityRes?.data || [])
      } catch (e: any) {
        if (!mounted) return
        setError(e?.message || 'Gagal memuat data')
      } finally {
        if (mounted) setLoading(false)
      }
    })()
    return () => {
      mounted = false
    }
  }, [])

  // This mirrors resources/views/pages/home.blade.php structure at a high level
  useEffect(() => {
    // Initialize Swiper if loaded via CDN in index.html
    const anyWindow = window as unknown as { Swiper?: any }
    if (anyWindow.Swiper) {
      // Initialize all elements with class .swiper
      const swipers = document.querySelectorAll('.swiper')
      swipers.forEach((el) => {
        // eslint-disable-next-line new-cap
        new anyWindow.Swiper(el as any, {
          slidesPerView: 'auto',
          spaceBetween: 16,
        })
      })
    }
  }, [])
  return (
    <>
      <div
        id="Background"
        className="absolute top-0 w-full h-[280px] rounded-bl-[75px] hero-blue-bg"
      />
      <div id="TopNav" className="relative flex items-center justify-between px-5 mt-[60px]">
        <div className="flex items-center gap-3">
          <img src="/logoMK.png" alt="MilenialKost logo" className="w-10 h-10 rounded-full shadow" />
          <div className="flex flex-col gap-1">
            <p>Good Day,</p>
            <h1 className="font-bold text-xl leading-[30px]">Explore Milenial Kost</h1>
          </div>
        </div>
        <a href="#" className="w-12 h-12 flex items-center justify-center shrink-0 rounded-full overflow-hidden bg-white">
          <img src="/assets/images/icons/notification.svg" className="w-[28px] h-[28px]" alt="icon" />
        </a>
      </div>

      <section id="Popular" className="flex flex-col gap-4 mt-[30px]">
        <div className="flex items-center justify-between px-5">
          <h2 className="font-bold">Popular Kos</h2>
          <a href="#">
            <div className="flex items-center gap-2">
              <span>See all</span>
              <img src="/assets/images/icons/arrow-right.svg" className="w-6 h-6 flex shrink-0" alt="icon" />
            </div>
          </a>
        </div>
        {error && (
          <div className="px-5">
            <div className="w-full p-3 rounded-lg bg-red-50 text-red-700 border border-red-200">{error}</div>
          </div>
        )}
        {/* Swiper on all breakpoints */}
        <div className="swiper w-full overflow-x-hidden px-5">
          <div className="swiper-wrapper">
            {loading && [1,2,3,4].map((i) => (
              <div key={`sk-${i}`} className="swiper-slide !w-fit opacity-60">
                <div className="flex flex-col w-[250px] shrink-0 rounded-[30px] border border-[#F1F2F6] p-4 pb-5 gap-[10px]">
                  <div className="flex w-full h-[150px] shrink-0 rounded-[30px] bg-[#EAEAEA]" />
                  <div className="flex flex-col gap-3">
                    <div className="h-6 bg-[#EAEAEA] rounded" />
                    <div className="h-4 bg-[#EAEAEA] rounded" />
                    <div className="h-4 bg-[#EAEAEA] rounded w-1/2" />
                  </div>
                </div>
              </div>
            ))}
            {!loading && popular.map((item, idx) => (
              <div key={item.slug || idx} className="swiper-slide !w-fit">
                <Link to={`/kos/${item.slug || 'sample'}`} className="card">
                  <div className="flex flex-col w-[250px] shrink-0 rounded-[30px] border border-[#F1F2F6] p-4 pb-5 gap-[10px] hover:border-[#91BF77] transition-all duration-300">
                    <div className="flex w-full h-[150px] shrink-0 rounded-[30px] bg-[#D9D9D9] overflow-hidden">
                      <img src="/assets/images/icons/3dcube.svg" className="w-full h-full object-cover" alt="thumbnail" />
                    </div>
                    <div className="flex flex-col gap-3">
                      <h3 className="font-semibold text-lg leading-[27px] line-clamp-2 min-h-[54px]">{item.name || 'Boarding House'}</h3>
                      <hr className="border-[#F1F2F6]" />
                      <div className="flex items-center gap-[6px]">
                        <img src="/assets/images/icons/location.svg" className="w-5 h-5 flex shrink-0" alt="icon" />
                        <p className="text-sm text-ngekos-grey">{item.city?.name || 'City'}</p>
                      </div>
                      <div className="flex items-center gap-[6px]">
                        <img src="/assets/images/icons/3dcube.svg" className="w-5 h-5 flex shrink-0" alt="icon" />
                        <p className="text-sm text-ngekos-grey">{item.category?.name || 'Category'}</p>
                      </div>
                      <hr className="border-[#F1F2F6]" />
                      <p className="font-semibold text-lg text-ngekos-orange">{item.price ? `IDR ${item.price.toLocaleString('id-ID')}` : 'IDR -'}<span className="text-sm text-ngekos-grey font-normal">/bulan</span></p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="Cities" className="flex flex-col p-5 gap-4 bg-[#F5F6F8] mt-[30px]">
        <div className="flex items-center justify-between">
          <h2 className="font-bold">Browse Cities</h2>
          <a href="#">
            <div className="flex items-center gap-2">
              <span>See all</span>
              <img src="/assets/images/icons/arrow-right.svg" className="w-6 h-6 flex shrink-0" alt="icon" />
            </div>
          </a>
        </div>
        <div className="responsive-grid">
          {loading && [1,2,3,4].map((i) => (
            <div key={`city-sk-${i}`} className="flex items-center rounded-[22px] p-[10px] gap-3 bg-white border border-white">
              <div className="w-[55px] h-[55px] rounded-full bg-[#EAEAEA]" />
              <div className="flex-1">
                <div className="h-5 bg-[#EAEAEA] rounded w-1/2 mb-2" />
                <div className="h-4 bg-[#EAEAEA] rounded w-1/3" />
              </div>
            </div>
          ))}
          {!loading && cities.map((c, idx) => (
            <Link key={c.slug || idx} to={`/city/${c.slug}`} className="card">
              <div className="flex items-center rounded-[22px] p-[10px] gap-3 bg-white border border-white overflow-hidden hover:border-[#91BF77] transition-all duration-300">
                <div className="w-[55px] h-[55px] flex shrink-0 rounded-full border-4 border-white ring-1 ring-[#F1F2F6] overflow-hidden">
                  <img src="/assets/images/icons/global.svg" className="w-full h-full object-cover" alt="icon" />
                </div>
                <div className="flex flex-col gap-[2px]">
                  <h3 className="font-semibold">{c.name}</h3>
                  <p className="text-sm text-ngekos-grey">{c.total_kos ?? ''}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}

export default Home
