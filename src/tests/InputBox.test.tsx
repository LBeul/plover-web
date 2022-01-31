import React from "react"
import { render, screen } from "@testing-library/react"
import InputBox from "../components/InputBox"

const mockTopicInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
  console.log("topic input")
}
const mockCaptionInputHandler = (
  event: React.ChangeEvent<HTMLInputElement>
) => {
  console.log("caption input")
}
const mockSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
  console.log("clicked submit")
}

test("renders form fields and button", () => {
  render(
    <InputBox
      handleCaptionInput={mockCaptionInputHandler}
      handleSubmit={mockSubmitHandler}
      handleTopicInput={mockTopicInputHandler}
    />
  )
  const captionInputBox = screen.getByPlaceholderText("image keyword")
  const topicInputBox = screen.getByPlaceholderText("playlist name")
  const submitBtn = screen.getByDisplayValue("Generate!")
  expect(captionInputBox).toBeInTheDocument
  expect(topicInputBox).toBeInTheDocument
  expect(submitBtn).toBeInTheDocument
})
