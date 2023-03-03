import React from 'react'
import './Footer.css'
import CurrentTrack from './CurrentTrack'
import PlayerControls from '../Player/PlayerControls'

function Footer() {
  return (
    <div className='footer-container'>
      <CurrentTrack/>
      <PlayerControls/>
    </div>
  )
}

export default Footer