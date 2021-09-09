import React from 'react'
import { useDataLayerValue } from './DataLayer'
import "./SongRow.css"

const SongRow = ({track}) => {
    
    const [{item},dispatch] = useDataLayerValue();

    const sendState = () => {
        dispatch({
            type : 'SET_ITEM',
            item : track,
          })    
    }

    return (
        <div className="songRow" onClick={sendState}>
            <img src={track.album.images[0].url} alt="song-logo" className="songRow_logo"/>
            <div className="songRow_info">
                <h1>{track.name}</h1>
                <p>{track.artists.map((artist)=>artist.name).join(", ")}
                {track.album.name}</p>
            </div>
        </div>
    )
}

export default SongRow
