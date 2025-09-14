const Orders = () => {
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
            className="w-full outline-none bg-white text-[#070707] placeholder:text-ngekos-grey text-[16px] md:text-[17px]"
          />
        </div>
        <button className="mt-40 w-full md:w-auto p-[16px_26px] bg-ngekos-orange text-white rounded-[24px]">Cek</button>
      </div>
    </div>
  )
}

export default Orders
