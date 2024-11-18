import { expect, test } from 'vitest'
import Header from '../Components/Header'
import { render, screen } from '@testing-library/react'

test('should render header component', () => {
  render(<Header />)

  const something = screen.getByRole('heading')
  expect(something).toBeInTheDocument()
})
