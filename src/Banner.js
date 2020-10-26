import React, { useState, useEffect } from 'react'
import axios from './axios';
import requests from './requests';

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
        <header className='banner'>
            <div className='bannerContents'>
                
            </div>
        </header>
    )
}

export default Banner
