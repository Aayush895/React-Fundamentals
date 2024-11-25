import { fireEvent, screen } from '@testing-library/dom'
import { render } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import ColourInput from '../components/ColourInput'

describe('Tests for colorInput component', () => {
  test('Should render inputs and button inside color input component', () => {
    render(<ColourInput />)
    const colorInput = screen.getByTestId('color-picker')
    const input = screen.getByRole('textbox')
    const button = screen.getByRole('button', { value: 'Submit' })

    expect(colorInput).toBeInTheDocument()
    expect(input).toBeInTheDocument()
    expect(button).toBeInTheDocument()
  })

  test('Should render color and able to type in the input textbox', () => {
    render(<ColourInput />)
    const colorInput = screen.getByTestId('color-picker')
    const input = screen.getByRole('textbox')

    fireEvent.change(input, { target: { value: 'Hello' } })
    expect(colorInput).toHaveAttribute('type', 'color')
    expect(input).toHaveValue('Hello')
  })

  test('Should sync both inputs when color picker changes', () => {
    render(<ColourInput />)
    const colorInput = screen.getByTestId('color-picker')
    const input = screen.getByRole('textbox')

    fireEvent.change(colorInput, {target: {value: '#ff0000'}})

    expect(colorInput).toHaveValue('#ff0000')
    expect(input).toHaveValue('#ff0000')
  })

  test("Should render color body component", () => {
    render(<ColourInput />)

    expect(screen.getByTestId("color-body")).toBeInTheDocument()
  })

  test("Should generate color tints when submit is clicked", () => {
    render(<ColourInput />)
    const button = screen.getByRole('button')
    const colorPicker = screen.getByTestId('color-picker')

    // Set a color and click submit
    fireEvent.change(colorPicker, { target: { value: '#ff0000' } })
    fireEvent.click(button)

    // Check if ColorBody received the tints
    const colorBody = screen.getByTestId('color-body')
    expect(colorBody).toBeInTheDocument()
  })
})
