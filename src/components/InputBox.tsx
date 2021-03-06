import { FC, FormEventHandler } from "react"
import ContentBox from "../style/componentStyles/ContentBox"
import {
  StyledInput,
  StyledSubmitBtn,
} from "../style/componentStyles/FormStyles"

import Description from "./Description"

interface InputBoxProps {
  handleSubmit: FormEventHandler
  handleTopicInput: FormEventHandler
  handleCaptionInput: FormEventHandler
}

const InputBox: FC<InputBoxProps> = ({
  handleSubmit,
  handleTopicInput,
  handleCaptionInput,
}) => {
  return (
    <ContentBox>
      <Description />
      <form onSubmit={handleSubmit}>
        {/* Topic input for image search */}
        <StyledInput
          type="text"
          placeholder="image keyword"
          onChange={handleTopicInput}
        />
        <br />
        {/* Caption aka name of playlist */}
        <StyledInput
          type="text"
          placeholder="playlist name"
          maxLength={12}
          onChange={handleCaptionInput}
        />
        <br />
        {/* Button that triggers the handleClick function given as props */}
        <StyledSubmitBtn type="submit" value="Generate!" />
      </form>
    </ContentBox>
  )
}

export default InputBox
