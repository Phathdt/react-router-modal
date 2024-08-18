import { Outlet, useNavigate } from 'react-router-dom';

import { TransactionContextType } from '../types';

export function Transactions() {
  const navigate = useNavigate()

  const closeModal = () => {
    navigate('/transactions')
  }

  const contextValue: TransactionContextType = { closeModal }

  return (
    <div>
      <h1>Transaction Page</h1>
      <Outlet context={contextValue} />
    </div>
  )
}
