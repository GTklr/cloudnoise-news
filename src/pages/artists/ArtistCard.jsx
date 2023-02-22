import React from 'react'
import ZeaukPic from "../../assets/DSC03303.jpg"
import BrendonPic from "../../assets/BrendonPic.jpg"
import DansonPic from "../../assets/dansonpic.jpg"

export default function ArtistCard() {
  return (
    <div className='text-center md:container container mx-auto '>

        <div className="grid grid-cols-3 gap-10 m-10">
            <div className='ZOOK bg-fourth rounded-lg shadow-lg'>

                <div className="">
                    <img src={ZeaukPic} className="rounded-lg" />
                </div>

                <div className='my-5'>
                   <h1>Zeauk</h1>
                </div> 
            </div>


            <div className='BREN bg-fourth rounded-lg shadow-lg'>
                <div className="">
                    <img src={BrendonPic} className="rounded-lg" />
                </div>

                <div className='my-5'>
                   <h1>Zeauk</h1>
                </div> 
            
            </div>
            
            <div className='DANSON bg-fourth rounded-lg shadow-lg'>
                <div className="">
                    <img src={DansonPic} className="rounded-lg" />
                </div>

                <div className='my-5'>
                   <h1>Zeauk</h1>
                </div> 
            
            </div>
        </div>
    </div>
  )
}
