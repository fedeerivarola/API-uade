import React from 'react';
import { Button } from '@material-ui/core';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class Navbar extends React.Component {
    
    constructor(props) {
        super(props);

        this.handleLogout = this.handleLogout.bind(this);
    }
    handleLogout(event) {
        this.props.onLogoutAttempt()
        event.preventDefault();
        //   return
        // alert('Usuario: ' + this.state.username + '\n Contraseña: ' + this.state.password);
        
        // this.props.onLoginAttempt(this.state)
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
        },
        loginButton: {
            height: "40px",
            width: "100px"
        },
        authButtons: {
            display: "flex",
            alignItems: "center",
            height: "100%"
        },
        navbarTitle: {
            color: "white",
            textDecorationLine: "none"
        }
    }
    render(){
        return(         
            <div style={this.styles.mainNavbar}>
            <Link to="/" style={this.styles.navbarTitle}>
                <h2>UADEMovies</h2>
            </Link>
                
                { this.props.auth.isAuthed 
                    ?
                    <div>
                        {this.props.auth.username}
                        <Button onClick={this.handleLogout} variant="contained" color="secondary">
                            Logout
                        </Button>
                    </div>
                    
                    :
                    <div style={this.styles.authButtons}>
                        <div style={this.styles.loginButton}>
                            <Link style={this.styles.navbarTitle} to="/login">
                                <Button variant="contained" color="secondary">
                                    Login
                                </Button>
                            </Link>
                        </div>
                        <div style={this.styles.loginButton}>
                        <Link style={this.styles.navbarTitle} to="/signup">
                                <Button variant="contained" color="secondary">
                                    Signup
                                </Button>
                            </Link>
                        </div>
                    </div>
                
                }
                </div>
        )
    }
}

export default Navbar