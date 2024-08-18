import { Outlet } from 'react-router-dom';

export function Setting() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Setting</h1>
      <Outlet />
    </div>
  )
}
