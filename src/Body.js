import PlayCircleFilledWhite from '@material-ui/icons/PlayCircleFilledWhite'
import FavoriteIcon from '@material-ui/icons/FavoriteBorderOutlined'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import React from 'react'
import "./Body.css"
import { useDataLayerValue } from './DataLayer'
import SongRow from './SongRow'
import Header from './Header'

const Body = ({ spotify }) => {

    const [{ discover_weekly }, dispatch] = useDataLayerValue();

    return (
        <div className="body">
            <Header />
            <div className="body_info">
                <img src={discover_weekly?.images[0].url} alt="weekly" />
                <div className="body_info-text">
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>{discover_weekly?.description}</p>
                </div>
            </div>
            <div className="body_songs">
                <div className="body_icons">
                    <PlayCircleFilledWhite className="body_shuffle"/>
                    <FavoriteIcon className="body_icon" />
                    <MoreHorizIcon className="body_icon" />
                </div>
                {discover_weekly?.tracks.items.map((item)=>{
                   return <SongRow track={item.track}/>
                })}
            </div>

        </div>
    )
}

export default Body
