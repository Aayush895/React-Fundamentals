import { expect, test } from 'vitest'
import ColourBody from '../components/ColourBody'
import { render, screen } from '@testing-library/react'
import MOCK_DATA from '../mocks/mockData'

test("Should render the tints", () => {
  render(<ColourBody colorTints={MOCK_DATA}/>)

  const color = screen.getByText('#8d8dff')
  expect(color).toBeInTheDocument()
})