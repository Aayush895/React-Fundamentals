import { screen } from "@testing-library/dom";
import { render } from "@testing-library/react";
import { expect, test } from "vitest";
import App from "../App";

test("Should render Container component", () => {
  render(<App />)
  expect(screen.getByTestId('container')).toBeInTheDocument()
})