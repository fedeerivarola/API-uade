import React, {Component} from 'react';
import 'typeface-roboto';
import Button from '@material-ui/core/Button';
import './estilosPelicula.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Typography from '@material-ui/core/Typography';
//import { Input } from '@material-ui/core';


class RegistracionPelicula extends Component{
    constructor(props) {
        super(props);
        this.state = {username: '', password:'', email:'', gender:null};
    
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
        let url = "http://localhost:3000/api/auth/signup";
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
          .then((data) => {data.json()},
          (err)=>{console.log(err)})
          .then( (data) =>{
              if(data == null){
                  return
              }
            if(data.err){
              this.setState({error: "Credenciales invalidas"});
              return
            }
              this.props.onSignupAttempt(data);
              this.setState({error: "Bienvenido!"});
            //   redireccionar();
          },
          (err)=>{console.log(err)}) 
          event.preventDefault();
        
      }
      styles = {
        mainNavbar: {
            height: "75px",
            width: "100%",
            backgroundColor: "#3434af",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingLeft: "30px",
            paddingRight: "60px",
            boxSizing: "border-box",
            color: "#f9f9f9"
        }
      }

    render(){
        return(

            <div>
        <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,300italic,400italic,600' rel='stylesheet' type='text/css'></link>
        <link href="//netdna.bootstrapcdn.com/font-awesome/3.1.1/css/font-awesome.css" rel="stylesheet"></link>

        <div class="testbox">
            <h1>Registración de Usuario</h1>

        <form onSubmit={this.handleSubmit}>             
        <label id="icon" for="name"><i class="icon-envelope "></i></label>
        <input onChange={this.handleInputChange} type="text" required name="email" id="email" placeholder="Email" required></input>

        <label id="icon" for="name"><i class="icon-user"></i></label>
        <input onChange={this.handleInputChange} type="text" required name="username" id="username" placeholder="Usuario" required></input>

        <label id="icon" for="name"><i class="icon-shield"></i></label>
            <input onChange={this.handleInputChange} type="password" required name="password" id="password" placeholder="Contraseña" required></input>

        <div class="gender">
            <input type="radio" value="None" id="male" name="gender" checked></input>
            <label for="male" class="radio" chec>Hombre</label>
            <input type="radio" value="None" id="female" name="gender" ></input>
            <label for="female" class="radio">Mujer</label>
        </div>
        <p>Al hacer clic en "Registrarte", aceptas nuestras Condiciones, <a href="">la Política de datos y la Política de cookies</a>.</p>
       
        
        <Button color="primary" variant="contained" type="submit">Registrarse</Button>
        
       

   { this.state.error && 
   <div>{this.state.error}</div>}
   
        </form>
        </div>


        </div>

        );

    }
}

    

export default RegistracionPelicula;