import React from 'react';

class StarsRating extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: null,
      };
    }
    render(){
        return(
            <div>

                <div style={{"textAlign": "center"}}>
                    {this.getRating()}
                </div>
                <div >
                    votos: {this.props.votos}
                </div>
            </div>
        )
    }
    getRating(){
        // let ratingNumber = this.props.ratingNumber;
        let ratingNumber = 3.2;
        let starsHtml = [];

        let styles = {
            fullStar: {
                fill:"#ffde2d",
                height: "20px"
            },
            emptyStar: {
                fill:"lightgray",
                height: "20px"
            }
        }
        
        for(let x = 0; x<5; x++){
                if(x<=ratingNumber && !this.esMitadEstrella(ratingNumber, x-1)){
                    starsHtml.push(
                        <span>
                            <svg style={styles.fullStar} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/></svg>
                        </span>
                    )
                }
                else if(x>ratingNumber && !this.esMitadEstrella(ratingNumber, x-1)){
                    starsHtml.push(
                        <span >
                            <svg style={styles.fullStar} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/></svg>
                        </span>
                    )
                    
                }
                if(this.esMitadEstrella(ratingNumber, x-1)){
                    starsHtml.push(
                        <span>
                            <svg style={styles.fullStar} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" ><path d="M259.3,17.8l-65.3,132.4l-146.1,21.3c-26.2,3.8 -36.7,36.1 -17.7,54.6l105.7,103l-25,145.5c-4.5,26.3 23.2,46 46.4,33.7l130.7,-68.7l130.7,68.7c23.2,12.2 50.9,-7.4 46.4,-33.7l-25,-145.5l105.7,-103c19,-18.5 8.5,-50.8 -17.7,-54.6l-146.1,-21.3l-65.3,-132.4c-11.7,-23.6 -45.6,-23.9 -57.4,0Z" style={styles.emptyStar}/></svg>
                        </span>
                    )
                    
                }



        }
        return starsHtml

        
    }
    esMitadEstrella(number, x){
        return(number-x>0 && number-x<1)
    }
}

export default StarsRating