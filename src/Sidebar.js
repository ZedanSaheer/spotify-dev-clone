import React from 'react'
import './Sidebar.css'
import SidebarOption from './SidebarOption'
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic"
import { useDataLayerValue } from './DataLayer';

const Sidebar = () => {

    const [{ playlists },dispatch] = useDataLayerValue();

    return (
        <div className="sidebar">
            <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" className="sidebar-logo" alt="sidebar-icon"/> 
            <SidebarOption title="home" Icon={HomeIcon}/>
            <SidebarOption title="search" Icon={SearchIcon}/>
            <SidebarOption title="your library" Icon={LibraryMusicIcon}/>
             <br />
             <strong className="sidebar_title">Playlists</strong>
             <hr />

            {playlists?.items?.map((playlist)=>(
                <SidebarOption title={playlist.name} />
            ))}
        </div>
      

    )
}

export default Sidebar
