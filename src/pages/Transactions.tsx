import { Outlet, useNavigate } from 'react-router-dom';

export function Transactions() {
  const navigate = useNavigate()

  const openNewTransactionModal = () => {
    navigate('/app/transactions/new')
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Transactions</h1>
      <button
        onClick={openNewTransactionModal}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        New Transaction
      </button>

      <Outlet />
    </div>
  )
}
