const FindKos = () => {
  return (
    <div className="p-5">
      <h1 className="font-bold text-xl mb-4">Find Kos</h1>
      <div className="flex items-center gap-3 p-[10px] bg-white rounded-[22px] border border-[#F1F2F6]">
        <img src="/assets/images/icons/search-status.svg" alt="icon" className="w-6 h-6" />
        <input
          type="text"
          placeholder="Cari kos terdekat..."
          className="w-full outline-none placeholder:text-ngekos-grey placeholder:font-normal"
        />
      </div>
      <div className="mt-5 grid grid-cols-2 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex flex-col rounded-[22px] border border-[#F1F2F6] overflow-hidden">
            <div className="h-[132px] bg-[#D9D9D9]" />
            <div className="p-4">
              <p className="font-semibold">Kos Nyaman {i}</p>
              <p className="text-sm text-ngekos-grey">Bandung</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FindKos
