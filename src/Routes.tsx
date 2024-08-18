import { createBrowserRouter, Navigate } from 'react-router-dom';

import App from './App';
import { AuthenLayout, ProtectedLayout } from './layout';
import { Assets, Login, Setting, Transactions } from './pages';

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
          { path: 'setting', element: <Setting /> },
          { path: 'transactions', element: <Transactions /> },
          { path: '', element: <Navigate to="/app/assets" replace /> },
          { path: '*', element: <Navigate to="/app/assets" replace /> },
        ],
      },
    ],
  },
])
