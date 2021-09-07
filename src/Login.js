import React from 'react'
import './Login.css'
import { loginUrl } from './spotify'

const Login = () => {
    return (
        <div className="login">
            <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" alt="spotify" />
            <a href={loginUrl}>Login with spotify</a>
        </div>
    )
}

export default Login
