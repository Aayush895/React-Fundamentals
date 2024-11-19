import { expect,test } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import Input from "../Components/Input";

test("should render input component", () => {
  render(<Input />)

  const inputDiv = screen.getByTestId("input-div")
  const button = screen.getByRole('button')
  const emptyElement = screen.getByTestId('empty-element')
  // const errorElement = screen.getByTestId('error-element')

  expect(inputDiv).toBeInTheDocument()
  fireEvent.click(button)
  expect(emptyElement).toBeInTheDocument()
  // expect(errorElement).toBeInTheDocument()
})