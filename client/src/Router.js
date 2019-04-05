import React from 'react';
import MoviesList from './components/moviesList';
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginPelicula from './components/loginPelicula';
import MovieDescription from './components/movieDescription';
import Navbar from './components/navbar';
import RegistracionPelicula from './components/auth/RegistracionPelicula';


class RouterComponent extends React.Component {
    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
        this.state = {
            auth: {
                isAuthed: false,
                username: null,
                userId: null,
            },
        };
    }
    
    handleLogin(login) {
        this.setState({auth: {isAuthed: true, username: login.username}});
    }

    handleLogout() {
        this.setState({auth: {isAuthed: false, username: null}});
    }

    render(){
        return(
        <Router>
            <Route path="/" render={() => <Navbar auth={this.state.auth} onLogoutAttempt={this.handleLogout}/>} />
            <div>
                <Route exact path="/login" render={() => <LoginPelicula onLoginAttempt={this.handleLogin} auth={this.state.auth} />} />
                <Route exact path="/signup" render={() => <RegistracionPelicula onSignupAttempt={this.handleSignup} auth={this.state.auth} />} />
                
                <Route exact path="/" render={()=><MoviesList />} />
                <Route exact path="/movie/:movieId" render={(props) => <MovieDescription {...props} auth={this.state.auth} />} />
                
                {/* <Route path="/topics" component={Topics} /> */}
            </div>
        </Router>
        )
    }
    
}

export default RouterComponent;