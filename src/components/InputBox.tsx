import React, { FormEventHandler } from "react"
import "../styles/input.css"
import Description from "./Description"

interface InputBoxProps {
  handleSubmit: FormEventHandler
  handleTopicInput: FormEventHandler
  handleCaptionInput: FormEventHandler
}

const InputBox = ({
  handleSubmit,
  handleTopicInput,
  handleCaptionInput,
}: InputBoxProps) => {
  return (
    <div className="input-box">
      <Description />
      <form onSubmit={handleSubmit}>
        {/* Topic input for image search */}
        <input type="text" placeholder="keyword" onChange={handleTopicInput} />
        <br />
        {/* Caption aka name of playlist */}
        <input
          type="text"
          placeholder="caption"
          maxLength={12}
          onChange={handleCaptionInput}
        />
        <br />
        {/* Button that triggers the handleClick function given as props */}
        <input id="submit" type="submit" value="Generate!" />
      </form>
    </div>
  )
}

export default InputBox
