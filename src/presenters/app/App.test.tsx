import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router'
import type { ReactElement } from 'react'
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
