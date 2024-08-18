import { Navigate, NavLink, Outlet, useNavigate } from 'react-router-dom';

import { useAuth } from '../hooks';

export function ProtectedLayout() {
  const { user, logout, loading } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  if (loading) {
    return <div>Loading...</div>
  }

  if (!user) {
    return <Navigate to="/login" />
  }

  return (
    <div className="flex flex-col h-screen">
      {/* Menubar */}
      <header className="bg-blue-500 text-white p-4 flex justify-between items-center">
        <div>{new Date().toLocaleString('en-US', { timeZone: 'UTC' })} UTC</div>
        <div>
          Welcome, {user}!
          <button
            onClick={handleLogout}
            className="ml-2 bg-red-500 px-2 py-1 rounded"
          >
            Logout
          </button>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-grow overflow-auto p-4">
        <Outlet />
      </main>

      {/* Navbar */}
      <nav className="bg-gray-200 p-4">
        <ul className="flex justify-around">
          <li>
            <NavLink
              to="/app/assets"
              className={({ isActive }) =>
                isActive ? 'text-blue-500' : 'text-gray-700'
              }
            >
              Assets
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/app/transactions"
              className={({ isActive }) =>
                isActive ? 'text-blue-500' : 'text-gray-700'
              }
            >
              Transactions
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/app/setting"
              className={({ isActive }) =>
                isActive ? 'text-blue-500' : 'text-gray-700'
              }
            >
              Setting
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}
