import { Link } from 'react-router-dom'

const KosIndex = () => {
  return (
    <div className="p-5">
      <h1 className="font-bold text-xl mb-4">All Great Koskos</h1>
      <div className="flex flex-col gap-4">
        {[1, 2, 3, 4].map((i) => (
          <Link key={i} to={`/kos/sample-${i}`} className="card">
            <div className="flex rounded-[30px] border border-[#F1F2F6] p-4 gap-4 bg-white hover:border-[#91BF77] transition-all duration-300">
              <div className="flex w-[120px] h-[183px] shrink-0 rounded-[30px] bg-[#D9D9D9] overflow-hidden">
                <img src="/assets/images/sample/kos-thumb.jpg" className="w-full h-full object-cover" alt="icon" />
              </div>
              <div className="flex flex-col gap-3 w-full">
                <h3 className="font-semibold text-lg leading-[27px] line-clamp-2 min-h-[54px]">Kos Nyaman {i}</h3>
                <hr className="border-[#F1F2F6]" />
                <div className="flex items-center gap-[6px]">
                  <img src="/assets/images/icons/location.svg" className="w-5 h-5 flex shrink-0" alt="icon" />
                  <p className="text-sm text-ngekos-grey">Bandung</p>
                </div>
                <div className="flex items-center gap-[6px]">
                  <img src="/assets/images/icons/profile-2user.svg" className="w-5 h-5 flex shrink-0" alt="icon" />
                  <p className="text-sm text-ngekos-grey">3 People</p>
                </div>
                <hr className="border-[#F1F2F6]" />
                <p className="font-semibold text-lg text-ngekos-orange">IDR 1.500.000<span className="text-sm text-ngekos-grey font-normal">/bulan</span></p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default KosIndex
