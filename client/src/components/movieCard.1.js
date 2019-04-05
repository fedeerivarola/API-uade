import React from 'react';
import StarsRating from './starsRating';

class MovieCard extends React.Component {
    render(){
        let styles = {
            card: {
                height: "220px",
                width: "100%",
                WebkitBoxShadow: "0px 0px 4px 1px rgba(150,150,150,1)",
                MozBoxShadow: "0px 0px 4px 1px rgba(150,150,150,1)",
                boxShadow: "0px 0px 4px 1px rgba(150,150,150,1)",
                display: "flex",
                // justifyContent: "space-between"
                
                  
            },
            cardHeader: {
                height: "220px",
                width: "160px"
            },
            cardBody: {
                height: "180px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                textAlign: "left"
            },
            stars: {
                display: "flex"
            }
        }
        return(
            <div style={styles.card}>
                <div>
                    <img style={styles.cardHeader} src={this.props.movie.Poster}/>
                </div>

                <div style={styles.cardBody}>
                    <h4>Titulo: {this.props.movie.Title}</h4>
                    <h4>Tipo: {this.props.movie.Type}</h4>
                    <div style={styles.stars}>
                        Rating: <StarsRating />
                    </div>
                    <button>Reviews</button>
                </div>

            </div>
        )
    }
    
}

export default MovieCard