import { fireEvent, render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'
import TourCard from '../TourCard'
import MOCK_DATA from '../mocks/mockData'

test('Should expand and collapse tour card information', () => {
  render(
    <TourCard
      name={MOCK_DATA[0].name}
      info={MOCK_DATA[0].info}
      image={MOCK_DATA[0].image}
      price={MOCK_DATA[0].price}
    />
  )

  const readMore = screen.getByText('...Read More')
  fireEvent.click(readMore)
  expect(screen.getByTestId('info')).toHaveTextContent(MOCK_DATA[0].info)

  const readLess = screen.getByText('Read Less')
  fireEvent.click(readLess)
  expect(screen.getByTestId('info')).toHaveTextContent(
    MOCK_DATA[0].info.substring(0, 295)
  )
})
