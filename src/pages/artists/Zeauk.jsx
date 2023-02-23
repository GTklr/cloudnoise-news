import React from 'react'
import ZeaukPic from "../../assets/ZeaukPic.jpg"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faSpotify } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faSoundcloud } from '@fortawesome/free-brands-svg-icons'
import { faMixcloud } from '@fortawesome/free-brands-svg-icons'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faBootstrap } from '@fortawesome/free-brands-svg-icons'

export default function Zeauk() {
  return (
    <div className='lg:container container mx-auto pb-10 text-center lg:text-left'>
      
      <div className="rounded-lg mt-10">

        <div className="grid lg:grid-cols-2 grid-cols-1 p-10">
          <div className='flex items-center shadow-lg bg-slate-50'>
            <img src={ZeaukPic} className="w-full h-full object-cover" />
          </div>
          <div className="p-10 flex items-center shadow-lg">
            <div>
            <h1>Zeauk</h1>
            <p>also known as Zeus Rectra, is a multi-talented artist based in Kuala Lumpur, Malaysia. A Filipino independent musician and visual artist, he began his creative journey in 2016 under the name zeauk, with a focus on visual arts and creative direction. However, it was in 2018 that he fully embraced his passion for music, and began releasing a blend of contemporary R&B, melancholic tunes, and blissful pop that reflects his vision of musical intimacy.</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 grid-cols-2 gap-2 p-10">
          <div className='flex items-center shadow-lg '>
            <img src={ZeaukPic} className="w-full h-full object-cover" />
          </div>
          <div className='flex items-center shadow-lg '>
            <img src={ZeaukPic} className="w-full h-full object-cover" />
          </div>

          <div className="p-10 flex items-center shadow-lg lg:col-auto col-span-2">
            <div>

            <p>Influenced by the French concept of "water" (eau), the name zeauk reflects the mutable and sublime nature of his music, both sustaining and destructive. It also symbolizes the battle between one's perceived identity and reality, reflecting the artist's introspective and personal approach to his art.</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-2 gap-2 p-10">
          <div className='flex items-center shadow-lg lg:col-span-1 col-span-2'>
            <img src={ZeaukPic} className="w-full h-full object-cover" />
          </div>
          

          <div className="p-10 flex items-center shadow-lg lg:col-span-1 col-span-2">
            <div>

            <p>Through consistent song releases and collaborations with other creative artists, zeauk has gained a significant following in the Southeast Asian music and creative space. He has been featured on Discover Weekly and many of Spotify's New Music Friday playlists across the region, and has also been recognized through radio features, live performances, and media interviews.
            <br />
            <br />
            Currently, he is shifting his musical concept towards his roots, drawing inspiration from some of his favorite artists and producers such as Justin Bieber, keshi, Jay Park, and Bryson Tiller, to name a few. With a unique blend of visual arts and music, zeauk continues to push the boundaries of creativity and self-expression.</p>
            </div>
          </div>
        </div>
        <div className="text-center lg:w-1/4 mx-auto my-20 py-10">
          <h2 className='my-5'>Follow Up with Zeauk</h2>
          <ul className="my-5">
                <FontAwesomeIcon href='/' icon={faSpotify} className="social-icons mx-2" size='xl'/>
                <FontAwesomeIcon href='/' icon={faFacebook} className="social-icons mx-2" size='xl'/>
                <FontAwesomeIcon href='/' icon={faInstagram} className="social-icons mx-2" size='xl'/>
                <FontAwesomeIcon href='/' icon={faMixcloud} className="social-icons mx-2" size='xl'/>
                <FontAwesomeIcon href='/' icon={faEnvelope} className="social-icons mx-2" size='xl'/>
          </ul>
          <a href='/' className='btn '>links</a>
        </div>

      </div>
    </div>
  )
}
