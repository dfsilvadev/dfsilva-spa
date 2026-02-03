import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import { AppLayout } from './AppLayout'
import { Home } from './pages/Home'
import { About } from './pages/About'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
    ],
  },
])

export function Routes() {
  return <RouterProvider router={router} />
}
