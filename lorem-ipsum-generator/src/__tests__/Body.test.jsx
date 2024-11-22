import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import Body from "../Components/Body";

test('renders correct number of paragraphs', () => {
  const paraNumber = 5
  render(
    <Body paraNumber={paraNumber} isparaGenerated={true} />
  )

  const paragraphs = screen.getAllByText(/.*/, {selector: 'p'})
  expect(paragraphs.length).toBe(paraNumber)
})