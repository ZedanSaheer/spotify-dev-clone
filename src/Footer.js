import React from 'react';
import "./Footer.css";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleFilledWhite";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import { Grid, Slider } from "@material-ui/core";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay"
import VolumeDownIcon from "@material-ui/icons/VolumeDown"

const Footer = ({token}) => {


    return (
        <div className="footer">
            <div className="footer_left">
               <img src="https://upload.wikimedia.org/wikipedia/en/4/4d/TwilightCoverDrive.jpg" alt="random" className="footer_left-song-cover"/>
               <div className="footer_left-song-info">
               <h4>Yeah!</h4>
                <p>Usher</p>
               </div>
            </div>
            <div className="footer_center">
                <ShuffleIcon className="footer_green" />
                <SkipPreviousIcon className="footer_icon" />
                <PlayCircleOutlineIcon fontSize="large" className="footer_icon" />
                <SkipNextIcon className="footer_icon" />
                <RepeatIcon className="footer_green" />
                {/* <SpotifyWebPlayer token={token}/> */}
            </div>
           
            <div className="footer_right">
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon className="footer_icon"/>
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon className="footer_icon"/>
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