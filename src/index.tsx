import React from "react"
import ReactDOM from "react-dom"
import App from "./App"

import "./index.css"
import FontStyles from "./components/style/FontStyles"

ReactDOM.render(
  <React.StrictMode>
    <FontStyles />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
)
