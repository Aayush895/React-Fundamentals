import { test, expect } from 'vitest'
import { screen, render } from '@testing-library/react'
import App from '../App'

test('Should render container inside the App component', () => {
  render(<App />)

  const container = screen.getByTestId('container')
  expect(container).toBeInTheDocument()
})
