import React, { FC, useState } from "react"
import domtoimage from "dom-to-image"

import Header from "./components/Header"
import InputBox from "./components/InputBox"
import CoverPreview from "./components/CoverPreview"
import keys from "./keys"

import { RowFlex, ColFlex } from "./style/AppStyles"

interface imgSrc {
  urls: {
    small: string
  }
  user: {
    username: string
    links: {
      html: string
    }
  }
}

const App: FC = () => {
  const [topic, setTopic] = useState<string>("")
  const [caption, setCaption] = useState<string>("")
  const [label, setLabel] = useState<string>("")
  const [image, setImage] = useState<imgSrc | null>()

  const handleTopicInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTopic(event.currentTarget.value)
  }
  const handleCaptionInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCaption(event.currentTarget.value)
  }
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (topic) {
      fetch(
        `https://api.unsplash.com/search/photos?query=${topic}&orientation=squarish`,
        {
          headers: {
            Authorization: `Client-ID ${keys.unsplashAccessKey}`,
          },
        }
      )
        .then(result => result.json())
        .then(data => {
          if (data.results.length > 0) {
            setImage(
              data.results[Math.floor(Math.random() * data.results.length)]
            )
          } else {
            setImage(null)
          }
        })
      setLabel(caption)
    }
  }

  // Change domtoimage for something better :D

  const downloadCoverImage = () => {
    let node = document.getElementById("cover")
    console.log("Download clicked")
    domtoimage
      .toJpeg(node ?? new Node(), { quality: 0.95 })
      .then(function (dataUrl: any) {
        var link = document.createElement("a")
        link.download = `${label}-plover.jpeg`
        link.href = dataUrl
        link.click()
      })
  }

  return (
    <ColFlex>
      <Header />
      <RowFlex>
        <InputBox
          handleCaptionInput={handleCaptionInput}
          handleTopicInput={handleTopicInput}
          handleSubmit={handleSubmit}
        />
        <CoverPreview
          imageSrc={image ? image.urls.small : null}
          label={label}
          artist={image ? image.user.username : "Nobody"}
          artistLink={image ? image.user.links.html : "#"}
          onDownloadClick={downloadCoverImage}
        />
      </RowFlex>
    </ColFlex>
  )
}

export default App
