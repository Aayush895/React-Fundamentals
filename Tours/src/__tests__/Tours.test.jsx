import { render, screen, waitFor } from '@testing-library/react'
import { beforeEach, describe, expect, test, vi } from 'vitest'
import Tours from '../Tours'
import axios from 'axios'
import MOCK_DATA from '../mocks/mockData'

vi.mock('axios')

describe('Tours component', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  test('Should render Loading and Tourscard component', async () => {
    axios.get.mockResolvedValue({
      data: MOCK_DATA,
    })

    render(<Tours />)

    const loading = screen.getByTestId('loading')
    expect(loading).toBeInTheDocument()

    await waitFor(() => {
      const tourCard = screen.getAllByTestId('tour-card')
      expect(tourCard.length).toBe(MOCK_DATA.length)
    })
  })
})
