import { Link } from 'react-router-dom'

const Home = () => {
  // This mirrors resources/views/pages/home.blade.php structure at a high level
  return (
    <>
      <div
        id="Background"
        className="absolute top-0 w-full h-[280px] rounded-bl-[75px] bg-[linear-gradient(180deg,#F2F9E6_0%,#D2EDE4_100%)]"
      />
      <div id="TopNav" className="relative flex items-center justify-between px-5 mt-[60px]">
        <div className="flex flex-col gap-1">
          <p>Good Day,</p>
          <h1 className="font-bold text-xl leading-[30px]">Explore Cozy Home</h1>
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
        <div className="swiper w-full overflow-x-hidden px-5">
          <div className="swiper-wrapper">
            {/* Placeholder cards */}
            {[1, 2, 3].map((i) => (
              <div key={i} className="swiper-slide !w-fit">
                <Link to={`/kos/sample-${i}`} className="card">
                  <div className="flex flex-col w-[250px] shrink-0 rounded-[30px] border border-[#F1F2F6] p-4 pb-5 gap-[10px] hover:border-[#91BF77] transition-all duration-300">
                    <div className="flex w-full h-[150px] shrink-0 rounded-[30px] bg-[#D9D9D9] overflow-hidden">
                      <img src="/assets/images/icons/3dcube.svg" className="w-full h-full object-cover" alt="thumbnail" />
                    </div>
                    <div className="flex flex-col gap-3">
                      <h3 className="font-semibold text-lg leading-[27px] line-clamp-2 min-h-[54px]">Sample Boarding House {i}</h3>
                      <hr className="border-[#F1F2F6]" />
                      <div className="flex items-center gap-[6px]">
                        <img src="/assets/images/icons/location.svg" className="w-5 h-5 flex shrink-0" alt="icon" />
                        <p className="text-sm text-ngekos-grey">City Name</p>
                      </div>
                      <div className="flex items-center gap-[6px]">
                        <img src="/assets/images/icons/3dcube.svg" className="w-5 h-5 flex shrink-0" alt="icon" />
                        <p className="text-sm text-ngekos-grey">Category</p>
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
        <div className="grid grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <Link key={i} to={`/city/sample-${i}`} className="card">
              <div className="flex items-center rounded-[22px] p-[10px] gap-3 bg-white border border-white overflow-hidden hover:border-[#91BF77] transition-all duration-300">
                <div className="w-[55px] h-[55px] flex shrink-0 rounded-full border-4 border-white ring-1 ring-[#F1F2F6] overflow-hidden">
                  <img src="/assets/images/icons/global.svg" className="w-full h-full object-cover" alt="icon" />
                </div>
                <div className="flex flex-col gap-[2px]">
                  <h3 className="font-semibold">City {i}</h3>
                  <p className="text-sm text-ngekos-grey">12 Kos</p>
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
