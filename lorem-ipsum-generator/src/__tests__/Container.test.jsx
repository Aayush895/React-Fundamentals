import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Container from '../Components/Container'

test('Should render the Input and Header component inside Container component', () => {
  render(<Container />)
  const headerComponent = screen.getByTestId('header-component')
  const inputComponent = screen.getByTestId('input-div')

  expect(headerComponent).toBeInTheDocument()
  expect(inputComponent).toBeInTheDocument()
})
