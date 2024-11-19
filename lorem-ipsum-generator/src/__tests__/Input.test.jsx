import { expect,test } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import Input from "../Components/Input";

test("should render input component", () => {
  render(<Input />)

  const inputDiv = screen.getByTestId("input-div")
  const button = screen.getByRole('button')

  // Test for input div to be rendered inside the component
  expect(inputDiv).toBeInTheDocument()

  // Test for empty element
  fireEvent.click(button)
  const emptyElement = screen.getByTestId('empty-element')
  expect(emptyElement).toBeInTheDocument()

  // Test for error element
  const inputField = screen.getByRole("spinbutton")
  fireEvent.change(inputField, {target: {value: 10}})
  fireEvent.click(button)
  const errorElement = screen.getByTestId('error-element')
  expect(errorElement).toBeInTheDocument()

  // Test for paragraphs to be rendered
  fireEvent.change(inputField, { target: { value: 5 } })
  fireEvent.click(button)
  expect(screen.getByTestId("body-component")).toBeInTheDocument()
})