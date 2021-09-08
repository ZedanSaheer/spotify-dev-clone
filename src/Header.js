import React, { useState } from 'react'
import "./Header.css"
import SearchIcon from "@material-ui/icons/Search"
import { Avatar } from '@material-ui/core'
import { useDataLayerValue } from './DataLayer'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';



const Header = () => {

    const [signout , setSignout] = useState(false);

    const toggleExit = () => {
        signout ? setSignout(false) : setSignout(true)
    }

    const [{ user },dispatch] = useDataLayerValue();

    return (
        <div className="header">
            <div className="header_left">
                <SearchIcon className="header-search" />
                <input type="search" placeholder="Search for Artists,Songs or podcasts"/>
            </div>
            <div className="header_right" onClick={toggleExit}>
                <Avatar src={user?.images[0]?.url} alt={user?.display_name}/>
                <h4>{user?.display_name}</h4>
                {signout ? (<div className="signout" onClick={()=>{
                    window.location.replace('/')
                }}>
                    <p><ExitToAppIcon/> <span>sign out</span></p>
                </div>) : null}
            </div>
        </div>
    )
}

export default Header
