import React, {useState, useEffect} from 'react'
import axios from './axios';
import './Row.css';

const baseUrl = 'https://image.tmdb.org/t/p/original';

const Row = ({title, fetchUrl, isLargeRow}) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results)
            return request;
        }
        fetchData()
    }, [fetchUrl]);

    console.log(movies);
    
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
                    />
                ))}
            </div>
        </div>
    )
}

export default Row
