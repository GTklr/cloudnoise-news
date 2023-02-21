import React from 'react'
import ZeaukPic from "../../../public/assets/DSC03303.jpg"

export default function Zeauk() {
  return (
    <div className=''>
      
      <div className="rounded-lg">
        <div className="grid grid-cols-2">

          <div className='overflow-hidden'>
            <img src={ZeaukPic} className="w-full max-h-screen object-cover" />
          </div>

          <div className="p-10 flex items-center shadow-lg">
            <div>
            <h1>Zeauk</h1>
            <p>also known as Zeus Rectra, is a multi-talented artist based in Kuala Lumpur, Malaysia. A Filipino independent musician and visual artist, he began his creative journey in 2016 under the name zeauk, with a focus on visual arts and creative direction. However, it was in 2018 that he fully embraced his passion for music, and began releasing a blend of contemporary R&B, melancholic tunes, and blissful pop that reflects his vision of musical intimacy.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
