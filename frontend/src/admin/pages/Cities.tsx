import AdminLayout from '../AdminLayout'

const AdminCities = () => {
  return (
    <AdminLayout>
      <h2 className="font-bold text-xl mb-4">Cities</h2>
      <div className="flex items-center justify-between mb-4">
        <input className="p-[10px] rounded-[18px] border border-[#F1F2F6] w-full max-w-[320px]" placeholder="Search..." />
        <button className="ml-4 p-[10px_20px] bg-ngekos-orange text-white rounded-[18px]">Create</button>
      </div>
      <div className="rounded-3xl border border-[#F1F2F6] overflow-hidden">
        <table className="w-full">
          <thead className="bg-[#F5F6F8]">
            <tr>
              <th className="text-left p-4">Name</th>
              <th className="text-left p-4">Boarding Houses</th>
              <th className="text-left p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {[1,2,3].map(i => (
              <tr key={i} className="border-b border-[#F1F2F6]">
                <td className="p-4">City {i}</td>
                <td className="p-4">{i * 3}</td>
                <td className="p-4">
                  <button className="p-[6px_12px] rounded-[18px] border border-[#F1F2F6] mr-2">Edit</button>
                  <button className="p-[6px_12px] rounded-[18px] border border-[#F1F2F6]">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  )
}

export default AdminCities
