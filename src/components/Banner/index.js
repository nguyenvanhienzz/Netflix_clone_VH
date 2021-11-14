import axios from 'axios';
import React, { useEffect, useState } from 'react';
import instance from '../Api/axios';
import requests from '../request/Requests';
import './Banner.css';
const Banner = () => {
    const [movie, setMovie] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get('https://api.themoviedb.org/3/discover/tv?api_key=bdf6f6ad60c894bd5a6232000c8f6b06&with_networks=213');
            setMovie(request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
            ]
            );
            return request;
        }

        fetchData()
    }, []);


    // console.log(movie);

    function trucate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + '...' : string;
    }
    return (
        <header className='banner'
            style={{
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`
            }}>
            <div className='banner-contents'>
                <h1 className='banner-title'>
                    {movie?.title || movie?.name || movie.original_name}
                </h1>
                <div className='banner-btns'>
                    <button className='banner-button'>Pay</button>
                    <button className='banner-button'>My List</button>
                </div>
                <h1 className='banner-description'>
                    {trucate(movie?.overview, 150)}
                </h1>

            </div>
            <div className='banner-fadeBottom' />
        </header>
    )
}

export default Banner
