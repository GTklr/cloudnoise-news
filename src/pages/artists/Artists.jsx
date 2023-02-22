import React from 'react'
import ArtistCard from './ArtistCard'
import TransitionsIndiv from '../../components/transitions/TransitionIndiv'

export default function Artists() {
  return (
    <TransitionsIndiv>
      <div className="min-h-screen">
      <ArtistCard />
      </div>
    </TransitionsIndiv>
  )
}
