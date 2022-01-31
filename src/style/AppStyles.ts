import styled from "styled-components"

export const ColFlex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

export const RowFlex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`
