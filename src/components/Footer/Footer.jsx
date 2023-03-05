import React from 'react'
import './Footer.css'
import CurrentTrack from './CurrentTrack'
import PlayerControls from '../Player/PlayerControls'
import Volume from '../Volume/Volume'

function Footer() {
  return (
    <div className='footer-container'>
      <CurrentTrack/>
      <PlayerControls/>
      <Volume/>
    </div>
  )
}

export default Footer