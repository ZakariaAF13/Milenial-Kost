const Orders = () => {
  return (
    <div className="p-5">
      <h1 className="font-bold text-xl mb-4">Orders</h1>
      <p className="text-ngekos-grey">Cek status pemesanan kos Anda di sini.</p>
      <div className="mt-5 rounded-[22px] border border-[#F1F2F6] p-4 bg-white">
        <div className="flex items-center gap-3">
          <img src="/assets/images/icons/note-favorite.svg" alt="icon" className="w-6 h-6" />
          <input
            type="text"
            placeholder="Masukkan kode booking"
            className="w-full outline-none placeholder:text-ngekos-grey"
          />
        </div>
        <button className="mt-4 p-[10px_20px] bg-ngekos-orange text-white rounded-[18px]">Cek</button>
      </div>
    </div>
  )
}

export default Orders
