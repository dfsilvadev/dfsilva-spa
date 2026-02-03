import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'

import { AppLayout } from '@/presenters/content/AppLayout'
import { Home } from '@/presenters/pages/Home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [{ index: true, element: <Home /> }],
  },
])

export function Routes() {
  return <RouterProvider router={router} />
}
