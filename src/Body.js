import PlayCircleFilledWhite from '@material-ui/icons/PlayCircleFilledWhite'
import FavoriteIconOutlined from '@material-ui/icons/FavoriteBorderOutlined'
import FavouriteIcon from '@material-ui/icons/Favorite'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import React,{useState} from 'react'
import "./Body.css"
import { useDataLayerValue } from './DataLayer'
import SongRow from './SongRow'
import Header from './Header'
import PauseCircleFilledOutlined from '@material-ui/icons/PauseCircleFilledOutlined'

const Body = ({ spotify }) => {

    const [{ discover_weekly }, dispatch] = useDataLayerValue();

    const [Button, setButton] = useState(false)

    const changeButton = () =>{
        Button ? setButton(false) : setButton(true)
    }

    const [Play, setPlay] = useState(false);

    const changePlay = () =>{
        Play ? setPlay(false) : setPlay(true)
    }

    return (
        <div className="body">
            <Header />
            <div className="body_info">
                <img src="https://www.hypebot.com/wp-content/uploads/2020/07/discover-weekly.png" alt="weekly" />
                <div className="body_info-text">
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>{discover_weekly?.description}</p>
                </div>
            </div>
            <div className="body_songs">
                <div className="body_icons">
                    {Play ? <PlayCircleFilledWhite className="body_shuffle" onClick={changePlay}/> : <PauseCircleFilledOutlined className="body_shuffle" onClick={changePlay}/>}
                    {Button ? <FavoriteIconOutlined className="body_icon" onClick={changeButton}/>:<FavouriteIcon className="body_icon" onClick={changeButton}/>}
                    <MoreHorizIcon className="body_icon" />
                </div>
                {discover_weekly?.items.map((item)=>{
                   return <SongRow track={item}/>
                })}
            </div>

        </div>
    )
}

export default Body
