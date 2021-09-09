import React,{useState,useEffect} from 'react';
import "./Footer.css";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleFilledWhite";
import PauseCircleOutlined from "@material-ui/icons/PauseCircleFilledOutlined"
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import { Grid, Slider } from "@material-ui/core";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay"
import VolumeDownIcon from "@material-ui/icons/VolumeDown"
import VolumeMute from '@material-ui/icons/VolumeMute';
import { useDataLayerValue } from './DataLayer';

const Footer = () => {

    const [{item} , dispatch ] = useDataLayerValue();

    const [play , setPlay] = useState(false);

    const togglePlay = () => {
        play ? setPlay(false) : setPlay(true)
    }
    const [mute , setMute] = useState(false);

    const toggleMute = () => {
        mute ? setMute(false) : setMute(true)
    }

    return (
        <div className="footer">
            <div className="footer_left">
               <img src="https://upload.wikimedia.org/wikipedia/en/4/4d/TwilightCoverDrive.jpg" alt="random" className="footer_left-song-cover"/>
               <div className="footer_left-song-info">
               <h4>{item?.name?.slice(0,14)}</h4>
                <p>{item?.artists?.slice(0,1).map((artist)=>(
                    <small>{artist.name}</small>
                ))}</p>
               </div>
            </div>
            <div className="footer_center">
                <ShuffleIcon className="footer_green" />
                <SkipPreviousIcon className="footer_icon" />
               {play? <PlayCircleOutlineIcon fontSize="large" className="footer_icon" onClick={togglePlay}/> : <PauseCircleOutlined fontSize="large" className="footer_icon" onClick={togglePlay}/>}
                <SkipNextIcon className="footer_icon" />
                <RepeatIcon className="footer_green" />
                {/* <SpotifyWebPlayer /> */}
            </div>
           
            <div className="footer_right">
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon className="footer_icon" />
                    </Grid>
                    <Grid item>
                      {mute ? <VolumeDownIcon className="footer_icon" onClick={toggleMute}/>:<VolumeMute className="footer_icon" onClick={toggleMute}/>}
                    </Grid>
                    <Grid item xs>
                        <Slider />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Footer
