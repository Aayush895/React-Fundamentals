import { fireEvent, screen } from '@testing-library/dom'
import { render } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import ItemInput from '../components/ItemInput'

describe('ItemInput component should render', () => {
  test('Should render Input and Button element', () => {
    render(<ItemInput />)

    const input = screen.getByRole('textbox')
    const btn = screen.getByRole('button')

    expect(input).toBeInTheDocument()
    expect(btn).toBeInTheDocument()
  })

  test('Should be able to type in the input box', () => {
    render(<ItemInput />)
    const input = screen.getByRole('textbox')

    fireEvent.change(input, { target: { value: 'Hello' } })

    expect(input).toBeInTheDocument()
    expect(input).toHaveValue('Hello')
  })

  test('Should render Add Item button', () => {
    render(<ItemInput />)
    const btn = screen.getByRole('button', { value: 'Add Item' })
    expect(btn).toBeInTheDocument()
  })

  test('Should be able to add item when button is clicked', () => {
    render(<ItemInput />)
    const input = screen.getByRole('textbox')
    const btn = screen.getByRole('button', { name: 'Add Item' })

    fireEvent.change(input, { target: { value: 'New Test Item' } })
    fireEvent.click(btn)
    fireEvent.change(input, { target: { value: '' } })

    const addedItem = screen.getByText('New Test Item')
    expect(addedItem).toBeInTheDocument()
  })

  test('Should be able to add multiple items when button is clicked', () => {
    render(<ItemInput />)
    const input = screen.getByRole('textbox')
    const btn = screen.getByTestId('add-item-btn')

    fireEvent.change(input, { target: { value: 'New Test Item 1' } })
    fireEvent.click(btn)

    fireEvent.change(input, { target: { value: 'New Test Item 2' } })
    fireEvent.click(btn)
    
    expect(screen.getByText('New Test Item 1')).toBeInTheDocument()
    expect(screen.getByText('New Test Item 2')).toBeInTheDocument()
  })

  test('Should be rendering Item List component inside the Item Input component', () => {
    render(<ItemInput />)
    const itemList = screen.getByTestId('item-list')
    
    expect(itemList).toBeInTheDocument()
  })
})
