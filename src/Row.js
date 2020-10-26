import React, {useState, useEffect} from 'react'
import axios from './axios';

const Row = props => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            console.log(props.fetchUrl);
            const request = await axios.get(props.fetchUrl);
            console.log(request);
        }
        fetchData()
    }, []);
    
    return (
        <div>
            <h2>{props.title}</h2>
        </div>
    )
}

export default Row
