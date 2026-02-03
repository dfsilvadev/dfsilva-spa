import { render, screen } from '@testing-library/react'
import type { ReactElement } from 'react'
import { BrowserRouter } from 'react-router'
import { describe, expect, it } from 'vitest'

import App from './App'

function renderWithRouter(ui: ReactElement) {
  return render(<BrowserRouter>{ui}</BrowserRouter>)
}

describe('App', () => {
  it('renders without crashing', () => {
    renderWithRouter(<App />)
    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument()
  })
})
