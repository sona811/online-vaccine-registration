import React from 'react';
import '../Login.css';
import Regform from '../Regform';
import { Redirect, withRouter } from "react-router-dom";
import { getDefaultNormalizer } from '@testing-library/react';
import Profile from '../Profile';

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.redirectToProfilePage()
        this.redirectToRegisterPage()
        this.state = {
            email: '',
            pass: ''
        }
    }

    changeItem = (event) => {
        if (event.target.id === 'mail') {
            this.setState({
                email: event.target.value
            })
        }
        else if (event.target.id === 'pas') {
            this.setState({
                pass: event.target.value
            })
        }
    }

    logIn = () => {
        if (this.state.email === 'sona123@gmail.com' && this.state.pass === 'sona123') {
            localStorage.setItem('email', this.state.email);
            localStorage.setItem('pass', this.state.pass);
            this.props.history.push('/profile')
        }
        else {
            alert('email and password is wrong')
        }
    };
    
    registerPage = () => {
        if (this.state.email === 'sona123@gmail.com' && this.state.pass === 'sona123') {
            localStorage.setItem('email', this.state.email);
            localStorage.setItem('pass', this.state.pass);
            this.props.history.push('/register')
        }
        else {
            alert('email and password is wrong')
        }
    };

    redirectToProfilePage = () => {
        const email = localStorage.getItem('email')
        const pass = localStorage.getItem('pass')

        if (email === 'sona123@gmail.com' || pass === 'sona123') {
            this.props.history.push('/profile')
        }
    }

    redirectToRegisterPage = () => {
        const email = localStorage.getItem('email')
        const pass = localStorage.getItem('pass')

        if (email === 'sona123@gmail.com' || pass === 'sona123') {
            this.props.history.push('/register')
        }
    }

    render() {
        return (
            <div className="parent-container">
                <form className="container">
                    <input type='email' id='mail' placeholder='Enter Email' value={this.state.email} onChange={this.changeItem} />
                    <input type='password' id='pas' placeholder='Enter Password' value={this.state.pass} onChange={this.changeItem} />
                    <br />
                    <button onClick={() => this.logIn()}>Login</button>
                    <button onClick={() => this.registerPage()}>Register</button>
                </form>
            </div>
        )
    };
};
export default withRouter(Login)