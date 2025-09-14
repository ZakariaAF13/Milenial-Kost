import { useParams, Link } from 'react-router-dom'

const CategoryShow = () => {
  const { slug } = useParams()
  return (
    <div className="p-5">
      <div className="flex items-center gap-3 mb-4">
        <Link to="/" className="p-[8px_14px] rounded-[18px] border border-[#F1F2F6] bg-white">
          <img src="/assets/images/icons/arrow-right.svg" alt="back" className="w-6 h-6 rotate-180" />
        </Link>
        <h1 className="font-bold text-xl">Category: {slug}</h1>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <Link key={i} to={`/kos/sample-${i}`} className="card">
            <div className="flex flex-col rounded-[22px] border border-[#F1F2F6] overflow-hidden bg-white">
              <div className="h-[143px] bg-[#D9D9D9]" />
              <div className="p-4">
                <p className="font-semibold">Kos Kategori {i}</p>
                <p className="text-sm text-ngekos-grey">Fasilitas lengkap</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default CategoryShow
