import { createGlobalStyle } from "styled-components"
import PoppinsBoldWoff from "./fonts/poppins-800.woff"
import PoppinsBoldWoff2 from "./fonts/poppins-800.woff2"
import PoppinsRegularWoff from "./fonts/poppins-regular.woff"
import PoppinsRegularWoff2 from "./fonts/poppins-regular.woff2"

const GlobalStyle = createGlobalStyle`
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #191414;
  margin: 0;
  width: 100vw;
  height: 100vh;
}
@font-face {
  font-family: 'PoppinsBold';
  font-style: bold;
  font-weight: 800;
  src: url(${PoppinsBoldWoff}) format('woff'),
       url(${PoppinsBoldWoff2}) format('woff2');
}
@font-face {
  font-family: 'PoppinsReg';
  font-style: normal;
  font-weight: 400;
  src: url(${PoppinsRegularWoff}) format('woff'),
      url(${PoppinsRegularWoff2}) format('woff2');
}
`

export default GlobalStyle
