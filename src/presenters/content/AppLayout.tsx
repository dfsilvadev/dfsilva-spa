import { Outlet } from 'react-router'
import Cursor from '../components/ui/cursor'

export function AppLayout() {
  return (
    <div className="min-h-screen">
      <main>
        <Cursor />
        <Outlet />
      </main>
    </div>
  )
}
