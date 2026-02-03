import { Outlet, Link } from 'react-router'
import { House, Info } from 'phosphor-react'

export function AppLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="flex gap-4 p-4 border-b border-gray-200 dark:border-gray-700">
        <Link
          to="/"
          className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:underline"
        >
          <House size={20} />
          Home
        </Link>
        <Link
          to="/about"
          className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:underline"
        >
          <Info size={20} />
          About
        </Link>
      </nav>
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  )
}
