import React, { useState, useEffect } from 'react'
import axios from './axios';
import requests from './requests';
import './Banner.css';

const baseUrl = 'https://image.tmdb.org/t/p/original';

const Banner = () => {
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const request = await axios.get(requests.fetchNetflixOriginals);
            const randomNumber = Math.floor(Math.random() * request.data.results.length - 1);
            setMovie(request.data.results[randomNumber]);
            return request;
        }
        fetchData();
    }, []);
    return (
        <header className='banner'
            style={{
                backgroundSize: 'cover',
                backgroundImage: `url(
                    ${baseUrl}${movie?.backdrop_path}
                )`,
                backgroundPosition: 'center center'
            }}
        >
            <div className='bannerContents'>
                <h1> {movie?.title || movie?.name || movie?.original_name} </h1>

                <div className='bannerButtons'>
                    <button className='bannerButton'>Play</button>
                    <button className='bannerButton'>My List</button>
                </div>

                <h1 className='bannerDescription'>{movie?.overview}</h1>
            </div>
        </header>
    )
}

export default Banner
