import React from "react"
import "../styles/cover.css"

interface CoverPreviewProps {
  imageSrc: string
  artistLink: string
  artist: string
  label: string
  onDownloadClick: React.FormEventHandler
}

function CoverPreview({
  imageSrc,
  artistLink,
  artist,
  label,
  onDownloadClick,
}: CoverPreviewProps) {
  return (
    <div className="cover-prev">
      {/* Wrap Picture & Caption into one div */}
      <div id="labelled-cover">
        {/* Picture result based on searched topic */}
        <img src={imageSrc} alt="Your Cover!" />
        {/* Reference according to unsplash API guidelines */}
        <div className="label-text">{label}</div>
      </div>
      <p className="credits">
        Picture by <a href={artistLink}>{artist}</a> from{" "}
        <a href="https://unsplash.com/">Unsplash</a>
      </p>
      <button id="download-btn" onClick={onDownloadClick}>
        Download!
      </button>
    </div>
  )
}

export default CoverPreview
