import styled from "styled-components"

const ContentBox = styled.div`
  background-color: #202121;
  border-radius: 20px;
  padding: 40px;
  display: flex;
  width: 40vw;
  margin: 10px;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 75vw;
    margin: auto;
    margin-bottom: 2vh;
  }
`

export default ContentBox
