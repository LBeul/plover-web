import React, { FC } from "react"
import ContentBox from "../style/componentStyles/ContentBox"
import {
  Cover,
  DownloadButton,
  Label,
  Credits,
} from "../style/componentStyles/CoverStyles"

interface CoverPreviewProps {
  imageSrc: string | null
  artistLink: string
  artist: string
  label: string
  onDownloadClick: React.FormEventHandler
}

const CoverPreview: FC<CoverPreviewProps> = ({
  imageSrc,
  artistLink,
  artist,
  label,
  onDownloadClick,
}) => {
  return (
    <ContentBox>
      {/* Wrap Picture & Caption into one div */}
      <Cover imgSrc={imageSrc} id="cover">
        <Label>{label}</Label>
      </Cover>
      <Credits>
        Picture by <a href={artistLink}>{artist}</a> from{" "}
        <a href="https://unsplash.com/">Unsplash</a>
      </Credits>
      <DownloadButton id="download-btn" onClick={onDownloadClick}>
        Download!
      </DownloadButton>
    </ContentBox>
  )
}

export default CoverPreview
