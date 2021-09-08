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
            <Header spotify={spotify} />
            <div className="body_info">
                <img src="https://newjams-images.scdn.co/image/ab676477000033ad/dt/v3/discover-weekly/TpRYE5GhMYSdR6yGeD9U3MzjNDaM1TfuZhU41Sv_5ZNUf6EXQEOKcycw13fjS8070EFaBZyDBeq8YIoO4l-OLLoXm3hTnBPRLhP91t977Db605RTT5f48jhrz5Ln1HQvklzjrSJ0BMG7GsXMR6XTVohXi2-O6ppWS3cDCdO9IHnmS0AC0K72u3W-YA6YUnBRJvVsUpLB3JJOnDzTCJ3J_jtH-zk1eUfG__Nrm_ZzxOUZqd3ytwBXae5eZf1atWz_LhUFUeBODp_rPV4qBMjkDdRt0vGs8NgWyjOlfDWquSS8Nmy1B7hwA_RaPoghELlmY_rQjHqzPMgFLm68PX-v_EVbfKv7cyD87w43fV0vmU0=/MDU6NDM6MzJUODItNjAtMQ==" alt="weekly" />
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
