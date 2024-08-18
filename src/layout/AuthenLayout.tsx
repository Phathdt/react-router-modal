import { Navigate, Outlet } from 'react-router-dom';

import { useAuth } from '../hooks';

export function AuthenLayout() {
  const { user, loading } = useAuth()

  if (loading) {
    return <div>Loading...</div>
  }

  if (user) {
    return <Navigate to="/app" />
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md">
        <Outlet />
      </div>
    </div>
  )
}
