import AdminLayout from '../AdminLayout'

const AdminTransactions = () => {
  return (
    <AdminLayout>
      <h2 className="font-bold text-xl mb-4">Transactions</h2>
      <div className="table-responsive rounded-3xl border border-[#F1F2F6] overflow-hidden">
        <table className="w-full table-sm">
          <thead className="bg-[#F5F6F8]">
            <tr>
              <th className="text-left p-4">Order Code</th>
              <th className="text-left p-4">Customer</th>
              <th className="text-left p-4">Boarding House</th>
              <th className="text-left p-4">Amount</th>
              <th className="text-left p-4">Status</th>
              <th className="text-left p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {[1,2,3].map(i => (
              <tr key={i} className="border-b border-[#F1F2F6]">
                <td className="p-4">TRX00{i}</td>
                <td className="p-4">User {i}</td>
                <td className="p-4">Kos Nyaman {i}</td>
                <td className="p-4">IDR 1.500.000</td>
                <td className="p-4">Pending</td>
                <td className="p-4 whitespace-nowrap">
                  <button className="btn-outline btn-sm mr-2">View</button>
                  <button className="btn-primary btn-sm">Set Paid</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  )
}

export default AdminTransactions
