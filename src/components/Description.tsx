import React, { FC } from "react"
import { StyledDiv } from "./style/FormStyles"

const Description: FC = () => (
  <StyledDiv>
    <h1 style={{ textAlign: "center" }}>Welcome to Plover</h1>
    <h3 className="description-heading">PlaylistsCovers made easy</h3>
    Did you ever create a spotify playlist and thought{" "}
    <em>"Damn, that generically generated cover looks dope as hell" </em>? Yeah,
    me neither.{" "}
    <strong>
      Your playlist's cover should be as individual as the music you listen to.
    </strong>
    <br />
    <br />
    So, say Hello to <strong>Plover</strong>! Just enter a keyword for the image
    search and your playlist's name - et voila: plover creates an awesome cover
    for you. Don't like the chosen image? No worries, hit the <em>Generate!</em>{" "}
    button once more to get a random new image that corresponds to your keyword
    search!
  </StyledDiv>
)

export default Description
