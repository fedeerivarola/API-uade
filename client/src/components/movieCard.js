import React from 'react';
import StarsRating from './starsRating';

class MovieCard extends React.Component {
    render(){
        let styles = {
            card: {
                height: "500px",
                width: "250px",
                WebkitBoxShadow: "0px 0px 4px 1px rgba(150,150,150,1)",
                MozBoxShadow: "0px 0px 4px 1px rgba(150,150,150,1)",
                boxShadow: "0px 0px 4px 1px rgba(150,150,150,1)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                cursor: "pointer"
                
                  
            },
            cardHeader: {
                height: "350px",
                width: "250px"
            },
            cardBody: {
                height: "250px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
            },
            cardButton: {
                margin: "10px",
                height: "90px"
            }
        }
        return(
            <div style={styles.card}>
                <div >
                    <img alt="" style={styles.cardHeader} src={this.props.movie.Poster}/>
                </div>
                <div style={styles.cardBody}>
                    <h4>{this.props.movie.Title}</h4>
                    <div style={styles.stars}>
                        <StarsRating />
                    </div>
                    {/* <div style={styles.cardButton}>
                        <Button variant="contained" color="primary">
                            Hello World
                        </Button>
                    </div> */}
                </div>
            </div>
        )
    }
    
}

export default MovieCard