import { Outlet, useNavigate } from 'react-router-dom';

import { TransactionContextType } from '../types';

export function Transactions() {
  const navigate = useNavigate()

  const closeModal = () => {
    navigate('/transactions')
  }

  const openNewTransactionModal = () => {
    navigate('/transactions/new')
  }

  const contextValue: TransactionContextType = { closeModal }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Transactions</h1>
      <button
        onClick={openNewTransactionModal}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        New Transaction
      </button>
      {/* Add your transactions list here */}
      <Outlet context={contextValue} />
    </div>
  )
}
