import { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from "spotify-web-api-js"
import Player from './Player';
import { useDataLayerValue } from './DataLayer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const spotify = new SpotifyWebApi();

function App() {

  const [auth, setAuth] = useState('')

  const [{ user, token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      })

      spotify.setAccessToken(_token)
      setAuth(spotify.getAccessToken());
      spotify.getMe().then((user) => {
        dispatch({
          type: 'SET_USER',
          user: user,
        });
      })
      spotify.getMyTopTracks().then((playlists)=>{
        console.log(playlists);
      });
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        })
      })
      spotify.getMyTopTracks().then((response) => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
      })
    }
  }, [dispatch]);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/'>
            {token ? <Player spotify={spotify} /> : <Login />}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
