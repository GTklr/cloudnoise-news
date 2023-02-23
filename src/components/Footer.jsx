import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faSpotify, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
  return (
    <div className="footerGrabber w-full text-center fixed bottom-0">

      <a href="https://open.spotify.com/artist/05d3FO1h0tnn4G8yRw3bzp" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faSpotify} className="m-2"/>
      </a>
      <a href="https://www.instagram.com/mura.tone/" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faInstagram} className="m-2"/>
      </a>

      <a href="mailto:hello@cloudnoise.com" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faEnvelope} className="m-2"/>
      </a>
      
    </div>
  )
}
