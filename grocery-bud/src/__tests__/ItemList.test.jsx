import { beforeEach, describe, expect, test, vi } from 'vitest'
import mockItems from '../mocks/mockItems'
import { render, screen } from '@testing-library/react'
import ItemList from '../components/ItemList'

describe('Item list component tests', () => {
  beforeEach(() => {
    Storage.prototype.getItem = vi.fn(() => JSON.stringify(mockItems))
  })
  test('Should render the item list', () => {
    render(<ItemList />)

    const inputCheckBox = screen.getAllByRole('checkbox')
    const todos = screen.getAllByRole('paragraph')
    const btn = screen.getAllByRole('button', { value: 'Delete' })

    expect(inputCheckBox).toHaveLength(mockItems.length)
    expect(todos).toHaveLength(mockItems.length)
    expect(btn).toHaveLength(mockItems.length)
  })
})
