import React from 'react';
import MovieCard from './movieCard';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class MoviesList extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          movies: []
        };
        this.getMovies();
      }
    componentDidMount() {

    }

    render(){
        const styles = {
            moviesList: {
                display: "flex",
                flexFlow: "wrap",
                marginTop: "60px",
                justifyContent: "center"
            },
            moviesCards: {
                maring: "20px"
            }
        }
        return(
            <div>

                {this.state.isLoaded ? (
                    <div style={styles.moviesList}>
                        {this.renderMoviesList()}
                    </div>
                ):
                (
                    <div>Loading</div>
                )}

            </div>
        )
    }
    getMovies(){
        fetch("http://localhost:3000/api/movie")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    movies: result
                });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (err) => {
                console.log(err)
                this.setState({
                    isLoaded: true,
                    err
                });
            }
        )
    }
    renderMoviesList(){
        if(this.state.error) {
            return (<div>Error al conseguir las Peliculas</div>)
        }
        let moviesCardsHtml = []
        let movieCardStyle = {
            padding: "20px",
            textDecoration: "none",
            color: "black"
        }
        this.state.movies.map(
            (movie)=> {
                moviesCardsHtml.push(
                    <Link
                    to={{
                      pathname: `/movie/${movie.imdbID}`
                    }} style={movieCardStyle}>
                        <MovieCard movie={movie} />
                    </Link>
                    
                )
            }
        )
        return moviesCardsHtml
    }
}

export default MoviesList