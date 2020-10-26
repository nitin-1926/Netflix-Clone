import React, {useState, useEffect} from 'react'
import axios from './axios';
import './Row.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const baseUrl = 'https://image.tmdb.org/t/p/original';

const Row = ({title, fetchUrl, isLargeRow}) => {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData()
    }, [fetchUrl]);

    const options = {
        height: '390',
        width: '100%',
        playerVars: {
            autoplay: 1,
        }
    };

    const handleClick = movie => {
        console.log(movie);
        if (trailerUrl) {
            setTrailerUrl('');
        }
        movieTrailer(movie.name || movie.original_title || '')
            .then(url => {
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get('v'));
            }).catch(err => {
                console.log(err);
        })
    }

    return (
        <div className='row'>
            <h2>{title}</h2>

            <div className='row_posters'>
                {movies.map(movie => (
                    <img
                        key={movie.id}
                        className={`row_poster ${isLargeRow && 'largeRow'}`}
                        src={`${baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                        alt={movie.name}
                        onClick={() => {
                            handleClick(movie);
                        }}
                    />
                ))}
            </div>

            {trailerUrl && <YouTube videoId={trailerUrl} opts={options} />}
        </div>
    )
}

export default Row
