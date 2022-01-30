import { FC } from "react"
import styled from "styled-components"

const StyledHeader = styled.header`
  width: 100%;
  text-align: center;
  color: #ffffff;
  font-size: 4.5em;
  font-family: "PoppinsBold", sans-serif;
  font-weight: 800;
  margin-bottom: 50px;
  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`

const Header: FC = () => {
  return <StyledHeader>Plover</StyledHeader>
}

export default Header
