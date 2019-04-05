import React from 'react';
import TextField  from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import TablaContactos from './TablaContactos';
import ('./a.css');
const tablaClasses = {

}
class MovieDescription extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isLoaded: false,
            movie: {},
            reviews: [],
            comment: {}
        }
        this.getMovieInfo();
        this.getReviews();
        this.handleCommentInput = this.handleCommentInput.bind(this);
    }
    handleCommentInput(event){
        this.setState({
            comment: {
                description: event.target.value
            }
        })
    }
    getReviews(){
        let movieId = this.props.match.params.movieId;
        fetch("http://localhost:3000/api/movie/"+movieId)
        .then(res => res.json())
        .then(
            (result) => {
                if(result==null){
                    return
                }
                console.log("asdasdasdasdasdasd")
                console.log(result);
                this.setState({
                    reviews: result.Reviews
                });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (err) => {
                console.log(err)
            }
        )
    };
    getMovieInfo(){
        let movieId = this.props.match.params.movieId;
        fetch("http://www.omdbapi.com/?i="+movieId+"&apikey=ec0229e2")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    movie: result
                });
                console.table(result)
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
    sendComment(rating){
        let movieId = this.props.match.params.movieId;
        let url = "http://localhost:3000/api/movie/comment";
        let bodyJson = {
            username: this.props.auth.username,
            description: this.state.comment.description,
            rating: rating,
            movieId: movieId
        }
        fetch(url,
          {            
              // mode: "cors", // no-cors, cors, *same-origin
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                // "Content-Type": "application/x-www-form-urlencoded",
            },
            // redirect: "follow", // manual, *follow, error
            // referrer: "no-referrer", // no-referrer, *client
              body: JSON.stringify(bodyJson)
          })
        .then(
            (result) => {
                this.setState({
                    commentLoaded: true,
                });
                this.getReviews();
            },
            (err) => {
                console.log(err)
                this.setState({
                    isLoaded: true
                });
            }
        )
    }

    render(){
        return(

            <div>
                <div class="mainDiv">
                    <div class="poster">
                        <img alt="" src={this.state.movie.Poster}/>
                    </div>
                    <div class="info">
                        <h1>{this.state.movie.Title}</h1>
                        <div class="buttonsRow">
                            <div class="userScore">Calificacion</div>
                            {/* <div class="boton"><Button  size="small" variant="contained" color="primary"> Malisima </Button></div>
                            <div class="boton"><Button  size="small" variant="contained" color="primary"> Mala </Button></div>
                            <div class="boton"><Button  size="small" variant="contained" color="secondary"> Regular </Button></div>
                            <div class="boton"><Button  size="small" variant="contained" color="primary"> Buena </Button></div>
                            <div class="boton"><Button  size="small" variant="contained" color="primary"> Excelente </Button></div> */}
                        </div>

                        <div>
                            <div class="infoItem">
                                <div>Descripcion:</div>
                                <div>{this.state.movie.Plot}</div>
                                
                            </div>
                            <div class="infoItem">
                                <div>Tipo:</div>
                                <div>{this.state.movie.Type}</div>
                            </div>
                            <div class="infoItem">
                                <div>Genero:</div>
                                <div>{this.state.movie.Genre}</div>
                            </div>
                            <div class="infoItem">
                                <div>Premios:</div>
                                <div>{this.state.movie.Awards}</div>
                            </div>
                            <div class="infoItem">
                                <div>Escritor:</div>
                                <div>{this.state.movie.Writer}</div>
                            </div>
                            <div class="infoItem">
                                <div>Actores:</div>
                                <div>{this.state.movie.Actors}</div>
                            </div>
                            <div class="infoItem">
                                <div>Duracion:</div>
                                <div>{this.state.movie.Runtime}</div>
                            </div>
                            <div class="infoItem">
                                <div>Publicacion:</div>
                                <div>{this.state.movie.Released}</div>
                            </div>
                        </div>
                    </div>
                </div>


                
                
                <div class="reviews">
                    <h2>Comentarios</h2>
                    {
                        this.state.reviews.map((review)=>
                            <div className="review">
                                <div>{review.username}</div>
                                <div>{review.description}</div>
                                <div>{review.rating}</div>
                            </div>
                            
                        )
                    }
                </div>


                { this.props.auth.username &&
                <div class="resenhas">
                {/* <TablaContactos clases={tablaClasses} /> */}
                    {/* <div class="resenha">
                        
                    </div> */}
                    <form>
                        <div>
                            <h2>Dejenos su reseña</h2>
                            <TextField
                                id="outlined-textarea"
                                label="Multiline Placeholder"
                                placeholder="Placeholder"
                                multiline
                                className="commentInput"
                                margin="normal"
                                variant="outlined"
                                onChange={this.handleCommentInput}
                            />
                            <div class= "text2">
                                <div class="boton"><Button onClick={()=>this.sendComment("Malisima")} size="small" variant="contained" color="primary"> Malisima </Button></div>
                                <div class="boton"><Button onClick={()=>this.sendComment("Mala")} size="small" variant="contained" color="primary"> Mala </Button></div>
                                <div class="boton"><Button onClick={()=>this.sendComment("Regular")} size="small" variant="contained" color="primary"> Regular </Button></div>
                                <div class="boton"><Button onClick={()=>this.sendComment("Buena")} size="small" variant="contained" color="primary"> Buena </Button></div>
                                <div class="boton"><Button onClick={()=>this.sendComment("Excelente")} size="small" variant="contained" color="primary"> Excelente </Button></div>
                            </div>
                        </div>
                    {/* <div class="botonEnviar">
                        <Button  size="large" variant="contained" color="primary"> Enviar </Button>
                    </div> */}
                        
                    </form>

                </div>
                }
            </div>
        )
    }
}

export default MovieDescription