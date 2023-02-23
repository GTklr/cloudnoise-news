import React from 'react'
import ZeaukPic from "../../assets/ZeaukPic.jpg"
import BrendonPic from "../../assets/BrendonPic.jpg"
import DansonPic from "../../assets/dansonpic.jpg"
import "./ArtistCard.css"
import "../../components/transitions/ProgScroll.jsx"
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";

export default function ArtistCard() {
  return (
    // Container applies AND UP, meaning large and UP will have container, if SM:container, means SM and UP
    <section className="scroll-container" ref={containerRef}>
         <div className="copy">
        <h2>Lorem ipsum dolor sit amet</h2>
      </div>
      <div className="img-container">
        <motion.div className="img-inner">
            <motion.div className="bottom-shadow" />
            <img src={plant1} alt="a green plant" />
            <motion.div className="top-shadow" />
        </motion.div>

      </div>

    </section>
  )
}
