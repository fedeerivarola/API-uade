import React from 'react';
import MoviesList from './moviesList'
class SideBar extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: null,
      };
    }

    showMovies(){
        alert('click');
    }

  
    render() {
      return (

        <div>
            <div>
                <button className="option" onClick={this.showMovies}>
                    Lista Peliculas
                </button>
            </div>
            
            <MoviesList/>
        </div>
        

        
      );
    }
  }

  export default SideBar