import React from 'react'
import "./sidebar.css"
import Sidebarbutton from './sidebarbutton'
import { MdFavorite,MdSpaceDashboard } from "react-icons/md";
import { FaGripfire,FaPlay,FaSignOutAlt } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import Library from '../../screens/library/library';

export default function Sidebar() {
  return (
    <div className='sidebar-container'>
      <img 
      src="https://helostatus.com/wp-content/uploads/2021/09/2021-profile-WhatsApp-hd.jpg"
      className="profile-img"
      alt="profile"
      />
      <div>
      <Sidebarbutton title="Feed" to="/feed" icon={<MdSpaceDashboard/>} />
      <Sidebarbutton title="Trending" to="/trending" icon={<FaGripfire/>} />
      <Sidebarbutton title="Player" to="/player" icon={<FaPlay/>} />
      <Sidebarbutton title="Favorite" to="/favorites" icon={<MdFavorite/>} />
      <Sidebarbutton title="Library" to="/" icon={<IoLibrary/>} />
      </div>
      <Sidebarbutton title="Sign Out" to="" icon={<FaSignOutAlt/>} />
    </div>
  )
}
