import React from 'react'
import Body from './Body'
import Footer from './Footer'
import './Player.css'
import Sidebar from './Sidebar'

const Player = ({spotify,token}) => {

    return (
        <div className="player">
           <div className="player_body">
               <Sidebar />
               <Body spotify={spotify}/>
           </div>
           <Footer token={token} />
        </div>
    )
}

export default Player
