import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'

import { AppLayout } from '../../AppLayout'
import { Home } from '../pages/Home'

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
