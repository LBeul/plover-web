import React from "react"
import { render, screen } from "@testing-library/react"
import Description from "../components/Description"

test("Contains heading text", () => {
  render(<Description />)
  const randomSnippet = screen.getByText("Welcome to Plover")
  expect(randomSnippet).toBeInTheDocument()
})
