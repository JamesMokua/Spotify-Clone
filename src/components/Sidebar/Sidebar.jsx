import React from 'react'
import './Sidebar.css'
import {IoLibrary} from 'react-icons/io5'
import {MdHomeFilled,MdSearch} from 'react-icons/md'
import { Playlists } from '../Playlists/Playlists'
export default function Sidebar() {
  return (
    <div className='sidebar-main'>
      <div className="top_links">
        <div className="logo">
        <img
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
        alt="Spotify Logo"
        className="sidebar-img"
      />
        </div>
        <ul>
          <li>
            <MdHomeFilled/>
            <span>Home</span></li>
          <li><MdSearch/>
          <span>Search</span></li>
          <li>
            <IoLibrary/>
            <span>Your Library</span>
            </li>
        </ul>
        
      </div>
      <Playlists/>
    </div>
  )
}
