import "./home.css";
import NavBar from "../components/NavBar";
import Banner from "../components/Banner";
import Row from "../components/Row";
import requests from "../components/request/Requests";
const Home = () => {
    return (
        <div className='HomeScreen'>

            <NavBar />
            <Banner />
            <Row
                title='NETFLIX ORIGINALS'
                fetchUrl={'https://api.themoviedb.org/3/discover/tv?api_key=bdf6f6ad60c894bd5a6232000c8f6b06&with_networks=213'}
                islargeRow
            />
            <Row
                title='Trending Now'
                fetchUrl={'https://api.themoviedb.org/3/trending/all/week?api_key=bdf6f6ad60c894bd5a6232000c8f6b06&language=en-US'}

            />
            <Row
                title='Top Rated'
                fetchUrl={'https://api.themoviedb.org/3/movie/top_rated?api_key=bdf6f6ad60c894bd5a6232000c8f6b06&language=en-US'}

            />
            <Row
                title='Action Movies'
                fetchUrl={'https://api.themoviedb.org/3/discover/movie?api_key=bdf6f6ad60c894bd5a6232000c8f6b06&with_genres=28'}

            />
            <Row
                title='Comedy Movies'
                fetchUrl={'https://api.themoviedb.org/3/discover/movie?api_key=bdf6f6ad60c894bd5a6232000c8f6b06&with_genres=35'}

            />
            <Row
                title='Horror Movies'
                fetchUrl={'https://api.themoviedb.org/3/discover/movie?api_key=bdf6f6ad60c894bd5a6232000c8f6b06&with_genres=27'}

            />
            <Row
                title='Romance Movies'
                fetchUrl={'https://api.themoviedb.org/3/discover/movie?api_key=bdf6f6ad60c894bd5a6232000c8f6b06&with_genres=10749'}

            />
            <Row
                title='Documentaries'
                fetchUrl={'https://api.themoviedb.org/3/discover/movie?api_key=bdf6f6ad60c894bd5a6232000c8f6b06&with_genres=99'}

            />

        </div>
    )
}

export default Home
