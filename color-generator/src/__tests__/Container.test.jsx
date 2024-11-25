import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import Container from "../components/Container"

test("Should render container component", () => {
  render(<Container />)

  const headerComponent = screen.getByTestId("header-component")
  const colorInputComponent = screen.getByTestId("color-input")

  expect(headerComponent).toBeInTheDocument()
  expect(colorInputComponent).toBeInTheDocument()
})