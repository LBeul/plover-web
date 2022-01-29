import React, { FC } from "react"

const Description: FC = () => (
  <div className="description">
    <h1 className="description-heading">Welcome to Plover</h1>
    <h3 className="description-heading">PlaylistsCovers made easy</h3>
    Did yo ever create a spotify playlist and thought{" "}
    <em>"Damn, that generically generated cover looks dope as hell" </em>? Yeah,
    me neither.{" "}
    <strong>
      Your playlist's cover should be as individual as the music you listen to
    </strong>
    . Simply type enter a fitting image caption and your playlist's name - et
    voila: plover creates an awesome cover for you.
  </div>
)

export default Description
