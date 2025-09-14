import { useParams, Link } from 'react-router-dom'

const KosShow = () => {
  const { slug } = useParams()
  return (
    <div className="pb-[138px]">
      <div className="relative h-[230px] rounded-b-[75px] overflow-hidden">
        <img src="/assets/images/sample/kos-hero.jpg" alt="hero" className="w-full h-full object-cover" />
        <div className="absolute top-[60px] left-5 w-[320px] p-[10px_20px] rounded-[40px] bg-white/10 backdrop-blur-sm">
          <h1 className="font-semibold text-white text-[22px] leading-[33px]">{slug?.replace('-', ' ')}</h1>
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
            <p className="text-sm text-ngekos-grey">Bandung</p>
          </div>
          <div className="flex items-center gap-3">
            <img src="/assets/images/icons/profile-2user.svg" alt="cap" className="w-5 h-5" />
            <p className="text-sm text-ngekos-grey">3 People</p>
          </div>
          <p className="text-ngekos-grey">
            Deskripsi kos singkat. Lokasi strategis, fasilitas lengkap, akses transportasi mudah.
          </p>
          <p className="font-semibold text-lg text-ngekos-orange">
            IDR 1.500.000<span className="text-sm text-ngekos-grey font-normal">/bulan</span>
          </p>
        </div>

        {/* Right: Rooms */}
        <div>
          <h2 className="font-bold mb-3">Rooms</h2>
          <div className="responsive-grid">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="rounded-[22px] border border-[#F1F2F6] overflow-hidden bg-white">
                <div className="h-[156px] bg-[#D9D9D9]" />
                <div className="p-4">
                  <p className="font-semibold">Kamar {i}</p>
                  <p className="text-sm text-ngekos-grey">Tersedia</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="fixed bottom-[30px] left-1/2 -translate-y-1/2 transform -z-10">
        <div className="mx-5 p-[14px_20px] bg-white rounded-[40px]">
          <button className="p-[10px_20px] rounded-[18px] bg-ngekos-orange text-white">Booking Sekarang</button>
        </div>
      </div>
    </div>
  )
}

export default KosShow
