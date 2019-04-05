import React, {Component} from 'react';
import './EstiloLogin.css';
import { TextField, Button } from '@material-ui/core';

class LoginPelicula extends Component
{

    constructor(props) {
        super(props);
        this.state = {username: '', password:''};
    
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }

      handleSubmit(event) {
        let url = "http://localhost:3000/api/auth/login";
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
              body: JSON.stringify(this.state)
          })
          .then(data => data.json())
          .then( data =>{
            if(data.err){
              this.setState({error: "Credenciales invalidas"});
              return
            }
              this.props.onLoginAttempt(data);
              this.setState({error: "Bienvenido!"})
          }) 
          event.preventDefault();
        
      }



    render(){
        return(

                
                <div>
  
                    <div>
                    <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,300italic,400italic,600' rel='stylesheet' type='text/css'></link>
                    <link href="//netdna.bootstrapcdn.com/font-awesome/3.1.1/css/font-awesome.css" rel="stylesheet"></link>
    
                    <div className="testbox">
                        <h1>Iniciar sesión</h1>
    
                        <form onSubmit={this.handleSubmit}>           
    
    
                            <label id="icon" htmlFor="name"><i className="icon-user"></i></label>
                            <input onChange={this.handleInputChange} type="text" required name="username" id="username" placeholder="Usuario" required/>
                            <label id="icon" htmlFor="name"><i className="icon-shield"></i></label>
                            <input onChange={this.handleInputChange} type="password" required name="password" id="password" placeholder="Contraseña" ></input>        
                             
                             <Button color="primary" variant="contained" type="submit">Ingresar</Button>
                          { this.state.error && 
                          <div>{this.state.error}</div>}
                        </form>
                    </div>
                  </div>
                  

                </div>
        )
    }

}
export default LoginPelicula;

