import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import Container from "../components/Container";

test("Should render the container component", () => {
  render(<Container />)

  const header = screen.getByTestId('header-component-div')
  const itemInput = screen.getByTestId('item-component')

  expect(header).toBeInTheDocument()
  expect(itemInput).toBeInTheDocument()
})