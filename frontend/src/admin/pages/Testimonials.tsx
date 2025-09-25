import AdminLayout from '../AdminLayout'

const AdminTestimonials = () => {
  return (
    <AdminLayout>
      <h2 className="font-bold text-xl mb-4">Testimonials</h2>
      <div className="flex items-center justify-between mb-4">
        <input className="p-[10px] rounded-[18px] border border-[#F1F2F6] w-full max-w-[320px]" placeholder="Search..." />
        <button className="ml-4 btn-primary">Create</button>
      </div>
      <div className="rounded-3xl border border-[#F1F2F6] overflow-hidden">
        <table className="w-full">
          <thead className="bg-[#F5F6F8]">
            <tr>
              <th className="text-left p-4">Author</th>
              <th className="text-left p-4">Content</th>
              <th className="text-left p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {[1,2,3].map(i => (
              <tr key={i} className="border-b border-[#F1F2F6]">
                <td className="p-4">User {i}</td>
                <td className="p-4">"Tempatnya nyaman dan bersih"</td>
                <td className="p-4">
                  <button className="btn-outline mr-2">Edit</button>
                  <button className="btn-danger-outline">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  )
}

export default AdminTestimonials
