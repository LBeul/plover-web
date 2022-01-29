import React from "react"
import { render, screen } from "@testing-library/react"
import Header from "../components/Header"

test("renders Plover header", () => {
  render(<Header />)
  const ploverHeader = screen.getByText("Plover")
  expect(ploverHeader).toBeInTheDocument()
})
