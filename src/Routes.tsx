import { createBrowserRouter, Navigate } from 'react-router-dom';

import App from './App';
import { AuthenLayout, ProtectedLayout } from './layout';
import { Assets, Login, NewTransactionModal, Setting, Transactions } from './pages';
import { WalletDetailModal } from './pages/WalletDetailModal';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <AuthenLayout />,
        children: [
          { path: 'login', element: <Login /> },
          { path: '', element: <Navigate to="/login" replace /> },
          { path: '*', element: <Navigate to="/login" replace /> },
        ],
      },
    ],
  },
  {
    path: '/app',
    element: <App />,
    children: [
      {
        path: '',
        element: <ProtectedLayout />,
        children: [
          { path: 'assets', element: <Assets /> },

          // setting
          { path: 'setting/detail', element: <WalletDetailModal /> },
          { path: 'setting', element: <Setting /> },

          // transactions
          { path: 'transactions/new', element: <NewTransactionModal /> },
          { path: 'transactions', element: <Transactions /> },
          { path: '', element: <Navigate to="/app/assets" replace /> },
          { path: '*', element: <Navigate to="/app/assets" replace /> },
        ],
      },
    ],
  },
])
