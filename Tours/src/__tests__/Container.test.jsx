import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'
import Container from '../Container'

test('Should render Tours component inside container component', () => {
  render(<Container />)

  const tours = screen.getByTestId('tours-component')
  expect(tours).toBeInTheDocument()
})
