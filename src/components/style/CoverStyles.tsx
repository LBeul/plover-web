import styled from "styled-components"

interface CoverImage {
  imgSrc: string | null
}

export const Cover = styled.div<CoverImage>`
  width: 300px;
  height: 300px;
  background: linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)),
    url(${props => props.imgSrc ?? "https://via.placeholder.com/300"});
`
// object-fit: cover;
// filter: brightness(0.75);
//${props => props.inputColor || "palevioletred"};

export const Label = styled.div`
  text-align: center;
  vertical-align: middle;
  line-height: 300px;
  width: 100%;
  font-weight: 800;
  color: #fff;
  font-size: 36px;
  font-family: "Poppins", sans-serif;
  text-shadow: 0px 4px 6px rgba(0, 0, 0, 0.75);
`

export const DownloadButton = styled.button`
  width: 300px;
  height: 40px;
  background-color: #1db954;
  border-radius: 10px;
  border: none;
  color: #fff;
  font-size: 1.5em;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  margin: auto;
  margin-top: 20px;
  display: block;
`

export const Credits = styled.p`
  font-size: 0.75em;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  color: #fff;
  text-align: center;
  width: 300px;
  a {
    color: #d1efd3;
  }
`
